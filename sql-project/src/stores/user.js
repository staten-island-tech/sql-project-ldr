import { defineStore } from "pinia";
import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://tzithwsneecztaewiwhj.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6aXRod3NuZWVjenRhZXdpd2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2Mzk5MjksImV4cCI6MTk5OTIxNTkyOX0.YeSE7Cuk2UX5jD6haxAnmM_-RdlssSRtowQH9ejl_1w'
const supabase = createClient(supabaseUrl, supabaseKey)
export const useUserStore = defineStore("user", {
    state: () => ({
      user: null,
    }),
  
    actions: {
      async fetchUser() {
        const res = await fetch("");
  
        const user = await res.json();
        this.user = user;
      },
      async signUp(email, password) {
        const res = await fetch("https://localhost:3000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const user = await res.json()
        this.user = user;
      },
      async signIn(email, password) {
        const res = await fetch("https://localhost:3000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const user = await res.json();
        this.user = user;
      },
    },
  });