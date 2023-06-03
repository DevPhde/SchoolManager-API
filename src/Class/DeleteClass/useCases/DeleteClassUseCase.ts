import { DeleteClassQueryRepository } from "../repository/implementation/DeleteClassQueryRepository";
import { IDeleteClassDTO } from "./IDeleteClassDTO";
import { JobQueue } from "../../../backgroundJobs/Config/JobQueue";
export class DeleteClassUseCase {
    constructor(
        private deleteClassQueryRepository: DeleteClassQueryRepository,
        private jobQueue = new JobQueue
    ) { }

    async exec(data: IDeleteClassDTO): Promise<void> {
        if(!await this.deleteClassQueryRepository.haveRegisteredClass(data.id)) {
            throw new Error(`Turma ID: ${data.id} não existe.`)
        }
        const classNumber = await this.deleteClassQueryRepository.getClassNumber(data.id);
        const teacherId = await this.deleteClassQueryRepository.getTeacherId(classNumber);
        const studentsId = await this.deleteClassQueryRepository.getStudentsId(classNumber);
        try {
            await this.jobQueue.add('UpdateTeacherClass', { id: teacherId, classNumber: null })
            for (let index = 0; index < studentsId.length; index++) {
                await this.jobQueue.add('UpdateStudentClass', { id: studentsId[index], classNumber: null })
            }
            await this.jobQueue.add('DeleteClass', { id: data.id })
            return
        } catch (err) {
            throw new Error(err)
        }
    }
}