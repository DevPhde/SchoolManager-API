import { Request, Response } from "express";
import { GetFilteredTeachersUseCase } from "./GetFilteredTeachersUseCase";

export class GetFilteredTeachersController {
    constructor(
        private getFilteredTeachersUseCase: GetFilteredTeachersUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const page = parseInt(request.query.page as string, 10) || 1;
        const limit = parseInt(request.query.limit as string, 10) || 10;
        const search = request.query.search as string;

        try {
            const result = await this.getFilteredTeachersUseCase.exec({
                limit,
                page,
                search
            })
            return response.status(200).json({
                page: page,
                next: result.nextPage ? `/search/teachers?search=${search}&page=${page + 1}&limit=${limit}` : "",
                previous: page != 1 ? `/search/teachers?search=${search}&page=${page - 1}&limit=${limit}` : "",
                result: result.result
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected Error'
            })
        }
    }
}