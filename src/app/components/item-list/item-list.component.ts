import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit, AfterViewInit, OnChanges {

  @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;
  @Input() columnsDefinitions: Array<any>;
  @Input() columnsItems: Array<any>;
  @Input() actionsEnabled: Array<string>;
  @Input() dataSource: MatTableDataSource<Array<Object>>;
  @Output() edit: EventEmitter<Object>;
  @Output() delete: EventEmitter<Object>;
  innerDataSource: MatTableDataSource<Array<Object>>;

  constructor() { 
    this.edit = new EventEmitter<Object>();
    this.delete = new EventEmitter<Object>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.innerDataSource = this.dataSource;
    if (this.paginator) {
      this.innerDataSource.paginator = this.paginator;
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.innerDataSource = this.dataSource;
    if (this.paginator) {
      this.innerDataSource.paginator = this.paginator;
    }
  }

  editItem(myObject: Object) {
    this.edit.emit(myObject);
  }

  deleteItem(myObject: Object) {
    this.delete.emit(myObject);
  }


}
