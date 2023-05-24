<script>
import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://tzithwsneecztaewiwhj.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6aXRod3NuZWVjenRhZXdpd2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2Mzk5MjksImV4cCI6MTk5OTIxNTkyOX0.YeSE7Cuk2UX5jD6haxAnmM_-RdlssSRtowQH9ejl_1w'
const supabase = createClient(supabaseUrl, supabaseKey)

export default {
  methods: {
    async signup(a) {
      a.preventDefault()

      let userEmail = document.getElementById('signup-email').value
      let userPassword = document.getElementById('signup-password').value

      console.log(userEmail)
      console.log(userPassword)

      if (userEmail === '' || userPassword === '') {
        console.log('error')
      } else {
        let { data, error } = await supabase.auth.signUp({
          email: userEmail,
          password: userPassword
        })
        console.log(data.email)
      }
    }
  },

methods:{
  async  login(){

    let userEmail = document.getElementById('signup-email').value
      let userPassword = document.getElementById('signup-password').value
  },
  async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'example@email.com',
    password: 'example-password',
  }
  )}}}
</script>

<template>
  <main>
    <form class="signup-form">
      <div class="email">
        <input type="email" placeholder="Email" id="email" />
      </div>

      <div class="password">
        <input type="password" placeholder="Password" id="password" />
      </div>

      <input type="submit" value="Sign Up" id="signup-submit" @click="signup" />
      <input type="submit" value="Login" id="Login-submit" @click="login" />
    </form>
  </main>

  
</template>




<style scoped>
.signup-form {
  height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
}

#email,
#password {
  width: 17.5rem;
  padding: 10px;
  margin-bottom: 0.85rem;
}

#email:invalid {
  border: 2px solid red;
  animation: shake 0.2s 2;
}
@keyframes shake {
  25% {
    translate: 6px 0;
  }
  50% {
    translate: -6px 0;
  }
  75% {
    translate: 6px 0;
  }
}

#login {
  width: 17.5rem;
  padding: 5px;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
}
</style>
