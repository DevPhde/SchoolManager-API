import { StudentEntity } from "../entities/Student";
export interface ICreateStudentRepository {
    findStudentByCpf(cpf: string): Promise<object>;
    save(student: StudentEntity): Promise<void>;
}