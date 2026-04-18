<template>
  <div class="user-filter-card">
    <div class="card-header">
      <div class="card-header-icon">
        <Search class="icon-blue" />
      </div>
      <h3>Búsqueda de póliza</h3>
    </div>
    <div class="filter-grid">
      <div class="filter-field">
        <label>Tipo de búsqueda</label>
        <div class="input-wrapper">
          <Filter class="icon-left" />
          <select class="filter-select">
            <option>Póliza</option>
            <option>Placa</option>
            <option>Número de siniestro</option>
            <option>Nombre del asegurado</option>
          </select>
          <ChevronDown class="icon-chevron" />
        </div>
      </div>
      <div class="filter-field">
        <label>Número / Identificador</label>
        <div class="input-wrapper">
          <FileText class="icon-left" />
          <input type="text" placeholder="Ej: 1234-5678-90" class="filter-input">
        </div>
      </div>
      <button class="search-button">
        <Search class="icon-small" />
        Buscar
      </button>
    </div>
  </div>
</template>

<script setup>
import { Search, Filter, ChevronDown, FileText } from 'lucide-vue-next'
</script>

<style scoped>
.user-filter-card {
  background: white;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.05);
  padding: 1.75rem;
  margin-bottom: 1.5rem;
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

.icon-blue {
  width: 20px;
  height: 20px;
  color: #2563eb;
}

.card-header h3 {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #64748b;
  margin: 0;
}

.filter-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  align-items: end;
}

@media (max-width: 1024px) {
  .filter-grid {
    grid-template-columns: 1fr;
  }
}

.filter-field label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #64748b;
  margin-bottom: 0.5rem;
  margin-left: 0.25rem;
}

.input-wrapper {
  position: relative;
}

.filter-select,
.filter-input {
  width: 100%;
  background: #fafbfc;
  border: 1.5px solid #e9eef4;
  border-radius: 14px;
  padding: 0.875rem 2rem 0.875rem 2.75rem;
  color: #1e293b;
  font-size: 0.95rem;
  transition: all 0.15s;
}

.filter-select {
  appearance: none;
  cursor: pointer;
}

.filter-input {
  padding-right: 1rem;
}

.filter-select:focus,
.filter-input:focus {
  border-color: #3b82f6;
  background: white;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  outline: none;
}

.filter-input::placeholder {
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

.search-button {
  background: #2563eb;
  color: white;
  font-weight: 600;
  border-radius: 12px;
  padding: 0.875rem 1.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  transition: all 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
}

.search-button:hover {
  background: #1d4ed8;
}

.icon-small {
  width: 16px;
  height: 16px;
}
</style>
