<template>
  <div>
    <Navbar />
    <div class="background-light">
      <slot />
    </div>
    <Footer class="background-light" />
  </div>

</template>

<style>
.background-light {
  background-color: #1c1c22;
}
</style>
<script>
import Navbar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import headerCards from "../components/HeaderCards.vue";
import MovieCards from "../components/MovieCards.vue";

export default {
  components: { Navbar, Footer, headerCards, MovieCards },
  name: 'BaseLayout'
}
</script>