export interface Facultad {
  id: string;
  nombre: string;
  descripcion: string;
}

export interface Carrera {
  id: string;
  nombre: string;
  facultadId: string;
}

export interface Publicacion {
  id: string;
  titulo: string;
  contenido: string;
  carreraId: string;
  categoria: "infraestructura" | "mantenimiento" | "ideas" | "otros";
  fechaCreacion: Date;
}