<script>
import { useAuthStore } from '@/stores/counter'
import router from '../router'
export default {
  name: 'SuccessView',
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
  <div class="body">
    <p class="Message">
      Your request has been processed. You may go back to the request creator or return to
      dashboard:
    </p>
    <RouterLink to="/requests">
      <button class="button">Go Back:</button>
    </RouterLink>
    <RouterLink to="/requestlog">
      <button class="button">Go To Home:</button>
    </RouterLink>
  </div>
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
button {
  margin-top: 1rem;
  background-color: #222;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: 'Farfetch Basis', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  max-width: none;
  outline: none;
  overflow: hidden;
  padding: 9px 20px 8px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
}
button:hover,
button:focus {
  opacity: 0.75;
}
</style>
