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
  font-size: 13px;
  line-height: 1.9;
  background-color: #101014;
}

@font-face {
  font-family: "myFont";
  src: url("assets/fonts/Iranian Sans.ttf") format('ttf');
}
.button {
  display: inline-block;
  padding: 8px 14px 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  border-radius: 3px;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;


  &-transparent-orange {
    background: transparent;
    border-color: #FF7555;
    color: #FF7555;
  }

  &-transparent-green {
    background: transparent;
    border-color: #89d64f;
    color: #89d64f;
  }

  &--lg {
    color: #fff;
    background-color: #6898f8;
    border-color: #6898f8;
    width: 100%;
    font-size: 14px;
    line-height: 2;
  }
}

</style>
