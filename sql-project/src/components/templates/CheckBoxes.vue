<script>
export const checkboxValues = [
  {
    name: 'pet sitter gender',
    id: 'M',
    value: 'Male'
  },
  {
    name: 'pet sitter gender',
    id: 'F',
    value: 'Female'
  },
  {
    name: 'pet gender',
    id: 'M',
    value: 'Male'
  },
  {
    name: 'pet gender',
    id: 'F',
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
      <input type="checkbox" id="{{ id }}" name="{{name}}" value="{{value}}" />
      <label for="{{id}}">{{ value }}</label>
    </div>
  </div>
</template>
