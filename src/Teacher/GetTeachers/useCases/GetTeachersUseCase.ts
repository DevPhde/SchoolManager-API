import { IGetTeachersDTO, IResponseGetTeachersDTO } from "./IGetTeachersDTO";
import { GetTeachersQueryRepository } from "../repository/implementation/GetTeachersQueryRepository";

export class GetTeachersUseCase {
    constructor(
        private getTeachersQueryRepository: GetTeachersQueryRepository
    ){}

    async exec(data: IGetTeachersDTO): Promise<IResponseGetTeachersDTO> {
        return {
            result: await this.getTeachersQueryRepository.getTeachers(data),
            nextPage: await this.getTeachersQueryRepository.nextPage(data)
        }
    }
}