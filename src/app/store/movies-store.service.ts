import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMovieItem } from '../models/IMovieItem';

@Injectable( {
  providedIn: 'root'
} )
export class MoviesStoreService
{

  private readonly moviesSubject = new BehaviorSubject<IMovieItem[]>( [] );
  public movies$ = this.moviesSubject.asObservable;

  private get movies (): IMovieItem[]
  {
    return this.moviesSubject.getValue();
  }

  private set movies ( value: IMovieItem[] )
  {
    this.moviesSubject.next( value );
  }

  public setMovies ( movies: IMovieItem[] )
  {
    this.movies = movies;
  }

  constructor () { }
}
