import { DeleteStudentQueryRepository } from "./repository/implementation/DeleteStudentQueryRepository";
import { DeleteStudentController } from "./useCases/DeleteStudentController";
import { DeleteStudentUseCase } from "./useCases/DeteleStudentUseCase";

const deleteStudentQueryRepository = new DeleteStudentQueryRepository();
const deleteStudentUseCase = new DeleteStudentUseCase(
    deleteStudentQueryRepository
)

export const deleteStudentController = new DeleteStudentController(
    deleteStudentUseCase
)