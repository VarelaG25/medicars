<template>
    <div class="flex flex-col gap-6">
        <section>
            <p>Detalles del siniestro</p>
            <div class="grid grid-cols-2 gap-4 border border-gray-300 p-4 rounded-md">
                <VDateTimePicker label="Fecha y hora del siniestro" />
                <VInput label="Lugar del siniestro" />
                <div class="grid grid-cols-[auto_auto]">
                    <VRadioButton v-model="afectoUnidad" :source="options" label="¿Afecto otra unidad?" />
                    <VSelect :source="tipoSiniestroOptions" label="value" text="Tipo de siniestro" />
                </div>
                <div class="grid grid-cols-[auto_auto]">
                    <VRadioButton v-model="deducible" :source="options" label="¿Aplica deducible?" />
                    <VInput label="Deducible" />
                </div>
                <div class="col-span-2">
                    <VTextArea text="Descripción del siniestro" />
                </div>
            </div>
        </section>
        <section>
            <p>Capturar evidencia</p>
            <VFile />
        </section>
        <section class="flex justify-end gap-4">
            <VButton label="Rechazar" severity="danger" class="w-full" @click="() => console.log('Siniestro registrado')" />
            <VButton label="Registrar" severity="info" class="w-full" @click="() => console.log('Siniestro registrado')" />
            <VButton label="Aprobar" severity="success" class="w-full" @click="() => console.log('Siniestro registrado')" />
        </section>
    </div>
</template>

<script lang="ts" setup>
import VDateTimePicker from '@/components/VDateTimePicker.vue';
import VInput from '@/components/VInput.vue';
import VTextArea from '@/components/VTextArea.vue';
import VRadioButton from '@/components/VRadioButton.vue';
import VSelect from '@/components/VSelect.vue';
import VFile from '@/components/VFile.vue';
import VButton from '@/components/VButton.vue';
import { ref } from 'vue';


const afectoUnidad = ref(0);
const deducible = ref(0);

const options = [
    { id: 1, value: 'Sí' },
    { id: 2, value: 'No' }
];

const tipoSiniestroOptions = [
    { id: 1, value: 'Colisión' },
    { id: 2, value: 'Robo' },
    { id: 3, value: 'Incendio' },
    { id: 4, value: 'Daños por agua' },
    { id: 5, value: 'Otros' }
];
</script>