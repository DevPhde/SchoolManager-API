import { ICreateClassRepository } from "../ICreateClassRepository";
import { pool } from "../../../../database/DatabaseConfig";
import { ClassEntity } from "../../entities/Class";
import Queue from "../../../../backgroundJobs/Config/Queue"

export class CreateClassQueryRepository implements ICreateClassRepository {
    async findClassByNumber(number: number): Promise<any[]> {
        const client = await pool.connect()

        try {
            return (await client.query('SELECT * FROM classes WHERE number = $1', [number])).rows
        } catch (err) {
            console.error('Error: ', err)
        } finally {
            client.release()
        }
    }

    async save(data: ClassEntity, students: number[], teacher: number): Promise<void> {
        const client = await pool.connect();
        try {
            await client.query('INSERT INTO classes (number, schedule) VALUES ($1, $2)', [data.number, data.schedule])
            await Queue.add('UpdateTeacherClass', { id: teacher, classNumber: data.number })
            for (let index = 0; index < students.length; index++) {
                await Queue.add('UpdateStudentClass', { id: students[index], classNumber: data.number })
            }

        } catch (err) {
            console.error('Error: ', err)
        } finally {
            client.release();
        }
    }
}