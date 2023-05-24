export interface IGetTeachersDTO {
    page: number;
    limit: number;
}

export interface IResponseGetTeachersDTO {
    result: object[];
    nextPage: boolean;
}