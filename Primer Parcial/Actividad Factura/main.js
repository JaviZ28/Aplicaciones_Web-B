function mostrarFactura(factura) {
    var app = document.querySelector('#app');
    app.innerHTML = '';
    var titulo = document.createElement('h1');
    titulo.textContent = 'Factura ' + factura.codigo;
    app.appendChild(titulo);
    var cliente = document.createElement('p');
    cliente.textContent = 'Cliente: ' + factura.cliente.nombre;
    app.appendChild(cliente);
    var total = document.createElement('p');
    total.textContent = 'Total: ' + factura.total;
    app.appendChild(total);
    var fecha = document.createElement('p');
    fecha.textContent = 'Fecha: ' + factura.fecha;
    app.appendChild(fecha);
    var detallesTitulo = document.createElement('p');
    detallesTitulo.textContent = 'Detalles:';
    app.appendChild(detallesTitulo);
    factura.detalles.forEach(function (detalle) {
        var p = document.createElement('p');
        p.textContent = '- ' + detalle.producto.nombre;
        app.appendChild(p);
    });
}
var facturaEjemplo = {
    codigo: 'F001',
    cliente: { nombre: 'Juan Pérez' },
    total: 150.75,
    fecha: '2025-05-23',
    detalles: [
        { producto: { nombre: 'Producto A' } },
        { producto: { nombre: 'Producto B' } }
    ]
};
document.addEventListener('DOMContentLoaded', function () {
    mostrarFactura(facturaEjemplo);
});
