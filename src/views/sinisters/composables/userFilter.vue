<template>

    <section>
        <div class="grid grid-cols-[40%_40%_auto] gap-4">
            <div>
                <VSelect v-model="searchType" text="Tipo de búsqueda" :source="[{ id: 1, value: 'Número de póliza' },
                { id: 2, value: 'Nombre completo' },
                { id: 3, value: 'Correo electrónico' },
                { id: 4, value: 'Teléfono' },
                ]" label="value" :placeholder="'Seleccione un tipo de búsqueda'" />
            </div>
            <div>
                <VInput label="Número de póliza" placeholder="Ingrese el número de póliza" />
            </div>
            <div class="flex items-end w-full">
            <VButton label="Buscar" severity="secondary" icon="pi pi-search" @click="() => console.log('Buscar siniestro')" />
            </div>
        </div>
    </section>

</template>

<script setup lang="ts">
import VButton from '@/components/VButton.vue';
import VInput from '@/components/VInput.vue';
import VSelect from '@/components/VSelect.vue';
import { ref } from 'vue';



const searchType = ref(0);

</script>