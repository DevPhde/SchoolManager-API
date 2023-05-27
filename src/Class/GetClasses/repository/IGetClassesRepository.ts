import { IGetClassesDTO } from "../useCases/IGetClassesDTO"
export interface IGetClassesRepositry {
    getClasses(data: IGetClassesDTO): Promise<object[]>;
    nextPage(data: IGetClassesDTO): Promise<boolean>
}