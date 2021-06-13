import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMovieApiResult } from '../models/IMovieApiResult';

@Injectable( {
  providedIn: 'root',
} )
export class MoviesService
{

  constructor ( private http: HttpClient ) { }
  getMovies (): Observable<IMovieApiResult>
  {
    return this.http.get<IMovieApiResult>(
      `${ environment.tbdb.BASE_URL }/movie/popular?api_key=${ environment.tbdb.API_KEY }`
    );
  }

  getMovieDetail ( id: Number ): Observable<any>
  {
    return this.http.get(
      `${ environment.tbdb.BASE_URL }/movie/${ id }?api_key=${ environment.tbdb.API_KEY }`
    );
  }
}
