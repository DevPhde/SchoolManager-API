import Queue from "./backgroundJobs/Config/Queue"
import { PrettyConsole } from "./helper/PrettyLog/PrettyConsole"

Queue.process()

PrettyConsole.log('Running Queue')