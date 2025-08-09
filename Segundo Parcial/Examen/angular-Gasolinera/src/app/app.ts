import { Component } from '@angular/core';
// A. IMPORTAMOS el componente que creamos para la selección
import { OperatorSelectionComponent } from './operator-selection/operator-selection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // B. AÑADIMOS el componente a la sección de 'imports'
  imports: [OperatorSelectionComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // No necesitas cambiar nada aquí
}