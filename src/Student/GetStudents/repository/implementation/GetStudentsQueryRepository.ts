import { IGetStudentsRepository } from "../IGetStudentsRepository";
import { IGetStudentsDTO, IResponseGetStudentsDTO } from "../../useCases/IGetStudentsDTO";
import { pool } from "../../../../database/DatabaseConfig";

export class GetStudentsRepository implements IGetStudentsRepository {
    async getStudents(data: IGetStudentsDTO): Promise<IResponseGetStudentsDTO> {
        const client = await pool.connect()
        try {
            return {
                result: (await client.query('SELECT * FROM students OFFSET $1 LIMIT $2', [(data.page - 1) * data.limit, data.limit])).rows,
                nextPage: (await client.query('SELECT * FROM students OFFSET $1 LIMIT $2', [data.page * data.limit, data.limit])).rows.length ? true : false
            }
        } catch (err) {
            console.error('error: ', err);
            client.release()
        } finally {
            client.release()
        }
    }
}