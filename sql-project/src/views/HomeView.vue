<script>
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tzithwsneecztaewiwhj.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6aXRod3NuZWVjenRhZXdpd2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2Mzk5MjksImV4cCI6MTk5OTIxNTkyOX0.YeSE7Cuk2UX5jD6haxAnmM_-RdlssSRtowQH9ejl_1w'
const supabase = createClient(supabaseUrl, supabaseKey)

// let { data: user_logins, error } = await supabase
//   .from('user_logins')
//   .select('username')
// console.log(data)

export default {
  methods:  function () {
    document.querySelector('signup-submit').addEventListener('submit', async function () {
      let userEmail = document.querySelector('.signup-email').value
      let userPassword = document.querySelector('.signup-password').value

      console.log(userEmail)
      console.log(userPassword)

      const { data, error } = await supabase
      .from('user_logins')
      .insert([{ email: 'userEmail', password: 'userPassword' }])
    })

    
  }
}
</script>

<template>
  <main>
    <div class="login-card">
      <h2>Login</h2>
      <input type="text" placeholder="email" />
      <br />
      <input type="text" placeholder="password" />
      <br />
      <button class="submit">Login</button>
    </div>

    <div class="signup-card">
      <h2>Sign Up</h2>
      <input class="signup-email" type="text" placeholder="email" />
      <br />
      <input class="signup-password" type="text" placeholder="password" />
      <br />
      <button class="signup-submit">Sign Up</button>
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
