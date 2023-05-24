import { DeleteTeacherQueryRepository } from "./repository/implementation/DeleteTeacherQueryRepository";
import { DeleteTeacherUseCase } from "./useCase/DeleteTeacherUseCase";
import { DeleteTeacherController } from "./useCase/DeleteTeacherController";

const deleteTeacherQueryRepository = new DeleteTeacherQueryRepository();
const deleteTeacherUseCase = new DeleteTeacherUseCase(
    deleteTeacherQueryRepository
);

export const deleteTeacherController = new DeleteTeacherController(
    deleteTeacherUseCase
);