import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMovieApiResult } from "../models/IMovieApiResult";
import { IMovieItem } from '../models/IMovieItem';

@Injectable( {
  providedIn: 'root'
} )
export class MoviesService
{
  private baseUrl = ( path: string ) => `${ environment.tmdb.BASE_URL }/${ path }?api_key=${ environment.tmdb.API_KEY }`;

  constructor ( private httpClient: HttpClient ) { }

  getMovies (): Observable<any>
  {
    return this.httpClient.get<IMovieItem>( this.baseUrl( 'movie/popular' ) );
  }

  getMovieDetail ( id: string ): Observable<any>
  {
    return this.httpClient.get<any>( this.baseUrl( `movie/${ id }` ) );
  }
}
