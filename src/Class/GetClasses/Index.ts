import { GetClassesQueryRepository } from "./repository/implementation/GetClassesQueryRepository";
import { GetClassesController } from "./useCases/GetClassesController";
import { GetClassesUsecase } from "./useCases/GetClassesUseCase";

const getClassesQueryRepository = new GetClassesQueryRepository();
const getClassesUseCase = new GetClassesUsecase(
    getClassesQueryRepository
);

export const getClassesController = new GetClassesController(
    getClassesUseCase
);