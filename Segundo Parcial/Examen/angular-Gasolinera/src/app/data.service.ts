import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operator, DatabaseSchema } from './models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Asegúrate de que la ruta sea esta
  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getOperators(): Observable<Operator[]> {
    // Esta función lee el JSON y extrae los operadores
    return this.http.get<DatabaseSchema>(this.dataUrl).pipe(
      map(db => db.operators)
    );
  }
}