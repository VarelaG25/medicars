<script lang="ts" setup>
import VButton from '@/components/VButton.vue';
import VDateTimePicker from '@/components/VDateTimePicker.vue';
import VFile from '@/components/VFile.vue';
import VInput from '@/components/VInput.vue';
import VSelect from '@/components/VSelect.vue';
import VRadioButton from '@/components/VRadioButton.vue';



import { ref, watch } from 'vue';

const radioSelection = ref('');
const textInput = ref('');
const dateTime = ref(null);
const selectedCity = ref(0);

watch(radioSelection, (value) => {
    console.log('Radio seleccionado:', value);
    console.log('Valor del input de texto:', textInput.value);
    console.log('Valor del DateTimePicker:', dateTime.value);
    console.log('Valor del VSelect:', selectedCity.value);
});
</script>

<template>
    <div>
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the Home Page!</p>

        </div>

        <div class="w-full">
            <div class="grid grid-cols-4 gap-4 w-full">
                <div>
                    <VInput v-model="textInput" />
                </div>
                <div>
                    <VDateTimePicker v-model="dateTime" />
                </div>
                <div>
                    <VSelect v-model="selectedCity" :source="[{ id: 1, value: 'New York' },
                    { id: 2, value: 'Rome' },
                    { id: 3, value: 'London' },
                    { id: 4, value: 'Istanbul' },
                    { id: 5, value: 'Paris' }]" label="value" :placeholder="'Select a City'" />
                </div>
                <div>
                    <VButton label="Submit" @click="() => console.log('Button clicked!')" />
                </div>
            </div>
            <div class="mt-4">
                <VRadioButton v-model="radioSelection" :source="[
                    { id: 1, value: 'Cheese' },
                    { id: 2, value: 'Pepperoni' },
                    { id: 3, value: 'Mushrooms' }
                ]" />
            </div>
            <VFile v-model="textInput" label="Upload File" placeholder="Choose a file..." />
             
        </div>
    </div>
</template>