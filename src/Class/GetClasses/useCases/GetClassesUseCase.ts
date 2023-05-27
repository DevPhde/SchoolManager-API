import { GetClassesQueryRepository } from "../repository/implementation/GetClassesQueryRepository";
import { IGetClassesDTO, IResponseGetClassesDTO } from "./IGetClassesDTO";

export class GetClassesUsecase {
    constructor(
        private getClassesQueryRepository: GetClassesQueryRepository
    ) { }

    async exec(data: IGetClassesDTO): Promise<IResponseGetClassesDTO> {

        return {
            result: await this.getClassesQueryRepository.getClasses(data),
            nextPage: await this.getClassesQueryRepository.nextPage(data)
        }
    }
}