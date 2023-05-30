import { JobsQueryRepository } from "../repository/implementation/JobsQueryRepository"

export default {
    key: 'DeleteClass',
    options: {
        priority: 2,
        attempts: 3,
        backoff: {
            type: 'exponential',
            delay: 2000
        }
    },
    async handle(data) {
        const { data: { id } } = data
        console.log('class: ', id)
        const jobsQueryRepository = new JobsQueryRepository();
        try {
            return await jobsQueryRepository.deleteClassController(id)
        } catch (err) {
            throw new Error()
        }

    }
}

