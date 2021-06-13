import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from 'src/app/components/movie-details/movie-details.component';
import { MoviesListComponent } from 'src/app/components/movies-list/movies-list.component';

const routes: Routes = [
  { path: '', component: MoviesListComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
];

@NgModule( {
  declarations: [],
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ],
} )
export class ApplicationRoutingModule { }
