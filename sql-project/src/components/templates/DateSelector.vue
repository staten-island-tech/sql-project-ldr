<template>
  <div class="main">
    <input type="datetime-local" step="1" id="dateSelector" name="dateTime" v-model="dateTime" />
    <label for="date">Select your date here:</label>
    <button @click="e">EEEE!EEE</button>
  </div>
</template>

<script>
export default {
  name: 'dateSelector',
  props: { id: String },
  data() {
    return {
      dateTime: ''
    }
  },
  methods: {
    e: function () {
      console.log(this.dateTime)
      let date = this.dateTime.slice(0, 10)
      console.log(date)
      console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
    },
    convertTimezones: function (date, tzString) {
      return new Date(
        (typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', {
          timeZone: tzString
        })
      )
    }
  }
}
</script>
