import { IDeleteTeacherDTO } from "./IDeleteTeacherDTO";
import { DeleteTeacherQueryRepository } from "../repository/implementation/DeleteTeacherQueryRepository";

export class DeleteTeacherUseCase {
    constructor(
        private deleteTeacherQueryRepository: DeleteTeacherQueryRepository
    ) { }

    async exec(teacher: IDeleteTeacherDTO): Promise<void> {
        return this.deleteTeacherQueryRepository.delete(teacher.id)
    }
}