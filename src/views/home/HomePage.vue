<script setup>
import { ref } from 'vue';
import 'primeicons/primeicons.css';

// --- Estado Reactivo para el Formulario ---
const form = ref({
  poliza: '',
  placas: ''
});

// --- Función para simular el envío ---
const handleSubmit = () => {
  if (form.value.poliza && form.value.placas) {
    alert(`Iniciando cotización para:\nPóliza: ${form.value.poliza}\nPlacas: ${form.value.placas}`);
  } else {
    alert('Por favor, completa ambos campos del formulario.');
  }
};

// --- Datos para las tarjetas de beneficios ---
const benefits = [
  {
    icon: 'pi-user',
    title: 'Asistencia 24/7',
    desc: 'Estamos contigo en cada kilómetro, a cualquier hora y en cualquier lugar del país.'
  },
  {
    icon: 'pi-shield',
    title: 'Cobertura Total',
    desc: 'Protección integral contra accidentes, robos y daños a terceros sin sorpresas.'
  },
  {
    icon: 'pi-mobile',
    title: 'Trámites 100% Digitales',
    desc: 'Gestiona tus pólizas y reporta siniestros desde tu celular en minutos.'
  }
];

// --- Datos para el pie de página ---
const footerSections = [
  {
    title: 'Compañía',
    links: ['Sobre Nosotros', 'Carreras', 'Blog', 'Prensa']
  },
  {
    title: 'Soporte',
    links: ['Centro de Ayuda', 'Reportar Siniestro', 'Preguntas Frecuentes', 'Términos y Condiciones']
  }
];

// Mapeo de iconos sociales para el footer
const socialIcons = [
  { icon: 'pi-facebook', link: '#' },
  { icon: 'pi-twitter', link: '#' },
  { icon: 'pi-instagram', link: '#' }
];
</script>

