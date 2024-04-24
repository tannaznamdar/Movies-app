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
import headerCards from "../components/headerCards.vue";

export default {
  components:{Navbar,Footer,headerCards},
  name:'BaseLayout'
}
</script>