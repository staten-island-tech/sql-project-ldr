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
      let finalData = this.checker(rawData)
      this.$emit('updateTasks', finalData)
    },
    recordBreed: function () {
      let Breed = this.petBreed
      let finalBreed = this.checker(Breed)
      this.$emit('updateBreed', finalBreed)
    },
    checker: function (input) {
      if (input === '') {
        return 'Please provide a valid input'
      } else {
        return input
      }
    }
  }
}
</script>

<template>
  <div class="main">
    <div class="input">
      <label for="input">Please input what tasks the petsitter needs to perform.</label>
      <input type="text" id="input" name="input" required v-model="rawData" />
      <button class="submit" @click="recordData">Update</button>
    </div>
    <div class="input">
      <label for="petBreed">Please input what breed your pet is</label>
      <input type="text" id="petBreed" name="petBreed" required v-model="petBreed" />
      <button class="submit" @click="recordBreed">Update</button>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
}
.input {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
}
.submit {
  width: 60px;
}
</style>
