import { GetFilteredTeachersQueryRepository } from "../repository/implementation/GetFilteredTeachersQueryRepository";
import { IGetFilteredTeachersDTO, IResponseGetFilteredTeachersDTO } from "./IGetFilteredTeachersDTO";

export class GetFilteredTeachersUseCase {
    constructor(
        private getFilteredTeachersQueryRepository: GetFilteredTeachersQueryRepository
    ) { }

    async exec(data: IGetFilteredTeachersDTO): Promise<IResponseGetFilteredTeachersDTO> {
        return {
            result: await this.getFilteredTeachersQueryRepository.getFilteredStudents(data),
            nextPage: await this.getFilteredTeachersQueryRepository.nextPage(data)
        }
    }
}