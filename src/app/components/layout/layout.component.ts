import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComunasRegionesService } from 'src/app/services/comunas-regiones.service';
import { MRegionesComunasComponent } from '../util/modal/m-regiones-comunas/m-regiones-comunas.component';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  dataSource: any[]= [];

  constructor(
    public dialog: MatDialog,
    private _comunasRegionesService: ComunasRegionesService
    ) {

  }

  async ngOnInit() {
    let data = await this._comunasRegionesService.getRegionesComunas().then((t: any) =>{
      let dataArray:any = [];
      t.regiones.forEach((e: any)=> {
        let auxArray = e.comunas.map((m: string)=>{return {regiones:e.region,comunas:m}});
        dataArray = dataArray.concat(auxArray)
      });
      return dataArray;
    });
    this.dataSource = data;
  }

  addItem(){
    const modal = this.dialog.open(MRegionesComunasComponent, {
      data: {
        data: "",
        regiones: this.dataSource.map(m => m.regiones).filter((v, i, a) => a.indexOf(v) === i),
        comunas: this.dataSource.map(m => m.comunas),
        isNew: true
      },
      width:'400px'
    });
    modal.afterClosed().subscribe(result => {
      console.log(result)
      
    });
  }

  selectedRow(evt: any){
    const modal = this.dialog.open(MRegionesComunasComponent, {
      data: {
        data: evt,
        regiones: this.dataSource.map(m => m.regiones).filter((v, i, a) => a.indexOf(v) === i),
        comunas: this.dataSource.map(m => m.comunas),
        isNew: false
      },
      width:'400px'
    });
    modal.afterClosed().subscribe(result => {
      console.log(result)
    });
  }

}
