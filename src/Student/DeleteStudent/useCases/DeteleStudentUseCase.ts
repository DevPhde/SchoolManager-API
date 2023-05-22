import { IDeleteStudentDTO } from "./IDeleteStudentDTO";
import { DeleteStudentQueryRepository } from "../repository/implementation/DeleteStudentQueryRepository";
export class DeleteStudentUseCase {
    constructor(
        private deleteStudentQueryRepository: DeleteStudentQueryRepository
    ){}

    async exec(user: IDeleteStudentDTO): Promise<void> {
        return await this.deleteStudentQueryRepository.delete(user)
    }
}