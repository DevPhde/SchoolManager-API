import { ICreateTeacherDTO } from "./ICreateTeacherDTO";
import { CreateTeacherQueryRepository } from "../repository/implementation/CreateTeacherQueryRepository";
import { isEmpty } from "../../../helper/AbstrationHelper/AbstrationHelper";
import { TeacherEntity } from "../entities/Teacher";

export class CreateTeacherUseCase {
    constructor(
        private createTeacherQueryRepository: CreateTeacherQueryRepository
    ) { }

    async exec(data: ICreateTeacherDTO): Promise<void> {
        if (!isEmpty(await this.createTeacherQueryRepository.findTeacherByCpf(data.cpf))) {
            throw new Error('CPF já Cadastrado.')
        }

        const teacher = new TeacherEntity(data)

        return await this.createTeacherQueryRepository.save(teacher)
    }
}