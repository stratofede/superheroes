import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalActionData } from 'src/app/models/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ModalActionData,
    public dialogRef: MatDialogRef<ModalComponent>
  ) { }

  ngOnInit(): void {
  }

  onAction($event: boolean) {
    this.dialogRef.close($event);
  }

}
