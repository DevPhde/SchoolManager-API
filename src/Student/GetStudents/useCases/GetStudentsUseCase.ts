import { IGetStudentsDTO, IResponseGetStudentsDTO } from "./IGetStudentsDTO";
import { GetStudentsRepository } from "../repository/implementation/GetStudentsQueryRepository";

export class GetStudentsUseCase {
    constructor(
        private getStudentsRepository: GetStudentsRepository
    ){}

    async exec(data: IGetStudentsDTO): Promise<IResponseGetStudentsDTO> {
        return this.getStudentsRepository.getStudents(data)
    }
}