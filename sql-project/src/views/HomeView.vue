<script>
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tzithwsneecztaewiwhj.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6aXRod3NuZWVjenRhZXdpd2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2Mzk5MjksImV4cCI6MTk5OTIxNTkyOX0.YeSE7Cuk2UX5jD6haxAnmM_-RdlssSRtowQH9ejl_1w'
const supabase = createClient(supabaseUrl, supabaseKey)

export default {
  data() {},
  methods: {
    async signup(a) {
      a.preventDefault()

      let name = document.getElementById('signup-name').value
      let userEmail = document.getElementById('signup-email').value
      let userPassword = document.getElementById('signup-password').value

      console.log(name)
      console.log(userEmail)
      console.log(userPassword)

      if (name == '' || userEmail == '' || userPassword == '') {
        console.log('error')
      } else {
        const { data, error } = await supabase
          .from('user_logins')
          .insert([{ email: userEmail, password: userPassword }])

        /* let { data, error } = await supabase.auth.signUp({
          email: userEmail,
          password: userPassword
        }) */
      }
    }
  }
}
</script>

<template>
  <main>
    <form class="signup-card">
      <div class="name-inputs">
        <div class="input">
          <label for="first-name">First Name</label>
          <input type="text" id="signup-name" placeholder="name" required />
        </div>

        <div class="input">
          <label for="last-name">Last Name</label>
          <input type="text" id="signup-name" placeholder="name" required />
        </div>
      </div>

      <div class="input">
        <label for="email">Email</label>
        <input type="text" id="signup-email" placeholder="email" required />
      </div>

      <div class="input">
        <label for="password">Password</label>
        <input type="text" id="signup-password" placeholder="password" required />
      </div>

      <input type="submit" value="Sign Up" id="signup-submit" @click="signup" />
    </form>
  </main>
</template>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
  width: 10rem;
}
</style>
