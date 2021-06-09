import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { ComunasRegionesService } from 'src/app/services/comunas-regiones.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data: any;
  
  @Output() selectedRow = new EventEmitter();
  @Output() addEvent = new EventEmitter();

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  dataSource: any;

  displayedColumns = ['regiones','comunas'];

  constructor(
    public dialog: MatDialog,
    ) {

  }

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
  ngOnInit(): void {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addItem(){
    this.addEvent.emit('addItem');
  }

  onClickRow(row: any){
    this.selectedRow.emit(row);
  }


}
