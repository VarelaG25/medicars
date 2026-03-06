<template>
    <Button type="button" :label="props.label" :icon="props.icon" :loading="loading" class="w-full"
        @click="handleClick" />
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import { ref } from 'vue'

const emit = defineEmits(['click'])

const props = defineProps({
    label: {
        type: String,
        default: 'Primary'
    },
    icon: {
        type: String,
    },
})

const loading = ref(false)

const handleClick = () => {
    loading.value = true
    emit('click')

    setTimeout(() => {
        loading.value = false
    }, 2000)
}
</script>