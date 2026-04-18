<template>
  <div class="profile-container" ref="dropdownRef">
    <!-- Botón de Perfil -->
    <button 
      @click="toggleDropdown" 
      class="profile-button"
      :class="{ 'active': isDropdownOpen }"
    >
      <UserCircle class="profile-icon" />
      <span>Perfil</span>
      <ChevronDown class="chevron-icon" :class="{ 'rotate': isDropdownOpen }" />
    </button>

    <!-- Dropdown de Perfil -->
    <Transition name="dropdown">
      <div 
        v-if="isDropdownOpen"
        class="dropdown-menu"
        @click.stop
      >
        <!-- Cabecera del dropdown -->
        <div class="dropdown-header">
          <div class="user-info-header">
            <div class="avatar-container">
              <User class="avatar-icon" />
            </div>
            <div>
              <h3 class="user-name">{{ userData.nombre }}</h3>
              <p class="user-role">
                <Shield class="role-icon" />
                {{ userData.rol }}
              </p>
            </div>
          </div>
        </div>
        
        <!-- Cuerpo del dropdown -->
        <div class="dropdown-body">
          <div class="fields-container">
            
            <!-- IdUsuario -->
            <div class="field-wrapper">
              <Hash class="field-icon" />
              <input 
                type="text" 
                :value="userData.idUsuario" 
                readonly 
                class="field-input readonly"
              >
            </div>
            
            <!-- Correo -->
            <div class="field-wrapper">
              <Mail class="field-icon" />
              <input 
                type="email" 
                :value="userData.email" 
                readonly 
                class="field-input readonly"
              >
            </div>
            
            <!-- Teléfono -->
            <div class="field-wrapper">
              <Phone class="field-icon" />
              <input 
                type="tel" 
                :value="userData.telefono" 
                readonly 
                class="field-input readonly"
              >
            </div>
            
            <!-- Número de Póliza -->
            <div class="field-wrapper">
              <FileText class="field-icon" />
              <input 
                type="text" 
                :value="userData.numeroPoliza" 
                readonly 
                class="field-input readonly"
              >
            </div>
            
            <!-- Dirección -->
            <div class="field-wrapper">
              <MapPin class="field-icon" />
              <input 
                type="text" 
                :value="userData.direccion" 
                readonly 
                class="field-input readonly"
              >
            </div>
            
          </div>
          
          <!-- Botón de cerrar sesión -->
          <div class="dropdown-footer">
            <button class="logout-button" @click="handleLogout">
              <LogOut class="logout-icon" />
              Cerrar sesión
            </button>
          </div>
          
          <!-- Nota de solo lectura -->
          
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { 
  UserCircle, 
  User, 
  Hash, 
  Shield, 
  Mail, 
  Phone,
  Eye,
  ChevronDown,
  LogOut,
  FileText,
  MapPin
} from 'lucide-vue-next'

// Estado del dropdown
const isDropdownOpen = ref(false)
const dropdownRef = ref(null)

// Datos del usuario (simulados - luego puedes conectar con tu API/Store)
const userData = reactive({
  idUsuario: '1',
  nombre: 'Nombre Apellidosss',
  rol: 'Ajustador',
  email: 'correo@gmail.com',
  telefono: '8181818181',
  numeroPoliza: 'POL-2024-001234',
  direccion: 'Av. Principal 123, Col. Centro'
})

// Funciones del dropdown
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}

const handleLogout = () => {
  console.log('Cerrando sesión...')
  // Aquí iría la lógica de logout
  closeDropdown()
}

// Cerrar dropdown al hacer clic fuera
const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    closeDropdown()
  }
}

// Manejar tecla ESC
const handleEscKey = (e) => {
  if (e.key === 'Escape' && isDropdownOpen.value) {
    closeDropdown()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscKey)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscKey)
})

// Exponer método para actualizar datos del usuario
const updateUserData = (newData) => {
  Object.assign(userData, newData)
}

defineExpose({ updateUserData })
</script>

<style scoped>
.profile-container {
  position: relative;
}

.profile-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #475569;
  background: #f8fafc;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  transition: all 0.15s;
  cursor: pointer;
}

.profile-button:hover {
  color: #1e293b;
  background: #f1f5f9;
}

.profile-button.active {
  background: #e0e7ff;
  border-color: #2563eb;
  color: #1e293b;
}

.profile-icon {
  width: 16px;
  height: 16px;
}

.chevron-icon {
  width: 14px;
  height: 14px;
  transition: transform 0.2s ease;
}

.chevron-icon.rotate {
  transform: rotate(180deg);
}

/* Dropdown Menu */
.dropdown-menu {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: white;
  border-radius: 20px;
  border: 1px solid #eef2f6;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  min-width: 320px;
  max-width: 380px;
  z-index: 50;
  overflow: hidden;
}

/* Dropdown Header */
.dropdown-header {
  padding: 1.25rem 1.25rem 0.75rem;
  border-bottom: 1px solid #f1f5f9;
}

.user-info-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.avatar-container {
  background: #dbeafe;
  padding: 0.625rem;
  border-radius: 12px;
}

.avatar-icon {
  width: 20px;
  height: 20px;
  color: #2563eb;
}

.user-name {
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  font-size: 1rem;
}

.user-role {
  font-size: 0.75rem;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.125rem;
}

.role-icon {
  width: 12px;
  height: 12px;
}

/* Dropdown Body */
.dropdown-body {
  padding: 1.25rem;
  max-height: 400px;
  overflow-y: auto;
}

.fields-container {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin-bottom: 1rem;
}

.field-wrapper {
  position: relative;
}

.field-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: #64748b;
  pointer-events: none;
  z-index: 10;
}

.field-input {
  width: 100%;
  background: #fafbfc;
  border: 1.5px solid #e9eef4;
  border-radius: 12px;
  padding: 0.6rem 1rem 0.6rem 2.5rem;
  color: #1e293b;
  font-size: 0.85rem;
  transition: all 0.15s;
}

.field-input.readonly {
  background: #f1f5f9;
  border-color: #e2e8f0;
  cursor: default;
}

.field-input:focus {
  outline: none;
}

/* Scrollbar personalizado */
.dropdown-body::-webkit-scrollbar {
  width: 4px;
}

.dropdown-body::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 4px;
}

.dropdown-body::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

.dropdown-body::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Dropdown Footer */
.dropdown-footer {
  margin-bottom: 0.75rem;
}

.logout-button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #fee2e2;
  color: #dc2626;
  padding: 0.625rem;
  border-radius: 10px;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.15s;
}

.logout-button:hover {
  background: #fecaca;
  color: #b91c1c;
}

.logout-icon {
  width: 16px;
  height: 16px;
}

.readonly-note {
  text-align: center;
}

.note-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.7rem;
  color: #94a3b8;
  background: #f8fafc;
  padding: 0.25rem 0.625rem;
  border-radius: 9999px;
}

.note-icon {
  width: 10px;
  height: 10px;
}

/* Transiciones */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsive */
@media (max-width: 640px) {
  .dropdown-menu {
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    min-width: 100%;
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  
  .dropdown-body {
    max-height: 60vh;
  }
  
  .dropdown-enter-from,
  .dropdown-leave-to {
    transform: translateY(100%);
  }
}
</style>
