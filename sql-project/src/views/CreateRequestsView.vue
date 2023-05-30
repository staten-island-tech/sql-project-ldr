<script>
import DateSelector from '../components/templates/DateSelector.vue'
import CheckBoxes from '../components/templates/CheckBoxes.vue'
import InputBar from '../components/templates/InputBars.vue'
import { useStore } from '@/stores/counter'
import { createClient } from '@supabase/supabase-js'
import InputBarsVue from '../components/templates/InputBars.vue'
const supabaseUrl = 'https://tzithwsneecztaewiwhj.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6aXRod3NuZWVjenRhZXdpd2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2Mzk5MjksImV4cCI6MTk5OTIxNTkyOX0.YeSE7Cuk2UX5jD6haxAnmM_-RdlssSRtowQH9ejl_1w'
const supabase = createClient(supabaseUrl, supabaseKey)
export default {
  components: { DateSelector, CheckBoxes, InputBar },
  emits: ['updateGenders', 'updateDate', 'updatePets'],
  data() {
    return {
      date: '',
      petGender: '',
      sitterGender: '',
      pet: '',
      user: useStore()
    }
  },
  methods: {
    submitted: async function () {
      let pet = this.checkPet(this.pet)
      const { error } = await supabase.from(pet).insert({
        customerId: '',
        time_called: new Date(),
        appointed_time: this.date,
        pet_gender: this.petGender,
        todo_list: '',
        pet_breed: '',
        preference_sitter_gender: this.sitterGender,
        customer_username: this.user.user
      })
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
    checkPet: function (pet) {
      if (pet === 'Dog sitters') {
        return 'dog'
      } else if (pet === 'Cat sitters') {
        return 'cat'
      } else {
        return 'error'
      }
    }
  }
}
</script>

<template>
  <div class="main">
    <div class="header"><h1>This is an about page</h1></div>
    <div class="requestCreator">
      <div class="dates">
        <DateSelector @updateDate="dates" />
      </div>
      <div class="checkboxes">
        <CheckBoxes @updateGenders="genders" @updatePets="petSpecies" />
      </div>
      <div class="inputBar">
        <InputBar />
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
        </div>
        <div class="genders">
          <h3 class="petGender">Pet Gender: {{ petGender }}</h3>
          <h3 class="sitterGender">Sitter Gender Preference: {{ sitterGender }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
