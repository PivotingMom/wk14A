<template>
  <div>
    <button @click="generateJokeFromApi">Generate new joke</button>
  </div>
</template>

<script>
//import { mapActions } from 'pinia'
import { useJokeStore } from '../store/jokes'
const jokeStore = useJokeStore()
export default {
  methods: {
    //...mapActions(useJokeStore, ['generateJoke']),
    generateJokeFromApi() {
      jokeStore.generateJoke()
    }
  }
}
</script>