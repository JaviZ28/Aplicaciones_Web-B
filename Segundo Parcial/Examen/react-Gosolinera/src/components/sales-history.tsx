import React from 'react';
import type { Sale, Operator, Pump, GasolineType } from '../models';

interface SalesHistoryProps {
  sales: Sale[];
  operators: Operator[];
  pumps: Pump[];
  gasolineTypes: GasolineType[];
  onBack: () => void;
}

export const SalesHistory: React.FC<SalesHistoryProps> = ({
  sales,
  operators,
  pumps,
  gasolineTypes,
  onBack
}) => {
  const getOperatorName = (id: number) => 
    operators.find(op => op.id === id)?.name || 'Desconocido';
  
  const getPumpName = (id: number) => 
    pumps.find(pump => pump.id === id)?.name || 'Desconocido';
  
  const getGasolineName = (id: number) => 
    gasolineTypes.find(type => type.id === id)?.name || 'Desconocido';

  const totalSales = sales.reduce((sum, sale) => sum + sale.totalCost, 0);

  return (
    <div className="screen">
      <div className="screen-header">
        <button onClick={onBack} className="back-button">← Volver</button>
        <h2>Historial de Ventas</h2>
      </div>

      <div className="sales-summary">
        <h3>Total de Ventas: ${totalSales.toFixed(2)}</h3>
        <p>Número de Ventas: {sales.length}</p>
      </div>

      <div className="sales-list">
        {sales.length === 0 ? (
          <p>No hay ventas registradas</p>
        ) : (
          sales.map(sale => (
            <div key={sale.id} className="sale-card">
              <div className="sale-header">
                <span className="sale-id">Venta #{sale.id}</span>
                <span className="sale-total">${sale.totalCost.toFixed(2)}</span>
              </div>
              <div className="sale-details">
                <p><strong>Operador:</strong> {getOperatorName(sale.operatorId)}</p>
                <p><strong>Surtidor:</strong> {getPumpName(sale.pumpId)}</p>
                <p><strong>Combustible:</strong> {getGasolineName(sale.gasolineTypeId)}</p>
                <p><strong>Litros:</strong> {sale.liters}L</p>
                <p><strong>Cliente:</strong> {sale.customerName}</p>
                <p><strong>Vehículo:</strong> {sale.vehicleType}</p>
                <p><strong>Placas:</strong> {sale.plates}</p>
                <p><strong>Pago:</strong> {sale.paymentMethod}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
