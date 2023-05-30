import { DeleteClassQueryRepository } from "../repository/implementation/DeleteClassQueryRepository";
import { IDeleteClassDTO } from "./IDeleteClassDTO";

export class DeleteClassUseCase {
    constructor(
        private deleteClassQueryRepository: DeleteClassQueryRepository
    ){}

    async exec(data: IDeleteClassDTO): Promise<void> {
        const classNumber = await this.deleteClassQueryRepository.getClassNumber(data.id);
        const teacherId = await this.deleteClassQueryRepository.getTeacherId(classNumber);
        const studentsId = await this.deleteClassQueryRepository.getStudentsId(classNumber);
        
        return this.deleteClassQueryRepository.delete({
            id: data.id,
            classNumber: classNumber,
            studentsId: studentsId,
            teacherId: teacherId
        });
    }
}