import { defineStore } from 'pinia'
export const useAuthStore = defineStore({
  id: 'auth',
  state: () => {
    // initialize state from local storage to enable user to stay logged in
    /* user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null */

    return {
      currentUser: null
    }
  },
  actions: {
    loadUser(user) {
      this.currentUser = user
    },
    clearUser() {
      this.currentUser = null
    }
  },
  getters: {
    isAuthenticated() {
      return !!this.currentUser
    }
  }
})
