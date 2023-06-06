import { Request, Response } from "express";
import { GetClassesUsecase } from "./GetClassesUseCase";

export class GetClassesController {
    constructor(
        private getClassesUseCase: GetClassesUsecase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const page = parseInt(request.query.page as string, 10) || 1;
        const limit = parseInt(request.query.limit as string, 10) || 10;


        try {
            const classes = await this.getClassesUseCase.exec({
                page,
                limit
            })
            return response.status(200).json({
                page: page,
                next: classes.nextPage ? `/classes?page=${page + 1}?limit=${limit}` : '',
                previous: page !== 1 ? `/classes?page=${page - 1}?limit=${limit}` : '',
                data: classes.result
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected Error'
            })
        }
    }
}