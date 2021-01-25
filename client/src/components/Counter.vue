<template>
  <div class="Counter">
    <div class="Counter__number">Current Number: {{ count }}</div>
    <button class="Counter__button" @click="increment">Increment</button>

    <div class="Counter__status">
      <transition name="fade">
        <div class="Counter__success" v-if="status === 'success'">Connection established</div>
      </transition>
      <div class="Counter__error" v-if="status === 'error'">Connection could not be established</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type State = {
  connection: WebSocket | null
  status: 'initialized' | 'success' | 'error'
  count: number
}

export default Vue.extend({
  name: 'Counter',
  data(): State {
    return {
      connection: null,
      status: 'initialized',
      count: 0,
    }
  },
  methods: {
    increment() {
      this.connection.send('increment')
    },
  },
  mounted() {
    // Create WebSocket connection
    this.connection = new WebSocket('ws://localhost:8000')

    // Connection opened
    this.connection.addEventListener('open', () => {
      console.log('Successfully connected to websocket server. Waiting for messages...')
      this.status = 'success'
    })

    // Listen for messages
    this.connection.addEventListener('message', (event: MessageEvent) => {
      this.count = event.data
    })

    // Handle errors
    this.connection.addEventListener('error', (event: Event) => {
      console.error('WebSocket error observed:', event)
      this.status = 'error'
    })
  },
  destroyed() {
    this.connection.close()
    this.status = 'initialized'
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

.Counter__status {
  font-size: 0.8rem;
  margin-top: 1.5rem;
}

.Counter__success {
  color: var(--clr-monochrome-light);
  opacity: 0;
}

.Counter__error {
  color: var(--clr-alert);
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

.fade-enter-active {
  transition: all 3s ease;
}

.fade-enter {
  opacity: 1;
}
</style>
