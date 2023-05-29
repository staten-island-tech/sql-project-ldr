// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tzithwsneecztaewiwhj.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6aXRod3NuZWVjenRhZXdpd2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2Mzk5MjksImV4cCI6MTk5OTIxNTkyOX0.YeSE7Cuk2UX5jD6haxAnmM_-RdlssSRtowQH9ejl_1w'
const supabase = createClient(supabaseUrl, supabaseKey)
export const useStore = defineStore('storeId', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      user: {},
      signedIn: false,
      signedOut: true,
      appointments: []
    }
  }
},
actions: {
  async register(user) {
     await supabase.auth.getUser();
  }},
)
