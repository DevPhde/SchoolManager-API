import { IUpdateStudentDTO } from "./IUpdateStudentDTO";
import { UpdateStudentQueryRepository } from "../repository/implementation/UpdateStudentQueryRepository";
export class UpdateStudentUseCase {
    constructor(
        private updateStudentQueryRepository: UpdateStudentQueryRepository
    ) { }

    async exec(student: IUpdateStudentDTO): Promise<void> {
        const { id, name, email } = student
        if (!id || (!name && !email)) {
            throw new Error('Campos não preenchidos');
        }
        return await this.updateStudentQueryRepository.update({
            id,
            ...(name && { name }),
            ...(email && { email })
        })
    }
}