import { JobQueue } from "./backgroundJobs/Config/JobQueue"
import { PrettyConsole } from "./helper/PrettyLog/PrettyConsole"

const jobQueue = new JobQueue();

jobQueue.process()

PrettyConsole.log('Running Queue')