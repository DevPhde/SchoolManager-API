import Queue from "bull";
import * as jobs from "../Index"

const queues = Object.values(jobs).map(job => ({
    bull: new Queue(job.key, 'redis://127.0.0.1:6379'),
    name: job.key,
    handle: job.handle,
    options: job.options
}))
export default {
    queues,
    add(name: string, data: object) {
        const queue = this.queues.find(queue => queue.name === name);
        return queue.bull.add(data, queue.options)
    },
    process() {
        return this.queues.forEach(queue => {
            queue.bull.process(queue.handle);

            queue.bull.on('failed', (job, err) => {
                    console.log('Job Failed: ', queue.name, job.data);
                })
            queue.bull.on('done', (job) => {
                console.log(job)
                console.log(`Job ${queue.name} finish`)
            })
        });
    }

}