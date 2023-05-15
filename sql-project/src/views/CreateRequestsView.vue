<script>
import DateSelector from '../components/templates/DateSelector.vue'
import CheckBoxes from '../components/templates/CheckBoxes.vue'
import { checkboxValues } from '../components/templates/CheckBoxes.vue'
export default {
  components: { DateSelector, CheckBoxes },
  data() {
    return {
      checkboxValues
    }
  }
}
</script>

<template>
  <div class="main">
    <div class="header"><h1>This is an about page</h1></div>
    <div class="requestCreator">
      <div class="dates">
        <DateSelector />
      </div>
      <div class="checkboxes">
        <CheckBoxes
          v-for="gender in checkboxValues"
          v-bind:key="gender"
          :name="gender.name"
          :id="gender.id"
          :value="gender.value"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
