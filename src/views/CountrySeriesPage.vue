<template>
    <div>
      <h1>{{ country }} Series</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CountrySeries',
    data() {
      return {
        country: '',
      }
    },
    mounted() {
      this.country = (this.$route.params.country);
    }
  }
  
  </script>
  
  <style scoped>
  
  </style>