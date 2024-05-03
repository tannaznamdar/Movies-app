<template>
  <div>
    <h1>
      Persian Dub {{ slug }} 
    </h1>
  </div>
</template>

<script>

export default {
  name: 'PersianDub',
  data() {
    return {
      slug: '',
    }
  },
  mounted() {
    this.slug = (this.$route.params.slug);
  }
}

</script>



<style scoped></style>