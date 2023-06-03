export interface IDeleteClassRepository {
    getClassNumber(id: number): Promise<number>;
    getStudentsId(classNumber: number): Promise<number[]>;
    getTeacherId(classNumber: number): Promise<number>;
    haveRegisteredClass(id: number): Promise<boolean>;
}