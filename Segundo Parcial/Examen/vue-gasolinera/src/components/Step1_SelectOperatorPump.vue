<template>
  <div class="card">
    <h2>Nueva Venta</h2>
    
    <div class="form-group">
      <label>Seleccione el operador</label>
      <div v-for="op in operators" :key="op.id" @click="selectedOperatorId = op.id" 
           :class="{ 'item-selected': selectedOperatorId === op.id }" class="selectable-item">
        <span>{{ op.name }}</span>
      </div>
    </div>

    <div class="form-group">
      <label>Selecciona el surtidor</label>
      <div class="pump-options">
        <button v-for="pump in pumps" :key="pump.id" @click="selectedPumpId = pump.id"
                :class="{ 'pump-selected': selectedPumpId === pump.id }">
          {{ pump.name }}
        </button>
      </div>
    </div>
    
    <button @click="onNext" :disabled="!isSelectionValid">Siguiente</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Definimos los props que este componente espera recibir del padre (App.vue)
defineProps(['gasolineTypes']);
// Definimos el evento que este componente puede emitir hacia el padre
const emit = defineEmits(['next']);

const selectedOperatorId = ref(null);
const selectedPumpId = ref(null);

const isSelectionValid = computed(() => selectedOperatorId.value !== null && selectedPumpId.value !== null);

const onNext = () => {
  if (isSelectionValid.value) {
    emit('next', { 
      operatorId: selectedOperatorId.value,
      pumpId: selectedPumpId.value 
    });
  }
};
</script>

<style scoped>
/* Estilos específicos para este componente */
.form-group { margin-bottom: 1.5rem; }
label { display: block; margin-bottom: 8px; font-weight: bold; color: #606770; }
.selectable-item { display: flex; align-items: center; padding: 10px; border: 1px solid #ddd; border-radius: 6px; cursor: pointer; margin-bottom: 8px; }
.selectable-item:hover { background-color: #f7f7f7; }
.item-selected { border-color: #1877f2; background-color: #e7f3ff; }
.selectable-item img { width: 40px; height: 40px; border-radius: 50%; margin-right: 12px; }
.pump-options { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
.pump-options button { background-color: #f0f2f5; color: #333; border: 1px solid #ccc; }
.pump-options button.pump-selected { background-color: #1877f2; color: white; border-color: #1877f2; }
button:disabled { background-color: #ccd0d5; cursor: not-allowed; }
</style>