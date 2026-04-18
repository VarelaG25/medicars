<template>
  <div class="unit-card">
    <div class="card-header">
      <div class="card-header-icon">
        <Car class="icon-green" />
      </div>
      <h3>Unidad asegurada</h3>
    </div>
    
    <div class="form-fields">
      <div class="two-columns">
        <div class="input-wrapper">
          <Building class="icon-left" />
          <input type="text" placeholder="Compañía" class="form-input">
        </div>
        <div class="input-wrapper">
          <FileBadge class="icon-left" />
          <input type="text" placeholder="N° Póliza" class="form-input">
        </div>
      </div>
      <div class="two-columns">
        <div class="input-wrapper">
          <Trademark class="icon-left" />
          <input type="text" placeholder="Marca" class="form-input">
        </div>
        <div class="input-wrapper">
          <Tags class="icon-left" />
          <input type="text" placeholder="Modelo" class="form-input">
        </div>
      </div>
      <div class="input-wrapper">
        <Hash class="icon-left" />
        <input type="text" placeholder="Número de placa" class="form-input">
      </div>
      
      <div class="coverage-badge">
        <div class="coverage-content">
          <ShieldCheck class="icon-shield" />
          <span>Cobertura verificada</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Car, Building, FileBadge, Trademark, Tags, Hash, ShieldCheck } from 'lucide-vue-next'
</script>

<style scoped>
.unit-card {
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

.icon-green {
  width: 20px;
  height: 20px;
  color: #059669;
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
  gap: 0.75rem;
}

.form-input {
  width: 100%;
  background: #fafbfc;
  border: 1.5px solid #e9eef4;
  border-radius: 14px;
  padding: 0.875rem 1rem 0.875rem 2.75rem;
  color: #1e293b;
  font-size: 0.95rem;
  transition: all 0.15s;
}

.form-input:focus {
  border-color: #3b82f6;
  background: white;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  outline: none;
}

.form-input::placeholder {
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

.coverage-badge {
  padding-top: 1rem;
  margin-top: 0.5rem;
}

.coverage-content {
  background: #f8fafc;
  border-radius: 12px;
  padding: 1rem;
  border: 1px solid #f1f5f9;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #475569;
}

.icon-shield {
  width: 16px;
  height: 16px;
  color: #10b981;
}

.coverage-content span {
  font-size: 0.875rem;
  font-weight: 500;
}
</style>
