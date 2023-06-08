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

      this.$emit('updateGenders', sitterPreference, petGender)
    },
    recordPet: function () {
      let pet = this.sortPet(this.dogPet, this.catPet)

      this.$emit('updatePets', pet)
    },
    sortGender: function (male, female) {
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
      let pet = 'invalid pet species, please input[type="checkbox"] cat or dog.'
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
      <h2>Gender Selections</h2>
      <div class="checkbox-all">
        <div>
          <div class="row">
            <input
              class="checkbox"
              id="checkbox-1"
              type="checkbox"
              v-model="malePetsitter"
              name="malePetsitter"
            />
            <label for="checkbox-1">Male Pet Sitter</label>
          </div>

          <div class="row">
            <input
              class="checkbox"
              id="checkbox-2"
              type="checkbox"
              v-model="femalePetsitter"
              name="femalePetsitter"
            />
            <label for="checkbox-2">Female Pet Sitter</label>
          </div>
        </div>

        <div>
          <div class="row">
            <input
              class="checkbox"
              id="checkbox-3"
              type="checkbox"
              v-model="malePet"
              name="malePet"
            />
            <label for="checkbox-3">Male Pet</label>
          </div>

          <div class="row">
            <input
              class="checkbox"
              id="checkbox-4"
              type="checkbox"
              v-model="femalePet"
              name="femalePet"
            />
            <label for="checkbox-4">Female Pet</label>
          </div>
        </div>
      </div>

      <button @click="recordGender">Update</button>
    </div>

    <div class="petSpecies">
      <h2>Animal Selection</h2>
      <div>
        <div class="row">
          <input class="checkbox" id="checkbox-5" type="checkbox" v-model="dogPet" name="dogPet" />
          <label for="checkbox-5">Dog</label>
        </div>

        <div class="row">
          <input class="checkbox" id="checkbox-6" type="checkbox" v-model="catPet" name="catPet" />
          <label for="checkbox-6">Cat</label>
        </div>
      </div>

      <button @click="recordPet">Update</button>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  width: 40rem;
}

.genders {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.checkbox-all {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 22.5rem;
}

.petSpecies {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  text-decoration: underline;
  margin-bottom: 0.25rem;
}

input {
  margin-right: 5px;
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
  width: auto;
}
button:hover,
button:focus {
  opacity: 0.75;
}

@media (max-width: 1440px) {
  .main {
    justify-content: space-between;
  }
}
@media (max-width: 1024px) {
  .main {
    justify-content: space-evenly;
  }
}
@media (max-width: 425px) {
  .main {
    width: auto;
    flex-direction: column;
  }
}
</style>
