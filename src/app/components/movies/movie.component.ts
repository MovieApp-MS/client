import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getMovie } from './state/movie.actions';
import { CommonModule } from '@angular/common';
import { getMovieSelector, movieLoading } from './state/movie.selectors';
import { MatCardModule } from '@angular/material/card';
import { FavButtonComponent } from '@tools/movieCard/fav-button-component/fav-button.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SnackBarService } from '@tools/services/snackBar.service';

@Component({
  selector: 'app-movie-component',
  templateUrl: './movie.component.html',
  imports: [
    CommonModule,
    MatCardModule,
    FavButtonComponent,
    MatProgressSpinnerModule,
  ],
})
export class MovieComponent implements OnInit {
  store = inject(Store);
  route = inject(ActivatedRoute);
  movieName = signal('');
  movie$ = this.store.select(getMovieSelector);
  isLoading$ = this.store.select(movieLoading);

  ngOnInit() {
    this.movieName.set(this.route.snapshot.paramMap.get('movieId') ?? '');
    this.store.dispatch(getMovie({ id: this.movieName() }));
  }
}
