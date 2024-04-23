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
import card from "../components/Cards.vue";

export default {
  components:{Navbar,Footer,card},
  name:'BaseLayout'
}
</script>