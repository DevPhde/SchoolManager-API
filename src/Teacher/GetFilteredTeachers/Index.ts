import { GetFilteredTeachersQueryRepository } from "./repository/implementation/GetFilteredTeachersQueryRepository";
import { GetFilteredTeachersUseCase } from "./useCases/GetFilteredTeachersUseCase";
import { GetFilteredTeachersController } from "./useCases/GetFilteredTeachersController";

const getFilteredTeachersQueryRepository = new GetFilteredTeachersQueryRepository();
const getFilteredTeachersUseCase = new GetFilteredTeachersUseCase(
    getFilteredTeachersQueryRepository
);

export const getFilteredTeachersController = new GetFilteredTeachersController(
    getFilteredTeachersUseCase
);