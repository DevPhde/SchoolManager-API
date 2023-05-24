import { IGetFilteredTeachersDTO } from "../useCases/IGetFilteredTeachersDTO"

export interface IGetFilteredTeachersRepository {
    getFilteredStudents(data: IGetFilteredTeachersDTO): Promise<object[]>
    nextPage(data: IGetFilteredTeachersDTO): Promise<boolean>
}