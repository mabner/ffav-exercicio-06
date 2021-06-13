import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMovieItem } from '../models/IMovieItem';

@Injectable( {
  providedIn: 'root',
} )
export class MoviesStoreService
{
  constructor () { }

  private readonly movieStore = new BehaviorSubject<IMovieItem[]>( [] );

  public movies$ = this.movieStore.asObservable;

  private get movies (): IMovieItem[]
  {
    return this.movieStore.getValue();
  }

  private set movies ( value: IMovieItem[] )
  {
    this.movieStore.next( value );
  }

  public setMovies ( movies: IMovieItem[] )
  {
    this.movies = movies;
  }

}
