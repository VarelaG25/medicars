<template>
  <div class="toolbar-bar">
    <div class="toolbar-left">
      <div class="search-wrap">
        <span class="search-ico">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
        </span>
        <input 
          type="text" 
          :value="searchQuery"
          @input="onSearchInput"
          placeholder="Buscar siniestro..."
        />
      </div>
      <button class="clear-btn" @click="clearSearch">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>
        </svg>
        Limpiar filtros
      </button>
    </div>
    <button class="register-btn" @click="$emit('register')">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M12 5v14M5 12h14"/>
      </svg>
      Registrar siniestro
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  search: [query: string]
  register: []
  clear: []
}>()

const searchQuery = ref('')

function onSearchInput(event: Event) {
  const value = (event.target as HTMLInputElement).value
  searchQuery.value = value
  emit('search', value)
}

function clearSearch() {
  searchQuery.value = ''
  emit('search', '')
  emit('clear')
}
</script>

<style scoped>
.toolbar-bar {
  background: #1A2E4A;
  padding: 0 1.5rem;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-shrink: 0;
}
.toolbar-left {
  display: flex;
  align-items: center;
  gap: 8px;
}
.search-wrap {
  position: relative;
}
.search-wrap input {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 8px;
  padding: 7px 14px 7px 34px;
  font-size: 13px;
  color: white;
  width: 230px;
  outline: none;
  font-family: 'DM Sans', sans-serif;
}
.search-wrap input::placeholder {
  color: rgba(255,255,255,0.4);
}
.search-wrap input:focus {
  border-color: #4A9EFF;
}
.search-ico {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255,255,255,0.4);
}
.clear-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12.5px;
  font-weight: 500;
  color: rgba(255,255,255,0.7);
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid rgba(255,255,255,0.15);
  background: transparent;
  font-family: 'DM Sans', sans-serif;
  transition: background 0.15s;
  white-space: nowrap;
}
.clear-btn:hover {
  background: rgba(255,255,255,0.08);
}
.register-btn {
  background: #E53E3E;
  color: white;
  border: none;
  border-radius: 7px;
  padding: 7px 18px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
}
.register-btn:hover {
  background: #C53030;
}
</style>
