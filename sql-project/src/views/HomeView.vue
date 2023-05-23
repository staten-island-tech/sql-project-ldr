<script>
import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://tzithwsneecztaewiwhj.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6aXRod3NuZWVjenRhZXdpd2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2Mzk5MjksImV4cCI6MTk5OTIxNTkyOX0.YeSE7Cuk2UX5jD6haxAnmM_-RdlssSRtowQH9ejl_1w'
const supabase = createClient(supabaseUrl, supabaseKey)

/* let { data: user_logins, error } = await supabase
  .from('user_logins')
  .select('username')
console.log(data) */

export default {
  data() {},
  methods: {
    async signup() {
      let userEmail = document.getElementById('signup-email').value
      let userPassword = document.getElementById('signup-password').value

      console.log(userEmail)
      console.log(userPassword)

      if (userEmail === '' || userPassword === '') {
        console.log('error')
      } else {
        const { data, error } = await supabase
          .from('user_logins')
          .insert([{ email: userEmail, password: userPassword }])
      }

      /* let { data, error } = await supabase.auth.signUp({
          email: userEmail,
          password: userPassword
        }) */
    }
  }
}
</script>

<template>
  <main>
    <div class="signup-card">
      <h2>Sign Up</h2>
      <input type="text" id="signup-email" placeholder="email" required />
      <br />
      <input type="text" id="signup-password" placeholder="password" required />
      <br />
      <input type="submit" value="submit" id="signup-submit" @click="signup" />
    </div>
  </main>
</template>



<style scoped>
.login-card {
  width: 20%;
  /* border: solid 2px red; */
}
.submit {
  width: 11rem;
}
</style>
