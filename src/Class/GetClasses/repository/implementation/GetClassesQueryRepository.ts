import { IGetClassesRepositry } from "../IGetClassesRepository";
import { IGetClassesDTO } from "../../useCases/IGetClassesDTO";
import { pool } from "../../../../database/DatabaseConfig";

export class GetClassesQueryRepository implements IGetClassesRepositry {
    async getClasses(data: IGetClassesDTO): Promise<object[]> {
        console.log(data)
        const client = await pool.connect();
        try {
            const classes = (await client.query(`
            SELECT classes.id ,classes.number AS class, classes.schedule, ARRAY_AGG(students.id) AS students, teachers.id AS teacher
            FROM students
            INNER JOIN classes ON students.class = classes.number
            INNER JOIN teachers ON teachers.class = classes.number
            GROUP BY classes.id, classes.number, classes.schedule, teachers.id
            OFFSET $1 LIMIT $2
            `, [(data.page - 1) * data.limit, data.limit])).rows
            // const classes = ((await client.query(`SELECT * FROM classes`)).rows)
            console.log(classes)
            return classes
        } catch (err) {
            console.error('Error: ', err)
        } finally {
            client.release()
        }
    }
    async nextPage(data: IGetClassesDTO): Promise<boolean> {
        const client = await pool.connect();
        try {
            return (await client.query(`
            SELECT classes.id, classes.number AS class, classes.schedule, ARRAY_AGG(students.id) AS students, teachers.id AS teacher
            FROM students
            INNER JOIN classes ON students.class = classes.number
            INNER JOIN teachers ON teachers.class = classes.number
            GROUP BY classes.id, classes.number, classes.schedule, teachers.id
            OFFSET $1 LIMIT $2
            `, [data.page * data.limit, data.limit])).rows.length ? true : false;
        } catch (err) {
            console.error('Error: ', err)
        } finally {
            client.release()
        }
    }

}