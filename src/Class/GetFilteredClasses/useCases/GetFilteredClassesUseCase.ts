import { GetFilteredClassesQueryRepository } from "../repository/implementation/GetFilteredClassesQueryRepository";
import { IGetFilteredClassesDTO } from "./IGetFilteredClassesDTO";
import { IResponseFilteredClassesDTO } from "./IGetFilteredClassesDTO";

export class GetFilteredClassesUseCase {
    constructor(
        private getFilteredClassesQueryRepository: GetFilteredClassesQueryRepository
    ) { }

    async exec(data: IGetFilteredClassesDTO): Promise<IResponseFilteredClassesDTO> {
        return {
            result: await this.getFilteredClassesQueryRepository.getFilteredClasses(data),
            nextPage: await this.getFilteredClassesQueryRepository.nextPage(data)
        }
    }
}