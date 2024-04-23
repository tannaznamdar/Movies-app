<script>
export default {
  name:'tag',
  props:{
    title:{
      type:String,
      default: 'زیرنویس چسبیده'
    },
    color:{
      type:String,
      default:'orange'
    }
  },
  computed:{
    colorClass(){
      return 'button-transparent-' + this.color;
    }
  }
}
</script>

<template>
  <span class="button" :class="colorClass">{{title}}</span>
</template>