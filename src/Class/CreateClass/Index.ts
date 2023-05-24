import { CreateClassController } from "./useCases/CreateClassController";
import { CreateClassQueryRepository } from "./repository/implementation/CreateClassQueryRepository";
import { CreateClassUseCase } from "./useCases/CreateClassUseCase";

const createClassQueryRepository = new CreateClassQueryRepository();
const createClassUseCase = new CreateClassUseCase(
    createClassQueryRepository
);

export const createClassController = new CreateClassController(
    createClassUseCase
);