<script>
import DateSelector from '../components/templates/DateSelector.vue'
import CheckBoxes from '../components/templates/CheckBoxes.vue'
import { checkboxValues } from '../components/templates/CheckBoxes.vue'
export default {
  components: { DateSelector, CheckBoxes },
  data() {
    return {
      checkboxValues,
      malePetsitter: document.getElementById('petsitterMale'),
      femalePetsitter: document.getElementById('petsitterFemale'),
      malePet: document.getElementById('petMale'),
      femalePet: document.getElementById('petFemale')
    }
  },
  methods: {
    submitted: async function () {
      console.log(document.getElementById('petsitterMale').value)
      console.log('yes')
      let petsitterPreference = this.sort(this.malePetsitter.value, this.femalePetsitter.value)
      let petGender = this.sort(this.malePet.value, this.femalePet.value)
      console.log(petGender)
      console.log(petsitterPreference)
    },
    sort: function (male, female) {
      let gender = ''
      console.log(male)
      if (male === true && female === true) {
        let gender = 'Any'
      } else if (male === false && female === false) {
        let gender = 'Any'
      } else if (male === true && female === false) {
        let gender = 'Male'
      } else if (female === true && male === false) {
        let gender = 'Female'
      } else {
        console.log('error')
      }
      return gender
    }
  }
}
</script>

<template>
  <div class="main">
    <div class="header"><h1>This is an about page</h1></div>
    <div class="requestCreator">
      <div class="dates">
        <DateSelector />
      </div>
      <div class="checkboxes">
        <CheckBoxes
          v-for="gender in checkboxValues"
          v-bind:key="gender"
          :name="gender.name"
          :id="gender.id"
          v-model="gender.variable"
        />
      </div>
      <div class="submit">
        <button class="submit" v-on:click="submitted">Submit</button>
      </div>
    </div>
  </div>
</template>

<style></style>
