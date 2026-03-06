<template>
    <div class="flex flex-col gap-6">
        <section class="flex flex-row gap-4">
            <div>
                <p>Información del usuario</p>
                <div class="grid grid-cols-2 gap-4 border border-gray-300 p-4 rounded-md">
                    <VInput label="Nombre completo" />
                    <VInput label="Correo electrónico" />
                    <VInput label="Número de teléfono" />
                    <VInput label="Dirección" />
                    <VDateTimePicker label="Fecha de nacimiento" />
                    <VSelect v-model="genderSelected" text="Género" :source="generoOptions" label="value" />
                </div>
            </div>
            <div>
                <p>Unidad</p>
                <div class="grid grid-cols-2 gap-4 border border-gray-300 p-4 rounded-md">
                    <VInput label="Compañía de seguros" />
                    <VInput label="Póliza" />
                    <VInput label="Marca" />
                    <VInput label="Modelo" />
                    <VInput label="Número de placa" />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import VDateTimePicker from '@/components/VDateTimePicker.vue';
import VInput from '@/components/VInput.vue';
import VSelect from '@/components/VSelect.vue';
import { ref } from 'vue';


const genderSelected = ref(0);

const generoOptions = [
    { id: 1, value: 'Masculino' },
    { id: 2, value: 'Femenino' },
    { id: 3, value: 'Otro' }
];

</script>