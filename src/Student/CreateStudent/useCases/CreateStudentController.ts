import { CreateStudentUseCase } from "./CreateStudentUseCase";
import { Request, Response } from "express";
export class CreateStudentController {
    constructor(
        private createStudentUseCase: CreateStudentUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, cpf } = request.body;

        try {
            await this.createStudentUseCase.execute(
                {
                    name,
                    email,
                    cpf
                }
            )
            return response.sendStatus(201);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            })
        }
    }
}