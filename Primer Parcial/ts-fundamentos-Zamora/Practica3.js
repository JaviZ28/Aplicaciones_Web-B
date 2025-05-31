// ts-campus-voz.ts
// 1. DEFINICIÓN DE TIPOS BÁSICOS
var nombreUsuario = "Ana Torres";
var edadUsuario = 21;
var esEstudiante = true;
var totalPublicaciones = 58;
var estadoActivo = true;
// 3. CLASES
var UsuarioSistema = /** @class */ (function () {
    function UsuarioSistema(id, nombre, correo, rol, activo) {
        if (activo === void 0) { activo = true; }
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.rol = rol;
        this.activo = activo;
    }
    UsuarioSistema.prototype.validarCorreo = function () {
        return this.correo.includes("@univ.edu");
    };
    return UsuarioSistema;
}());
var PublicacionSistema = /** @class */ (function () {
    function PublicacionSistema(id, autor, titulo, contenido, tipo, votos, comentarios) {
        if (votos === void 0) { votos = 0; }
        if (comentarios === void 0) { comentarios = []; }
        this.id = id;
        this.autor = autor;
        this.titulo = titulo;
        this.contenido = contenido;
        this.tipo = tipo;
        this.votos = votos;
        this.comentarios = comentarios;
    }
    PublicacionSistema.prototype.agregarComentario = function (comentario) {
        this.comentarios.push(comentario);
    };
    return PublicacionSistema;
}());
var ComentarioSistema = /** @class */ (function () {
    function ComentarioSistema(id, autor, contenido, fecha) {
        this.id = id;
        this.autor = autor;
        this.contenido = contenido;
        this.fecha = fecha;
    }
    return ComentarioSistema;
}());
// 4. ARREGLOS TIPADOS
var usuarios = [];
var publicaciones = [];
var comentarios = [];
for (var i = 1; i <= 10; i++) {
    usuarios.push(new UsuarioSistema(i, "Usuario ".concat(i), "user".concat(i, "@univ.edu"), 'estudiante'));
    comentarios.push(new ComentarioSistema(i, usuarios[i - 1], "Comentario ".concat(i), new Date().toISOString()));
    publicaciones.push(new PublicacionSistema(i, usuarios[i - 1], "Titulo ".concat(i), "Contenido de prueba ".concat(i), 'idea'));
}
// 5. FUNCIONES TIPADAS
function mostrarPublicaciones() {
    publicaciones.forEach(function (pub) { return console.log(pub); });
}
function contarIdeas() {
    return publicaciones.filter(function (pub) { return pub.tipo === 'idea'; }).length;
}
function agregarPublicacion(pub) {
    publicaciones.push(pub);
}
function eliminarPublicacionPorId(id) {
    var index = publicaciones.findIndex(function (p) { return p.id === id; });
    if (index !== -1)
        publicaciones.splice(index, 1);
}
var facultadEjemplo = {
    codigo: "SOFT",
    nombre: "Facultad de Ingeniería de Software",
    numDepartamentos: 4
};
// 7. MAP()
var nombresUsuariosEnMayusculas = usuarios.map(function (u) { return u.nombre.toUpperCase(); });
console.log(nombresUsuariosEnMayusculas);
// 8. FILTER()
var usuariosActivos = usuarios.filter(function (u) { return u.activo; });
console.log(usuariosActivos);
// 9. REDUCE()
var totalVotos = publicaciones.reduce(function (acc, pub) { return acc + pub.votos; }, 50);
console.log("Total de votos:", totalVotos);
// 10. RELACIONES ENTRE ENTIDADES
var publicacionCompleja = new PublicacionSistema(99, usuarios[0], "Cambio de Horarios", "Solicito que se revise el horario de clases de la mañana", 'queja');
publicacionCompleja.agregarComentario(new ComentarioSistema(100, usuarios[1], "Estoy de acuerdo", new Date().toISOString()));
// 11. OPERACION DE NEGOCIO SIMULADA
function resumenPublicacion(pub) {
    return "Titulo: ".concat(pub.titulo, "\nAutor: ").concat(pub.autor.nombre, "\nComentarios: ").concat(pub.comentarios.length);
}
console.log(resumenPublicacion(publicacionCompleja));
// 12. IMPRESION DE ESTRUCTURA ANIDADA
console.log("\n--- Publicaciones Detalladas ---\n");
publicaciones.forEach(function (pub) {
    console.log("Titulo: ".concat(pub.titulo, ", Autor: ").concat(pub.autor.nombre));
    pub.comentarios.forEach(function (com) { return console.log(" - Comentario: ".concat(com.contenido, " por ").concat(com.autor.nombre)); });
});
