<template>
    <div class="card">
        <div class="bg-blue-50 rounded-lg p-4 mb-6">
            <h1 class="text-2xl font-bold text-blue-900 mb-2">Seguimiento</h1>
            <p class="text-gray-600">Sigue el estado de tus siniestros en tiempo real.</p>
        </div>

        <DataTable v-model:filters="filters" :value="data" paginator :rows="8" showGridlines dataKey="IdSiniestroUnidad"
            filterDisplay="menu" :loading="loading"
            :globalFilterFields="['Usuario', 'Alias', 'Poliza', 'Compania', 'TipoSiniestro', 'Descripcion']">
            <!-- Header -->
            <template #header>
                <div class="flex justify-between">
                    <Button type="button" icon="pi pi-filter-slash" label="Clear Filters" variant="outlined"
                        @click="clearFilters()" />
                    <InputText v-model="filters['global'].value" placeholder="Search..." class="w-1/3" />
                </div>
            </template>

            <!-- Empty / Loading -->
            <template #empty>No siniestros encontrados.</template>
            <template #loading>Loading data...</template>

            <!-- Columna Folio -->
            <Column field="IdSiniestroUnidad" header="Folio" style="min-width: 8rem">
                <template #body="{ data }">
                    {{ data.IdSiniestroUnidad }}
                </template>
            </Column>



            <!-- Columnas -->
            <Column field="Usuario" header="Usuario" style="min-width: 14rem">
                <template #body="{ data }">
                    {{ data.Usuario }}
                </template>
            </Column>

            <Column field="Alias" header="Alias" style="min-width: 10rem">
                <template #body="{ data }">
                    {{ data.Alias }}
                </template>
            </Column>

            <Column field="Poliza" header="Poliza" style="min-width: 14rem">
                <template #body="{ data }">
                    {{ data.Poliza }}
                </template>
            </Column>

            <Column field="Compania" header="Compañía" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.Compania }}
                </template>
            </Column>

            <Column field="TipoSiniestro" header="Tipo de Siniestro" style="min-width: 14rem">
                <template #body="{ data }">
                    <Tag :value="data.TipoSiniestro" :severity="getSeverity(data.TipoSiniestro)" />
                </template>
                <template #filter="{ filterModel }">
                    <MultiSelect v-model="filterModel.value" :options="tiposSiniestro" optionLabel="Nombre"
                        placeholder="Any" />
                </template>
            </Column>

            <Column field="FechaSiniestro" header="Fecha" style="min-width: 12rem" dataType="date">
                <template #body="{ data }">
                    {{ formatDate(data.FechaSiniestro) }}
                </template>
            </Column>

            <Column field="Descripcion" header="Descripción" style="min-width: 20rem">
                <template #body="{ data }">
                    {{ data.Descripcion }}
                </template>
            </Column>

            <Column field="AplicaDeducible" header="Deducible" dataType="boolean" bodyClass="text-center"
                style="min-width: 8rem">
                <!-- Icono según el valor -->
                <template #body="{ data }">
                    <i class="pi" :class="{
                        'pi-check-circle text-green-500': data.AplicaDeducible,
                        'pi-times-circle text-red-500': !data.AplicaDeducible
                    }"></i>
                </template>

                <!-- Filtro tipo checkbox -->
                <template #filter="{ filterModel }">
                    <label for="deducible-filter" class="font-bold"> Deducible </label>
                    <Checkbox v-model="filterModel.value" :indeterminate="filterModel.value === null" binary
                        inputId="deducible-filter" />
                </template>
            </Column>

            <Column field="MontoDeducible" header="Monto" dataType="numeric" style="min-width: 10rem">
                <template #body="{ data }">
                    {{ formatCurrency(data.MontoDeducible) }}
                </template>
            </Column>

            <!-- Columna Ver Detalles -->
            <Column header="Acciones" style="min-width: 10rem" bodyClass="text-center">
                <template #body="{ data }">
                    <Button icon="pi pi-eye" label="Ver Detalles" class="p-button-sm p-button-text"
                        @click="verDetalle(data)" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import MultiSelect from 'primevue/multiselect';
import Checkbox from 'primevue/checkbox';
import { FilterMatchMode } from '@primevue/core/api';

// Tipos de siniestro
const tiposSiniestro = [
    "Colisión / Choque",
    "Volcadura",
    "Incendio",
    "Robo total",
    "Daños materiales"
];

// Generar datos ficticios
interface Siniestro {
    IdSiniestroUnidad: number;
    Usuario: string;
    Alias: string;
    Poliza: string;
    Compania: string;
    TipoSiniestro: string;
    FechaSiniestro: string;
    Descripcion: string;
    AplicaDeducible: boolean;
    MontoDeducible: number;
}

const data = ref<Siniestro[]>([]);
for (let i = 1; i <= 20; i++) {
    const tipo = tiposSiniestro[(i - 1) % tiposSiniestro.length]; // Ciclo entre los tipos
    data.value.push({
        IdSiniestroUnidad: i,
        Usuario: "Jose Varela Garcia",
        Alias: "Mario123",
        Poliza: "1234567890SiniestroUnidad",
        Compania: "GNP",
        TipoSiniestro: tipo || "Otro",
        FechaSiniestro: new Date(2026, 2, i, 10, 0, 0).toISOString(),
        Descripcion: `Descripción del siniestro #${i}`,
        AplicaDeducible: i % 2 === 0, // Alterna true/false
        MontoDeducible: i % 2 === 0 ? 1000 + i * 50 : 0
    });
}

// Filtros y carga
const loading = ref(false);
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
});

// Funciones auxiliares
const formatDate = (dateStr: string) => new Date(dateStr).toLocaleDateString();
const formatCurrency = (value: number) => `$${value.toLocaleString()}`;
const clearFilters = () => { filters.value.global.value = null; };

// Colores según tipo de siniestro
const getSeverity = (tipo: string) => {
    switch (tipo) {
        case "Colisión / Choque": return "danger";
        case "Volcadura": return "warn";
        case "Incendio": return "success";
        case "Robo total": return "danger";
        case "Daños materiales": return "info";
        default: return "secondary";
    }
};

// Acción para ver detalles
const verDetalle = (siniestro: any) => {
    console.log("Ver detalles de:", siniestro);
    alert(`Ver detalles del siniestro #${siniestro.IdSiniestroUnidad}`);
};
</script>