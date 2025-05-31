// ts-campus-voz.ts

// 1. DEFINICIÓN DE TIPOS BÁSICOS
const nombreUsuario: string = "Ana Torres";
const edadUsuario: number = 21;
const esEstudiante: boolean = true;
const totalPublicaciones: number = 58;
const estadoActivo: boolean = true;

// 2. INTERFACES
interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  rol: 'estudiante' | 'profesor' | 'autoridad';
  activo?: boolean;
}

interface Publicacion {
  id: number;
  autor: Usuario;
  titulo: string;
  contenido: string;
  tipo: 'idea' | 'queja' | 'propuesta';
  votos: number;
  comentarios: Comentario[];
}

interface Comentario {
  id: number;
  autor: Usuario;
  contenido: string;
  fecha: string;
}

// 3. CLASES
class UsuarioSistema implements Usuario {
  constructor(
    public id: number,
    public nombre: string,
    public correo: string,
    public rol: 'estudiante' | 'profesor' | 'autoridad',
    public activo: boolean = true
  ) {}

  validarCorreo(): boolean {
    return this.correo.includes("@univ.edu");
  }
}

class PublicacionSistema implements Publicacion {
  constructor(
    public id: number,
    public autor: Usuario,
    public titulo: string,
    public contenido: string,
    public tipo: 'idea' | 'queja' | 'propuesta',
    public votos: number = 0,
    public comentarios: Comentario[] = []
  ) {}

  agregarComentario(comentario: Comentario): void {
    this.comentarios.push(comentario);
  }
}

class ComentarioSistema implements Comentario {
  constructor(
    public id: number,
    public autor: Usuario,
    public contenido: string,
    public fecha: string
  ) {}
}

// 4. ARREGLOS TIPADOS
const usuarios: Usuario[] = [];
const publicaciones: Publicacion[] = [];
const comentarios: Comentario[] = [];

for (let i = 1; i <= 10; i++) {
  usuarios.push(new UsuarioSistema(i, `Usuario ${i}`, `user${i}@univ.edu`, 'estudiante'));
  comentarios.push(new ComentarioSistema(i, usuarios[i - 1], `Comentario ${i}`, new Date().toISOString()));
  publicaciones.push(new PublicacionSistema(i, usuarios[i - 1], `Titulo ${i}`, `Contenido de prueba ${i}`, 'idea'));
}

// 5. FUNCIONES TIPADAS
function mostrarPublicaciones(): void {
  publicaciones.forEach(pub => console.log(pub));
}

function contarIdeas(): number {
  return publicaciones.filter(pub => pub.tipo === 'idea').length;
}

function agregarPublicacion(pub: Publicacion): void {
  publicaciones.push(pub);
}

function eliminarPublicacionPorId(id: number): void {
  const index = publicaciones.findIndex(p => p.id === id);
  if (index !== -1) publicaciones.splice(index, 1);
}

// 6. TIPOS ESPECIALES (readonly, optional, union)
interface Facultad {
  readonly codigo: string;
  nombre: string;
  sede?: string;
  numDepartamentos: number | string;
}

const facultadEjemplo: Facultad = {
  codigo: "SOFT",
  nombre: "Facultad de Ingeniería de Software",
  numDepartamentos: 4
};

// 7. MAP()
const nombresUsuariosEnMayusculas = usuarios.map(u => u.nombre.toUpperCase());
console.log(nombresUsuariosEnMayusculas);

// 8. FILTER()
const usuariosActivos = usuarios.filter(u => u.activo);
console.log(usuariosActivos);

// 9. REDUCE()
const totalVotos = publicaciones.reduce((acc, pub) => acc + pub.votos, 50);
console.log("Total de votos:", totalVotos);

// 10. RELACIONES ENTRE ENTIDADES
const publicacionCompleja = new PublicacionSistema(99, usuarios[0], "Cambio de Horarios", "Solicito que se revise el horario de clases de la mañana", 'queja');
publicacionCompleja.agregarComentario(new ComentarioSistema(100, usuarios[1], "Estoy de acuerdo", new Date().toISOString()));

// 11. OPERACION DE NEGOCIO SIMULADA
function resumenPublicacion(pub: Publicacion): string {
  return `Titulo: ${pub.titulo}\nAutor: ${pub.autor.nombre}\nComentarios: ${pub.comentarios.length}`;
}

console.log(resumenPublicacion(publicacionCompleja));

// 12. IMPRESION DE ESTRUCTURA ANIDADA
console.log("\n--- Publicaciones Detalladas ---\n");
publicaciones.forEach(pub => {
  console.log(`Titulo: ${pub.titulo}, Autor: ${pub.autor.nombre}`);
  pub.comentarios.forEach(com => console.log(` - Comentario: ${com.contenido} por ${com.autor.nombre}`));
});