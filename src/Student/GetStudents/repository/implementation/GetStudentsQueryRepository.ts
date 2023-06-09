import { IGetStudentsRepository } from "../IGetStudentsRepository";
import { IGetStudentsDTO } from "../../useCases/IGetStudentsDTO";
import { pool } from "../../../../database/DatabaseConfig";

export class GetStudentsQueryRepository implements IGetStudentsRepository {
    async getStudents(data: IGetStudentsDTO): Promise<object[]> {
        const client = await pool.connect()
        try {
            return (await client.query('SELECT * FROM students OFFSET $1 LIMIT $2', [(data.page - 1) * data.limit, data.limit])).rows
        } catch (err) {
            throw new Error('Database Error (error code: GSQR 11L)')
        } finally {
            client.release()
        }
    }

    async nextPage(data: IGetStudentsDTO): Promise<boolean> {
        const client = await pool.connect();
        try {
            return (await client.query('SELECT * FROM students OFFSET $1 LIMIT $2', [data.page * data.limit, data.limit])).rows.length ? true : false
        } catch (err) {
            throw new Error('Database Error (error code: GSQR 11L)')
        } finally {
            client.release();
        }
    }
}