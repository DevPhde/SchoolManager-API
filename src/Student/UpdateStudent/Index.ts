import { UpdateStudentController } from "./useCases/UpdateStudentController";
import { UpdateStudentQueryRepository } from "./repository/implementation/UpdateStudentQueryRepository";
import { UpdateStudentUseCase } from "./useCases/UpdateStudentUseCase";

const updateStudentQueryRepository = new UpdateStudentQueryRepository();
const updateStudentUseCase = new UpdateStudentUseCase(
    updateStudentQueryRepository
)

export const updateStudentController = new UpdateStudentController(
    updateStudentUseCase
)