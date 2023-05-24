import { CreateTeacherController } from "./useCases/CreateTeacherController";
import { CreateTeacherUseCase } from "./useCases/CreateTeacherUseCase";
import { CreateTeacherQueryRepository } from "./repository/implementation/CreateTeacherQueryRepository";

const createTeacherQueryRepository = new CreateTeacherQueryRepository();
const createTeacherUseCase = new CreateTeacherUseCase(
    createTeacherQueryRepository
)

export const createTeacherController = new CreateTeacherController(
    createTeacherUseCase
)