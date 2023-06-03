import { DeleteClassQueryRepository } from "./repository/implementation/DeleteClassQueryRepository";
import { DeleteClassController } from "./useCases/DeleteClassController";
import { DeleteClassUseCase } from "./useCases/DeleteClassUseCase";
import { JobQueue } from "../../backgroundJobs/Config/JobQueue";

const deleteClassQueryRepository = new DeleteClassQueryRepository();
const jobQueue = new JobQueue();
const deleteClassUseCase = new DeleteClassUseCase(
    deleteClassQueryRepository,
    jobQueue
);

export const deleteClassController = new DeleteClassController(
    deleteClassUseCase
);