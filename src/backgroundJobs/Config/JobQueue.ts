import Queue from "bull";
import * as jobs from "../Index";

export class JobQueue {
  queues: {
    bull: any;
    name: string;
    handle: any;
    options: any;
  }[];

  constructor() {
    this.queues = Object.values(jobs).map((job) => ({
      bull: new Queue(job.key,{
        redis: {
          host:'redis',
          port: 6379,
        },
      }),
      name: job.key,
      handle: job.handle,
      options: job.options,
    }));
  }

  add(name: string, data: object) {
    const queue = this.queues.find((queue) => queue.name === name);
    return queue.bull.add(data, queue.options);
  }

  process() {
    this.queues.forEach((queue) => {
      queue.bull.process(queue.handle);
      queue.bull.on("failed", (job) => {
        console.error("Job Failed: ", queue.name, job.data);
      });
      queue.bull.on("completed", (job,) => {
        console.error("Job Completed: ", queue.name, job.data);
      });
    });
  }

}