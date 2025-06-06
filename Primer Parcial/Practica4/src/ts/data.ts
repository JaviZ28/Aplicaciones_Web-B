import { Facultad, Carrera, Publicacion } from './interfaces';

export const facultades: Facultad[] = [
  { id: "f1", nombre: "Facultad de Ingeniería", descripcion: "Área técnica" },
  { id: "f2", nombre: "Facultad de Ciencias Sociales", descripcion: "Área social" }
];

export const carreras: Carrera[] = [
  { id: "c1", nombre: "Ingeniería en Software", facultadId: "f1" },
  { id: "c2", nombre: "Sociología", facultadId: "f2" }
];

export let publicaciones: Publicacion[] = [
  {
    id: "p1",
    titulo: "Aulas con goteras",
    contenido: "En el bloque A hay filtraciones de agua",
    carreraId: "c1",
    categoria: "infraestructura",
    fechaCreacion: new Date()
  }
];