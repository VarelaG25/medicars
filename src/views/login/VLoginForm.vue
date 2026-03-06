<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const navigate = () => {
  console.log('Navegando a la página de registro')
  location.href = '#/register'
}
</script>

<template>
  <div class="bg-[#f6f6f8] min-h-screen flex flex-col justify-between">

    <!-- MAIN -->
    <div class="flex items-center justify-center flex-1 px-4">

      <div class="max-w-[448px] w-full">

        <!-- CARD -->
        <div class="bg-white/70 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-white/30 space-y-10">

          <!-- TITULO -->
          <div class="text-center space-y-3">
            <h1 class="text-3xl font-bold text-slate-900">
              ¡Bienvenido de nuevo!
            </h1>

            <p class="text-slate-500 text-sm">
              Accede a tu cuenta de MediCar y gestiona tus pólizas fácilmente.
            </p>
          </div>

          <!-- FORM -->
          <div class="space-y-6">

            <!-- EMAIL -->
            <div class="space-y-2">
              <label class="text-sm font-semibold text-slate-900">
                Correo electrónico
              </label>

              <input v-model="email" type="email" placeholder="ejemplo@correo.com"
                class="w-full rounded-xl border border-slate-200 px-4 py-3" />
            </div>

            <!-- PASSWORD -->
            <div class="space-y-2">
              <div class="flex justify-between text-sm">
                <label class="font-semibold text-slate-900">
                  Contraseña
                </label>

                <a class="text-blue-600 font-bold">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <input v-model="password" type="password" placeholder="••••••••"
                class="w-full rounded-xl border border-slate-200 px-4 py-3" />
            </div>

            <!-- CHECKBOX -->
            <label class="flex items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" />
              Mantener sesión iniciada
            </label>

            <!-- BOTON -->
            <button
              class="w-full py-4 rounded-xl text-white font-bold bg-gradient-to-r from-blue-600 to-purple-500 shadow-lg">
              Iniciar Sesión
            </button>

          </div>

        </div>

        <!-- REGISTER -->
        <a href="#/register" class="mt-6 block text-center text-sm text-slate-600">
          ¿No tienes una cuenta? <span class="text-blue-600 font-bold">Regístrate</span>
        </a>

      </div>

    </div>

    <!-- FOOTER -->
    <div class="text-center text-xs text-slate-400 pb-8">
      © 2024 MediCar. Todos los derechos reservados.
    </div>

  </div>
</template>
