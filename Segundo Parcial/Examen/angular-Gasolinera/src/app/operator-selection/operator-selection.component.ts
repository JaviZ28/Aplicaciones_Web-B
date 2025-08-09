import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Operator } from '../models';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common'; // <-- ¡Importa esto!

@Component({
  selector: 'app-operator-selection',
  standalone: true, // <-- Asegúrate de que esto esté aquí
  imports: [CommonModule], // <-- Y agrégalo a los imports
  templateUrl: './operator-selection.component.html',
  styleUrls: ['./operator-selection.component.css']
})
export class OperatorSelectionComponent implements OnInit {

  operators$: Observable<Operator[]> = of([]);

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.operators$ = this.dataService.getOperators();
  }

  selectOperator(operator: Operator): void {
    console.log('Operador seleccionado:', operator);

  }
}