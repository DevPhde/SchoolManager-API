export interface IGetFilteredClassesDTO {
    limit: number;
    page: number;
    search: string;
}

export interface IResponseFilteredClassesDTO {
    result: object[];
    nextPage: boolean;
}