<script>
export default {
  name: 'RequestCard',
  props: {
    appointmentTime: String,
    timeCalled: String,
    toDoList: String,
    petBreed: String,
    petGender: String,
    sitterGender: String
  }
}
</script>

<template>
  <div class="card">
    <h2 class="name">Appointment at: {{ appointmentTime }}</h2>
    <h2 class="appointment-time">Appointment made at: {{ timeCalled }}</h2>
    <p class="description">To Do: {{ toDoList }}</p>
    <h3 class="details">Details:</h3>
    <ul class="details">
      <li>Pet Breed: {{ petBreed }}</li>
      <li>Pet Gender: {{ petGender }}</li>
      <li>Sitter Gender Preference: {{ sitterGender }}</li>
    </ul>
    <button v-on:click="remove"></button>
  </div>
</template>
