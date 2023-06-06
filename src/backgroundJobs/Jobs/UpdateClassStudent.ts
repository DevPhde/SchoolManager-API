import { JobsQueryRepository } from "../repository/implementation/JobsQueryRepository"
interface IUpdate {
    data: {
        id: number;
        classNumber: number;
    }
}

export default {
    key: 'UpdateStudentClass',
    options: {
        priority: 1,
        attempts: 3,
        backoff: {
            type: 'exponential',
            delay: 1000
        }
    },
    async handle( update:IUpdate ) {
        const { data: { id, classNumber } } = update
        const jobsQueryRepository = new JobsQueryRepository();
        try {
            return await jobsQueryRepository.updateStudentClass(id, classNumber)
        } catch (err) {
            throw new Error()
        }

    }
}

