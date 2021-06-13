import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MoviesModule } from './modules/movies.module';
import { ApplicationRoutingModule } from './routes/application-routing.module';
import { MovieListComponent } from './components/movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    MovieItemComponent,
    MovieDetailsComponent,
    MovieListComponent,
  ],
  imports: [BrowserModule, FormsModule, MoviesModule, ApplicationRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
