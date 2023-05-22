import { IGetStudentsDTO} from "../useCases/IGetStudentsDTO";

export interface IGetStudentsRepository {
    getStudents(data: IGetStudentsDTO): Promise<object[]>;
    nextPage(data: IGetStudentsDTO): Promise<boolean>;
}