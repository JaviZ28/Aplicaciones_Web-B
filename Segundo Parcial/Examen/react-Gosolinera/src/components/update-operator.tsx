import React, { useState } from 'react';
import type { GasolineType } from '../models';

interface UpdateOperatorProps {
  gasolineTypes: GasolineType[];
  onUpdatePrice: (gasolineTypeId: number, newPrice: number) => void;
  onBack: () => void;
}

export const UpdateOperator: React.FC<UpdateOperatorProps> = ({
  gasolineTypes,
  onUpdatePrice,
  onBack
}) => {
  const [prices, setPrices] = useState<{ [key: number]: number }>(
    gasolineTypes.reduce((acc, type) => ({
      ...acc,
      [type.id]: type.pricePerLiter
    }), {})
  );

  const handlePriceChange = (gasolineTypeId: number, newPrice: number) => {
    setPrices(prev => ({
      ...prev,
      [gasolineTypeId]: newPrice
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Object.entries(prices).forEach(([id, price]) => {
      onUpdatePrice(Number(id), price);
    });
    alert('Precios actualizados exitosamente!');
  };

  return (
    <div className="screen">
      <div className="screen-header">
        <button onClick={onBack} className="back-button">← Volver</button>
        <h2>Actualizar Precios de Gasolina</h2>
      </div>

      <form onSubmit={handleSubmit} className="update-form">
        {gasolineTypes.map(type => (
          <div key={type.id} className="form-group">
            <label>{type.name}:</label>
            <div className="price-input">
              <span>$</span>
              <input
                type="number"
                step="0.01"
                min="0"
                value={prices[type.id]}
                onChange={(e) => handlePriceChange(type.id, Number(e.target.value))}
              />
              <span>/L</span>
            </div>
          </div>
        ))}

        <button type="submit" className="submit-button">
          Actualizar Precios
        </button>
      </form>
    </div>
  );
};
