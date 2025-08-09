import React, { useState, useEffect } from 'react';
import type { Operator, Pump, GasolineType, Sale } from '../models';

interface CostCalculatorProps {
  operator: Operator | null;
  pumps: Pump[];
  gasolineTypes: GasolineType[];
  onSaleComplete: (sale: Omit<Sale, 'id'>) => void;
  onBack: () => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({
  operator,
  pumps,
  gasolineTypes,
  onSaleComplete,
  onBack
}) => {
  const [selectedPump, setSelectedPump] = useState<number>(pumps[0]?.id || 1);
  const [selectedGasolineType, setSelectedGasolineType] = useState<number>(gasolineTypes[0]?.id || 1);
  const [liters, setLiters] = useState<number>(0);
  const [customerName, setCustomerName] = useState<string>('');
  const [vehicleType, setVehicleType] = useState<string>('');
  const [plates, setPlates] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('efectivo');
  const [totalCost, setTotalCost] = useState<number>(0);

  const selectedGasoline = gasolineTypes.find(g => g.id === selectedGasolineType);

  useEffect(() => {
    if (selectedGasoline && liters > 0) {
      setTotalCost(liters * selectedGasoline.pricePerLiter);
    } else {
      setTotalCost(0);
    }
  }, [liters, selectedGasoline]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!operator || liters <= 0) return;

    const sale: Omit<Sale, 'id'> = {
      operatorId: operator.id,
      pumpId: selectedPump,
      gasolineTypeId: selectedGasolineType,
      liters,
      totalCost,
      customerName,
      vehicleType,
      plates,
      paymentMethod
    };

    onSaleComplete(sale);
    
    // Reset form
    setLiters(0);
    setCustomerName('');
    setVehicleType('');
    setPlates('');
    setPaymentMethod('efectivo');
    
    alert('Venta registrada exitosamente!');
  };

  if (!operator) return null;

  return (
    <div className="screen">
      <div className="screen-header">
        <button onClick={onBack} className="back-button">← Volver</button>
        <h2>Calculadora de Costo</h2>
      </div>
      
      <div className="operator-info">
        <img src={operator.photoUrl || "/placeholder.svg"} alt={operator.name} className="operator-photo-small" />
        <span>Operador: {operator.name}</span>
      </div>

      <form onSubmit={handleSubmit} className="calculator-form">
        <div className="form-group">
          <label>Surtidor:</label>
          <select 
            value={selectedPump} 
            onChange={(e) => setSelectedPump(Number(e.target.value))}
          >
            {pumps.map(pump => (
              <option key={pump.id} value={pump.id}>{pump.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Tipo de Gasolina:</label>
          <select 
            value={selectedGasolineType} 
            onChange={(e) => setSelectedGasolineType(Number(e.target.value))}
          >
            {gasolineTypes.map(type => (
              <option key={type.id} value={type.id}>
                {type.name} - ${type.pricePerLiter}/L
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Litros:</label>
          <input
            type="number"
            step="0.01"
            min="0"
            value={liters}
            onChange={(e) => setLiters(Number(e.target.value))}
            required
          />
        </div>

        <div className="form-group">
          <label>Nombre del Cliente:</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Tipo de Vehículo:</label>
          <select 
            value={vehicleType} 
            onChange={(e) => setVehicleType(e.target.value)}
            required
          >
            <option value="">Seleccionar...</option>
            <option value="auto">Auto</option>
            <option value="camioneta">Camioneta</option>
            <option value="motocicleta">Motocicleta</option>
            <option value="camion">Camión</option>
          </select>
        </div>

        <div className="form-group">
          <label>Placas:</label>
          <input
            type="text"
            value={plates}
            onChange={(e) => setPlates(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Método de Pago:</label>
          <select 
            value={paymentMethod} 
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta">Tarjeta</option>
            <option value="transferencia">Transferencia</option>
          </select>
        </div>

        <div className="total-cost">
          <h3>Total: ${totalCost.toFixed(2)}</h3>
        </div>

        <button type="submit" className="submit-button" disabled={liters <= 0}>
          Registrar Venta
        </button>
      </form>
    </div>
  );
};
