<template>
  <div class="evidence-card">
    <div class="card-header">
      <div class="card-header-icon">
        <Camera class="icon-purple" />
      </div>
      <h3>Capturar evidencia</h3>
    </div>
    
    <div class="drop-zone">
      <UploadCloud class="icon-upload" />
      <p class="upload-text">Arrastra archivos aquí o <span class="upload-link">haz clic para seleccionar</span></p>
      <p class="upload-hint">PNG, JPG, PDF (máx 10MB)</p>
      <button class="upload-button">
        <Plus class="icon-small" /> Elegir archivos
      </button>
    </div>
    
    <div class="file-status">
      <Paperclip class="icon-clip" />
      <span>No hay archivos seleccionados</span>
    </div>
  </div>
</template>

<script setup>
import { Camera, UploadCloud, Plus, Paperclip } from 'lucide-vue-next'
</script>

<style scoped>
.evidence-card {
  background: white;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.05);
  padding: 1.75rem;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #f1f5f9;
}

.card-header-icon {
  background: #f8fafc;
  padding: 8px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-purple {
  width: 20px;
  height: 20px;
  color: #9333ea;
}

.card-header h3 {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #64748b;
  margin: 0;
}

.drop-zone {
  border: 2px dashed #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  background: rgb(248 250 252 / 0.5);
  transition: all 0.2s;
  cursor: pointer;
}

.drop-zone:hover {
  border-color: #3b82f6;
  background: #f8fafc;
}

.icon-upload {
  width: 40px;
  height: 40px;
  margin: 0 auto 0.75rem;
  color: #94a3b8;
}

.upload-text {
  color: #475569;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.upload-link {
  color: #2563eb;
}

.upload-hint {
  font-size: 0.75rem;
  color: #94a3b8;
  margin-top: 0.5rem;
}

.upload-button {
  margin-top: 1.25rem;
  background: white;
  border: 1px solid #e2e8f0;
  color: #334155;
  padding: 0.625rem 1.5rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  transition: all 0.15s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.upload-button:hover {
  background: #f8fafc;
}

.icon-small {
  width: 16px;
  height: 16px;
}

.file-status {
  margin-top: 1rem;
  font-size: 0.75rem;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon-clip {
  width: 14px;
  height: 14px;
}
</style>
