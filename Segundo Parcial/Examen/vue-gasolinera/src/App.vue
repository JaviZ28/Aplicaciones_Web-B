<template>
  <div id="app-container">
    <header>
      <h1>Sistema de Venta de Gasolina</h1>
    </header>
    <main>
      <Step1
        v-if="currentStep === 1"
        :operators="operators"
        :pumps="pumps"
        @next="handleStep1"
      />

      <Step2
        v-if="currentStep === 2"
        :gasoline-types="gasolineTypes"
        @next="handleStep2"
        @back="currentStep--"
      />
      
      <Step3
        v-if="currentStep === 3"
        @submit="handleStep3"
        @back="currentStep--"
      />
      
      <div v-if="currentStep === 4" class="card success-card">
        <h2>✅ ¡Venta Generada con Éxito!</h2>
        <p>La venta ha sido registrada correctamente.</p>
        <button @click="resetSale">Nueva Venta</button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { DatabaseService } from './service/DatabaseService.ts';
import Step1 from './components/Step1_SelectOperatorPump.vue';
import Step2 from './components/Step2_CalculateCost.vue';
import Step3 from './components/Step3_ClientData.vue';

// Estado para controlar el paso actual
const currentStep = ref(1);

// Obtenemos los datos iniciales del servicio de persistencia
const operators = DatabaseService.getOperators();
const pumps = DatabaseService.getPumps();
const gasolineTypes = DatabaseService.getGasolineTypes();

// Objeto reactivo para ir construyendo la venta
const saleInProgress = reactive({});

// --- Manejadores de eventos de cada paso ---

const handleStep1 = (data) => {
  Object.assign(saleInProgress, data);
  currentStep.value = 2;
};

const handleStep2 = (data) => {
  Object.assign(saleInProgress, data);
  currentStep.value = 3;
};

const handleStep3 = (data) => {
  Object.assign(saleInProgress, data);
  // Guardamos la venta final usando el servicio
  DatabaseService.createSale(saleInProgress);
  currentStep.value = 4; // Mostramos pantalla de éxito
};

const resetSale = () => {
    Object.keys(saleInProgress).forEach(key => delete saleInProgress[key]);
    currentStep.value = 1;
};
</script>

<style>
/* Estilos Generales */
body { font-family: sans-serif; background-color: #f0f2f5; margin: 0; }
#app-container { max-width: 500px; margin: 2rem auto; padding: 1rem; }
header { text-align: center; color: #333; }
.card { background: white; border-radius: 8px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin-top: 1rem; }
h2 { margin-top: 0; font-size: 1.2rem; color: #1c1e21; border-bottom: 1px solid #ddd; padding-bottom: 0.5rem; }
button { background-color: #1877f2; color: white; border: none; padding: 12px 20px; border-radius: 6px; font-size: 1rem; cursor: pointer; width: 100%; margin-top: 1rem; transition: background-color 0.3s; }
button:hover { background-color: #166fe5; }
.nav-buttons { display: flex; justify-content: space-between; gap: 1rem; }
.back-button { background-color: #e4e6eb; color: #4b4f56; }
.back-button:hover { background-color: #d8dade; }
.success-card { text-align: center; }
</style>