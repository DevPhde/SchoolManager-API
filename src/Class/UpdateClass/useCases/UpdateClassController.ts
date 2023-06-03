import { Request, Response } from "express";
import { UpdateClassUseCase } from "./UpdateClassUseCase";

export class UpdateClassController {
    constructor(
        private updateClassUseCase: UpdateClassUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { schedule, students, teacher } = request.body;

        try {
            await this.updateClassUseCase.exec({
                id: parseInt(id as string),
                schedule,
                students,
                teacher
            })
            return response.sendStatus(200)
        } catch (err) {
            return response.status(500).json({
                message: err.message || 'Unexpected Error'
            })
        }
    }
}