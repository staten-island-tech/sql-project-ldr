<script>
export const checkboxValues = [
  {
    name: 'pet sitter gender',
    id: 'petsitterMale',
    value: 'Male',
    variable: 'malePetsitter'
  },
  {
    name: 'pet sitter gender',
    id: 'petsitterFemale',
    value: 'Female',
    variable: 'femalePetsitter'
  },
  {
    name: 'pet gender',
    id: 'petMale',
    value: 'Male',
    variable: 'malePet'
  },
  {
    name: 'pet gender',
    id: 'petFemale',
    value: 'Female',
    variable: 'femalePet'
  }
]
export default {
  name: 'CheckBoxes',
  props: {
    id: String,
    name: String,
    variable: String
  },
  emits: ['update:true']
}
</script>

<template>
  <div class="main">
    <div class="checkbox">
      <input
        type="checkbox"
        v-bind:id="id"
        v-bind:name="variable"
        :value="true"
        @input="$emit('update:true', $event.target.value)"
      />
      <label v-bind:for="id">{{ id }}</label>
    </div>
  </div>
</template>
