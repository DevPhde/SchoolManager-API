import { DeleteClassQueryRepository } from "../repository/implementation/DeleteClassQueryRepository";
import { IDeleteClassDTO } from "./IDeleteClassDTO";
import { JobQueue } from "../../../backgroundJobs/Config/JobQueue";
export class DeleteClassUseCase {
    constructor(
        private deleteClassQueryRepository: DeleteClassQueryRepository,
        private jobQueue = new JobQueue
    ) { }

    async exec(data: IDeleteClassDTO): Promise<void> {
        const classNumber = await this.deleteClassQueryRepository.getClass(data.id);
        if(!classNumber) {
            throw new Error(`Turma ID: ${data.id} não existe.`)
        }
        const teacherId = await this.deleteClassQueryRepository.getTeacherId(classNumber);
        const studentsId = await this.deleteClassQueryRepository.getStudentsId(classNumber);
        try {
            if(teacherId) {
                await this.jobQueue.add('UpdateTeacherClass', { id: teacherId, classNumber: null })
            }
            for (let index = 0; index < studentsId.length; index++) {
                await this.jobQueue.add('UpdateStudentClass', { id: studentsId[index], classNumber: null })
            }
            await this.jobQueue.add('DeleteClass', { id: data.id, classNumber: classNumber })
            return
        } catch (err) {
            throw new Error(err)
        }
    }
}