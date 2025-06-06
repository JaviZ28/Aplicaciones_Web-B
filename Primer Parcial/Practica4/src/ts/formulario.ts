import { carreras } from './data';
import { Publicacion } from './interfaces';
import { renderLista } from './renderLista';

export function crearFormulario() {
  const container = document.getElementById('form-container')!;
  const form = document.createElement('form');
  form.className = 'space-y-4 p-4 bg-white shadow-md rounded-xl';

  form.innerHTML = `
    <input type="text" id="titulo" placeholder="Título" class="border p-2 w-full rounded" />
    <textarea id="contenido" placeholder="Contenido" class="border p-2 w-full rounded"></textarea>
    <select id="categoria" class="border p-2 w-full rounded">
      <option value="">Seleccione una categoría</option>
      <option value="infraestructura">Infraestructura</option>
      <option value="mantenimiento">Mantenimiento</option>
      <option value="ideas">Ideas</option>
      <option value="otros">Otros</option>
    </select>
    <select id="carrera" class="border p-2 w-full rounded">
      <option value="">Seleccione una carrera</option>
      ${carreras.map(c => `<option value="${c.id}">${c.nombre}</option>`).join('')}
    </select>
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Publicar</button>
    <div id="errores" class="text-red-500 text-sm"></div>
  `;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const titulo = (document.getElementById('titulo') as HTMLInputElement).value.trim();
    const contenido = (document.getElementById('contenido') as HTMLTextAreaElement).value.trim();
    const categoria = (document.getElementById('categoria') as HTMLSelectElement).value;
    const carreraId = (document.getElementById('carrera') as HTMLSelectElement).value;
    const erroresDiv = document.getElementById('errores')!;
    erroresDiv.innerHTML = '';

    const errores = [];
    if (titulo.length < 10) errores.push("El título debe tener al menos 10 caracteres.");
    if (!contenido) errores.push("El contenido es obligatorio.");
    if (!categoria) errores.push("Debe seleccionar una categoría.");
    if (!carreraId) errores.push("Debe seleccionar una carrera.");

    if (errores.length > 0) {
      erroresDiv.innerHTML = errores.map(err => `<div>${err}</div>`).join('');
      return;
    }

    const nuevaPublicacion: Publicacion = {
      id: crypto.randomUUID(),
      titulo,
      contenido,
      categoria: categoria as any,
      carreraId,
      fechaCreacion: new Date()
    };

    import('./data').then(module => {
      module.publicaciones.push(nuevaPublicacion);
      renderLista();
      form.reset();
    });
  });

  container.appendChild(form);
}