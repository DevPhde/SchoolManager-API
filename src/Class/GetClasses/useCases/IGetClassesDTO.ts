export interface IGetClassesDTO {
    page: number;
    limit: number;
}

export interface IResponseGetClassesDTO {
    result: object[];
    nextPage: boolean;
}