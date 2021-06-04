import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { MovieDetailsComponent } from './movies/components/movie-details/movie-details.component';
import { MoviesModule } from './movies/modules/movies.module';
import { ApplicationRoutingModule } from './routes/application-routing/application-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    MovieDetailsComponent,
  ],
  imports: [BrowserModule, FormsModule, MoviesModule, ApplicationRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
