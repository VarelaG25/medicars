<template>
    <div class="w-full">
        <Toast />

        <FileUpload :name="props.name" :url="props.url" :multiple="props.multiple" :accept="props.accept"
            :maxFileSize="props.maxFileSize" class="w-full" @upload="handleUpload">
            <template #empty>
                <span>{{ props.emptyMessage }}</span>
            </template>
        </FileUpload>
    </div>
</template>

<script setup lang="ts">
import FileUpload from "primevue/fileupload"
import Toast from "primevue/toast"
import { useToast } from "primevue/usetoast"

const toast = useToast()

const emit = defineEmits(['upload'])

const props = defineProps({
    name: {
        type: String,
        default: 'file'
    },
    url: {
        type: String,
        default: '/api/upload'
    },
    multiple: {
        type: Boolean,
        default: true
    },
    accept: {
        type: String,
        default: 'image/*'
    },
    maxFileSize: {
        type: Number,
        default: 1000000
    },
    emptyMessage: {
        type: String,
        default: 'Drag and drop files here to upload'
    }
})

const handleUpload = (event: any) => {
    toast.add({
        severity: 'info',
        summary: 'Success',
        detail: 'File Uploaded',
        life: 3000
    })

    emit('upload', event)
}
</script>