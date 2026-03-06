<template>
    <div class="container mx-auto py-8">
        <section class="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-6">

            <!-- Header -->
            <div class="bg-blue-50 rounded-lg p-4 mb-6">
                <h1 class="text-2xl font-bold text-blue-900 mb-2">Registro de Siniestro Automotriz</h1>
                <p class="text-gray-600">Complete los datos del siniestro para continuar.</p>
            </div>

            <!-- User Filter -->
            <UserFilter />

            <hr class="border-t border-gray-200 my-2" />

            <!-- User Information -->
            <UserInformation />

            <hr class="border-t border-gray-200 my-2" />

            <!-- Sinister Register -->
            <SinisterRegister />

            <!-- Buttons -->
            <div class="flex justify-end gap-4 mt-6">
                <VButton label="Cancelar" severity="danger" variant="text" />
                <VButton label="Registrar" severity="success" />
            </div>

        </section>
    </div>
</template>

<script lang="ts" setup>
import UserFilter from './composables/userFilter.vue';
import UserInformation from './composables/userInformation.vue';
import SinisterRegister from './composables/sinisterRegister.vue';
</script>