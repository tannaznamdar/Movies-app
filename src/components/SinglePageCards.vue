<template>

  <article class="content-thumb">
    <router-link :to='{ name: "titlePageRoute", params: { slug } }'>
      <figure class="card-img">
        <img alt="#" :src="thumbnail">
      </figure>

      <div>
        <p class="card-title"> {{ title }} </p>
        <div class="d-flex align-items-center pt-2">
          <img class="internal-distance-l" alt="heart" :src="heartGray">
          <span class="card-subtitle"> % {{ like }} رضایت </span>
        </div>
      </div>
    </router-link>
  </article>

</template>


<script>
import heartGray from '@/assets/images/heart-gray.svg'

export default {
  name: 'singlePageCards',

  props: {
    slug: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    thumbnail: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    like: {
      type: Number,
      default: ''
    }
  },

  data() {
    return {
      heartGray,
    }
  }
}
</script>


<style scoped lang="scss">
.content-thumb {
  box-shadow: 0 5px 25px rgba(0, 0, 0, .13);
  padding: 10px;
  background: #1c1c22;
  margin: 0;
  border-radius: 4px;
  margin-left: 15px;

  a {
    text-decoration: none;
    color: #e8eaf0;
  }
}

.card-img {
  height: 223px;
  width: 100%;
  box-shadow: 0 5px 25px rgba(0, 0, 0, .13) !important;
  border-radius: 4px;
  display: block;
  position: relative;
  overflow: hidden;
  margin-bottom: 0;

  img {
    display: block;
    width: 100%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
  }
}

.card-title {
  font-size: 13px;
  color: #e8eaf0;
  font-weight: 700;
  margin-top: 10px;
}

.internal-distance-l {
  margin-left: 3px;
}

.card-subtitle {
  color: #9ba1a6;
  font-size: 12px;
  font-weight: 300;
  line-height: 0;
}
</style>