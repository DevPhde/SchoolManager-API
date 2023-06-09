import { Router } from "express";
import { createStudentController } from "./Student/CreateStudent/Index";
import { getStudentsController } from "./Student/GetStudents/Index";
import { getFilteredStudentsController } from "./Student/GetFilteredStudents/Index";
import { deleteStudentController } from "./Student/DeleteStudent/Index";
import { updateStudentController } from "./Student/UpdateStudent/Index";
import { createTeacherController } from "./Teacher/CreateTeacher/Index";
import { deleteTeacherController } from "./Teacher/DeleteTeacher/Index";
import { getFilteredTeachersController } from "./Teacher/GetFilteredTeachers/Index";
import { getTeachersController } from "./Teacher/GetTeachers/Index";
import { updateTeacherController } from "./Teacher/UpdateTeacher/Index";
import { createClassController } from "./Class/CreateClass/Index"
import { getClassesController } from "./Class/GetClasses/Index";
import { getFilteredClassesController } from "./Class/GetFilteredClasses/Index";
import { deleteClassController } from "./Class/DeleteClass/Index";
import { updateClassController } from "./Class/UpdateClass/Index";
export const routes = Router()

routes
    .get('/', (request, response) => { response.status(200).send('Connection OK') })
    .post('/students', (request, response) => {
        return createStudentController.handle(request, response)
    })
    .get('/students', (request, response) => {
        return getStudentsController.handle(request, response)
    })
    .get('/search/students', (request, response) => {
        return getFilteredStudentsController.handle(request, response)
    })
    .delete('/students/:id', (request, response) => {
        return deleteStudentController.handle(request, response)
    })
    .put('/students/:id', (request, response) => {
        return updateStudentController.handle(request, response)
    })
    .post('/teachers', (request, response) => {
        return createTeacherController.handle(request, response)
    })
    .delete('/teachers/:id', (request, response) => {
        return deleteTeacherController.handle(request, response)
    })
    .get('/search/teachers', (request, response) => {
        return getFilteredTeachersController.handle(request, response)
    })
    .get('/teachers', (request, response) => {
        return getTeachersController.handle(request, response)
    })
    .put('/teachers/:id', (request, response) => {
        return updateTeacherController.handle(request, response)
    })
    .post('/classes', (request, response) => {
        return createClassController.handle(request, response)
    })
    .get('/classes', (request, response) => {
        return getClassesController.handle(request, response)
    })
    .get('/search/classes', (request, response) => {
        return getFilteredClassesController.handle(request, response)
    })
    .delete('/classes/:id', (request, response) => {
        return deleteClassController.handle(request, response)
    })
    .put('/classes/:id', (request, response) => {
        return updateClassController.handle(request, response)
    })