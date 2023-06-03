import { CreateClassController } from "./useCases/CreateClassController";
import { CreateClassQueryRepository } from "./repository/implementation/CreateClassQueryRepository";
import { CreateClassUseCase } from "./useCases/CreateClassUseCase";
import { JobQueue } from "../../backgroundJobs/Config/JobQueue";

const createClassQueryRepository = new CreateClassQueryRepository();
const jobQueue = new JobQueue();
const createClassUseCase = new CreateClassUseCase(
    createClassQueryRepository,
    jobQueue
);

export const createClassController = new CreateClassController(
    createClassUseCase
);