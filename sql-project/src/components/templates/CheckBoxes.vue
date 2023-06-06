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

.checkbox {
  display: none;
}
.checkbox,
label {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 20px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.checkbox:hover,
label:hover {
  color: rgb(23, 86, 228);
}
.checkbox:hover,
label:before {
  border: 1px solid #343a3f;
  box-shadow: 2px 1px 0 #343a3f;
}
.checkbox,
label:last-child {
  margin-bottom: 0;
}
.checkbox,
label:before {
  content: '';
  display: block;
  width: 1.4em;
  height: 1.4em;
  border: 1px solid #343a3f;
  border-radius: 0.2em;
  position: absolute;
  left: 0;
  top: 0;
  -webkit-transition: all 0.2s, background 0.2s ease-in-out;
  transition: all 0.2s, background 0.2s ease-in-out;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: -2px -1px 0 #343a3f;
  background: #f3f3f3;
}
.checkbox:checked,
label:before {
  border: 2px solid #fff;
  border-radius: 0.3em;
  background: #50565a;
  box-shadow: 2px 1px 0 #50565a;
}

h2 {
  text-decoration: underline;
}

button {
  margin-top: 1rem;
  width: 75px;
}

input {
  margin-right: 5px;
}
</style>
