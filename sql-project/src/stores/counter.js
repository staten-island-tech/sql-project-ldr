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
      //currentUserTotalRequests: 0
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
    /*     totalRequests: (state) => {
        const { data, error } = await supabase
          .from('logins')
          .select('total_requests')
          .eq('user_id', state.currentUser)
        console.log(error)
        return (state.currentUserTotalRequests = data)
    } */
  }
})
