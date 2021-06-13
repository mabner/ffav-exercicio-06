import { Component, Input, OnInit } from '@angular/core';
import { IMovieItem } from '../../models/IMovieItem';
import { environment } from 'src/environments/environment';

@Component( {
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: [ './movie-list.component.css' ],
} )
export class MovieListComponent implements OnInit
{
  @Input() BASE_URL_IMAGE: string = `${ environment.tbdb.IMAGE_URL }`;
  @Input() movie: IMovieItem;

  constructor () { }

  ngOnInit (): void
  {
  }
}
