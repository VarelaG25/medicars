<template>
  <div class="sinister-card">
    <div class="card-header">
      <div class="card-header-icon">
        <AlertTriangle class="icon-orange" />
      </div>
      <h3>Detalles del siniestro</h3>
    </div>
    
    <div class="form-fields">
      <div class="two-columns">
        <div class="input-wrapper">
          <Clock class="icon-left" />
          <input type="datetime-local" class="form-input">
        </div>
        <div class="input-wrapper">
          <Map class="icon-left" />
          <input type="text" placeholder="Lugar" class="form-input">
        </div>
      </div>
      
      <div class="two-columns">
        <div class="radio-group-container">
          <p class="radio-label">¿Afectó otra unidad?</p>
          <div class="radio-options">
            <label><input type="radio" name="afecta" checked> Sí</label>
            <label><input type="radio" name="afecta"> No</label>
          </div>
        </div>
        <div class="radio-group-container">
          <p class="radio-label">¿Aplica deducible?</p>
          <div class="radio-options">
            <label><input type="radio" name="deducible"> Sí</label>
            <label><input type="radio" name="deducible" checked> No</label>
          </div>
        </div>
      </div>
      
      <div class="input-wrapper">
        <ListChecks class="icon-left" />
        <select class="form-select">
          <option>Colisión</option>
          <option>Robo total</option>
          <option>Robo parcial</option>
          <option>Daños naturales</option>
          <option>Resp. civil</option>
          <option>Otro</option>
        </select>
        <ChevronDown class="icon-chevron" />
      </div>
      
      <div class="textarea-container">
        <label class="textarea-label">Descripción</label>
        <textarea rows="3" placeholder="Describa lo sucedido..." class="form-textarea"></textarea>
      </div>
    </div>
  </div>
</template>

<script setup>
import { AlertTriangle, Clock, Map, ListChecks, ChevronDown } from 'lucide-vue-next'
</script>

<style scoped>
.sinister-card {
  background: white;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.05);
  padding: 1.75rem;
  height: 100%;
  display: flex;
  flex-direction: column;
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

.icon-orange {
  width: 20px;
  height: 20px;
  color: #ea580c;
}

.card-header h3 {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #64748b;
  margin: 0;
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
}

.input-wrapper {
  position: relative;
}

.two-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  background: #fafbfc;
  border: 1.5px solid #e9eef4;
  border-radius: 14px;
  padding: 0.875rem 1rem 0.875rem 2.75rem;
  color: #1e293b;
  font-size: 0.95rem;
  transition: all 0.15s;
}

.form-select {
  appearance: none;
  cursor: pointer;
  padding-right: 2rem;
}

.form-textarea {
  padding: 0.875rem 1rem;
  resize: vertical;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  border-color: #3b82f6;
  background: white;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  outline: none;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: #94a3b8;
}

.icon-left {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: #64748b;
  pointer-events: none;
  z-index: 10;
}

.icon-chevron {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: #94a3b8;
  pointer-events: none;
}

.radio-group-container {
  background: rgb(248 250 252 / 0.5);
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
}

.radio-label {
  font-size: 0.75rem;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 0.5rem;
  margin-left: 0.25rem;
}

.radio-options {
  display: flex;
  gap: 1rem;
}

.radio-options label {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  color: #334155;
}

.radio-options input[type="radio"] {
  width: 16px;
  height: 16px;
  color: #2563eb;
}

.textarea-container {
  margin-top: 0.25rem;
}

.textarea-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 0.5rem;
  margin-left: 0.25rem;
}
</style>
