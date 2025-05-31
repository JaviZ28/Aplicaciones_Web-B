interface IProducto {
  nombre: string;
}

interface IDetalleFactura {
  producto: IProducto;
}

interface ICliente {
  nombre: string;
}

interface IFactura {
  codigo: string;
  cliente: ICliente;
  total: number;
  fecha: string;
  detalles: IDetalleFactura[];
}

function mostrarFactura(factura: IFactura) {
  const app = document.querySelector('#app')!;
  app.innerHTML = '';

  const titulo = document.createElement('h1');
  titulo.textContent = 'Factura ' + factura.codigo;
  app.appendChild(titulo);

  const cliente = document.createElement('p');
  cliente.textContent = 'Cliente: ' + factura.cliente.nombre;
  app.appendChild(cliente);

  const total = document.createElement('p');
  total.textContent = 'Total: ' + factura.total;
  app.appendChild(total);

  const fecha = document.createElement('p');
  fecha.textContent = 'Fecha: ' + factura.fecha;
  app.appendChild(fecha);

  const detallesTitulo = document.createElement('p');
  detallesTitulo.textContent = 'Detalles:';
  app.appendChild(detallesTitulo);

  factura.detalles.forEach(detalle => {
    const p = document.createElement('p');
    p.textContent = '- ' + detalle.producto.nombre;
    app.appendChild(p);
  });
}

const facturaEjemplo: IFactura = {
  codigo: 'F001',
  cliente: { nombre: 'Juan Pérez' },
  total: 150.75,
  fecha: '2025-05-23',
  detalles: [
    { producto: { nombre: 'Producto A' } },
    { producto: { nombre: 'Producto B' } }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  mostrarFactura(facturaEjemplo);
});
