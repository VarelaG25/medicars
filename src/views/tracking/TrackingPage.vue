<template>
  <div class="flex flex-col justify-center px-5 py-4">
    <TrackingGrid :dataSource="exampleData" />
  </div>
</template>

<script setup lang="ts">
import TrackingGrid from './composables/trackingGrid.vue';

// 5 registros de ejemplo
const exampleData = [
  {
    IdSiniestroUnidad: 1,
    Usuario: "Jose Varela Garcia",
    Alias: "Mario123",
    Poliza: "1234567890SiniestroUnidad",
    Compania: "GNP",
    TipoSiniestro: "Colisión / Choque",
    FechaSiniestro: "2026-03-02T01:17:40.704Z",
    Descripcion: "Choque contra un objeto",
    AplicaDeducible: true,
    MontoDeducible: 1000
  },
  {
    IdSiniestroUnidad: 2,
    Usuario: "Jose Varela Garcia",
    Alias: "Mario123",
    Poliza: "1234567890SiniestroUnidad",
    Compania: "GNP",
    TipoSiniestro: "Volcadura",
    FechaSiniestro: "2026-03-03T10:00:00.000Z",
    Descripcion: "Vehículo volcó en curva",
    AplicaDeducible: true,
    MontoDeducible: 1500
  },
  {
    IdSiniestroUnidad: 3,
    Usuario: "Jose Varela Garcia",
    Alias: "Mario123",
    Poliza: "1234567890SiniestroUnidad",
    Compania: "GNP",
    TipoSiniestro: "Incendio",
    FechaSiniestro: "2026-03-04T08:30:00.000Z",
    Descripcion: "Fuego en motor del vehículo",
    AplicaDeducible: false,
    MontoDeducible: 0
  },
  {
    IdSiniestroUnidad: 4,
    Usuario: "Jose Varela Garcia",
    Alias: "Mario123",
    Poliza: "1234567890SiniestroUnidad",
    Compania: "GNP",
    TipoSiniestro: "Robo total",
    FechaSiniestro: "2026-03-05T15:45:00.000Z",
    Descripcion: "Robo completo del vehículo",
    AplicaDeducible: true,
    MontoDeducible: 5000
  },
  {
    IdSiniestroUnidad: 5,
    Usuario: "Jose Varela Garcia",
    Alias: "Mario123",
    Poliza: "1234567890SiniestroUnidad",
    Compania: "GNP",
    TipoSiniestro: "Daños materiales",
    FechaSiniestro: "2026-03-06T12:15:00.000Z",
    Descripcion: "Golpes y rayones menores",
    AplicaDeducible: true,
    MontoDeducible: 300
  },
  {
    IdSiniestroUnidad: 6,
    Usuario: "Jose Varela Garcia",
    Alias: "Mario123",
    Poliza: "1234567890SiniestroUnidad",
    Compania: "GNP",
    TipoSiniestro: "Colisión / Choque",
    FechaSiniestro: "2026-03-07T09:00:00.000Z",
    Descripcion: "Choque contra un poste",
    AplicaDeducible: true,
    MontoDeducible: 1200
  },
  {
    IdSiniestroUnidad: 7,
    Usuario: "Jose Varela Garcia",
    Alias: "Mario123",
    Poliza: "1234567890SiniestroUnidad",
    Compania: "GNP",
    TipoSiniestro: "Volcadura",
    FechaSiniestro: "2026-03-08T14:30:00.000Z",
    Descripcion: "Vehículo volcó en carretera",
    AplicaDeducible: true,
    MontoDeducible: 2000
  },
  {
    IdSiniestroUnidad: 8,
    Usuario: "Jose Varela Garcia",
    Alias: "Mario123",
    Poliza: "1234567890SiniestroUnidad",
    Compania: "GNP",
    TipoSiniestro: "Incendio",
    FechaSiniestro: "2026-03-09T11:45:00.000Z",
    Descripcion: "Fuego en interior del vehículo",
    AplicaDeducible: false,
    MontoDeducible: 0,
  },
  {
    IdSiniestroUnidad: 9,
    Usuario: "Jose Varela Garcia",
    Alias: "Mario123",
    Poliza: "1234567890SiniestroUnidad",
    Compania: "GNP",
    TipoSiniestro: "Robo total",
    FechaSiniestro: "2026-03-10T16:00:00.000Z",
    Descripcion: "Robo completo del vehículo en estacionamiento",
    AplicaDeducible: true,
    MontoDeducible: 4500
  },
  {
    IdSiniestroUnidad: 10,
    Usuario: "Jose Varela Garcia",
    Alias: "Mario123",
    Poliza: "1234567890SiniestroUnidad",
    Compania: "GNP",
    TipoSiniestro: "Daños materiales",
    FechaSiniestro: "2026-03-11T13:20:00.000Z",
    Descripcion: "Rayones y abolladuras menores",
    AplicaDeducible: true,
    MontoDeducible: 400
  }
];
</script>