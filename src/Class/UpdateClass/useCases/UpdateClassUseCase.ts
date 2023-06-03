import { IUpdateClassDTO } from "./IUpdateClassDTO";
import { UpdateClassQueryRepository } from "../repository/implementation/UpdateClassRepository";
import { JobQueue } from "../../../backgroundJobs/Config/JobQueue";


interface IClass_ {
    id: number;
    number: number;
    students: number[];
    teacher: number;
}

export class UpdateClassUseCase {
    constructor(
        private updateClassQueryRepository: UpdateClassQueryRepository,
        private jobQueue: JobQueue
    ) { }

    async exec(data: IUpdateClassDTO): Promise<void> {
        const class_ = await this.updateClassQueryRepository.getClass(data.id) as IClass_;
        if (!class_) {
            throw new Error(`Turma ID ${data.id} não existe.`);
        }
        if (data.students) {
            if (data.students.length > 20) {
                throw new Error('Quantidade máxima de estudantes por turma não deve exceder 20 alunos.');
            }
            const studentsIdInClass = await this.updateClassQueryRepository.getClassStudents(data.id);
            const removeStudent = studentsIdInClass.filter(value => !data.students.includes(value));
            const addStudent = data.students.filter(value => !studentsIdInClass.includes(value));
            
            for (let index = 0; index < removeStudent.length; index++) {
                this.jobQueue.add('UpdateStudentClass', { id: removeStudent[index], classNumber: null });
            }
            for (let index = 0; index < addStudent.length; index++) {
                this.jobQueue.add('UpdateStudentClass', { id: addStudent[index], classNumber: class_.number });
            }
        }
        if (data.teacher) {
            await this.jobQueue.add('UpdateTeacherClass', { id: class_.teacher, classNumber: null });
            this.jobQueue.add('UpdateTeacherClass', { id: data.teacher, classNumber: class_.number });
        }

        if (data.schedule) {
            await this.updateClassQueryRepository.updateClassSchedule(data.id, data.schedule);
        }
        return
    }
}