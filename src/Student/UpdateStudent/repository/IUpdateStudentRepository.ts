import { IUpdateStudentDTO } from "../useCases/IUpdateStudentDTO"

export interface IUpdateStudentRepository {
    update(student: IUpdateStudentDTO): Promise<void>
}