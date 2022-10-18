import { Obj } from "../Global/interface";

export const PaginationCal = (array: Array<Obj | Record<string, unknown>>, sizePage: number, currentPage: number) => {
    return array.slice((currentPage - 1) * sizePage, currentPage * sizePage);
}