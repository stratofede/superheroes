import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Observable } from 'rxjs';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { SuperHeroeConstants } from 'src/app/constants/tableColumns.constants';
import { ModalActionData } from 'src/app/models/modal';
import { SuperHeroe } from 'src/app/models/superheroe.model';
import { SuperheroesService } from 'src/app/services/superheroes.service';

@Component({
  selector: 'app-superheroes-list',
  templateUrl: './superheroes-list.component.html',
  styleUrls: ['./superheroes-list.component.scss']
})
export class SuperheroesListComponent implements OnInit {

  @ViewChild('searchInput', {static: false}) searchInput : ElementRef;

  dataSource: MatTableDataSource<SuperHeroe>;
  superHeroesList$: Observable<Array<SuperHeroe>>;
  columns = SuperHeroeConstants.SUPERHERO_TABLE_COLUMNS;

  constructor(
    private superHeroesService: SuperheroesService,
    private readonly notifier: NotifierService,
    private dialog: MatDialog,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getAllSuperHeroes();
  }

  searchSuperHeroe(data: Array<SuperHeroe>) {
    this.dataSource = new MatTableDataSource(data);
  }

  addHero() {
    this.router.navigate(['/superheroes/superheroe']);
  }

  editHeroe(superHeroe: SuperHeroe) {
    this.router.navigate([`/superheroes/superheroe/${superHeroe.id}`]);
  }

  deleteHeroe(superHeroe: SuperHeroe) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: new ModalActionData('Atention!', 
      `${superHeroe.name} will be deleted. Do you want to continue?`, 
      'Yes', 'Cancel')
    })
    dialogRef.afterClosed().subscribe( deleteSuperHeroe => {
      if (deleteSuperHeroe) {
        this.superHeroesService.deleteSuperHeroe(superHeroe.id).subscribe(
          (success) => {
            this.notifier.notify('success', 'Your superhero has been seen burning his suit!');
            this.getAllSuperHeroes();
          }
        );
      }
    })
  }

  getAllSuperHeroes() {
    this.superHeroesService.getSuperHeroes().subscribe(
      (data: Array<SuperHeroe>) => {
        this.dataSource = new MatTableDataSource(data)
      }
    );
  }
}
