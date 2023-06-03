import { JobsQueryRepository } from "../repository/implementation/JobsQueryRepository"

export default {
    key: 'UpdateTeacherClass',
    options: {
        priority: 1,
        attempts: 3,
        backoff: {
            type: 'exponential',
            delay: 1000
        }
    },
    async handle( update ) {
        const { data: { id, classNumber } } = update
        console.log("update teacher: ", id)
        const jobsQueryRepository = new JobsQueryRepository();
        try {
            return await jobsQueryRepository.updateTeacherClass(id, classNumber)
        } catch (err) {
            throw new Error()
        }

    }
}