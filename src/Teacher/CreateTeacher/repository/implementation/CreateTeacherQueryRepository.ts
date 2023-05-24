import { pool } from "../../../../database/DatabaseConfig";
import { TeacherEntity } from "../../entities/Teacher";
import { ICreateTeacherRepository } from "../ICreateTeacherRepository";

export class CreateTeacherQueryRepository implements ICreateTeacherRepository {
    async findTeacherByCpf(cpf: string): Promise<any> {
        const client = await pool.connect()
        try {
            return (await client.query('SELECT * FROM teachers WHERE cpf = $1', [cpf])).rows
        } catch (err) {
            console.error("error: ", err)
        } finally {
            client.release()
        }
    }

    async save(teacher: TeacherEntity): Promise<void> {
        const client = await pool.connect();

        try {
            await client.query('INSERT INTO teachers (name, email, cpf) VALUES ($1, $2, $3)', [teacher.name, teacher.email, teacher.cpf]);
        } catch (err) {
            console.error('error: ', err)
        } finally {
            client.release()
        }
    }
}