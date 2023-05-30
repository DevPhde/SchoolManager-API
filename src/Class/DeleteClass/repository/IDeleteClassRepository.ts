import { IObjectToDeleteClassDTO } from "../useCases/IDeleteClassDTO";
export interface IDeleteClassRepository {
    getClassNumber(id: number): Promise<number>;
    getStudentsId(classNumber: number): Promise<number[]>;
    getTeacherId(classNumber: number): Promise<number>;
    delete(data: IObjectToDeleteClassDTO): Promise<void>;
}