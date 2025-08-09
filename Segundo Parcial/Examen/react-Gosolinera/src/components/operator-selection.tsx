import React from 'react';
import type { Operator } from '../models';

interface OperatorSelectionProps {
  operators: Operator[];
  onSelectOperator: (operator: Operator) => void;
}

export const OperatorSelection: React.FC<OperatorSelectionProps> = ({
  operators,
  onSelectOperator
}) => {
  return (
    <div className="screen">
      <h2>Seleccionar el Operador</h2>
      <div className="operators-grid">
        {operators.map((operator) => (
          <div
            key={operator.id}
            className="operator-card"
            onClick={() => onSelectOperator(operator)}
          >
            <img
              src={operator.photoUrl || "/placeholder.svg"}
              alt={operator.name}
              className="operator-photo"
            />
            <h3>{operator.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
