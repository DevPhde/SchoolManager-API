import { IGetStudentsDTO, IResponseGetStudentsDTO } from "../useCases/IGetStudentsDTO";

export interface IGetStudentsRepository {
    getStudents(data: IGetStudentsDTO): Promise<IResponseGetStudentsDTO>;
}