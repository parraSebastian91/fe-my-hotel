import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ComunasRegionesService {

  constructor(private http: HttpClient) { }

  getRegionesComunas(){
    return this.http.get('assets/fakeDB/comunas-regiones.json').toPromise();
  }

}
