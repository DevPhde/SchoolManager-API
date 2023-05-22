import { GetFilteredStudentsController } from "./useCases/GetFilteredStudentsController";
import { GetFilteredStudentsUseCase } from "./useCases/GetFilteredStudentsUseCase";
import { GetFilteredStudentsQueryRepository } from "./repository/implementation/GetFilteredStudentsQueryRepository";


const getFilteredStudentsQueryRepository = new GetFilteredStudentsQueryRepository();
const getFilteredStudentsUseCase = new GetFilteredStudentsUseCase(
    getFilteredStudentsQueryRepository
)

export const getFilteredStudentsController = new GetFilteredStudentsController(
    getFilteredStudentsUseCase
)