import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // O 'App' si renombraste la clase
import { provideHttpClient } from '@angular/common/http'; // <-- Importa esto

bootstrapApplication(AppComponent, { // O App
  providers: [
    provideHttpClient() // <-- Asegúrate de que esta línea esté aquí
  ]
}).catch(err => console.error(err));