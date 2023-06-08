<script>
import { useAuthStore } from '@/stores/counter'
import router from '../router'
export default {
  name: 'ErrorView',
  methods: {
    checkUser: function () {
      if (useAuthStore().currentUser === null) {
        router.push('loginpage')
      }
    }
  },
  mounted() {
    this.checkUser()
  }
}
</script>

<template>
  <main>

  <div class="body">
    
    <p class="Message">
      Uh oh! Looks like an error occured. Please go back and check your inputs. If the problem still
      persists, please try again later.
    </p>
    <RouterLink to="/requests">
      <button class="button">Go Back:</button>
    </RouterLink>
    <RouterLink to="/requestlog">
      <button class="button">Go To Home:</button>
    </RouterLink>
  </div>

</main>
</template>

<style scoped>



.body {
  color: black;
  padding: 2rem;
  width: 80%;
  margin: auto;
  border: 3px blueviolet solid;
  border-radius: 50px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    font-size: 28px;
}
</style>