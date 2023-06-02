<script>
export default {
  name: 'InputBar',
  emits: ['updateTasks', 'updateBreed'],
  data() {
    return {
      rawData: '',
      petBreed: ''
    }
  },
  methods: {
    recordData: function () {
      let rawData = this.rawData
      let array = rawData.split(',')
      console.log(array)
      this.$emit('updateTasks', array)
    },
    recordBreed: function () {
      let Breed = this.petBreed
      console.log(Breed)
      this.$emit('updateBreed', Breed)
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
    <button class="submit" @click="recordData">Update</button>
    <div class="input">
      <label for="petBreed">Please input what breed your pet is</label>
      <input type="text" id="petBreed" name="petBreed" required v-model="petBreed" />
    </div>
    <button class="submit" @click="recordBreed">Update</button>
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
