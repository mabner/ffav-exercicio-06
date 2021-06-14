import { Component, Output, EventEmitter, } from '@angular/core';

@Component( {
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ]
} )
export class SearchBarComponent
{

  movieFilter = '';
  @Output() filterMovies = new EventEmitter<string>();
  @Output() orderBy = new EventEmitter<string>();

  constructor () { }

  onMovieFilter ( value: string ): void
  {
    this.filterMovies.emit( value );
  }

  onOrderBy ( orderField: string ): void
  {
    this.orderBy.emit( orderField );
  }

}
