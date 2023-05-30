<script>
export default {
  name: 'InputBar',
  data() {
    return {
      rawData: ''
    }
  },
  methods: {
    recordData: function () {
      let rawData = this.rawData
      let array = rawData.split(',')
      console.log(array)
      this.$emit('updateTasks', array)
    }
  }
}
</script>

<template>
  <div class="main">
    <div class="input">
      <label for="input">Please input what tasks the petsitter needs to perform.</label>
      <input type="text" id="input" name="input" required v-model="rawData" />
    </div>
    <button @click="recordData"></button>
  </div>
</template>
