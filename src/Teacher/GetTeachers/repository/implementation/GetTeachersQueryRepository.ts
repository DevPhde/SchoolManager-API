import { IGetTeachersDTO } from "../../useCases/IGetTeachersDTO";
import { IGetTeachersRepository } from "../IGetTeachersRepository";
import { pool } from "../../../../database/DatabaseConfig";

export class GetTeachersQueryRepository implements IGetTeachersRepository {
    async getTeachers(data: IGetTeachersDTO): Promise<object[]> {
        const client = await pool.connect()
        try {
            return (await client.query('SELECT * FROM teachers OFFSET $1 LIMIT $2', [(data.page - 1) * data.limit, data.limit])).rows
        } catch (err) {
            throw new Error('Database Error (error code: GTQR 11L)')
        } finally {
            client.release()
        }
    }

    async nextPage(data: IGetTeachersDTO): Promise<boolean> {
        const client = await pool.connect();
        try {
            return (await client.query('SELECT * FROM teachers OFFSET $1 LIMIT $2', [data.page * data.limit, data.limit])).rows.length ? true : false
        } catch (err) {
            throw new Error('Database Error (error code: GTQR 22)')
        } finally {
            client.release();
        }
    }
}