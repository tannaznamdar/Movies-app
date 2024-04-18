<script setup>
import {  RouterView } from 'vue-router'
import BaseLayout from "@/layouts/BaseLayout.vue";
</script>

<template>
  <BaseLayout>
    <router-view/>
  </BaseLayout>
</template>

<style>
* {
  direction: rtl;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Roboto";
  font-weight: normal;
  font-size: 16px;
  background-color: black;
}

body {
  position: relative;
  height: 100%;

}
</style>
