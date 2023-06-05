<script>
import { useAuthStore } from '@/stores/counter'
export default {
  name: 'ErrorView',
  methods: {
    checkUser: function () {
      if (useAuthStore().currentUser === null) {
        window.location.href = 'loginpage'
      } else {
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
</template>
