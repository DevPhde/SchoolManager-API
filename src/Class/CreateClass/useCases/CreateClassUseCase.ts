import { ICreateClassDTO } from "./ICreateClassDTO";
import { CreateClassQueryRepository } from "../repository/implementation/CreateClassQueryRepository";
import { isEmpty } from "../../../helper/AbstrationHelper/AbstrationHelper";
import { ClassEntity } from "../entities/Class";
export class CreateClassUseCase {
    constructor(
        private createClassQueryRepository: CreateClassQueryRepository
    ){}

    async exec(data: ICreateClassDTO): Promise<void> {
        if(!isEmpty(await this.createClassQueryRepository.findClassByNumber(data.number))) {
            throw new Error('Número da turma já cadastrado.')
        }

        const class_ = new ClassEntity({
           number: data.number,
           schedule: data.schedule
        })
        return this.createClassQueryRepository.save(class_, data.students, data.teacher)
    }
}