import { pool } from "../../../../database/DatabaseConfig";
import { IDeleteClassRepository } from "../IDeleteClassRepository";

export class DeleteClassQueryRepository implements IDeleteClassRepository {
    async getClass(id: number): Promise<number | null> {
        const client = await pool.connect();
        try {
            const result = (await client.query(`SELECT classes.number FROM classes WHERE id = $1`, [id])).rows.pop();
            return result ?  parseInt(result.number) : null
        } catch (err) {
            throw new Error('Database Error (error code: DCQR 12L)')
        } finally {
            client.release();
        }
    }

    async getStudentsId(classNumber: number): Promise<number[]> {
        const client = await pool.connect();
        try {
            return (await client.query(`SELECT students.id FROM students WHERE class = $1`, [classNumber])).rows.map(student => student.id)
        } catch (err) {
            throw new Error('Database Error (error code: DCQR 23L)')
        } finally {
            client.release();
        }
    }
    async getTeacherId(classNumber: number): Promise<number | null> {
        const client = await pool.connect();
        try {
            const result = (await client.query(`SELECT teachers.id FROM teachers WHERE class = $1`, [classNumber])).rows.pop()
            return result ? parseInt(result.id) : null
        } catch (err) {
            throw new Error('Database Error (error code: DCQR 35L)')
        } finally {
            client.release();
        }
    }
}