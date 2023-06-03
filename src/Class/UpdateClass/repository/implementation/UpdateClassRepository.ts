import { IUpdateClassRepository } from "../IUpdateClassRepository";
import { pool } from "../../../../database/DatabaseConfig";

export class UpdateClassQueryRepository implements IUpdateClassRepository {
    async getClassStudents(id: number): Promise<number[]> {
        const client = await pool.connect();

        try {
            const classNumber = (await client.query(`SELECT * FROM classes WHERE id = $1`, [id])).rows.pop().number
            return (await client.query(`SELECT students.id FROM students WHERE class = $1`, [classNumber])).rows.map(student => student.id)
        } catch (err) {
            console.error('Error: ', err)
        } finally {
            client.release();
        }
    }
    async getClass(id: number): Promise<object> {
        const client = await pool.connect();

        try {
            return (await client.query(`
            SELECT classes.id ,classes.number AS number, classes.schedule, ARRAY_AGG(students.id) AS students, teachers.id AS teacher
            FROM classes
            INNER JOIN students ON students.class = classes.number
            INNER JOIN teachers ON teachers.class = classes.number
            WHERE classes.id = $1
            GROUP BY classes.id, classes.number, classes.schedule, teachers.id
            `, [id])).rows.pop()
        } catch (err) {
            console.error('Error: ', err)
        } finally {
            client.release();
        }
    }

    async updateClassSchedule(id: number, schedule: string): Promise<void> {
        const client = await pool.connect();

        try {
            return (await client.query(`UPDATE classes SET schedule = $1 WHERE id = $2 `, [schedule, id])).rows.pop()
        } catch (err) {
            console.error('Error: ', err)
        } finally {
            client.release();
        }
    }
}