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
      let date = this.dateTime.replace('T', ' ')
      console.log(date)
      let dateOffset = date + ' +0000'
      let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
      console.log(timezone)
      let finalDate = this.convertTimezones(dateOffset, timezone)
      console.log(finalDate)
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
