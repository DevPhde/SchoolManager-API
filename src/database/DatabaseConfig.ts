import {Pool} from "pg"

export const pool = new Pool({
    user:'postgres',
    port: 5432,
    host:'postgres',
    password: 'password'
})