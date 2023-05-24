import { TeacherEntity } from "../entities/Teacher"
export interface ICreateTeacherRepository {
    findTeacherByCpf(cpf: string): Promise<object>;
    save(teacher: TeacherEntity): Promise<void>;
}