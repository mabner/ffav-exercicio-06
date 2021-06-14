import { IMovieItem } from "./IMovieItem";

export interface IMovieApiResult
{
    page: number;
    results: Array<IMovieItem>;
    total_pages: number;
    total_results: number;
}
