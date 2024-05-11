<template>
    <div>
      <h1>{{ genre }} Movie</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MoviesGenre',
    data() {
      return {
        genre: '',
      }
    },
    mounted() {
      this.genre = (this.$route.params.genre);
    }
  }
  
  </script>
  
  <style scoped>
  
  </style>