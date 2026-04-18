<template>
  <div>
    <div class="table-wrapper">
      <table>
        <colgroup>
          <col class="c-check"/>
          <col class="c-folio"/>
          <col class="c-prior"/>
          <col class="c-user"/>
          <col class="c-alias"/>
          <col class="c-company"/>
          <col class="c-tipo"/>
          <col class="c-poliza"/>
          <col class="c-desc"/>
          <col class="c-fecha"/>
          <col class="c-ded"/>
          <col class="c-act"/>
        </colgroup>
        <thead>
          <tr>
            <th><input type="checkbox" class="cb" @change="toggleAll" v-model="selectAll"/></th>
            <th class="sortable" @click="sortBy('IdSiniestroUnidad')">
              <div class="th-inner">ID 
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M12 5v14M5 12l7-7 7 7"/>
                </svg>
              </div>
            </th>
            <th class="sortable" @click="sortBy('Prioridad')">
              <div class="th-inner">Prioridad 
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M12 5v14M5 12l7-7 7 7"/>
                </svg>
              </div>
            </th>
            <th>Usuario</th>
            <th>Alias</th>
            <th>Compañía</th>
            <th>Tipo de siniestro</th>
            <th>Póliza</th>
            <th>Descripción</th>
            <th class="sortable" @click="sortBy('FechaSiniestro')">
              <div class="th-inner">Fecha 
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M12 5v14M5 12l7-7 7 7"/>
                </svg>
              </div>
            </th>
            <th>Deducible</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-if="paginatedData.length > 0">
          <tr v-for="item in paginatedData" :key="item.IdSiniestroUnidad" :class="{ selected: selectedRows.has(item.IdSiniestroUnidad) }">
            <td><input type="checkbox" class="cb" :checked="selectedRows.has(item.IdSiniestroUnidad)" @change="toggleRow(item.IdSiniestroUnidad)"/></td>
            <td class="td-folio">{{ String(item.IdSiniestroUnidad).padStart(3, '0') }}</td>
            <td>
              <div :class="getPriorityClass(item.Prioridad)">
                <div class="dots">
                  <div v-for="i in 3" :key="i" :class="getDotClass(item.Prioridad, i)"></div>
                </div>
                {{ item.Prioridad }}
              </div>
            </td>
            <td>
              <div class="td-user">
                <div class="avatar" :style="{ background: getAvatarColor(item.Usuario) }">
                  {{ getInitials(item.Usuario) }}
                </div>
                {{ item.Usuario }}
              </div>
            </td>
            <td class="td-alias">{{ item.Alias }}</td>
            <td class="td-company">{{ item.Compania }}</td>
            <td><span :class="getBadgeClass(item.TipoSiniestro)">{{ item.TipoSiniestro }}</span></td>
            <td class="td-poliza">{{ item.Poliza }}</td>
            <td class="td-desc">{{ item.Descripcion }}</td>
            <td class="td-date">{{ formatDate(item.FechaSiniestro) }}</td>
            <td><span :class="item.AplicaDeducible ? 'deducible ded-yes' : 'deducible ded-no'">{{ item.AplicaDeducible ? 'Cubierto' : 'No cubierto' }}</span></td>
            <td><span class="row-action"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg></span></td>
          </tr>
        </tbody>
      </table>
      
      <!-- Empty State -->
      <div v-if="paginatedData.length === 0" class="empty-state visible">
        <div class="empty-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E3A5F" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
        </div>
        <h3>No encontramos siniestros</h3>
        <p>No hay resultados con ese criterio.<br/>Intenta con otro término o limpia los filtros.</p>
      </div>
    </div>

    <!-- Pagination -->
    <div class="pagination-bar">
      <span class="page-label">Página <span>{{ currentPage }}</span> de <span>{{ totalPages }}</span></span>
      <div class="pagination">
        <button class="page-btn" @click="firstPage" :disabled="currentPage === 1">«</button>
        <button class="page-btn" @click="prevPage" :disabled="currentPage === 1">‹</button>
        <button v-for="page in displayedPages" :key="page" :class="['page-btn', { active: page === currentPage }]" @click="goToPage(page)">
          {{ page }}
        </button>
        <button class="page-btn" @click="nextPage" :disabled="currentPage === totalPages">›</button>
        <button class="page-btn" @click="lastPage" :disabled="currentPage === totalPages">»</button>
      </div>
      <span class="page-label">Mostrando <span>{{ paginatedData.length }}</span> de <span>{{ filteredData.length }}</span> siniestros</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

interface Siniestro {
  IdSiniestroUnidad: number
  Prioridad: string
  Usuario: string
  Alias: string
  Compania: string
  TipoSiniestro: string
  Poliza: string
  Descripcion: string
  FechaSiniestro: string
  AplicaDeducible: boolean
  MontoDeducible: number
}

