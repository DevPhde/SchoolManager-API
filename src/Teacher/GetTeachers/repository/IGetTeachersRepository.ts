import { IGetTeachersDTO } from "../useCases/IGetTeachersDTO";

export interface IGetTeachersRepository {
    getTeachers(data: IGetTeachersDTO): Promise<object[]>;
    nextPage(data: IGetTeachersDTO): Promise<boolean>;
}