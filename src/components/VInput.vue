<template>
    <div class="flex flex-col gap-2 w-full">
        <label v-if="props.label" :for="props.id">
            {{ props.label }}
        </label>

        <InputText :id="props.id" v-model="model" :aria-describedby="props.describedby"
            :placeholder="props.placeholder" class="w-full" />

        <Message v-if="props.describedby" :size="props.size" :severity="props.severity" :variant="props.variant">
            {{ props.describedby }}
        </Message>
    </div>
</template>
<script lang="ts" setup>
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'

const model = defineModel<string>()

const props = defineProps({
    id: {
        type: String,
        default: null
    },
    label: {
        type: String,
        default: null
    },
    placeholder: {
        type: String,
        default: null
    },
    describedby: {
        type: String,
        default: null
    },
    variant: {
        type: String,
        default: 'outlined'
    },
    severity: {
        type: String,
        default: 'error'
    },
    size: {
        type: String,
        default: 'small'
    }
});

</script>
