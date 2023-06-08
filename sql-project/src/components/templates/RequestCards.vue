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

<style scoped>
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
