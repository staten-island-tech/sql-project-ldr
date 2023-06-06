<script>
import router from '../router'
import { useAuthStore } from '../stores/counter'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tzithwsneecztaewiwhj.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6aXRod3NuZWVjenRhZXdpd2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2Mzk5MjksImV4cCI6MTk5OTIxNTkyOX0.YeSE7Cuk2UX5jD6haxAnmM_-RdlssSRtowQH9ejl_1w'
const supabase = createClient(supabaseUrl, supabaseKey)

async function signIn(supabase, userEmail, userPassword) {
  try {
    await supabase.auth.signInWithPassword({
      email: userEmail,
      password: userPassword
    })

    let {
      data: { user }
    } = await supabase.auth.getUser()
    useAuthStore().loadUser(user.id)
    router.push('requestlog')
  } catch (error) {
    console.error(error)
  }
}

export default {
  methods: {
    async login(a) {
      a.preventDefault()

      let userEmail = document.getElementById('email').value
      let userPassword = document.getElementById('password').value

      if (userEmail === '' || userPassword === '') {
        console.log('error')
      } else {
        signIn(supabase, userEmail, userPassword)
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
        <span
          >Don't have an account? <a><RouterLink to="/signupPage">Sign Up</RouterLink></a></span
        >
      </div>
    </div>
  </main>
</template>

<style scoped>
.login-section {
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 50vh;
}

h1 {
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 35px;
}

#email,
#password {
  width: 20rem;
  padding: 10px;
  margin-bottom: 0.85rem;
}

#login {
  width: 20rem;
  padding: 5px;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
}
</style>
