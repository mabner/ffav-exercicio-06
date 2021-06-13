import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from 'src/app/components/movie-details/movie-details.component';
import { MovieItemComponent } from 'src/app/components/movie-item/movie-item.component';

const routes: Routes = [
  { path: '', component: MovieItemComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
];

@NgModule( {
  declarations: [],
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ],
} )
export class ApplicationRoutingModule { }
