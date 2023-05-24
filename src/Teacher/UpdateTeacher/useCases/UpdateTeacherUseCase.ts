import { IUpdateTeacherDTO } from "./IUpdateTeacherDTO";
import { UpdateTeacherQueryRepository } from "../repository/implementation/UpdateTeacherQueryRepository";

export class UpdateTeacherUseCase {
    constructor(
        private updateTeacherQueryRepository: UpdateTeacherQueryRepository
    ) { }

    async exec(student: IUpdateTeacherDTO): Promise<void> {
        const { id, name, email } = student
        if (!id || (!name && !email)) {
            throw new Error('Campos não preenchidos');
        }
        return await this.updateTeacherQueryRepository.update({
            id,
            ...(name && { name }),
            ...(email && { email })
        })
    }
}