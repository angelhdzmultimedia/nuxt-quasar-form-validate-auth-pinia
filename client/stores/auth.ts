import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  return {
    count: ref(12),
  }
})
