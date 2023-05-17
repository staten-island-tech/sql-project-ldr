<script>
export default {
  name: 'CheckBoxes',
  data() {
    return {
      malePetsitter: false,
      femalePetsitter: false,
      malePet: false,
      femalePet: false
    }
  },
  methods: {
    recordData: function () {
      let sitterPreference = this.sort(this.malePetsitter, this.femalePetsitter)
      let petGender = this.sort(this.malePet, this.femalePet)
      console.log(sitterPreference)
      console.log(petGender)
    },
    sort: function (male, female) {
      console.log(male)
      console.log(female)
      if (male === true && female === true) {
        let gender = 'Any'
        return gender
      } else if (male === false && female === false) {
        let gender = 'Any'
        return gender
      } else if (male === true && female === false) {
        let gender = 'Male'
        return gender
      } else if (female === true && male === false) {
        let gender = 'Female'
        return gender
      } else {
        console.log('error')
      }
    }
  }
}
</script>

<template>
  <div class="main">
    <div class="checkbox">
      <input type="checkbox" v-model="malePetsitter" name="malePetsitter" />
      <label for="malePetsitter">Male petsitter:</label>
      <input type="checkbox" v-model="femalePetsitter" name="femalePetsitter" />
      <label for="femalePetsitter">Female petsitter:</label>
      <input type="checkbox" v-model="malePet" name="malePet" />
      <label for="malePet">Male pet:</label>
      <input type="checkbox" v-model="femalePet" name="femalePet" />
      <label for="femalePet">Female pet:</label>
    </div>
    <button @click="recordData">eeee</button>
  </div>
</template>