<template>
  <div class="min-h-screen text-slate-900 font-sans">
    <main>
      <section class="max-w-[1280px] mx-auto px-6 md:px-20 pt-8 pb-12 md:pt-12 md:pb-20">
        

        <div class="flex flex-col gap-10 lg:flex-row lg:items-center">
          <div class="flex flex-col gap-8 flex-1">
            <div class="flex flex-col gap-4">
              <h1 class="text-slate-900 text-4xl md:text-6xl font-black leading-tight tracking-tight">
                Protege lo que más quieres con el <span class="text-[#1152d4]">mejor seguro</span> de auto
              </h1>
              <p class="text-slate-600  text-lg md:text-xl font-normal max-w-lg">
                Tu tranquilidad es nuestra prioridad. Encuentra la cobertura que mejor se adapte a tu estilo de vida y conduce sin preocupaciones.
              </p>
            </div>

            <form @submit.prevent="handleSubmit" class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-xl border border-slate-100  flex flex-col gap-4 max-w-md">
              <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-bold text-slate-700 ">Placa del vehículo</label>
                  <div class="relative">
                    <i class="pi pi-car absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
                    <input 
                      v-model="form.placa"
                      class="w-full text-white pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-[#1152d4] text-slate-900 " 
                      placeholder="ABC-123" 
                      type="text"
                    />
                  </div>
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-bold text-slate-700 ">Póliza</label>
                  <div class="relative">
                    <i class="pi pi-id-card absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
                    <input 
                      v-model="form.poliza"
                      class="w-full text-white pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-[#1152d4] text-slate-900 " 
                      placeholder="2024" 
                      type="number"
                    />
                  </div>
                </div>
              </div>
              <button type="submit" class="w-full py-4 bg-[#1152d4] text-white font-bold rounded-lg hover:bg-[#1152d4]/90 transition-all shadow-lg shadow-[#1152d4]/20">
                Cotizar Ahora
              </button>
            </form>
          </div>

          <div class="flex-1 relative">
            <div class="w-full aspect-video md:aspect-square bg-center bg-cover rounded-2xl shadow-2xl bg-slate-100 dark:bg-slate-800" style='background-image: url("https://images.unsplash.com/photo-1555353540-64580b51c258?q=80&w=800&auto=format&fit=crop");'>
            </div>
            <div class="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 hidden md:flex items-center gap-4">
              <div class="bg-[#1152d4]/10 p-3 rounded-full">
                <i class="pi pi-verified text-[#1152d4] text-xl"></i>
              </div>
              <div>
                <p class="text-xs text-slate-500">Aseguradora Nº1</p>
                <p class="font-bold text-white text-slate-900 ">Líder en Confianza</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white py-20">
        <div class="max-w-[1280px] mx-auto px-6 md:px-20">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900  mb-4">¿Por qué elegir MediCar?</h2>
            <p class="text-slate-600  max-w-2xl mx-auto">Ofrecemos las mejores ventajas del mercado para que conduzcas con el respaldo de los expertos.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              v-for="(benefit, index) in benefits" 
              :key="index"
              class="p-8 rounded-2xl border border-slate-100  bg-[#f6f6f8]  hover:border-[#1152d4]/50 transition-all group"
            >
              <div class="w-14 h-14 bg-[#1152d4]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1152d4] group-hover:text-black transition-colors">
                <i :class="['pi', benefit.icon]" style="font-size: 1.75rem;"></i>
              </div>
              <h3 class="text-xl font-bold mb-3">{{ benefit.title }}</h3>
              <p class="text-slate-600  leading-relaxed">{{ benefit.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20">
        <div class="max-w-[1280px] mx-auto px-6 md:px-20">
          <div class="mb-20">
            <h3 class="text-center text-sm font-bold uppercase tracking-widest text-slate-500 mb-10">Nuestros Talleres Aliados</h3>
            <div class="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all text-slate-900 dark:text-slate-100">
              <div class="h-12 flex items-center gap-2">
                <i class="pi pi-cog text-black text-3xl"></i>
                <span class="text-2xl text-black">AUTOSERV</span>
              </div>
              <div class="h-12 flex items-center gap-2">
                <i class="pi pi-home text-black text-3xl"></i>
                <span class="text-2xl text-black">MOTORS</span>
              </div>
              <div class="h-12 flex items-center gap-2">
                <i class="pi pi-wrench text-black text-3xl"></i>
                <span class="text-2xl text-black">FIXPRO</span>
              </div>
              <div class="h-12 flex items-center gap-2">
                <i class="pi pi-bolt text-black text-3xl"></i>
                <span class="text-2xl text-black">REPAIRIT</span>
              </div>
            </div>
          </div>

          <div class="bg-[#1152d4] rounded-3xl p-10 md:p-16 text-white relative overflow-hidden">
            <div class="relative z-10 max-w-3xl mx-auto text-center">
              <i class="pi pi-quote-right text-5xl mb-6 opacity-30"></i>
              <p class="text-2xl md:text-3xl font-medium mb-8">"Tuve un percance en carretera a las 3 AM y la asistencia llegó en menos de 20 minutos. El proceso digital fue increíblemente rápido. ¡Totalmente recomendados!"</p>
              <div class="flex flex-col items-center">
                <div class="w-16 h-16 rounded-full bg-slate-300 mb-4 border-2 border-white/20" style="background-image: url('https://randomuser.me/api/portraits/men/32.jpg'); background-size: cover;"></div>
                <h4 class="font-bold text-lg">Ricardo Méndez</h4>
                <p class="text-white/70 text-sm">Cliente desde 2021</p>
              </div>
            </div>
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div class="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-white dark:bg-slate-900 border-t border-slate-200  py-16">
      <div class="max-w-[1280px] mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div class="col-span-1 md:col-span-1">
          <div class="flex items-center gap-3 text-[#1152d4] mb-6">
            <div class="size-6">
              <svg fill="currentColor" viewBox="0 0 48 48">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
              </svg>
            </div>
            <h2 class="text-slate-900  text-lg font-bold">MediCar</h2>
          </div>
          <p class="text-slate-500 text-sm leading-relaxed mb-6">
            Protegiendo el camino de miles de familias con tecnología y el mejor servicio humano del mercado.
          </p>
          <div class="flex gap-4">
            <a v-for="social in socialIcons" :key="social.icon" class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600  hover:bg-[#1152d4] hover:text-black transition-all" :href="social.link">
              <i :class="['pi', social.icon]"></i>
            </a>
          </div>
        </div>

        <div v-for="section in footerSections" :key="section.title">
          <h4 class="font-bold mb-6 text-slate-900 ">{{ section.title }}</h4>
          <ul class="flex flex-col gap-4 text-sm text-slate-500">
            <li v-for="link in section.links" :key="link">
              <a class="hover:text-[#1152d4] transition-colors" href="#">{{ link }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-6 text-slate-900 ">Contacto</h4>
          <ul class="flex flex-col gap-4 text-sm text-slate-500">
            <li class="flex items-center gap-3">
              <i class="pi pi-phone text-[#1152d4]"></i>
              0-800-SEGURO
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-envelope text-[#1152d4]"></i>
              hola@MediCar.com
            </li>
            <li class="flex items-start gap-3">
              <i class="pi pi-map-marker text-[#1152d4] mt-1"></i>
              <span>Av. Central 456, Piso 12<br/>Distrito Financiero</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="max-w-[1280px] mx-auto px-6 md:px-20 mt-16 pt-8 border-t border-slate-100  text-center text-xs text-slate-400">
        © 2024 MediCar Seguros Generales S.A. Todos los derechos reservados.
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* PrimeIcons usa font-family por defecto, pero puedes ajustar tamaños aquí si lo prefieres */
.pi {
  vertical-align: middle;
}
</style>