import { CreateStudentUseCase } from "./useCases/CreateStudentUseCase";
import { CreateStudentController } from "./useCases/CreateStudentController";
import { CreateStudentQueryRepository } from "./repository/implementation/CreateStudentQueryRepository";

const createStudentQueryRepository = new CreateStudentQueryRepository();
const createStudentUseCase = new CreateStudentUseCase(
    createStudentQueryRepository
);

export const createStudentController = new CreateStudentController(
    createStudentUseCase
)