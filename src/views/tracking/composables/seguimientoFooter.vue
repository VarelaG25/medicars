<template>
  <footer class="site-footer">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="footer-logo">
          <div class="footer-logo-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2">
              <path d="M19 17H5a2 2 0 01-2-2V7l2-4h10l4 4v8a2 2 0 01-2 2z"/>
              <circle cx="8.5" cy="17.5" r="2.5"/><circle cx="15.5" cy="17.5" r="2.5"/>
            </svg>
          </div>
          MediCar
        </div>
        <p class="footer-desc">Protegiendo el camino de miles de familias con tecnología avanzada y el mejor servicio humano del mercado.</p>
        <div class="footer-socials">
          <div class="social-btn" title="Facebook">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </div>
          <div class="social-btn" title="Twitter">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
          </div>
          <div class="social-btn" title="LinkedIn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </div>
          <div class="social-btn" title="Instagram">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </div>
        </div>
      </div>

      <div class="footer-col">
        <h4>Compañía</h4>
        <ul>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Carreras</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Soporte</h4>
        <ul>
          <li><a href="#">Centro de ayuda</a></li>
          <li><a href="#">Términos de servicio</a></li>
          <li><a href="#">Privacidad</a></li>
          <li><a href="#">Siniestros</a></li>
        </ul>
      </div>

      <div class="footer-contact">
        <h4>Contacto</h4>
        <div class="contact-item">
          <div class="contact-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
          </div>
          <div class="contact-text"><strong>0-800-SEGURO</strong>Lunes a viernes, 8am – 8pm</div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <div class="contact-text"><strong>hola@medicar.com</strong>Respondemos en menos de 24h</div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div class="contact-text"><strong>Av. Central 456, Piso 12</strong>Distrito Financiero, Lima</div>
        </div>
      </div>
    </div>

    <hr class="footer-divider"/>
    <div class="footer-bottom">
      <p class="footer-copy">© 2026 MediCar Seguros Generales S.A. Todos los derechos reservados.</p>
      <div class="footer-links">
        <a href="#">Privacidad</a>
        <a href="#">Cookies</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.site-footer {
  background: #111D2E;
  color: white;
  flex-shrink: 0;
}
.footer-top {
  display: flex;
  gap: 4rem;
  padding: 3rem 4rem 2.5rem;
}
.footer-brand {
  flex: 1.2;
}
.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}
.footer-logo-icon {
  width: 32px;
  height: 32px;
  background: #2563EB;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-desc {
  font-size: 13px;
  color: rgba(255,255,255,0.45);
  line-height: 1.7;
  margin-bottom: 1.4rem;
  max-width: 280px;
}
.footer-socials {
  display: flex;
  gap: 10px;
}
.social-btn {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: rgba(255,255,255,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.15s;
  color: rgba(255,255,255,0.5);
}
.social-btn:hover {
  background: rgba(255,255,255,0.15);
  color: white;
}
.footer-col {
  flex: 1;
}
.footer-col h4 {
  font-size: 11px;
  font-weight: 700;
  color: rgba(255,255,255,0.9);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1.1rem;
}
.footer-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer-col ul li a {
  font-size: 13.5px;
  color: rgba(255,255,255,0.45);
  text-decoration: none;
  transition: color 0.15s;
}
.footer-col ul li a:hover {
  color: white;
}
.footer-contact {
  flex: 1.3;
}
.footer-contact h4 {
  font-size: 11px;
  font-weight: 700;
  color: rgba(255,255,255,0.9);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1.1rem;
}
.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 14px;
}
.contact-icon {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: rgba(255,255,255,0.5);
}
.contact-text {
  font-size: 13px;
  color: rgba(255,255,255,0.5);
  line-height: 1.5;
}
.contact-text strong {
  color: rgba(255,255,255,0.85);
  display: block;
  font-weight: 500;
}
.footer-divider {
  border: none;
  border-top: 1px solid rgba(255,255,255,0.08);
  margin: 0 4rem;
}
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 4rem;
}
.footer-copy {
  font-size: 12px;
  color: rgba(255,255,255,0.3);
}
.footer-links {
  display: flex;
  gap: 1.5rem;
}
.footer-links a {
  font-size: 12px;
  color: #4A9EFF;
  text-decoration: none;
}
.footer-links a:hover {
  text-decoration: underline;
}
</style>
