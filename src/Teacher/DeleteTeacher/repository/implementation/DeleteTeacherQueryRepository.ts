import { pool } from "../../../../database/DatabaseConfig";
import { IDeleteTeacherRepository } from "../IDeleteTeacherRepository";

export class DeleteTeacherQueryRepository implements IDeleteTeacherRepository {
    async delete(id: number): Promise<void> {
        const client = await pool.connect();

        try {
            await client.query('DELETE FROM teachers WHERE id = $1', [id]);
        } catch (err) {
            console.error('Error: ', err)
        } finally {
            client.release()
        }
    }
}