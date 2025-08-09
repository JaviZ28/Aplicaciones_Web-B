// src/services/DatabaseService.ts

import { ref } from 'vue';
import { DatabaseSchema, Sale } from '../models';
import initialData from './data1.json';

// Usamos ref para que los datos sean reactivos en toda la app
const db = ref<DatabaseSchema>(initialData);

export const DatabaseService = {
  // --- Métodos para obtener datos ---
  getOperators: () => db.value.operators,
  getPumps: () => db.value.pumps,
  getGasolineTypes: () => db.value.gasolineTypes,
  
  // --- Método para crear una nueva venta ---
  createSale: (saleData: Omit<Sale, 'id'>) => {
    const newId = db.value.sales.length > 0 ? Math.max(...db.value.sales.map(s => s.id)) + 1 : 1;
    
    const newSale: Sale = {
      id: newId,
      ...saleData,
    };
    
    db.value.sales.push(newSale);
    console.log('Venta guardada:', newSale);
    console.log('Todas las ventas:', db.value.sales);
    
    return newSale;
  },
};