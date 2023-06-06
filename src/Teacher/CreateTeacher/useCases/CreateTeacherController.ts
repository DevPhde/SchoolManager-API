import { Request, Response } from "express";
import { CreateTeacherUseCase } from "./CreateTeacherUseCase";
export class CreateTeacherController {
    constructor(
        private createTeacherUseCase: CreateTeacherUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, cpf } = request.body;

        try {
            await this.createTeacherUseCase.exec({
                name,
                email,
                cpf
            })
            return response.sendStatus(201);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected Error'
            })
        }

    }
}