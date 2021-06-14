import { Component, Input, OnInit } from '@angular/core';
import { IMovieItem } from 'src/app/models/IMovieItem';
import { environment } from 'src/environments/environment';

@Component( {
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: [ './movie-item.component.css' ]
} )
export class MovieItemComponent implements OnInit
{

  @Input() BASE_URL_IMAGE: string = `${ environment.tmdb.IMAGE_URL }`;
  @Input() movie: IMovieItem;



  constructor () { }

  ngOnInit (): void
  {
  }

}
