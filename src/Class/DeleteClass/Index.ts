import { DeleteClassQueryRepository } from "./repository/implementation/DeleteClassQueryRepository";
import { DeleteClassController } from "./useCases/DeleteClassController";
import { DeleteClassUseCase } from "./useCases/DeleteClassUseCase";


const deleteClassQueryRepository = new DeleteClassQueryRepository();
const deleteClassUseCase = new DeleteClassUseCase(
    deleteClassQueryRepository
);

export const deleteClassController = new DeleteClassController(
    deleteClassUseCase
);