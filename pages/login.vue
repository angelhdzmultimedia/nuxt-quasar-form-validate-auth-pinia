<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar'

defineEmits([...useDialogPluginComponent.emits])

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
  useDialogPluginComponent()

onMounted(() => {
  dialogRef.value.show()
})

const emailPattern =
  /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/

const isEmail = (value) => !!emailPattern.test(value) || 'Email no valido'
const isRequired = (value) => !!value || 'Campo requerido'

const email = ref<string>('')
const password = ref<string>('')

function handleSubmit() {
  // Hacer el login de Pinia a la API
  // Si todo salio bien, cerrar el Dialog
  // Y navegar a Dashboard
  onDialogOK()
  return navigateTo('/')
}
</script>

<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="column items-center q-pa-sm">
      <q-card-section class="column items-center">
        <q-form @submit.prevent="handleSubmit">
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
          <q-btn @click="onDialogCancel" color="grey" label="Cancel" />
          <q-btn type="submit" color="primary" label="Login" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
