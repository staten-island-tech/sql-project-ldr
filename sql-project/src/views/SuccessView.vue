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
