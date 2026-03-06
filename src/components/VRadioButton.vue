<template>
    <div class="flex flex-col gap-2 w-full">
        <label v-if="props.label">
            {{ props.label }}
        </label>

        <div class="flex flex-row gap-3">
            <div v-for="option in props.source" :key="option.id" class="flex items-center gap-2">
                <RadioButton v-model="model" :inputId="`${props.inputId}-${option.id}`" :name="props.name"
                    :value="option.id" />

                <label :for="`${props.inputId}-${option.id}`">
                    {{ option.value }}
                </label>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import RadioButton from 'primevue/radiobutton'

interface RadioOption {
    id: string | number
    value: string
}

const model = defineModel<string | number>()

const props = defineProps({
    source: {
        type: Array as () => RadioOption[],
        default: () => []
    },
    name: {
        type: String,
        default: 'radio-group'
    },
    inputId: {
        type: String,
        default: 'radio'
    },
    label: {
        type: String,
        default: ''
    }
})
</script>