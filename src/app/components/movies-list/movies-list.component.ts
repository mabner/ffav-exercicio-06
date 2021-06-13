import { Component, Input, OnInit } from '@angular/core';
import { IMovieItem } from '../../movies/models/IMovieItem';
import { MoviesService } from '../../movies/services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component( {
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: [ './movies-list.component.css' ],
} )
export class MoviesListComponent implements OnInit
{
  ID: Number;
  BASE_URL_IMAGE = `${ environment.tbdb.IMAGE_URL }`;
  @Input() movies: Array<IMovieItem> = [];

  constructor (
    private moviesService: MoviesService,

    private route: ActivatedRoute
  ) { }

  ngOnInit (): void
  {
    this.moviesService.getMovies().subscribe( ( data ) =>
    {
      this.movies = data.results;
    } );
    this.route.params.subscribe( ( params ) =>
    {
      this.ID = params[ 'id' ];
    } );
  }
}
