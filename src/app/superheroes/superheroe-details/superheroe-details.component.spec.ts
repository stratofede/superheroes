import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SuperheroesService } from 'src/app/services/superheroes.service';

import { SuperheroeDetailsComponent } from './superheroe-details.component';

describe('SuperheroeDetailsComponent', () => {
  let component: SuperheroeDetailsComponent;
  let fixture: ComponentFixture<SuperheroeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperheroeDetailsComponent ],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        HttpClientTestingModule, 
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule
      ],
      providers: [SuperheroesService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialog, useValue: {} }]
    })
    .compileComponents()
    .then(() =>{
      fixture = TestBed.createComponent(SuperheroeDetailsComponent);
      component = fixture.componentInstance;
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
