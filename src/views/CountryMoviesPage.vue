<template>
  <div>
    <h1>{{ country }} Movie</h1>
  </div>
</template>

<script>
export default {
  name: 'CountryMovies',
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