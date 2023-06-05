<template>
  <div class="mainBody">
    <label for="date">Select your date:</label>
    <input type="datetime-local" step="1" id="dateSelector" name="dateTime" v-model="dateTime" />
    <button @click="e">Update Date:</button>
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

/* button {
  width: 20rem;
  padding: 10px;
  border-radius: 2rem;
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: inherit;
  font-family: inherit;
}
button::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $dark-pink;
  border-radius: inherit;
  box-shadow: 0 0 0 2px $pink-border, 0 0.625em 0 0 $pink-shadow;
  transform: translate3d(0, 0.75em, -1em);
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1);
  box-shadow: 150ms cubic-bezier(0, 0, 0.58, 1);
}
:hover {
  background: $pink;
  transform: translate(0, 0.25em);
} */
</style>
