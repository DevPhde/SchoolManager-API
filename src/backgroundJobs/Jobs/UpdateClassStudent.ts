import { JobsQueryRepository } from "../repository/implementation/JobsQueryRepository"

export default {
    key: 'UpdateStudentClass',
    options: {
        priority: 1
    },
    async handle( update ) {
        console.log('oi')
        const { data: { id, classNumber } } = update
        console.log('student: ', id)
        const jobsQueryRepository = new JobsQueryRepository();
        try {
            return await jobsQueryRepository.updateStudentClass(id, classNumber)
        } catch (err) {
            throw new Error()
        }

    }
}

