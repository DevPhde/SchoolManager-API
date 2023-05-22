import { IDeleteStudentDTO } from "../../useCases/IDeleteStudentDTO";
import { IDeleteStudentRepository } from "../IDeleteStudentRepository";
import { pool } from "../../../../database/DatabaseConfig";

export class DeleteStudentQueryRepository implements IDeleteStudentRepository {
    async delete(id: IDeleteStudentDTO): Promise<void> {
        const client = await pool.connect();
        try {
            client.query('DELETE FROM students WHERE id = $1', [id.id])
        } catch (err) {
            console.error('Error: ', err)
        } finally {
            client.release();
        }
    }
}