import { IUpdateTeacherDTO } from "../useCases/IUpdateTeacherDTO"

export interface IUpdateTeacherRepository {
    update(student: IUpdateTeacherDTO): Promise<void>
}