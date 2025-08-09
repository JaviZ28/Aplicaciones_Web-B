export interface Operator {
  id: number;
  name: string;
  photoUrl: string;
}

export interface Pump {
  id: number;
  name: string;
}

export interface GasolineType {
  id: number;
  name: string;
  pricePerLiter: number;
}

export interface Sale {
  id: number;
  operatorId: number;
  pumpId: number;
  gasolineTypeId: number;
  liters: number;
  totalCost: number;
  customerName: string;
  vehicleType: string;
  plates: string;
  paymentMethod: string;
}

export interface DatabaseSchema {
  operators: Operator[];
  pumps: Pump[];
  gasolineTypes: GasolineType[];
  sales: Sale[];
}
