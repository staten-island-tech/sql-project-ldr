<template>
  <div class="main">
    <input type="datetime-local" v-bind:id="id" name="input date here" value="2018-07-22" />
  </div>
</template>

<script>
export default {
  name: 'dateSelector',
  props: { id: String }
}
</script>
