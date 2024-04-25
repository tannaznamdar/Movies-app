<script>
export default {
  name:'tag',
  props:{
    // small:{
    //   type:Boolean,
    //   default:false
    // },
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
  <span v-if="!small" class="button" :class="colorClass">{{title}}</span>
  <!-- <span v-else class="badge-sm-free">رایگان</span> -->
</template>