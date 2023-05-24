import { DeleteTeacherQueryRepository } from "./repository/implementation/DeleteTeacherQueryRepository";
import { DeleteTeacherUseCase } from "./useCases/DeleteTeacherUseCase";
import { DeleteTeacherController } from "./useCases/DeleteTeacherController";

const deleteTeacherQueryRepository = new DeleteTeacherQueryRepository();
const deleteTeacherUseCase = new DeleteTeacherUseCase(
    deleteTeacherQueryRepository
);

export const deleteTeacherController = new DeleteTeacherController(
    deleteTeacherUseCase
);