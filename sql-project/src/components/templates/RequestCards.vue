<script>
export default {
  name: 'RequestCard',
  props: {
    appointmentTime: String,
    toDoList: String,
    remove: Function
  }
}
</script>

<template>
  <div class="card">
    <h2 class="name">Appointment at: {{ appointmentTime }}</h2>
    <p class="description">To Do: {{ toDoList }}</p>
    <button
      v-on:click="
        {
          {
            remove
          }
        }
      "
    ></button>
  </div>
</template>
