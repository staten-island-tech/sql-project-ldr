// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      user: 'e',
      signedIn: false,
      signedOut: true,
      appointments: []
    }
  }
})
