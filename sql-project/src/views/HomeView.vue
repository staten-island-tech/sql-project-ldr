<script>
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tzithwsneecztaewiwhj.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6aXRod3NuZWVjenRhZXdpd2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2Mzk5MjksImV4cCI6MTk5OTIxNTkyOX0.YeSE7Cuk2UX5jD6haxAnmM_-RdlssSRtowQH9ejl_1w'
const supabase = createClient(supabaseUrl, supabaseKey)

export default {
  methods: {
    async login(a) {
      a.preventDefault()

      let userEmail = document.getElementById('email').value
      let userPassword = document.getElementById('password').value

      console.log(userEmail)
      console.log(userPassword)

      if (userEmail == '' || userPassword == '') {
        console.log('error')
      } else {
        /* const { data, error } = await supabase
          .from('user_logins')
          .insert([{ email: userEmail, password: userPassword }]) */

        let { data, error } = await supabase.auth.signInWithPassword({
          email: userEmail,
          password: userPassword
        })
      }
    },
    async signup(a) {
      a.preventDefault()

      let userEmail = document.getElementById('signup-email').value
      let userPassword = document.getElementById('signup-password').value

      console.log(userEmail)
      console.log(userPassword)

      if (userEmail == '' || userPassword == '') {
        console.log('error')
      } else {
        /* const { data, error } = await supabase
          .from('user_logins')
          .insert([{ email: userEmail, password: userPassword }]) */

        let { data, error } = await supabase.auth.signUp({
          email: userEmail,
          password: userPassword
        })
      }
    }
  }
}
</script>

<template>
  <main>
    <div class="login-section">
      <h1>Login</h1>

      <form class="login form">
        <div class="email">
          <input type="email" placeholder="Email" id="email" />
        </div>

        <div class="password">
          <input type="password" placeholder="Password" id="password" />
        </div>

        <input type="submit" value="Login" id="login" @click="login" />
      </form>

      <div class="signup-instead">
        <span>Don't have an account? <a href="#" class="signup-link">Sign Up</a></span>
      </div>
    </div>

    <!-- <form class="signup-form">
      <div class="input">
        <input type="email" placeholder="Email" id="signup-email" />
      </div>

      <div class="input">
        <input type="password" placeholder="Password" id="signup-password" />
      </div>

      <input type="submit" value="Sign Up" id="signup-submit" @click="signup" />
    </form> -->
  </main>
</template>

<style scoped>
.login-section {
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
}
input {
  width: 15rem;
  padding: 5px;
  margin-bottom: 1rem;
}
</style>
