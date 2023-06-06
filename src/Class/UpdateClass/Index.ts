import { JobQueue } from "../../backgroundJobs/Config/JobQueue";
import { UpdateClassQueryRepository } from "./repository/implementation/UpdateClassQueryRepository";
import { UpdateClassUseCase } from "./useCases/UpdateClassUseCase";
import { UpdateClassController } from "./useCases/UpdateClassController";

const jobQueue = new JobQueue();
const updateClassQueryRepository = new UpdateClassQueryRepository();
const updateClassUseCase = new UpdateClassUseCase(
    updateClassQueryRepository,
    jobQueue
);

export const updateClassController = new UpdateClassController(
    updateClassUseCase
);