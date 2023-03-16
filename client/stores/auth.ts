import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  function login(email: string, password: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch('http://localhost:5000/api/auth/login', {
          method: 'post',
          body: { email, password },
          mode: 'cors',
          credentials: 'include',
        })
        resolve(data)
      } catch (error: unknown) {
        reject(error)
      }
    })
  }

  return {
    login,
  }
})
