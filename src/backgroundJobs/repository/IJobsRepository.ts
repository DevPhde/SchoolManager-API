export interface IJobsRepository {
    updateStudentClass(id: number, classNumber: number): Promise<void>;
    updateTeacherClass(id: number, classNumber: number): Promise<void>;
}