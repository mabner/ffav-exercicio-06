import { IMovieItem } from './IMovieItem';

export interface IMovieApiResult {
  page: number;
  results: IMovieItem[];
  total_pages: number;
  total_results: number;
}
