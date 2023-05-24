export interface IDeleteTeacherRepository {
    delete(id: number): Promise<void>;
}