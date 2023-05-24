import { ICreateClassDTO } from "./ICreateClassDTO";
import { CreateClassQueryRepository } from "../repository/implementation/CreateClassQueryRepository";
import { isEmpty } from "../../../helper/AbstrationHelper/AbstrationHelper";
export class CreateClassUseCase {
    constructor(
        private createClassQueryRepository: CreateClassQueryRepository
    ){}

    async exec(data: ICreateClassDTO): Promise<void> {
        if(!isEmpty(await this.createClassQueryRepository.findClassByNumber(data.number))) {
            throw new Error('Número da turma já cadastrado.')
        }

        
    }
}