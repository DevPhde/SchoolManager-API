import { ICreateClassRepository } from "../ICreateClassRepository";
import { pool } from "../../../../database/DatabaseConfig";
import { ClassEntity } from "../../entities/Class";

export class CreateClassQueryRepository implements ICreateClassRepository {
    async findClassByNumber(number: number): Promise<any[]> {
        return []
    }

    save(data: ClassEntity): Promise<void> {
        return
    }
}