const props = defineProps<{
  dataSource: Siniestro[]
  searchQuery?: string
}>()

const currentPage = ref(1)
const rowsPerPage = 8
const selectAll = ref(false)
const selectedRows = ref<Set<number>>(new Set())
const sortField = ref<keyof Siniestro>('IdSiniestroUnidad')
const sortDirection = ref<'asc' | 'desc'>('asc')

// Priority order for sorting
const priorityOrder: Record<string, number> = { 'Alta': 3, 'Media': 2, 'Baja': 1 }

const sortedData = computed(() => {
  const data = [...props.dataSource]
  if (sortField.value === 'Prioridad') {
    data.sort((a, b) => {
      const orderA = priorityOrder[a.Prioridad] || 0
      const orderB = priorityOrder[b.Prioridad] || 0
      return sortDirection.value === 'asc' ? orderA - orderB : orderB - orderA
    })
  } else {
    data.sort((a, b) => {
      const valA = a[sortField.value]
      const valB = b[sortField.value]
      if (valA < valB) return sortDirection.value === 'asc' ? -1 : 1
      if (valA > valB) return sortDirection.value === 'asc' ? 1 : -1
      return 0
    })
  }
  return data
})

const filteredData = computed(() => {
  if (!props.searchQuery) return sortedData.value
  const q = props.searchQuery.toLowerCase()
  return sortedData.value.filter(row =>
    Object.values(row).some(v => String(v).toLowerCase().includes(q))
  )
})

const totalPages = computed(() => Math.ceil(filteredData.value.length / rowsPerPage))
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * rowsPerPage
  const end = start + rowsPerPage
  return filteredData.value.slice(start, end)
})

const displayedPages = computed(() => {
  const pages = []
  const maxVisible = 3
  let startPage = Math.max(1, currentPage.value - Math.floor(maxVisible / 2))
  let endPage = Math.min(totalPages.value, startPage + maxVisible - 1)
  
  if (endPage - startPage + 1 < maxVisible) {
    startPage = Math.max(1, endPage - maxVisible + 1)
  }
  
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }
  return pages
})

// Reset to first page when data changes
watch(() => props.searchQuery, () => {
  currentPage.value = 1
  selectAll.value = false
  selectedRows.value.clear()
})

watch(filteredData, () => {
  currentPage.value = 1
})

function sortBy(field: keyof Siniestro) {
  if (sortField.value === field) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortField.value = field
    sortDirection.value = 'asc'
  }
}

function toggleAll(event: Event) {
  const checked = (event.target as HTMLInputElement).checked
  if (checked) {
    paginatedData.value.forEach(item => selectedRows.value.add(item.IdSiniestroUnidad))
  } else {
    paginatedData.value.forEach(item => selectedRows.value.delete(item.IdSiniestroUnidad))
  }
  selectAll.value = checked
}

function toggleRow(id: number) {
  if (selectedRows.value.has(id)) {
    selectedRows.value.delete(id)
  } else {
    selectedRows.value.add(id)
  }
  selectAll.value = paginatedData.value.length > 0 && paginatedData.value.every(item => selectedRows.value.has(item.IdSiniestroUnidad))
}

function goToPage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    selectAll.value = false
    selectedRows.value.clear()
  }
}

function prevPage() { goToPage(currentPage.value - 1) }
function nextPage() { goToPage(currentPage.value + 1) }
function firstPage() { goToPage(1) }
function lastPage() { goToPage(totalPages.value) }

// Helper functions
const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

const getPriorityClass = (priority: string) => {
  if (priority === 'Alta') return 'priority pri-high'
  if (priority === 'Media') return 'priority pri-mid'
  return 'priority pri-low'
}

const getDotClass = (priority: string, index: number) => {
  if (priority === 'Alta') {
    return index <= 3 ? 'dot dot-filled-high' : 'dot dot-empty'
  }
  if (priority === 'Media') {
    return index <= 2 ? 'dot dot-filled-mid' : 'dot dot-empty'
  }
  return index === 1 ? 'dot dot-filled-low' : 'dot dot-empty'
}

const getBadgeClass = (tipo: string) => {
  const map: Record<string, string> = {
    'Colisión / Choque': 'badge-red',
    'Volcadura': 'badge-amber',
    'Incendio': 'badge-orange',
    'Robo total': 'badge-red',
    'Daños materiales': 'badge-blue',
  }
  return map[tipo] ?? 'badge-blue'
}

const avatarColors = ['#E53E3E','#3182CE','#805AD5','#DD6B20','#2F855A','#C53030','#6B46C1','#2C7A7B']
const getAvatarColor = (name: string) => avatarColors[name.charCodeAt(0) % avatarColors.length]
const getInitials = (name: string) => name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()
</script>

