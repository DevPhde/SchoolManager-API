import { pool } from "../../../../database/DatabaseConfig";
import { IUpdateStudentRepository } from "../IUpdateStudentRepository";
import { IUpdateStudentDTO } from "../../useCases/IUpdateStudentDTO";
import { queryHelper } from "../../helper/QueryHelper";

export class UpdateStudentQueryRepository implements IUpdateStudentRepository {
    async update(student: IUpdateStudentDTO): Promise<void> {
        const client = await pool.connect();

        try {
            const [query, values] = queryHelper(student)
            await client.query(query, values)
        } catch (err) {
            throw new Error('Database Error (error code: USQR 14L)')
        } finally {
            client.release();
        }
    }
}