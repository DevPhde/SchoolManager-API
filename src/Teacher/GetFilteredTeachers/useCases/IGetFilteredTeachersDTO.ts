export interface IGetFilteredTeachersDTO {
    limit: number;
    page: number;
    search: string;
}

export interface IResponseGetFilteredTeachersDTO {
    result: object[];
    nextPage: boolean;
}