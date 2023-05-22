import { Request, Response } from "express";
import { DeleteStudentUseCase } from "./DeteleStudentUseCase";
export class DeleteStudentController {
    constructor(
        private deleteStudentUseCase: DeleteStudentUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.params

        try {
            await this.deleteStudentUseCase.exec({id: parseInt(id)})

            return response.sendStatus(200)
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected Error'
            })
        }
    }
}