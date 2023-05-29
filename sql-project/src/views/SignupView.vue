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

      let userEmail = document.getElementById('email').value
      let userPassword = document.getElementById('password').value
      let userPasswordConfirmed = document.getElementById('password-confirm').value

      if (userPassword == userPasswordConfirmed) {
        console.log(true)
      }
      //let password = password

      console.log(userEmail)
      console.log(userPassword)
      console.log(userPasswordConfirmed)
      //console.log(password)

      if (userEmail === '' || userPassword === '') {
        console.log('error')
      } else {
        await supabase.auth.signUp({
          email: userEmail,
          password: userPassword
        })
        /* let { data, error } = await supabase.from('users').select('user_id')
        console.log(data) */
      }
    }
  },}


</script>

<template>
  <main>
    <div class="signup-section">
      <h1>Sign Up</h1>

      <form class="signup-form">
        <div class="email">
          <input type="email" placeholder="Email" id="email" />
        </div>

<<<<<<< HEAD
      <input type="submit" value="Sign Up" id="signup-submit" @click="signup" />
     
    </form>
=======
        <div class="password">
          <input type="password" placeholder="Password" id="password" />
        </div>
        <div class="password">
          <input type="password" placeholder="Confirm Password" id="password-confirm" />
        </div>

        <input type="submit" value="Sign Up" id="signup" @click="signup" />
      </form>

      <div class="login-instead">
        <span>Already have an account? <a href="loginPage" class="login-link">Login</a></span>
      </div>
    </div>
>>>>>>> ryan
  </main>

  
</template>




<style scoped>
.signup-section {
  height: auto;
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
#password,
#password-confirm {
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

#signup {
  width: 17.5rem;
  padding: 5px;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
}
</style>
