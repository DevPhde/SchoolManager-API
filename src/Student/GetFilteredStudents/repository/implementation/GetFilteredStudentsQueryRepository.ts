import { IGetFilteredStudentsDTO, IResponseGetFilteredStudentsDTO } from "../../useCases/IGetFilteredStudentsDTO";
import { IGetFilteredStudentsRepository } from "../IGetFilteredStudentsRepository";
import { pool } from "../../../../database/DatabaseConfig";

export class GetFilteredStudentsQueryRepository implements IGetFilteredStudentsRepository {
    async getFilteredStudents(data: IGetFilteredStudentsDTO): Promise<object[]> {
        const client = await pool.connect();
        try {
            return (await client.query(`SELECT * FROM students WHERE name LIKE $1 || '%' OR cpf LIKE $1 || '%' OR email LIKE $1 || '%' OFFSET $2 LIMIT $3`, [data.search, (data.page - 1) * data.limit, data.limit])).rows
        } catch (err) {
            throw new Error('Database Error (error code: GFSQR 11L)')
        } finally {
            client.release()
        }
    }

    async nextPage(data: IGetFilteredStudentsDTO): Promise<boolean> {
        const client = await pool.connect();
        try {
            return (await client.query(`SELECT * FROM students WHERE name LIKE $1 || '%' OR cpf LIKE $1 || '%' OR email LIKE $1 || '%' OFFSET $2 LIMIT $3`, [data.search, data.page * data.limit, data.limit])).rows.length ? true : false
        } catch (err) {
            throw new Error('Database Error (error code: GFSQR 11L)')
        } finally {
            client.release();
        }
    }
}