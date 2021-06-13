import { Component, OnInit } from '@angular/core';
import { IMovieItem } from '../../models/IMovieItem';
import { MoviesStoreService } from '../../store/movies-store.service';
import { MoviesService } from '../../services/movies.service';
import { IMovieApiResult } from 'src/app/models/IMovieApiResult';

@Component( {
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: [ './movie-list.component.css' ]
} )
export class MovieListComponent implements OnInit
{

  movies: IMovieItem[];
  filteredMovies: IMovieItem[];
  moviesFilter: string;

  constructor (
    private moviesStore: MoviesStoreService,
    public movieService: MoviesService
  ) { }

  ngOnInit (): void
  {
    this.getMovies();
  }

  getMovies ()
  {
    this.movieService.getMovies().subscribe( ( movies: IMovieApiResult ) =>
    {
      this.movies = movies.results;
      this.filteredMovies = movies.results;
    } );
  }

  findMovie ( valueFilter: string ): void
  {
    this.filteredMovies = this.movies.filter( movie => movie.title.toLowerCase().includes( valueFilter.toLowerCase() ) );
  }

  onOrderBy ( orderField: string ): void
  {
    console.log( this.filteredMovies );
    this.filteredMovies.sort( ( a, b ) =>
    {
      return b[ orderField ] - a[ orderField ];
    } );
  }

}
