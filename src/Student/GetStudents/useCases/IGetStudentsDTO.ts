export interface IGetStudentsDTO {
    page: number;
    limit: number;
}

export interface IResponseGetStudentsDTO {
    result: object[];
    nextPage: boolean;
}