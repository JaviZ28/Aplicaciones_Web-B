<template>
  <div class="card">
    <h2>Precios de Gasolina</h2>

    <div class="form-group">
      <label>Tipos de Gasolina Disponibles</label>
      <div v-for="gas in gasolineTypes" :key="gas.id" @click="selectGasoline(gas)" 
           :class="{ 'item-selected': selectedGasolineType?.id === gas.id }" class="selectable-item">
        <span>{{ gas.name }}</span>
        <strong>${{ gas.pricePerLiter.toFixed(2) }} / litro</strong>
      </div>
    </div>

    <div class="form-group">
      <label for="liters">Calcular Costo (Litros)</label>
      <input type="number" id="liters" v-model.number="liters" placeholder="Ej: 20" />
    </div>
    
    <div v-if="totalCost > 0" class="total-cost">
      <span>Total a Pagar:</span>
      <strong>${{ totalCost.toFixed(2) }}</strong>
    </div>

    <div class="nav-buttons">
       <button @click="$emit('back')" class="back-button">Atrás</button>
       <button @click="onNext" :disabled="!isSelectionValid">Siguiente</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

defineProps(['gasolineTypes']);
const emit = defineEmits(['next', 'back']);

const selectedGasolineType = ref(null);
const liters = ref(null);

const selectGasoline = (gas) => {
    selectedGasolineType.value = gas;
};

const totalCost = computed(() => {
    if (selectedGasolineType.value && liters.value > 0) {
        return selectedGasolineType.value.pricePerLiter * liters.value;
    }
    return 0;
});

const isSelectionValid = computed(() => selectedGasolineType.value !== null && totalCost.value > 0);

const onNext = () => {
    if (isSelectionValid.value) {
        emit('next', {
            gasolineTypeId: selectedGasolineType.value.id,
            liters: liters.value,
            totalCost: totalCost.value,
        });
    }
};
</script>

<style scoped>
/* Estilos específicos */
.form-group { margin-bottom: 1.5rem; }
label { display: block; margin-bottom: 8px; font-weight: bold; color: #606770; }
.selectable-item { display: flex; justify-content: space-between; align-items: center; padding: 12px; border: 1px solid #ddd; border-radius: 6px; cursor: pointer; }
.item-selected { border-color: #1877f2; background-color: #e7f3ff; }
input { width: 100%; padding: 10px; font-size: 1rem; border-radius: 6px; border: 1px solid #ccc; box-sizing: border-box; }
.total-cost { padding: 1rem; background-color: #e7f3ff; border-radius: 6px; display: flex; justify-content: space-between; font-size: 1.2rem; margin-top: 1rem; }
button:disabled { background-color: #ccd0d5; cursor: not-allowed; }
</style>