import { GetTeachersUseCase } from "./GetTeachersUseCase";
import { Request, Response } from "express";

export class GetTeachersController {
    constructor(
        private getTeachersUseCase: GetTeachersUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const page = parseInt(request.query.page as string, 10) || 1;
        const limit = parseInt(request.query.limit as string, 10) || 10;

        try {
            const teachers = await this.getTeachersUseCase.exec({
                page,
                limit
            })
            return response.status(200).json({
                page: page,
                next: teachers.nextPage ? `/teachers?page=${page + 1}?limit=${limit}`: '',
                previous: page !== 1 ? `/teachers?page=${page - 1}?limit=${limit}`: '',
                data: teachers.result
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected Error'
            })
        }
    }
}