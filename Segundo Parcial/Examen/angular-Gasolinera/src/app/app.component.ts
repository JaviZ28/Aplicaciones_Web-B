import { Component } from '@angular/core';
import { OperatorSelectionComponent } from './operator-selection/operator-selection.component'; // <-- ¡Importa tu componente!

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [OperatorSelectionComponent], // <-- ¡Añádelo aquí!
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-Gasolinera';
}