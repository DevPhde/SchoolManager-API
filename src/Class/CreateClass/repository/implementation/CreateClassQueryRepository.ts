import { ICreateClassRepository } from "../ICreateClassRepository";
import { pool } from "../../../../database/DatabaseConfig";
import { ClassEntity } from "../../entities/Class";
export class CreateClassQueryRepository implements ICreateClassRepository {
    async findClassByNumber(number: number): Promise<any[]> {
        const client = await pool.connect()

        try {
            return (await client.query('SELECT * FROM classes WHERE number = $1', [number])).rows
        } catch (err) {
            throw new Error('Database Error (error code: CCQR 11L)')
        } finally {
            client.release()
        }
    }

    async save(data: ClassEntity): Promise<void> {
        const client = await pool.connect();
        try {
            await client.query('INSERT INTO classes (number, schedule) VALUES ($1, $2)', [data.number, data.schedule])
        } catch (err) {
            throw new Error('Database Error (error code: CCQR 11L)')
        } finally {
            client.release();
        }
    }
}