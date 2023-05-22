

  <template>
    <div>
     

    <div class="login-card">
      <h2>Sign Up</h2>
      <input type="text" id="login-email" placeholder="email" required />
      <br />
      <input type="text" id="login-password" placeholder="password" required />
      <br />
      <input type="submit" value="submit" id="login-submit" @click="signup" />
    </div>


    </div>
</template>

<script >
    export default {
  name: "Logintemplate",
  props: {
    email:String,
    password:String
  }}

  async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'example@email.com',
    password: 'example-password',
  })
}
async function signOut() {
  const { error } = await supabase.auth.signOut()
}

const { data, error } = await supabase.auth.verifyOtp({ email, token, type: 'email'})

</script>
