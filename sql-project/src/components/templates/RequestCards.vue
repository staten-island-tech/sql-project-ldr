<script>
export default {
  name: 'RequestCard',
  props: {
    primaryKey: String,
    appointmentTime: String,
    timeCalled: String,
    toDoList: String,
    petType: String,
    petBreed: String,
    petGender: String,
    sitterGender: String
  },
  methods: {
    remove: function () {
      this.$emit('remove', this.primaryKey, this.checkPet(this.petType))
    },
    checkPet: function (petType) {
      if (petType === 'Cat') {
        return 'CatSitters'
      } else if (petType === 'Dog') {
        return 'DogSitters'
      } else {
        console.log('error with checker')
      }
    }
  }
}
</script>

<template>
  <div class="card" :id="primaryKey">
    <h2 class="name">Appointment at: {{ appointmentTime }}</h2>
    <h2 class="appointment-time">Appointment made at: {{ timeCalled }}</h2>
    <p class="description">To Do: {{ toDoList }}</p>
    <h3 class="details">Details:</h3>
    <ul class="details">
      <li>Pet Type: {{ petType }}</li>
      <li>Pet Breed: {{ petBreed }}</li>
      <li>Pet Gender: {{ petGender }}</li>
      <li>Sitter Gender Preference: {{ sitterGender }}</li>
    </ul>
    <button v-on:click="remove">Remove</button>
  </div>
</template>
