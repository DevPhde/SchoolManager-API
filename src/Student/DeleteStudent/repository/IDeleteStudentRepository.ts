import { IDeleteStudentDTO } from "../useCases/IDeleteStudentDTO"

export interface IDeleteStudentRepository {
   delete(id: IDeleteStudentDTO): Promise<void>
}