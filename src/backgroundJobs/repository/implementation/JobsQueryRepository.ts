import { pool } from "../../../database/DatabaseConfig";
import { IJobsRepository } from "../IJobsRepository";

export class JobsQueryRepository implements IJobsRepository {
 
    async updateStudentClass(id: number, classNumber: number): Promise<void> {
        console.log(id, classNumber)
        const client = await pool.connect();
        try {
            await client.query('UPDATE students SET class = $1 WHERE id = $2', [classNumber, id])
        } catch (err) {
            throw new Error()
        } finally {
            client.release()
        }
    }

    async updateTeacherClass(id: number, classNumber: number): Promise<void> {
        const client = await pool.connect();
        try {
            await client.query('UPDATE teachers SET class = $1 WHERE id = $2', [classNumber, id])
        } catch (err) {
            throw new Error()
        } finally {
            client.release()
        }
    }
}