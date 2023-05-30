import { DeleteClassUseCase } from "./DeleteClassUseCase";
import { Request, Response } from "express";

export class DeleteClassController {
    constructor(
        private deleteClassUseCase: DeleteClassUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        try {
            await this.deleteClassUseCase.exec({
                id: parseInt(id as string)
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected Error'
            })
        }
    }
}