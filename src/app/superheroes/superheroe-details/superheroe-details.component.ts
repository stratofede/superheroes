import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { CanComponentDeactivate } from 'src/app/guards/deactivate.guard';
import { ModalActionData } from 'src/app/models/modal';
import { SuperHeroe } from 'src/app/models/superheroe.model';
import { SuperheroesService } from 'src/app/services/superheroes.service';
import { GenderConstants } from 'src/app/constants/gender.constants';
import { RaceConstants } from 'src/app/constants/race.constants';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-superheroe-details',
  templateUrl: './superheroe-details.component.html',
  styleUrls: ['./superheroe-details.component.scss']
})
export class SuperheroeDetailsComponent implements OnInit, CanComponentDeactivate {

  superHeroe: SuperHeroe;
  superHeroeForm: FormGroup;
  genderOptions = GenderConstants.GENDERS;
  raceOptions = RaceConstants.RACE;
  isSubmitted = false;
  action = 'Add hero!';

  constructor(
    private superHeroesService: SuperheroesService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private readonly notifier: NotifierService
  ) {}

  ngOnInit(): void {
    this.initFormGroup();
    this.activatedRoute.params.subscribe( params => {
      if (params.id) {
        this.getSuperHeroeById(params.id);
      }
    });
  }

  private getSuperHeroeById(id: string) {
    this.superHeroesService.getSuperHeroeById(id).subscribe( (data: SuperHeroe) => {
      this.superHeroe = data;
      this.superHeroe.id = id;
      this.fillSuperHeroDetails();
    })
  }

  initFormGroup() {
    this.superHeroeForm = this.fb.group({
      name: [null, [Validators.required]],
      intelligence: [null],
      strength: [null, [Validators.required]],
      speed: [null],
      gender: [null, [Validators.required]],
      race: [null, [Validators.required]],
      height: [null],
      weight: [null]
    })

    this.superHeroeForm.statusChanges.subscribe(() => {
      this.isSubmitted = false;
    })
  }

  fillSuperHeroDetails() {
    if (this.superHeroe) {
      this.superHeroeForm.controls['name'].setValue(this.superHeroe.name.toUpperCase());
      this.superHeroeForm.controls['intelligence'].setValue(this.superHeroe.intelligence);
      this.superHeroeForm.controls['strength'].setValue(this.superHeroe.strength);
      this.superHeroeForm.controls['speed'].setValue(this.superHeroe.speed);
      this.superHeroeForm.controls['gender'].setValue(this.superHeroe.gender);
      this.superHeroeForm.controls['race'].setValue(this.superHeroe.race);
      this.superHeroeForm.controls['height'].setValue(this.superHeroe.height);
      this.superHeroeForm.controls['weight'].setValue(this.superHeroe.weight);
      this.action = 'Edit';
    }
  }

  onSubmit() {
    if (this.superHeroeForm.valid) {
      if (!this.superHeroe?.id) {
          this.superHeroesService.createSuperHeroe(this.superHeroeForm.value).subscribe(resp =>{
            this.isSubmitted = true;
            this.notifier.notify('success', 'Awesome! Your superhero is ready to save the world!');
            this.router.navigate(['/superheroes']);
          })
      } else {
        this.superHeroesService.editSuperHeroe(this.superHeroe.id, this.superHeroeForm.value).subscribe(resp =>{
          this.isSubmitted = true;
          this.notifier.notify('success', 'Awesome! Your superhero has been edited!');
          this.router.navigate(['/superheroes']);
        })
      }
    }
  }

  cancel() {
    this.router.navigate(['/superheroes']);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Observable<boolean>( observer => {
      if (!this.isSubmitted && this.superHeroeForm && this.superHeroeForm.dirty) {
        const dialogRef = this.dialog.open(ModalComponent, {
          data: new ModalActionData('Atention!', 
          'If you leave, your changes will be lost. Do you want to leave anyway?', 
          'Yes', 'Cancel')
        })
        dialogRef.afterClosed().subscribe( leave => {
          observer.next(leave);
          observer.complete();
        })
      } else {
        observer.next(true);
        observer.complete();
      }
    })
  }

}
