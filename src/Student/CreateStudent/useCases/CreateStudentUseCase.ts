import { ICreateStudentDTO } from "./CreateStudentDTO";
import { CreateStudentQueryRepository } from "../repository/implementation/CreateStudentQueryRepository";
import { isEmpty } from "../../../helper/AbstrationHelper/AbstrationHelper";
import { StudentEntity } from "../entities/Student";

export class CreateStudentUseCase {
    constructor(
        private createStudentQueryRepository: CreateStudentQueryRepository
    ){}

    async execute(data: ICreateStudentDTO): Promise<void> {
        if(!isEmpty(await this.createStudentQueryRepository.findStudentByCpf(data.cpf))) {
            console.log('oi')
            throw new Error('CPF já cadastrado.')
        }
        
        const student = new StudentEntity(data)
        await this.createStudentQueryRepository.save(student);
    }
}
