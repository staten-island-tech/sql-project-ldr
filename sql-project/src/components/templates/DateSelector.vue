<template>
  <div class="mainBody">
    <label for="date">Select your date:</label>
    <input type="datetime-local" step="1" id="dateSelector" name="dateTime" v-model="dateTime" />
    <button @click="e">Update Date</button>
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
  emits: ['updateDate'],
  methods: {
    e: function () {
      let date = this.dateTime.replace('T', ' ')
      let finalDate = date + '+00'
      this.$emit('updateDate', finalDate)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
.mainBody {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  width: auto;
  padding: 1rem;
}

label {
  font-family: 'PT Serif', serif;
}

#dateSelector {
  width: 20rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
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
