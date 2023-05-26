<script>
import DateSelector from '../components/templates/DateSelector.vue'
import CheckBoxes from '../components/templates/CheckBoxes.vue'
export default {
  components: { DateSelector, CheckBoxes },
  emits: ['updateGenders', 'updateDate', 'updatePets'],
  data() {
    return {
      date: '',
      petGender: '',
      sitterGender: ''
    }
  },
  methods: {
    submitted: async function () {
      console.log('yes')
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
      this.pet = species
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
