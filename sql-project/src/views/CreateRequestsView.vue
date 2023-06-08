<script>
import router from '../router'
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
      time_called: new Date(),
      petBreed: '',
      sitterGender: '',
      pet: '',
      toDo: '',
      rawToDo: '',
      user: useAuthStore(),
      user_id: ''
    }
  },
  methods: {
    onMounted: async function () {
      this.checkUser()
      this.user_id = await this.user.currentUser
    },
    checkUser: function () {
      if (useAuthStore().currentUser === null) {
        router.push('loginpage')
      }
    },
    submitted: async function () {
      let pet = this.checkPet(this.pet)
      const { data, error } = await supabase.from(pet).insert([
        {
          primary_key: Math.random(),
          customer_id: this.user_id,
          time_called: this.time_called,
          appointed_time: this.date,
          pet_gender: this.petGender,
          todo_list: this.toDo,
          pet_breed: this.petBreed,
          preference_sitter_gender: this.sitterGender,
          pet_type: this.pet
        }
      ])
      console.log(error)
      if (error !== null) {
        router.push('error')
      } else {
        router.push('success')
      }
    },
    genders: function (sitterPreference, petGender) {
      this.petGender = petGender
      this.sitterGender = sitterPreference
    },
    dates: function (date) {
      this.date = date.toString()
    },
    petSpecies: function (species) {
      this.pet = species
    },
    tasks: function (tasks) {
      let array = tasks.split(',')
      this.rawToDo = tasks
      this.toDo = array
    },
    breed: function (breed) {
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
  <div class="main">
    <div class="header">
      <h1>Make An Appointment</h1>
    </div>

    <div class="requestCreator">
      <div class="row-1">
        <div class="dates">
          <DateSelector @updateDate="dates" />
        </div>

        <div class="checkboxes">
          <CheckBoxes @updateGenders="genders" @updatePets="petSpecies" />
        </div>
      </div>

      <div class="inputBar">
        <InputBar @updateTasks="tasks" @updateBreed="breed" />
      </div>

      <div class="submit">
        <button v-on:click="submitted">Submit</button>
      </div>
    </div>
    <br />

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
          <p class="toDo">To Do List: {{ rawToDo }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400;1,600;1,900&display=swap');

.header {
  margin-bottom: 2rem;
}

h1 {
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  text-align: center;
}

.row-1 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
}

.inputBar {
  margin-top: 3rem;
}

.requestCreator {
  padding: 2rem;
  margin: 0 10rem 0 10rem;
  border: 3px red solid;
  border-radius: 50px;
}

.submit {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
}

button {
  all: unset;
  width: 100px;
  height: 30px;
  font-size: 16px;
  background: transparent;
  border: none;
  position: relative;
  color: #f0f0f0;
  cursor: pointer;
  z-index: 1;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

button::after,
button::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -99999;
  transition: all 0.4s;
}

button::before {
  transform: translate(0%, 0%);
  width: 100%;
  height: 100%;
  background: #28282d;
  border-radius: 10px;
}

button::after {
  transform: translate(10px, 10px);
  width: 35px;
  height: 35px;
  background: #ffffff15;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 50px;
}

button:hover::before {
  transform: translate(5%, 20%);
  width: 110%;
  height: 110%;
}

button:hover::after {
  border-radius: 10px;
  transform: translate(0, 0);
  width: 100%;
  height: 100%;
}

button:active::after {
  transition: 0s;
  transform: translate(0, 5%);
}
</style>
