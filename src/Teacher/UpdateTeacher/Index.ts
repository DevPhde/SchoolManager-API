import { UpdateTeacherQueryRepository } from "./repository/implementation/UpdateTeacherQueryRepository";
import { UpdateTeacherUseCase } from "./useCases/UpdateTeacherUseCase";
import { UpdateTeacherController } from "./useCases/UpdateTeacherController";

const updateTeacherQueryRepository = new UpdateTeacherQueryRepository();
const updateTeacherUseCase = new UpdateTeacherUseCase(
    updateTeacherQueryRepository
);

export const updateTeacherController = new UpdateTeacherController(
    updateTeacherUseCase
);