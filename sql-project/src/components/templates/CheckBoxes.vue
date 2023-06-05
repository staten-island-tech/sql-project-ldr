<script>
export default {
  name: 'CheckBoxes',
  emits: ['updateGenders', 'updatePets'],
  data() {
    return {
      malePetsitter: false,
      femalePetsitter: false,
      malePet: false,
      femalePet: false,
      dogPet: false,
      catPet: false
    }
  },
  methods: {
    recordGender: function () {
      let sitterPreference = this.sortGender(this.malePetsitter, this.femalePetsitter)
      let petGender = this.sortGender(this.malePet, this.femalePet)
      console.log(sitterPreference)
      console.log(petGender)
      this.$emit('updateGenders', sitterPreference, petGender)
    },
    recordPet: function () {
      let pet = this.sortPet(this.dogPet, this.catPet)
      console.log(pet)
      this.$emit('updatePets', pet)
    },
    sortGender: function (male, female) {
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
    },
    sortPet: function (dog, cat) {
      let pet = 'invalid pet species, please input cat or dog.'
      if (dog === true && cat === false) {
        let pet = 'Dog'
        return pet
      } else if (dog === false && cat === true) {
        let pet = 'Cat'
        return pet
      } else {
        return pet
      }
    }
  }
}
</script>

<template>
  <div class="main">
    <div class="genders">
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
      <button @click="recordGender">Update:</button>
    </div>
    <div class="petSpecies">
      <div class="checkbox">
        <input type="checkbox" v-model="dogPet" name="dogPet" />
        <label for="dogPet">Dog:</label>
        <input type="checkbox" v-model="catPet" name="catPet" />
        <label for="catPet">Cat:</label>
      </div>
      <button @click="recordPet">Update:</button>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
}
.checkbox {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
