import { GetTeachersQueryRepository } from "./repository/implementation/GetTeachersQueryRepository";
import { GetTeachersUseCase } from "./useCases/GetTeachersUseCase";
import { GetTeachersController } from "./useCases/GetTeachersController";

const getTeachersQueryRepository = new GetTeachersQueryRepository();
const getTeachersUseCase = new GetTeachersUseCase(
    getTeachersQueryRepository
);

export const getTeachersController = new GetTeachersController(
    getTeachersUseCase
);