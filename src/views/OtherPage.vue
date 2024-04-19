<template>
    <div>
      <h1>{{ content }} </h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Other',
    data() {
      return {
        content: '',
      }
    },
    mounted() {
      this.content = (this.$route.params.content);
    }
  }
  
  </script>
  
  <style scoped>
  
  </style>