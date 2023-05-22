import { GetStudentsRepository } from "./repository/implementation/GetStudentsQueryRepository";
import { GetStudentsController } from "./useCases/GetStudentsController";
import { GetStudentsUseCase } from "./useCases/GetStudentsUseCase";

const getStudentsRepository = new GetStudentsRepository();
const getStudentsUseCase = new GetStudentsUseCase(
    getStudentsRepository
)

export const getStudentsController = new GetStudentsController(
    getStudentsUseCase
)