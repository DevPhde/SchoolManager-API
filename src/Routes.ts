import { Router } from "express";
import { createStudentController } from "./Student/CreateStudent/Index";
import { getStudentsController } from "./Student/GetStudents/Index";
import { getFilteredStudentsController } from "./Student/GetFilteredStudents/Index";
import { deleteStudentController } from "./Student/DeleteStudent/Index";
export const routes = Router()

routes
    .get('/', (request, response) => { response.status(200).send('Connection OK')})
    .post('/new/student', (request, response) => {
        return createStudentController.handle(request, response)
    })
    .get('/students', (request, response) => {
        return getStudentsController.handle(request, response)
    })
    .get('/search/students', (request, response) => {
        return getFilteredStudentsController.handle(request, response)
    })
    .delete('/student/:id', (request, response) => {
        return deleteStudentController.handle(request, response)
    })