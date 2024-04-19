<script setup>
import {  RouterView } from 'vue-router'
import BaseLayout from "@/layouts/BaseLayout.vue";
</script>

<template>
  <BaseLayout>
    <router-view :key="$route.fullPath"/>
  </BaseLayout>
</template>

<style>

* {
  direction: rtl;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: IRANSansWeb;
}

body {
  position: relative;
  height: 100%;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.9;
  background-color: black;
}

@font-face {
  font-family: "myFont";
  src: url("assets/fonts/Iranian Sans.ttf") format('ttf');
}

</style>
