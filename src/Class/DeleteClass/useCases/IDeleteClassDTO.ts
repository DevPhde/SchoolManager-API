export interface IDeleteClassDTO {
    id: number;
}

export interface IObjectToDeleteClassDTO {
    id: number;
    classNumber: number;
    studentsId: number[];
    teacherId: number;
}