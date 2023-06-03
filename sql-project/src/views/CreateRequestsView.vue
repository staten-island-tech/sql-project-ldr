<script>
import DateSelector from '../components/templates/DateSelector.vue'
import CheckBoxes from '../components/templates/CheckBoxes.vue'
import InputBar from '../components/templates/InputBars.vue'
import { useAuthStore } from '@/stores/counter'
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tzithwsneecztaewiwhj.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6aXRod3NuZWVjenRhZXdpd2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2Mzk5MjksImV4cCI6MTk5OTIxNTkyOX0.YeSE7Cuk2UX5jD6haxAnmM_-RdlssSRtowQH9ejl_1w'
const supabase = createClient(supabaseUrl, supabaseKey)
export default {
  components: { DateSelector, CheckBoxes, InputBar },
  data() {
    return {
      date: '',
      petGender: '',
      time_called: this.getDate,
      petBreed: '',
      sitterGender: '',
      pet: '',
      toDo: '',
      user: useAuthStore(),
      user_id: ''
    }
  },
  methods: {
    onMounted: async function () {
      this.checkUser()
      console.log(await this.user.currentUser)
      let promise = await this.user.currentUser
      this.user_id = promise.data
    },
    checkUser: function () {
      if (useAuthStore().currentUser === null) {
        window.location.href = 'loginpage'
      } else {
      }
    },
    submitted: async function () {
      let pet = this.checkPet(this.pet)
      const { data, error, defaultToNull } = await supabase.from(pet).insert([
        {
          customerId: this.user_id,
          time_called: this.time_called,
          appointed_time: this.date,
          pet_gender: this.petGender,
          todo_list: this.toDo,
          pet_breed: this.petBreed,
          preference_sitter_gender: this.sitterGender
        }
      ])
      console.log(this.date, this.petGender, this.toDo, this.sitterGender, this.user.currentUser)
    },
    getDate: function () {
      return new Date()
    },
    genders: function (sitterPreference, petGender) {
      console.log(sitterPreference, petGender)
      this.petGender = petGender
      this.sitterGender = sitterPreference
      console.log(this.petGender)
      console.log(this.sitterGender)
    },
    dates: function (date) {
      console.log(date)
      this.date = date.toString()
    },
    petSpecies: function (species) {
      console.log(species)
      this.pet = species
    },
    tasks: function (tasks) {
      console.log(tasks)
      this.toDo = tasks
    },
    breed: function (breed) {
      console.log(breed)
      this.petBreed = breed
    },
    checkPet: function (pet) {
      if (pet === 'Dog') {
        return 'DogSitters'
      } else if (pet === 'Cat') {
        return 'CatSitters'
      } else {
        return 'error'
      }
    }
  },
  mounted() {
    this.onMounted()
  }
}
</script>

<template>
  <div>
    <div class="header"><h1>This is an about page</h1></div>
    <div class="main">
      <div class="requestCreator">
        <div class="dates">
          <DateSelector @updateDate="dates" />
        </div>
        <div class="checkboxes">
          <CheckBoxes @updateGenders="genders" @updatePets="petSpecies" />
        </div>
        <div class="inputBar">
          <InputBar @updateTasks="tasks" @updateBreed="breed" />
        </div>
        <div class="submit">
          <button class="submit" v-on:click="submitted">Submit</button>
        </div>
      </div>
      <div class="preview">
        <h2>This is what we see:</h2>
        <div class="card">
          <div class="date">
            <h3>{{ date }}</h3>
          </div>
          <div class="pet">
            <h3>Pet Species: {{ pet }}</h3>
            <h3>Pet Breed: {{ petBreed }}</h3>
          </div>
          <div class="genders">
            <h3 class="petGender">Pet Gender: {{ petGender }}</h3>
            <h3 class="sitterGender">Sitter Gender Preference: {{ sitterGender }}</h3>
          </div>
          <div class="tasks">
            <p class="toDo">{{ toDo }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: space-evenly;
}
</style>
