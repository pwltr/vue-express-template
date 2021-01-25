<template>
  <div class="Counter">
    <div class="Counter__number">Current Number: {{ count }}</div>
    <button class="Counter__button" @click="increment">Increment</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type State = {
  count: number
}

export default Vue.extend({
  name: 'Counter',
  data(): State {
    return {
      count: 0,
    }
  },
  methods: {
    async increment() {
      const response = await fetch('http://localhost:8000/', { method: 'POST' })
      const { currentNumber } = await response.json()
      this.count = currentNumber
    },
  },
  async mounted() {
    const response = await fetch('http://localhost:8000/')
    const { currentNumber } = await response.json()
    this.count = currentNumber
  },
})
</script>

<style scoped>
.Counter {
  padding: 1rem 0;
}

.Counter__number {
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0.5rem 0 1rem;
}

.Counter__button {
  margin-top: 1rem;
}

button {
  background: var(--clr-primary);
  border-color: transparent;
  border-radius: 5px;
  border-width: 2px;
  color: var(--clr-monochrome-lightest);
  cursor: pointer;
  font-weight: 700;
  font-size: 1.125rem;
  height: 2.875rem;
  padding: 0 2rem;
  outline: none;
}

button:hover {
  background: var(--clr-primary-light);
  box-shadow: 0 2px 4px rgb(0 161 111 / 10%), 0 4px 10px rgb(0 161 111 / 20%);
  transition-delay: 0s;
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

button:active {
  background: var(--clr-primary-dark);
}
</style>
