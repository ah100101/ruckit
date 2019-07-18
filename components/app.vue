<template>
  <div class="container">
    <h1>{{ title }}</h1>

    <button v-on:click='createWorkout()'>Create Workout</button>

    <div v-html='workout'></div>

  </div>
</template>

<script>
import data from '../data.json'
import functions from '../functions.js'

export default {
  name: 'app',
  data() {
    return {
      title: 'Ruck It',
      workout: ''
    }
  },
  methods: {
    createWorkout: function () {
      let state = this
      functions.getRandomMovements(data.movements, 3)
        .then(result => {
          state.workout = JSON.stringify(result)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
};
</script>

<style scoped>

</style>