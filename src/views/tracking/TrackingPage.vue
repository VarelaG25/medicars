<template>
  <div class="flex flex-col min-h-screen">
    <!-- 1. Header banner con gradiente -->
    <SeguimientoHeader />

    <!-- 2. Barra de búsqueda y botón de registrar -->
    <SeguimientoToolbar 
      @search="handleSearch" 
      @register="handleRegister" 
      @clear="clearSearch"
    />

    <!-- 3. Tabla de siniestros -->
    <TrackingGrid 
      :data-source="filteredData" 
      :search-query="searchQuery"
      ref="gridRef"
    />

    <!-- 4. Spacer para footer -->
    <div class="flex-1"></div>

    <!-- 5. Pie de página -->
    <SeguimientoFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SeguimientoHeader from './composables/seguimientoHeader.vue'
import SeguimientoToolbar from './composables/seguimientoToolbar.vue'
import SeguimientoFooter from './composables/seguimientoFooter.vue'
import TrackingGrid from './composables/trackingGrid.vue'

const searchQuery = ref('')
const gridRef = ref()

function handleSearch(query: string) {
  searchQuery.value = query
}

function clearSearch() {
  searchQuery.value = ''
}

function handleRegister() {
  console.log('Registrar siniestro')
}

// Datos de ejemplo con prioridades
const exampleData = [
  { IdSiniestroUnidad: 1, Prioridad: 'Alta', Usuario: 'Jose Varela Garcia', Alias: 'Mario123', Compania: 'GNP', TipoSiniestro: 'Colisión / Choque', Poliza: '1234567890Siniestro', Descripcion: 'Descripción del siniestro #1', FechaSiniestro: '2026-03-01', AplicaDeducible: false, MontoDeducible: 0 },
  { IdSiniestroUnidad: 2, Prioridad: 'Alta', Usuario: 'Maria Rodriguez', Alias: 'MariR99', Compania: 'AXA', TipoSiniestro: 'Volcadura', Poliza: '9876543210Siniestro', Descripcion: 'Descripción del siniestro #2', FechaSiniestro: '2026-03-02', AplicaDeducible: true, MontoDeducible: 1500 },
  { IdSiniestroUnidad: 3, Prioridad: 'Alta', Usuario: 'Ana Lopez', Alias: 'AnaL22', Compania: 'HDI', TipoSiniestro: 'Incendio', Poliza: '1122334455Siniestro', Descripcion: 'Descripción del siniestro #3', FechaSiniestro: '2026-03-03', AplicaDeducible: false, MontoDeducible: 0 },
  { IdSiniestroUnidad: 4, Prioridad: 'Media', Usuario: 'Carlos Reyes', Alias: 'CarlosR', Compania: 'GNP', TipoSiniestro: 'Robo total', Poliza: '5544332211Siniestro', Descripcion: 'Descripción del siniestro #4', FechaSiniestro: '2026-03-04', AplicaDeducible: true, MontoDeducible: 5000 },
  { IdSiniestroUnidad: 5, Prioridad: 'Media', Usuario: 'Laura Martinez', Alias: 'LauMart', Compania: 'AXA', TipoSiniestro: 'Daños materiales', Poliza: '6677889900Siniestro', Descripcion: 'Descripción del siniestro #5', FechaSiniestro: '2026-03-05', AplicaDeducible: false, MontoDeducible: 0 },
  { IdSiniestroUnidad: 6, Prioridad: 'Media', Usuario: 'Pedro Gutierrez', Alias: 'PedroG', Compania: 'HDI', TipoSiniestro: 'Colisión / Choque', Poliza: '1029384756Siniestro', Descripcion: 'Descripción del siniestro #6', FechaSiniestro: '2026-03-06', AplicaDeducible: true, MontoDeducible: 1200 },
  { IdSiniestroUnidad: 7, Prioridad: 'Baja', Usuario: 'Sofia Flores', Alias: 'SofiaF', Compania: 'GNP', TipoSiniestro: 'Volcadura', Poliza: '1122334455Siniestro', Descripcion: 'Descripción del siniestro #7', FechaSiniestro: '2026-03-07', AplicaDeducible: false, MontoDeducible: 0 },
  { IdSiniestroUnidad: 8, Prioridad: 'Baja', Usuario: 'Diego Hernandez', Alias: 'DiegoH', Compania: 'AXA', TipoSiniestro: 'Incendio', Poliza: '9988776655Siniestro', Descripcion: 'Descripción del siniestro #8', FechaSiniestro: '2026-03-08', AplicaDeducible: true, MontoDeducible: 2000 },
]

const filteredData = computed(() => {
  if (!searchQuery.value) return exampleData
  const q = searchQuery.value.toLowerCase()
  return exampleData.filter(row =>
    Object.values(row).some(v => String(v).toLowerCase().includes(q))
  )
})
</script>

<style>
/* Estilos globales - no usar scoped aquí */
* { box-sizing: border-box; margin: 0; padding: 0; font-family: 'DM Sans', sans-serif; }
body { background: #F3F4F6; }
</style>
