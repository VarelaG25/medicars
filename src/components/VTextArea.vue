<template>
    <div class="flex flex-col gap-2 w-full">
        <label v-if="props.text">
            {{ props.text }}
        </label>

        <Textarea v-model="model" :rows="props.rows" :cols="props.cols" />
    </div>
</template>

<script setup lang="ts">
import { Textarea } from 'primevue';

const props = defineProps({
    rows: {
        type: Number,
        default: 5
    },
    cols: {
        type: Number,
        default: 30
    },
    text: {
        type: String,
        default: null
    }
});

const model = defineModel<string>();
</script>