<style scoped>
.table-wrapper {
  background: white;
  overflow-x: auto;
  flex-shrink: 0;
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12.5px;
  table-layout: fixed;
  min-width: 1100px;
}
col.c-check { width: 40px; }
col.c-folio { width: 55px; }
col.c-prior { width: 110px; }
col.c-user { width: 150px; }
col.c-alias { width: 90px; }
col.c-company { width: 75px; }
col.c-tipo { width: 140px; }
col.c-poliza { width: 120px; }
col.c-desc { width: auto; }
col.c-fecha { width: 90px; }
col.c-ded { width: 108px; }
col.c-act { width: 40px; }

thead th {
  background: #2D3F5A;
  color: rgba(255,255,255,0.75);
  padding: 10px 10px;
  text-align: left;
  font-size: 10.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  position: sticky;
  top: 0;
  z-index: 2;
  user-select: none;
}
thead th.sortable {
  cursor: pointer;
}
thead th.sortable:hover {
  background: #354a6a;
}
thead th .th-inner {
  display: flex;
  align-items: center;
  gap: 4px;
}
tbody tr {
  border-bottom: 1px solid #F1F3F7;
  transition: background 0.12s;
  cursor: pointer;
}
tbody tr:hover {
  background: #EEF4FF;
}
tbody tr.selected {
  background: #E8F0FE;
}
tbody td {
  padding: 18px 10px;
  color: #1A2E4A;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cb {
  width: 15px;
  height: 15px;
  accent-color: #1E3A5F;
  cursor: pointer;
}
.td-folio {
  font-weight: 700;
  color: #2563EB;
  font-size: 12px;
}
.priority {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 500;
}
.dots {
  display: flex;
  gap: 3px;
}
.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}
.dot-filled-high { background: #E53E3E; }
.dot-filled-mid { background: #F6AD55; }
.dot-filled-low { background: #68D391; }
.dot-empty { background: #CBD5E0; }
.pri-high { color: #C53030; }
.pri-mid { color: #B7791F; }
.pri-low { color: #276749; }
.td-user {
  display: flex;
  align-items: center;
  gap: 7px;
}
.avatar {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}
.td-alias { color: #6B7280; font-size: 12px; }
.td-company { font-weight: 700; color: #1E3A5F; font-size: 12px; }
.td-poliza { color: #718096; font-size: 11px; }
.td-date { color: #718096; font-size: 12px; }
.td-desc { color: #4A5568; font-size: 12px; }
.badge {
  display: inline-flex;
  align-items: center;
  padding: 3px 9px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  border: 1px solid transparent;
}
.badge-red { background: #FFF5F5; color: #C53030; border-color: #FEB2B2; }
.badge-amber { background: #FFFAF0; color: #B7791F; border-color: #FAD08A; }
.badge-blue { background: #EBF8FF; color: #2B6CB0; border-color: #BEE3F8; }
.badge-purple { background: #FAF5FF; color: #6B46C1; border-color: #D6BCFA; }
.badge-orange { background: #FFFAF0; color: #C05621; border-color: #FBD38D; }
.deducible {
  display: inline-flex;
  align-items: center;
  padding: 3px 9px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  border: 1px solid transparent;
}
.ded-yes { background: #F0FFF4; color: #276749; border-color: #9AE6B4; }
.ded-no { background: #FFF5F5; color: #C53030; border-color: #FEB2B2; }
.row-action {
  opacity: 0;
  transition: opacity 0.15s;
  color: #A0AEC0;
  cursor: pointer;
}
tbody tr:hover .row-action {
  opacity: 1;
}
.empty-state {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 12px;
  background: white;
}
.empty-state.visible {
  display: flex;
}
.empty-icon {
  width: 52px;
  height: 52px;
  background: #EEF2FF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.empty-state h3 {
  font-size: 15px;
  font-weight: 700;
  color: #374151;
}
.empty-state p {
  font-size: 13px;
  color: #9CA3AF;
  text-align: center;
}
.pagination-bar {
  background: white;
  border-top: 1px solid #E5E7EB;
  padding: 14px 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.page-label {
  font-size: 13px;
  color: #6B7280;
  font-weight: 500;
}
.page-label span {
  color: #1E3A5F;
  font-weight: 700;
}
.pagination {
  display: flex;
  align-items: center;
  gap: 4px;
}
.page-btn {
  width: 32px;
  height: 32px;
  border-radius: 7px;
  border: 1px solid #E5E7EB;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  cursor: pointer;
  color: #555;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  transition: background 0.15s;
}
.page-btn.active {
  background: #1E3A5F;
  color: white;
  border-color: #1E3A5F;
}
.page-btn:hover:not(.active) {
  background: #EEF2FF;
  color: #1E3A5F;
}
.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
