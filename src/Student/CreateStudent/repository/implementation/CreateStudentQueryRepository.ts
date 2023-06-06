import { StudentEntity } from "../../entities/Student";
import { ICreateStudentRepository } from "../ICreateStudentRepository";
import { pool } from "../../../../database/DatabaseConfig";

export class CreateStudentQueryRepository implements ICreateStudentRepository {

    async findStudentByCpf(cpf: string): Promise<any[]> {
        const client = await pool.connect()
        try {
            return  (await client.query(`SELECT * FROM students WHERE cpf = '${cpf}'`)).rows            
        } catch (err) {
            throw new Error('Database Error (error code: CSQR 13L)')
        } finally {
            client.release()
        }
    }

    async save(student: StudentEntity): Promise<void> {
        const client = await pool.connect()

        try {
            const query = `INSERT INTO students (name, email, cpf) VALUES ($1, $2, $3)`
            const values = [student.name, student.email, student.cpf];
            await client.query(query, values);
        } catch (err) {
            throw new Error('Database Error (error code: CSQR 26L)')
        } finally {
            client.release()
        }
    }
}