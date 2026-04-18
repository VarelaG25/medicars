<template>
  <div class="user-info-card">
    <div class="card-header">
      <div class="card-header-icon">
        <User class="icon-blue" />
      </div>
      <h3>Información del usuario</h3>
    </div>
    
    <div class="form-fields">
      <div class="input-wrapper">
        <User class="icon-left" />
        <input type="text" placeholder="Nombre completo" class="form-input">
      </div>
      <div class="input-wrapper">
        <Mail class="icon-left" />
        <input type="email" placeholder="Correo electrónico" class="form-input">
      </div>
      <div class="two-columns">
        <div class="input-wrapper">
          <Phone class="icon-left" />
          <input type="tel" placeholder="Teléfono" class="form-input">
        </div>
        <div class="input-wrapper">
          <MapPin class="icon-left" />
          <input type="text" placeholder="Dirección" class="form-input">
        </div>
      </div>
      <div class="two-columns">
        <div class="input-wrapper">
          <Calendar class="icon-left" />
          <input type="date" class="form-input">
        </div>
        <div class="input-wrapper">
          <Users class="icon-left" />
          <select class="form-select">
            <option>Masculino</option>
            <option>Femenino</option>
            <option>Prefiero no decir</option>
          </select>
          <ChevronDown class="icon-chevron" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { User, Mail, Phone, MapPin, Calendar, Users, ChevronDown } from 'lucide-vue-next'
</script>

<style scoped>
.user-info-card {
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

.form-input,
.form-select {
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

.form-input:focus,
.form-select:focus {
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
</style>
