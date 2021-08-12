import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuperheroesService } from 'src/app/services/superheroes.service';

import { SuperheroesListComponent } from './superheroes-list.component';

describe('SuperheroesListComponent', () => {
  let component: SuperheroesListComponent;
  let fixture: ComponentFixture<SuperheroesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperheroesListComponent ],
      providers: [HttpClientModule, HttpClientTestingModule, SuperheroesService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
