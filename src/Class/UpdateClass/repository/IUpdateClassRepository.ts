export interface IUpdateClassRepository {
    getClassStudents(id: number): Promise<number[]>;
    getClass(id: number): Promise<object>;
    updateClassSchedule(id:number, schedule: string): Promise<void>;
}