import { IGetStudentsDTO, IResponseGetStudentsDTO } from "./IGetStudentsDTO";
import { GetStudentsQueryRepository } from "../repository/implementation/GetStudentsQueryRepository";

export class GetStudentsUseCase {
    constructor(
        private getStudentsQueryRepository: GetStudentsQueryRepository
    ){}

    async exec(data: IGetStudentsDTO): Promise<IResponseGetStudentsDTO> {
        return {
            result: await this.getStudentsQueryRepository.getStudents(data),
            nextPage: await this.getStudentsQueryRepository.nextPage(data)
        }
    }
}