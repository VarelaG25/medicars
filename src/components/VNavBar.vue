<template>
    <nav class="bg-white text-black text-lg px-4 py-2 border-b border-gray-200">
        <div class="mx-auto grid grid-cols-[70%_30%] items-center">

            <!-- Título / Logo -->
            <div class="flex items-center gap-2">
                <div class="size-8">
                    <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
                    </svg>
                </div>
                <h1 class="titles font-semibold text-xl">
                    MediCar
                </h1>
            </div>

            <!-- Navegación / Botones -->
            <div class="grid grid-cols-4 gap-2 justify-end">
                <VButton label="Inicio" variant="text" severity="secondary" @click="navegate('')" />
                <VButton label="Siniestros" variant="text" severity="secondary" @click="navegate('sinisters')" />
                <VButton label="Seguimiento" variant="text" severity="secondary" @click="navegate('reports')" />
                <VButton label="Login" severity="info" icon="pi pi-user" @click="navegate('login')" />
            </div>

        </div>
    </nav>
</template>

<script lang="ts" setup>
import VButton from './VButton.vue'

const navegate = (menu: string) => {
    console.log(`Navegando a la sección: ${menu}`)
    location.href = `#/${menu.toLowerCase()}`
}
</script>