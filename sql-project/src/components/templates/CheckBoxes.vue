<script>
export const checkboxValues = [
  {
    name: 'pet sitter gender',
    id: 'petsitterMale',
    value: 'Male'
  },
  {
    name: 'pet sitter gender',
    id: 'petsitterFemale',
    value: 'Female'
  },
  {
    name: 'pet gender',
    id: 'petMale',
    value: 'Male'
  },
  {
    name: 'pet gender',
    id: 'petFemale',
    value: 'Female'
  }
]
export default {
  name: 'CheckBoxes',
  props: {
    id: String,
    name: String,
    value: String
  }
}
</script>

<template>
  <div class="main">
    <div class="checkbox">
      <input type="checkbox" v-bind:id="id" v-bind:name="name" v-bind:value="value" v-model="e" />
      <label v-bind:for="id">{{ value }}</label>
    </div>
  </div>
</template>
