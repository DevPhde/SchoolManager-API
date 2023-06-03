import { pool } from "../../../../database/DatabaseConfig";
import { IDeleteClassRepository } from "../IDeleteClassRepository";

export class DeleteClassQueryRepository implements IDeleteClassRepository {
    async getClassNumber(id: number): Promise<number> {
        const client = await pool.connect();
        try {
            return parseInt((await client.query(`SELECT classes.number AS class FROM classes WHERE id = $1`, [id])).rows.pop().class);
        } catch (err) {
            console.error('Error: ', err)
        } finally {
            client.release();
        }
    }

    async getStudentsId(classNumber: number): Promise<number[]> {
        const client = await pool.connect();
        try {
            return (await client.query(`SELECT students.id FROM students WHERE class = $1`, [classNumber])).rows.map(student => student.id)
        } catch (err) {
            console.error('Error: ', err)
        } finally {
            client.release();
        }
    }
    async getTeacherId(classNumber: number): Promise<number> {
        const client = await pool.connect();
        try {
            return parseInt((await client.query(`SELECT teachers.id FROM teachers WHERE class = $1`, [classNumber])).rows.pop().id)
        } catch (err) {
            console.error('Error: ', err)
        } finally {
            client.release();
        }
    }
    async haveRegisteredClass(id: number): Promise<boolean> {
        const client = await pool.connect();

        try {
            return (await client.query(`SELECT * FROM classes WHERE id = $1`, [id])).rows.length ? true : false
        } catch (err) {
            console.error('Error: ', err)
        } finally {
            client.release();
        }
    }
}