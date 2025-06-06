import { publicaciones } from './data';
import { crearTarjeta } from './tarjetas';

export function renderLista() {
  const contenedor = document.getElementById('lista')!;
  contenedor.innerHTML = '';
  publicaciones.forEach(pub => {
    contenedor.appendChild(crearTarjeta(pub));
  });
}