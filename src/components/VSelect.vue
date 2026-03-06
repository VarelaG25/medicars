<template>
    <div class="flex flex-col gap-2 w-full">
        <label v-if="props.text">
            {{ props.text }}
        </label>

        <Select v-model="model" :options="props.source" :optionLabel="props.label" optionValue="id"
            :placeholder="props.placeholder" class="w-full" />
    </div>
</template>

<script setup lang="ts">
import Select from "primevue/select"

interface SelectOptions {
    id: string | number
    value: string
}

const model = defineModel<string | number>()

const props = defineProps({
    source: {
        type: Array as () => SelectOptions[],
        default: () => []
    },
    label: {
        type: String,
        default: 'value'
    },
    placeholder: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: null
    }
})
</script>