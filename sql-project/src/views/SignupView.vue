<script>
import { useAuthStore } from '../stores/counter'
import { createClient } from '@supabase/supabase-js'
import router from '../router'

const supabaseUrl = 'https://tzithwsneecztaewiwhj.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6aXRod3NuZWVjenRhZXdpd2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2Mzk5MjksImV4cCI6MTk5OTIxNTkyOX0.YeSE7Cuk2UX5jD6haxAnmM_-RdlssSRtowQH9ejl_1w'
const supabase = createClient(supabaseUrl, supabaseKey)

async function signUp(supabase, userEmail, userPassword) {
  try {
    await supabase.auth.signUp({
      email: userEmail,
      password: userPassword
    })
    await supabase.auth.signInWithPassword({
      email: userEmail,
      password: userPassword
    })

    let {
      data: { user }
    } = await supabase.auth.getUser()

    await supabase.from('logins').insert([{ user_id: user.id, email: userEmail }])
  } catch (error) {
    console.error(error)
  }
}

export default {
  methods: {
    async signup(a) {
      a.preventDefault()

      let userEmail = document.getElementById('email').value
      let userPassword = document.getElementById('password').value
      let userPasswordConfirmed = document.getElementById('password-confirm').value

      if (userEmail === '' || userPassword === '') {
        console.error('error')
      } else {
        signUp(supabase, userEmail, userPasswordConfirmed)
        useAuthStore()
        router.push('loginpage')
      }
    }
  }
}
</script>

<template>
  <main>
    <div class="background">
      <div class="signup-section">
        <h1>Sign Up</h1>

        <form class="signup-form">
          <div class="email">
            <input type="email" placeholder="Email" id="email" />
          </div>

          <div class="password">
            <input type="password" placeholder="Password" id="password" />
          </div>
          <div class="password">
            <input type="password" placeholder="Confirm Password" id="password-confirm" />
          </div>

          <input type="submit" value="Sign Up" id="signup" @click="signup" />
        </form>

        <div class="login-instead">
          <span
            >Already have an account? <a><RouterLink to="/loginPage">Login</RouterLink></a></span
          >
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.background {
  background-color: rgba(161, 219, 249, 255);
  background-size: 30%;
  background-repeat: no-repeat;
  background-image: url('https://img.freepik.com/premium-vector/cute-cat-corgi-dog-cartoon-vector-icon-illustration_480044-276.jpg?w=2000');
}
a {
  text-decoration: underline;
}
span {
  color: darkslateblue;
}
.signup-section {
  width: 25%;
  margin: 4rem auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 50vh;
  border: 10px #c8a2c8 solid;
  box-sizing: border-box;
  border-radius: 3px;
  background-color: #e6e6fa;
}

h1 {
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
  color: black;
}

#email,
#password,
#password-confirm {
  width: 20rem;
  padding: 10px;
  margin-bottom: 0.85rem;
}

#signup {
  width: 20rem;
  padding: 5px;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
}
</style>
