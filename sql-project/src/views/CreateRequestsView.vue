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
      console.log('yes')
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
  </div>
</template>

<style></style>
