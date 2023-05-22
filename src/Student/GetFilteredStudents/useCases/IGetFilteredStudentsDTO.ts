export interface IGetFilteredStudentsDTO {
    limit: number;
    page: number;
    search: string;
}

export interface IResponseGetFilteredStudentsDTO {
    result: object[];
    nextPage: boolean;
}