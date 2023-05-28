import { IGetFilteredClassesDTO } from "../useCases/IGetFilteredClassesDTO"

export interface IGetFilteredClassesRepository {
    getFilteredClasses(data: IGetFilteredClassesDTO): Promise<object[]>;
    nextPage(data: IGetFilteredClassesDTO): Promise<boolean>;
}