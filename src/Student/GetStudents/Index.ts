import { GetStudentsQueryRepository } from "./repository/implementation/GetStudentsQueryRepository";
import { GetStudentsController } from "./useCases/GetStudentsController";
import { GetStudentsUseCase } from "./useCases/GetStudentsUseCase";

const getStudentsQueryRepository = new GetStudentsQueryRepository();
const getStudentsUseCase = new GetStudentsUseCase(
    getStudentsQueryRepository
)

export const getStudentsController = new GetStudentsController(
    getStudentsUseCase
)