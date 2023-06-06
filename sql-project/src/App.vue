<script>
import router from './router'
import { useAuthStore } from './stores/counter'
import { RouterLink, RouterView } from 'vue-router'
export default {
  methods: {
    logOut: function () {
      useAuthStore().clearUser()
      router.push('loginpage')
    }
  }
}
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <nav>
          <div class="left">
            <RouterLink class="router" to="/requests">Schedule Appointments</RouterLink>
            <RouterLink class="router" to="/requestlog">View Appointments</RouterLink>
          </div>

          <div class="right">
            <RouterLink class="router" to="/loginPage">Login</RouterLink>
          </div>
        </nav>
      </div>

      <button @click="logOut">Log Out</button>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

nav a {
  display: inline-block;
  padding: 1rem;
  border-left: 1px solid var(--color-border);
}

.left {
  margin-left: 5rem;
}
.right {
  margin-right: 5rem;
}

nav a:first-of-type {
  border: 0;
}

nav:hover .router {
  color: #575757;
}
nav:hover .router:hover {
  color: #5cdb95;
  box-shadow: 0 2px 0 0 currentColor;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}
</style>
