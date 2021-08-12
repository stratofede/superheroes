import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuperheroesService } from 'src/app/services/superheroes.service';

import { SuperheroeDetailsComponent } from './superheroe-details.component';

describe('SuperheroeDetailsComponent', () => {
  let component: SuperheroeDetailsComponent;
  let fixture: ComponentFixture<SuperheroeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperheroeDetailsComponent ],
      providers: [HttpClientModule, HttpClientTestingModule, , SuperheroesService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
