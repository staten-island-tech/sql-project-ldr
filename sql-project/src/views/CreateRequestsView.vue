<script>
import DateSelector from '../components/templates/DateSelector.vue'
import CheckBoxes from '../components/templates/CheckBoxes.vue'
export default {
  components: { DateSelector, CheckBoxes },
  data() {
    return {
      malePetsitter: false,
      femalePetsitter: false,
      malePet: false,
      femalePet: false,
      id: 'date',
      date: '00-00-00'
    }
  },
  methods: {
    submitted: async function () {
      console.log(document.getElementById('petsitterMale').value)
      console.log('yes')
      let petsitterPreference = this.sort(this.malePetsitter, this.femalePetsitter)
      let petGender = this.sort(this.malePet, this.femalePet)
      console.log(petGender)
      console.log(petsitterPreference)
    }
  }
}
</script>

<template>
  <div class="main">
    <div class="header"><h1>This is an about page</h1></div>
    <div class="requestCreator">
      <div class="dates">
        <DateSelector :id="id" v-model="date" />
      </div>
      <div class="checkboxes">
        <CheckBoxes />
      </div>
      <div class="submit">
        <button class="submit" v-on:click="submitted">Submit</button>
      </div>
    </div>
  </div>
</template>

<style></style>
