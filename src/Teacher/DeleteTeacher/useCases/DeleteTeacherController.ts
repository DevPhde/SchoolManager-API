import { DeleteTeacherUseCase } from "./DeleteTeacherUseCase";
import { Request, Response } from "express";
export class DeleteTeacherController {
    constructor(
        private deleteTeacherUseCase: DeleteTeacherUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            await this.deleteTeacherUseCase.exec({ id: parseInt(id as string) })

            return response.sendStatus(200)
        } catch (err) {
            return response.send(400).json({
                message: err.message || 'Unexpected Error'
            })
        }
    }
}