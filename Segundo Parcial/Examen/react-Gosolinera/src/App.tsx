import React, { useState } from 'react';
import type { Operator, Pump, GasolineType, Sale, DatabaseSchema } from './models';
import { OperatorSelection } from './components/operator-selection';
import { CostCalculator } from './components/cost-calculator';
import { UpdateOperator } from './components/update-operator';
import { SalesHistory } from './components/sales-history';
import './app.css';

// Datos iniciales
const initialData: DatabaseSchema = {
  operators: [
    { id: 1, name: "Carlos Romero", photoUrl: "/carlos-romero-operator.png" },
    { id: 2, name: "Ana Pérez", photoUrl: "/ana-perez-operator.png" }
  ],
  pumps: [
    { id: 1, name: "Surtidor 1" },
    { id: 2, name: "Surtidor 2" },
    { id: 3, name: "Surtidor 3" }
  ],
  gasolineTypes: [
    { id: 1, name: "Premium", pricePerLiter: 25.5 },
    { id: 2, name: "Magna", pricePerLiter: 22.3 },
    { id: 3, name: "Diesel", pricePerLiter: 24.0 }
  ],
  sales: []
};

type Screen = 'operator-selection' | 'cost-calculator' | 'update-operator' | 'sales-history';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('operator-selection');
  const [data, setData] = useState<DatabaseSchema>(initialData);
  const [selectedOperator, setSelectedOperator] = useState<Operator | null>(null);

  const addSale = (sale: Omit<Sale, 'id'>) => {
    const newSale: Sale = {
      ...sale,
      id: data.sales.length + 1
    };
    setData(prev => ({
      ...prev,
      sales: [...prev.sales, newSale]
    }));
  };

  const updateGasolinePrice = (gasolineTypeId: number, newPrice: number) => {
    setData(prev => ({
      ...prev,
      gasolineTypes: prev.gasolineTypes.map(type =>
        type.id === gasolineTypeId ? { ...type, pricePerLiter: newPrice } : type
      )
    }));
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'operator-selection':
        return (
          <OperatorSelection
            operators={data.operators}
            onSelectOperator={(operator) => {
              setSelectedOperator(operator);
              setCurrentScreen('cost-calculator');
            }}
          />
        );
      case 'cost-calculator':
        return (
          <CostCalculator
            operator={selectedOperator}
            pumps={data.pumps}
            gasolineTypes={data.gasolineTypes}
            onSaleComplete={addSale}
            onBack={() => setCurrentScreen('operator-selection')}
          />
        );
      case 'update-operator':
        return (
          <UpdateOperator
            gasolineTypes={data.gasolineTypes}
            onUpdatePrice={updateGasolinePrice}
            onBack={() => setCurrentScreen('operator-selection')}
          />
        );
      case 'sales-history':
        return (
          <SalesHistory
            sales={data.sales}
            operators={data.operators}
            pumps={data.pumps}
            gasolineTypes={data.gasolineTypes}
            onBack={() => setCurrentScreen('operator-selection')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Sistema de Gasolinera</h1>
        <nav className="nav-buttons">
          <button 
            onClick={() => setCurrentScreen('operator-selection')}
            className={currentScreen === 'operator-selection' ? 'active' : ''}
          >
            Operadores
          </button>
          <button 
            onClick={() => setCurrentScreen('update-operator')}
            className={currentScreen === 'update-operator' ? 'active' : ''}
          >
            Actualizar Precios
          </button>
          <button 
            onClick={() => setCurrentScreen('sales-history')}
            className={currentScreen === 'sales-history' ? 'active' : ''}
          >
            Historial
          </button>
        </nav>
      </header>
      <main className="app-main">
        {renderScreen()}
      </main>
    </div>
  );
}
