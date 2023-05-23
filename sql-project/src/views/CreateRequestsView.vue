<script>
import DateSelector from '../components/templates/DateSelector.vue'
import CheckBoxes from '../components/templates/CheckBoxes.vue'
export default {
  components: { DateSelector, CheckBoxes },
  data() {
    return {
      date: '',
      petGender: '',
      sitterPreference: ''
    }
  },
  methods: {
    submitted: async function () {
      console.log('yes')
    },
    genders: function (e) {
      console.log(e)
      this.petGender = e.petGender
      this.sitterPreference = e.sitterPreference
    },
    date: function (e) {
      console.log(e)
      this.date = e
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
        <CheckBoxes />
      </div>
      <div class="submit">
        <button class="submit" v-on:click="submitted">Submit</button>
      </div>
    </div>
    <div class="preview">
      <h2>This is what we see:</h2>
      <div class="card">
        <div class="date">
          <h3 @updateDate="dates">{{ date }}</h3>
        </div>
        <div class="genders" @updateCheckboxes="genders">
          <h3 class="petGender">{{ petGender }}</h3>
          <h3 class="sitterGender">{{ sitterGender }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
