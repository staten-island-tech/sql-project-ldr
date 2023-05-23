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
      let finalDate = date + '+00'
      console.log(finalDate)
      this.$emit('updateDate', finalDate)
    }
  }
}
</script>
