import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'superheroes';
  loading: boolean = false;

  constructor(
    private isLoading: LoadingService
  ){ }

  ngOnInit() {
    this.listenToLoading();
  }

  listenToLoading(): void {
    this.isLoading.loadingSub
      .pipe(delay(0))
      .subscribe((loading) => {
        this.loading = loading;
      });
  }
}
