import { ClassEntity } from "../entities/Class"

export interface ICreateClassRepository {
    findClassByNumber(number: number): Promise<any[]>;
    save(data: ClassEntity, students: number[], teacher: number): Promise<void>;
}