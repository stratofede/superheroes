import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { SuperHeroe } from 'src/app/models/superheroe.model';
import { SuperheroesService } from 'src/app/services/superheroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() dataSource: EventEmitter<Array<SuperHeroe>>;
  searchForm: FormGroup;

  constructor(
    private superHeroesService: SuperheroesService,
    private fb: FormBuilder
  ) {
    this.dataSource = new EventEmitter<Array<SuperHeroe>>();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.searchForm = this.fb.group({
      search: [null]
    })
    this.searchForm.controls['search'].valueChanges.pipe(
      debounceTime(350),
      map(query => {
        if (query.length === 0 || query.length >= 3) {
          return query;
        }
      }),
      distinctUntilChanged()
    ).subscribe(query => {
      if (query != undefined) {
        this.searchSuperHeroe(query);
      }
    });
  }

  searchSuperHeroe(query?: string) {
    if (query && query.trim().length > 0) {
      this.superHeroesService.getSuperHeroesByFilter(query).subscribe(
        (data: Array<SuperHeroe>) => {
          this.dataSource.emit(data);
        }
      )
    } else {
      this.superHeroesService.getSuperHeroes().subscribe(
        (data: Array<SuperHeroe>) => {
          this.dataSource.emit(data);
        }
      );
    }
  }

}
