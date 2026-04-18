<template>
  <div class="page-header">
    <div class="header-content">
      <div class="header-text">
        <h1>Seguimiento de siniestros</h1>
        <p>Sigue el estado de tus siniestros en tiempo real</p>
      </div>
      <div class="header-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, #1E3A5F 0%, #2C5282 100%);
  padding: 2.2rem 2.5rem 2.8rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}
.page-header::before {
  content: '';
  position: absolute;
  right: 80px;
  top: -60px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: rgba(255,255,255,0.05);
}
.page-header::after {
  content: '';
  position: absolute;
  right: -30px;
  bottom: -80px;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: rgba(255,255,255,0.04);
}
.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
}
.header-text h1 {
  font-size: 26px;
  font-weight: 800;
  color: white;
  margin-bottom: 6px;
  letter-spacing: -0.3px;
}
.header-text p {
  font-size: 14px;
  color: rgba(255,255,255,0.65);
}
.header-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: rgba(255,255,255,0.1);
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.15);
}
</style>
