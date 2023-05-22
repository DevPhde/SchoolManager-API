import { pool } from "../../database/DatabaseConfig";
import { PrettyConsole } from "../PrettyLog/PrettyConsole";

export async function syncTables() {
    const client = await pool.connect();

    try {
        const query = `
      CREATE TABLE IF NOT EXISTS classes (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS students (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        cpf VARCHAR(14) NOT NULL,
        class INT,
        FOREIGN KEY (class) REFERENCES classes(id)
      );

      CREATE TABLE IF NOT EXISTS teachers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        cpf VARCHAR(14) NOT NULL,
        class INT,
        FOREIGN KEY (class) REFERENCES classes(id)
      );
    `;

        await client.query(query);
        PrettyConsole.log('Tables synced')
    } catch (err) {
        console.error("table sync error: ", err)
    } finally {
        client.release();
    }
}