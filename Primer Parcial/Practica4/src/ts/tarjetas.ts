import { Publicacion } from './interfaces';
import { carreras } from './data';

export function crearTarjeta(pub: Publicacion): HTMLElement {
  const div = document.createElement('div');
  div.className = 'border p-4 rounded-xl bg-gray-50 space-y-2 shadow';

  const carrera = carreras.find(c => c.id === pub.carreraId);

  div.innerHTML = `
    <h3 class="text-lg font-bold">${pub.titulo}</h3>
    <p class="text-sm text-gray-600">${pub.categoria.toUpperCase()}</p>
    <p>${pub.contenido}</p>
    <p class="text-sm italic text-gray-500">Carrera: ${carrera?.nombre}</p>
    <button class="text-red-600 hover:underline" data-id="${pub.id}">Eliminar</button>
  `;

  const eliminarBtn = div.querySelector('button')!;
  eliminarBtn.addEventListener('click', () => {
    import('./data').then(module => {
      module.publicaciones = module.publicaciones.filter(p => p.id !== pub.id);
      import('./renderLista').then(m => m.renderLista());
    });
  });

  return div;
}