export interface IDeleteClassRepository {
    getClass(id: number): Promise<number | null>;
    getStudentsId(classNumber: number): Promise<number[]>;
    getTeacherId(classNumber: number): Promise<number | null>;
}