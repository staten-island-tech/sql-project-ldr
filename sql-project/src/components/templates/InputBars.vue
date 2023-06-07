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
      <label for="input">What tasks would you like to assign the pet sitter?</label>
      <input
        type="text"
        id="input"
        name="input"
        rows="4"
        cols="50"
        v-model="rawData"
        placeholder="e.g. walk the dog, wash the dog, feed the dog"
        required
      />
      <button class="submit" @click="recordData">Update</button>
    </div>

    <div class="input">
      <label for="petBreed">Please provide some information about your pet:</label>
      <input
        type="text"
        id="petBreed"
        name="petBreed"
        rows="4"
        cols="50"
        v-model="petBreed"
        placeholder="Pet Breed, Special Needs, Medical Conditions..."
        required
      />
      <button class="submit" @click="recordBreed">Update</button>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.input {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  display: inline-flex;
  width: 17.5vw;
}

button {
  margin-top: 1rem;
  background-color: #222;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: 'Farfetch Basis', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  max-width: none;
  outline: none;
  overflow: hidden;
  padding: 9px 20px 8px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
}

button:hover,
button:focus {
  opacity: 0.75;
}
</style>
