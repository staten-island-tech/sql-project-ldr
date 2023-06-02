// import { ref, computed } from 'vue'
/* import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      user: '',
      signedIn: false,
      signedOut: true,
      appointments: []
    }
  }
}) */

/* import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tzithwsneecztaewiwhj.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6aXRod3NuZWVjenRhZXdpd2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2Mzk5MjksImV4cCI6MTk5OTIxNTkyOX0.YeSE7Cuk2UX5jD6haxAnmM_-RdlssSRtowQH9ejl_1w'
const supabase = createClient(supabaseUrl, supabaseKey)
export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null
  })
})
export const useStore = defineStore('storeId', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      user: {}
    }
  },

let {
  data: { user }
} = await supabase.auth.getUser()
console.log(user.id) */

//
//test down here

// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tzithwsneecztaewiwhj.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6aXRod3NuZWVjenRhZXdpd2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2Mzk5MjksImV4cCI6MTk5OTIxNTkyOX0.YeSE7Cuk2UX5jD6haxAnmM_-RdlssSRtowQH9ejl_1w'
const supabase = createClient(supabaseUrl, supabaseKey)

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
    loadUser() {
      this.currentUser = supabase.auth.getUser()
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

/* export const useStore = defineStore({
  id: 'storeId',
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      user: {}
    }
  },

  actions: {
    async register() {
      const user = await supabase.auth.getUser()
      this.user = user
      localStorage.setItem('user', JSON.stringify(user))
      console.log('dominic shit')
    }
  }
}) */
