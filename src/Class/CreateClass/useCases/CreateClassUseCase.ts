import { ICreateClassDTO } from "./ICreateClassDTO";
import { CreateClassQueryRepository } from "../repository/implementation/CreateClassQueryRepository";
import { isEmpty } from "../../../helper/AbstrationHelper/AbstrationHelper";
import { ClassEntity } from "../entities/Class";
import { JobQueue } from "../../../backgroundJobs/Config/JobQueue";

export class CreateClassUseCase {
    constructor(
        private createClassQueryRepository: CreateClassQueryRepository,
        private jobQueue: JobQueue
    ) { }

    async exec(data: ICreateClassDTO): Promise<void> {
        if (!isEmpty(await this.createClassQueryRepository.findClassByNumber(data.number))) {
            throw new Error('Número da turma já cadastrado.')
        }
        if (data.students.length > 20) {
            throw new Error('Quantidade de estudantes cadastrados por cada turma não deve ultrapassar 20.')
        }
        const class_ = new ClassEntity({
            number: data.number,
            schedule: data.schedule
        })
        try {
            await this.createClassQueryRepository.save(class_)

            await this.jobQueue.add('UpdateTeacherClass', { id: data.teacher, classNumber: data.number });

            for (let index = 0; index < data.students.length; index++) {
                await this.jobQueue.add('UpdateStudentClass', { id: data.students[index], classNumber: data.number });
            }
            return
        } catch (err) {
            throw new Error(err)
        }
    }
}