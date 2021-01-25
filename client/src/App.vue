<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Morpher Coding Challenge</h1>
    <Counter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Counter from './components/Counter.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Counter,
  },
})
</script>

<style>
#app {
  --clr-primary: #00c386;
  --clr-primary-light: #00d492;
  --clr-primary-dark: #00aa74;
  --clr-monochrome-lightest: #ffffff;
  --clr-monochrome-light: #adadad;
  --clr-monochrome-medium: #363636;
  --clr-alert: #ee0000;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--clr-monochrome-medium);
  margin-top: 60px;
}
</style>
