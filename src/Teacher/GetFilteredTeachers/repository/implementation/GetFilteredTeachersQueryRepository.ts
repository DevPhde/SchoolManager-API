import { pool } from "../../../../database/DatabaseConfig";
import { IGetFilteredTeachersRepository } from "../IGetFilteredTeachersRepository";
import { IGetFilteredTeachersDTO } from "../../useCases/IGetFilteredTeachersDTO";

export class GetFilteredTeachersQueryRepository implements IGetFilteredTeachersRepository {
    async getFilteredStudents(data: IGetFilteredTeachersDTO): Promise<object[]> {
        const client = await pool.connect();
        try {
            return (await client.query(`SELECT * FROM teachers WHERE name LIKE $1 || '%' OR cpf LIKE $1 || '%' OR email LIKE $1 || '%' OFFSET $2 LIMIT $3`, [data.search, (data.page - 1) * data.limit, data.limit])).rows
        } catch (err) {
            console.error('Error: ', err);
        } finally {
            client.release()
        }
    }

    async nextPage(data: IGetFilteredTeachersDTO): Promise<boolean> {
        const client = await pool.connect();
        try {
            return (await client.query(`SELECT * FROM teachers WHERE name LIKE $1 || '%' OR cpf LIKE $1 || '%' OR email LIKE $1 || '%' OFFSET $2 LIMIT $3`, [data.search, data.page * data.limit, data.limit])).rows.length ? true : false
        } catch (err) {
            console.error('Error: ', err);
        } finally {
            client.release();
        }
    }
}