import { Router } from "express";
import { createStudentController } from "./Student/CreateStudent/Index";
import { getStudentsController } from "./Student/GetStudents/Index";
import { getFilteredStudentsController } from "./Student/GetFilteredStudents/Index";
import { deleteStudentController } from "./Student/DeleteStudent/Index";
import { updateStudentController } from "./Student/UpdateStudent/Index";
import { createTeacherController } from "./Teacher/CreateTeacher/Index";
import { deleteTeacherController } from "./Teacher/DeleteTeacher/Index";
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
    .put('/student/:id', (request, response) => {
        return updateStudentController.handle(request, response)
    })
    .post('/new/teacher', (request, response) => {
        return createTeacherController.handle(request, response)
    })
    .delete('/teacher/:id', (request, response) => {
        return deleteTeacherController.handle(request, response)
    })