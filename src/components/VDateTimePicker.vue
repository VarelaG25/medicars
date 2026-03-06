<template>
  <div class="flex flex-col gap-2 w-full">
    <label v-if="props.label" :for="props.inputId">
      {{ props.label }}
    </label>

    <DatePicker v-model="model" showIcon fluid iconDisplay="input" :inputId="props.inputId" class="w-full" />
  </div>
</template>

<script setup lang="ts">
import DatePicker from 'primevue/datepicker'

const model = defineModel<Date | null>()

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  inputId: {
    type: String,
    default: 'datepicker'
  }
})
</script>