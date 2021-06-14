import { Component, OnInit } from '@angular/core';
import { IMovieApiResult } from 'src/app/models/IMovieApiResult';
import { IMovieItem } from 'src/app/models/IMovieItem';
import { MoviesService } from 'src/app/services/movies.service';

@Component( {
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: [ './movie-list.component.css' ],
} )
export class MovieListComponent implements OnInit
{
  movies: IMovieItem[];
  filterSet: IMovieItem[];
  movieFilter: string;

  constructor ( public movieService: MoviesService ) { }

  ngOnInit (): void
  {
    this.getMovies();
  }

  getMovies ()
  {
    this.movieService.getMovies().subscribe( ( movies: IMovieApiResult ) =>
    {
      this.movies = movies.results;
      this.filterSet = movies.results;
    } );
  }

  onMovieFilter ( valueFilter: string ): void
  {
    this.filterSet = this.movies.filter( ( movie ) =>
      movie.title.toLowerCase().includes( valueFilter.toLowerCase() )
    );
  }

  onOrderBy ( orderField: string ): void
  {
    this.filterSet.sort( ( movie1, movie2 ) =>
    {
      return movie2[ orderField ] - movie1[ orderField ];
    } );
  }
}
