<template>
    <div class="card">
        <h2>Datos del Cliente y Pago</h2>
        
        <div class="form-group">
            <label>Forma de Pago</label>
            <div class="payment-options">
                <button v-for="method in paymentMethods" :key="method" 
                        @click="selectedPaymentMethod = method"
                        :class="{ 'payment-selected': selectedPaymentMethod === method }">
                    {{ method }}
                </button>
            </div>
        </div>

        <div class="form-group">
            <label for="customerName">Nombre del Cliente</label>
            <input type="text" id="customerName" v-model="customer.name" placeholder="Nombre completo">
        </div>

        <div class="form-group">
            <label for="customerEmail">Correo Electrónico</label>
            <input type="email" id="customerEmail" v-model="customer.email" placeholder="correo@ejemplo.com">
        </div>

        <div class="form-group">
            <label for="vehicleType">Tipo de Vehículo</label>
            <input type="text" id="vehicleType" v-model="customer.vehicleType" placeholder="Ej: Sedán">
        </div>

        <div class="form-group">
            <label for="plates">Placas</label>
            <input type="text" id="plates" v-model="customer.plates" placeholder="Ej: PBN-1234">
        </div>

        <div class="nav-buttons">
            <button @click="$emit('back')" class="back-button">Atrás</button>
            <button @click="onSubmit" :disabled="!isFormValid">Generar Venta</button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';

const emit = defineEmits(['submit', 'back']);

const paymentMethods = ['Efectivo', 'Tarjeta', 'Transferencia'];
const selectedPaymentMethod = ref(null);

const customer = reactive({
    name: '',
    email: '',
    vehicleType: '',
    plates: ''
});

const isFormValid = computed(() => {
    return selectedPaymentMethod.value &&
           customer.name.trim() !== '' &&
           customer.email.trim() !== '' &&
           customer.vehicleType.trim() !== '' &&
           customer.plates.trim() !== '';
});

const onSubmit = () => {
    if (isFormValid.value) {
        emit('submit', {
            paymentMethod: selectedPaymentMethod.value,
            customerName: customer.name,
            customerEmail: customer.email,
            vehicleType: customer.vehicleType,
            plates: customer.plates,
        });
    }
};
</script>

<style scoped>
/* Estilos específicos */
.form-group { margin-bottom: 1rem; }
label { display: block; margin-bottom: 6px; font-weight: bold; color: #606770; }
input { width: 100%; padding: 10px; font-size: 1rem; border-radius: 6px; border: 1px solid #ccc; box-sizing: border-box; }
.payment-options { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
.payment-options button { background-color: #f0f2f5; color: #333; border: 1px solid #ccc; }
.payment-options button.payment-selected { background-color: #1877f2; color: white; border-color: #1877f2; }
button:disabled { background-color: #ccd0d5; cursor: not-allowed; }
</style>