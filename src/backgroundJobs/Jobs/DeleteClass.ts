import { JobsQueryRepository } from "../repository/implementation/JobsQueryRepository"
interface IData {
    data: {
        id: number;
        classNumber: number;
    }
}

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
    async handle(data: IData) {
        const { data: { id } } = data
        const jobsQueryRepository = new JobsQueryRepository();
        try {
            return await jobsQueryRepository.deleteClassController(id)
        } catch (err) {
            throw new Error()
        }

    }
}

