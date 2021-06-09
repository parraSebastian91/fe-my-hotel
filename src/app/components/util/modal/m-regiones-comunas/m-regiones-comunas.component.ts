import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-m-regiones-comunas',
  templateUrl: './m-regiones-comunas.component.html',
  styleUrls: ['./m-regiones-comunas.component.scss']
})
export class MRegionesComunasComponent implements OnInit {
  @ViewChild('formObject', { static: false }) formObject: FormGroupDirective | undefined;
  formGroupObject: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<MRegionesComunasComponent>,
  ) { }

  filteredRegiones: Observable<string[]> | undefined;
  filteredComunas: Observable<string[]> | undefined;

  ngOnInit(): void {
    this.formGroupObject = new FormGroup({
      regiones: new FormControl('', [Validators.required]),
      comunas: new FormControl('', [Validators.required]),
    }); 
    
    if(!this.data.isNew){
      this.formGroupObject.get('regiones').setValue(this.data.data.regiones);
      this.formGroupObject.get('comunas').setValue(this.data.data.comunas);
    }

    this.filteredRegiones = this.formGroupObject.get('regiones').valueChanges
    .pipe(
      startWith(''),
      map((value: string) => this._filterRegiones(value))
    );
    this.filteredComunas = this.formGroupObject.get('comunas').valueChanges
    .pipe(
      startWith(''),
      map((value: string) => this._filterComunas(value))
    );
  }

  save(){
    if(this.formGroupObject.valid){
      const body = {
        regiones: this.formGroupObject.get('regiones').value,
        comunas: this.formGroupObject.get('comunas').value
      };
      this.dialogRef.close({body,action: this.data.isNew? 'newItem':'updateItem'});
    }
  }

  displayFn(user: any): string {
    return user && user.name ? user.name : '';
  }

  private _filterRegiones(name: string): string[] {
    const filterValue = name.toLowerCase();
    return this.data.regiones.filter((option: string) => option.toLowerCase().includes(filterValue));
  }

  private _filterComunas(name: string): string[] {
    const filterValue = name.toLowerCase();
    return this.data.comunas.filter((option: string) => option.toLowerCase().includes(filterValue));
  }

  delete(){
    this.dialogRef.close({body:this.data.data,action: 'deleteItem'});

  }

}
