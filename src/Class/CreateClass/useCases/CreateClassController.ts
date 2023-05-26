import { Request, Response } from "express";
import { CreateClassUseCase } from "./CreateClassUseCase";

export class CreateClassController {
    constructor(
        private createClassUseCase: CreateClassUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { number, schedule, students, teacher } = request.body;

        try {
            await this.createClassUseCase.exec({
                number,
                schedule,
                students,
                teacher
            })
            return response.sendStatus(201)
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected Error'
            })
        }
    }
}