import { UpdateStudentUseCase } from "./UpdateStudentUseCase";
import { Request, Response } from "express";

export class UpdateStudentController {
    constructor(
        private updateStudentUseCase: UpdateStudentUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { name, email } = request.body;
        try {
            await this.updateStudentUseCase.exec({
                id: parseInt(id as string),
                name,
                email
            })
            return response.sendStatus(200);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected Error'
            })
        }
    }
}