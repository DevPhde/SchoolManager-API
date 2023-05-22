import { IDeleteStudentDTO } from "./IDeleteStudentDTO";
import { DeleteStudentQueryRepository } from "../repository/implementation/DeleteStudentQueryRepository";
export class DeleteStudentUseCase {
    constructor(
        private deleteStudentQueryRepository: DeleteStudentQueryRepository
    ){}

    async exec(student: IDeleteStudentDTO): Promise<void> {
        return await this.deleteStudentQueryRepository.delete(student)
    }
}