import { IUpdateTeacherRepository } from "../IUpdateTeacherRepository";
import { IUpdateTeacherDTO } from "../../useCases/IUpdateTeacherDTO";
import { pool } from "../../../../database/DatabaseConfig";
import { queryHelper } from "../../helper/QueryHelper";

export class UpdateTeacherQueryRepository implements IUpdateTeacherRepository {
    async update(student: IUpdateTeacherDTO): Promise<void> {
        const client = await pool.connect();

        try {
            const [query, values] = queryHelper(student)
            await client.query(query, values)
        } catch (err) {
            console.error('Error: ', err)
        } finally {
            client.release();
        }
    }
}