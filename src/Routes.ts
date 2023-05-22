import { Router } from "express";
import { createStudentController } from "./Student/CreateStudent/Index";
export const routes = Router()

routes
    .get('/', (request, response) => { response.status(200).send('Connection OK')})
    .post('/new/student', (request, response) => {
        return createStudentController.handle(request, response)
    })