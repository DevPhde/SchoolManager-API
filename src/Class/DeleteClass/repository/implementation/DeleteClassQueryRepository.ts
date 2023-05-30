import { pool } from "../../../../database/DatabaseConfig";
import Queue from "../../../../backgroundJobs/Config/Queue";
import { IDeleteClassRepository } from "../IDeleteClassRepository";
import { IObjectToDeleteClassDTO } from "../../useCases/IDeleteClassDTO";

export class DeleteClassQueryRepository implements IDeleteClassRepository {
    async delete(data: IObjectToDeleteClassDTO): Promise<void> {

        const client = await pool.connect();
        try {          
            await Queue.add('UpdateTeacherClass', { id: data.teacherId, classNumber: null })
            for (let index = 0; index < data.studentsId.length; index++) {
                await Queue.add('UpdateStudentClass', { id: data.studentsId[index], classNumber: null })
            }
            await Queue.add('DeleteClass', {id: data.id})
        } catch (err) {
            console.error('Error: ', err)
        } finally {
            client.release();
        }
    }
    async getClassNumber(id: number): Promise<number> {
        const client = await pool.connect();
        try {
            return  parseInt((await client.query(`SELECT classes.number AS class FROM classes WHERE id = $1`, [id])).rows.pop().class);
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
}