import { Request, Response } from "express";
import { GetStudentsUseCase } from "./GetStudentsUseCase";
export class GetStudentsController {
    constructor(
        private getStudentsUseCase: GetStudentsUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const page = parseInt(request.query.page as string, 10) || 1;
        const limit = parseInt(request.query.limit as string, 10) || 10;

        try {
            const students = await this.getStudentsUseCase.exec({
                page,
                limit
            })
            return response.status(200).json({
                page: page,
                next: students.nextPage ? `/students?page=${page + 1}?limit=${limit}`: '',
                previous: page !== 1 ? `/students?page=${page - 1}?limit=${limit}`: '',
                data: students.result
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected Error'
            })
        }
        
    }
}