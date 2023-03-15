<script setup lang="ts">
// Imports
import { useDialogPluginComponent, QForm } from 'quasar'

// Emits
defineEmits([...useDialogPluginComponent.emits])

// Fields

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
  useDialogPluginComponent()

const form = ref<QForm | undefined>()
const email = ref<string>('')
const password = ref<string>('')
const route = useRoute()

// Validaciones
const emailPattern =
  /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/

const isEmail = (value) => !!emailPattern.test(value) || 'Email no valido'
const isRequired = (value) => !!value || 'Campo requerido'

// Métodos

function handleSubmit() {
  // Hacer el login de Pinia a la API
  // Si todo salio bien, cerrar el Dialog
  // Y navegar a Dashboard
  onDialogOK()
  return navigateTo('/')
}

function cancel() {
  onDialogCancel()

  if (route.path === '/login') {
    alert('Como estamos en /login, redirigir a /.')
    return navigateTo('/')
  }
}

// Lifecycle Hooks

onMounted(() => {
  // Si estamos en la pagina de /login,
  if (route.path === '/login') {
    // mostrar el Dialog.
    dialogRef.value.show()
  }

  // Sino, quiere decir que estamos en cualquier otra pagina,
  // y para que el dialog se abra como popup, hay que llamar
  // Dialog.create().
})
</script>

<template>
  <q-dialog
    ref="dialogRef"
    @hide="onDialogHide"
    :persistent="$route.path === '/login'"
  >
    <div class="column">
      <span>Ruta Actual: {{ $route.path }}</span>
      <span
        >pages/login.vue como:
        {{ $route.path === '/' ? 'Dialog' : 'Router Page' }}</span
      >
    </div>
    <q-card class="q-dialog-plugin column items-center q-pa-sm">
      <q-form ref="form" @submit.prevent="handleSubmit">
        <q-card-section class="column items-center">
          <span class="text-h6">Login</span>

          <q-input
            lazy-rules
            :rules="[isEmail, isRequired]"
            v-model="email"
            label="Email"
          />
          <q-input
            type="password"
            lazy-rules
            :rules="[isRequired]"
            v-model="password"
            label="Password"
          />

          <q-card-actions>
            <q-btn @click="cancel" color="grey" label="Cancel" />
            <q-btn type="submit" color="primary" label="Login" />
          </q-card-actions>
        </q-card-section>
      </q-form>
    </q-card>
  </q-dialog>
</template>
