import { IGetClassesRepositry } from "../IGetClassesRepository";
import { IGetClassesDTO } from "../../useCases/IGetClassesDTO";
import { pool } from "../../../../database/DatabaseConfig";

export class GetClassesQueryRepository implements IGetClassesRepositry {
    async getClasses(data: IGetClassesDTO): Promise<object[]> {
        const client = await pool.connect();
        try {
            return (await client.query(`SELECT classes.id, classes.number AS class, classes.schedule, ARRAY_AGG(students.id) AS students, teachers.id AS teacher
            FROM classes
            LEFT JOIN students ON students.class = classes.number
            LEFT JOIN teachers ON teachers.class = classes.number
            GROUP BY classes.id, classes.number, classes.schedule, teachers.id
            OFFSET $1 LIMIT $2
            `, [(data.page - 1) * data.limit, data.limit])).rows
        } catch (err) {
            throw new Error('Database Error (error code: GCQR 17L)')
        } finally {
            client.release()
        }
    }
    async nextPage(data: IGetClassesDTO): Promise<boolean> {
        const client = await pool.connect();
        try {
            return (await client.query(`SELECT classes.id, classes.number AS class, classes.schedule, ARRAY_AGG(students.id) AS students, teachers.id AS teacher
            FROM classes
            LEFT JOIN students ON students.class = classes.number
            LEFT JOIN teachers ON teachers.class = classes.number
            GROUP BY classes.id, classes.number, classes.schedule, teachers.id
            OFFSET $1 LIMIT $2
            `, [data.page * data.limit, data.limit])).rows.length ? true : false;
        } catch (err) {
            throw new Error('Database Error (error code: GCQR 33L)')
        } finally {
            client.release()
        }
    }

}