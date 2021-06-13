import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from 'src/app/components/movie-details/movie-details.component';
import { MovieListComponent } from 'src/app/components/movie-list/movie-list.component';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
];

@NgModule( {
  declarations: [],
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ],
} )
export class ApplicationRoutingModule { }
