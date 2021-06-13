import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MoviesService } from '../../services/movies.service';

@Component( {
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: [ './movie-details.component.css' ],
} )
export class MovieDetailsComponent implements OnInit
{
  BASE_URL_IMAGE = `${ environment.tbdb.IMAGE_URL }`;
  backdropURL = `${ environment.tbdb.API_KEY }`;
  ID: Number;
  movie: any = {};

  constructor (
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) { }

  ngOnInit (): void
  {
    this.route.params.subscribe( ( params ) =>
    {
      this.ID = params[ 'id' ];
    } );

    this.moviesService.getMovieDetail( this.ID ).subscribe( ( data ) =>
    {
      this.movie = data;
    } );
  }
}
