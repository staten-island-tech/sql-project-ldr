<script>
export default {
  name: 'InputBar',
  emits: ['updateTasks'],
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
    <button class="submit" @click="recordData">Submit</button>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
}
.submit {
  width: 60px;
}
</style>
