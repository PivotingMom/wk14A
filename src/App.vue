<template>
  <div id="app">
    <h3>My Joke application</h3>
    <JokeButton />
  </div>
</template>

<script>
import JokeButton from './components/JokeButton.vue'
export default {
  name: 'App',
  components: {
    JokeButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
