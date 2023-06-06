import { pool } from "../../../../database/DatabaseConfig";
import { IGetFilteredClassesRepository } from "../IGetFilteredClassesRepository";
import { IGetFilteredClassesDTO } from "../../useCases/IGetFilteredClassesDTO";

export class GetFilteredClassesQueryRepository implements IGetFilteredClassesRepository {
    async getFilteredClasses(data: IGetFilteredClassesDTO): Promise<object[]> {
        const client = await pool.connect();
        try {
            return (await client.query(`SELECT classes.id, classes.number AS class, classes.schedule, ARRAY_AGG(students.id) AS students, teachers.id AS teacher
            FROM classes
            LEFT JOIN students ON students.class = classes.number
            LEFT JOIN teachers ON teachers.class = classes.number
            WHERE CAST(classes.number AS TEXT) LIKE $1 || '%' OR CAST(classes.schedule AS TEXT) LIKE $1 ||  '%'
            GROUP BY classes.id, classes.number, classes.schedule, teachers.id
            OFFSET $2 LIMIT $3
            `, [data.search, (data.page - 1) * data.limit, data.limit])).rows
        } catch (err) {
            throw new Error('Database Error (error code: GFCQR 18L)')
        } finally {
            client.release()
        }
    }
    async nextPage(data: IGetFilteredClassesDTO): Promise<boolean> {
        const client = await pool.connect();
        try {
            return (await client.query(`SELECT classes.id, classes.number AS class, classes.schedule, ARRAY_AGG(students.id) AS students, teachers.id AS teacher
            FROM classes
            INNER JOIN students ON students.class = classes.number
            INNER JOIN teachers ON teachers.class = classes.number
            WHERE CAST(classes.number AS TEXT) LIKE $1 || '%' OR CAST(classes.schedule AS TEXT) LIKE $1 ||  '%'
            GROUP BY classes.id, classes.number, classes.schedule, teachers.id
            OFFSET $2 LIMIT $3
            `, [data.search, data.page * data.limit, data.limit])).rows.length ? true : false;
        } catch (err) {
            throw new Error('Database Error (error code: GFCQR 38L)')
        } finally {
            client.release()
        }
    }
}