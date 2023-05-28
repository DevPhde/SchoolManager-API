import { GetFilteredClassesQueryRepository } from "./repository/implementation/GetFilteredClassesQueryRepository";
import { GetFilteredClassesUseCase } from "./useCases/GetFilteredClassesUseCase";
import { GetFilteredClassesController } from "./useCases/GetFilteredClassesController";

const getFilteredClassesQueryRepository = new GetFilteredClassesQueryRepository();
const getFilteredClassesUseCase = new GetFilteredClassesUseCase(
    getFilteredClassesQueryRepository
);


export const getFilteredClassesController = new GetFilteredClassesController(
    getFilteredClassesUseCase
);