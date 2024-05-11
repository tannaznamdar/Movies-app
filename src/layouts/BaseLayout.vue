<template>
  <div>
    <Navbar/>
    <slot/>
    <Footer/>
  </div>

</template>

<style scoped>

</style>
<script>
import Navbar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import headerCards from "../components/HeaderCards.vue";
import MovieCards from "../components/MovieCards.vue";

export default {
  components:{Navbar,Footer,headerCards, MovieCards},
  name:'BaseLayout'
}
</script>