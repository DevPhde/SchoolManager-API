import { IGetFilteredStudentsDTO } from "../useCases/IGetFilteredStudentsDTO"
export interface IGetFilteredStudentsRepository {
    getFilteredStudents(data: IGetFilteredStudentsDTO): Promise<object[]>
    nextPage(data: IGetFilteredStudentsDTO): Promise<boolean>
}