<template>
  <div class="actions-container">
    <div class="divider"></div>
    
    <div class="buttons-group">
      <button class="btn-reject">
        <XCircle class="icon-medium" />
        Rechazar
      </button>
      
      <button class="btn-register">
        <Save class="icon-medium" />
        Registrar siniestro
      </button>
      
      <button class="btn-approve">
        <CheckCircle class="icon-medium" />
        Aprobar
      </button>
    </div>
    
    <p class="info-text">
      <Info class="icon-small" />
      Los datos serán validados antes del envío
    </p>
  </div>
</template>

<script setup>
import { XCircle, Save, CheckCircle, Info } from 'lucide-vue-next'
</script>

<style scoped>
.actions-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.divider {
  width: 96px;
  height: 1px;
  background: linear-gradient(to right, transparent, #cbd5e1, transparent);
  margin-bottom: 2rem;
}

.buttons-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.btn-reject {
  min-width: 150px;
  background: #ef4444;
  color: white;
  font-weight: 600;
  padding: 0.875rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgb(239 68 68 / 0.2);
  transition: all 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
}

.btn-reject:hover {
  background: #dc2626;
}

.btn-register {
  min-width: 200px;
  background: linear-gradient(to right, #2563eb, #4f46e5);
  color: white;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgb(59 130 246 / 0.2);
  transition: all 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  border: none;
  cursor: pointer;
}

.btn-register:hover {
  background: linear-gradient(to right, #1d4ed8, #4338ca);
  transform: scale(1.05);
}

.btn-approve {
  min-width: 150px;
  background: #22c55e;
  color: white;
  font-weight: 600;
  padding: 0.875rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgb(34 197 94 / 0.2);
  transition: all 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
}

.btn-approve:hover {
  background: #16a34a;
}

.icon-medium {
  width: 20px;
  height: 20px;
}

.info-text {
  font-size: 0.875rem;
  color: #64748b;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon-small {
  width: 16px;
  height: 16px;
}
</style>
