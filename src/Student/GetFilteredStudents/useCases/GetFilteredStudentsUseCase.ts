import { IGetFilteredStudentsDTO, IResponseGetFilteredStudentsDTO } from "./IGetFilteredStudentsDTO";
import { GetFilteredStudentsQueryRepository } from "../repository/implementation/GetFilteredStudentsQueryRepository";
export class GetFilteredStudentsUseCase {
    constructor(
        private getFilteredStudentsQueryRepository: GetFilteredStudentsQueryRepository
    ) { }

    async exec(data: IGetFilteredStudentsDTO): Promise<IResponseGetFilteredStudentsDTO> {
        return {
            result: await this.getFilteredStudentsQueryRepository.getFilteredStudents(data),
            nextPage: await this.getFilteredStudentsQueryRepository.nextPage(data)
        }
    }
}