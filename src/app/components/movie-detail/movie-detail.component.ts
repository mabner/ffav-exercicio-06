import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment';

@Component( {
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: [ './movie-detail.component.css' ],
} )
export class MovieDetailComponent implements OnInit
{
  BASE_URL_IMAGE = `${ environment.tmdb.IMAGE_URL }`;
  backdropURL = `${ environment.tmdb.BACKDROP_URL }`;
  movie: any = {};

  constructor (
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) { }

  ngOnInit (): void
  {
    this.route.params.subscribe( ( params ) =>
    {
      this.moviesService.getMovieDetail( params.id ).subscribe( result =>
      {
        this.movie = result;
      } );
    } );
  }
}
