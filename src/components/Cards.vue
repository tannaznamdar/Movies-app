<template>
  <article class="card-container">
    <router-link :to="link">
      <figure class="card-img">
        <img alt="RebelMoon" :src="thumbnail">
      </figure>

      <div class="card-info-overlay">
        <div class="card-info">
          <div class="mb-2 d-flex flex-row">
            <span class="internal-distance-l">
              <font-awesome-icon icon="heart" />
              {{ like }}%
            </span>
            <span>
              <img alt="Imdb" :src="Imdb">
              10/ {{ imdb }}
            </span>
          </div>

          <h2 class="card-font card-font--title-fa"> {{ title_fa }} </h2>
          <p class="card-font card-font--title-en"> {{ title_en }} </p>
          <tag v-if="hasTag" v-bind="tag"></tag>
        </div>
      </div>
    </router-link>
  </article>
</template>


<script>

import RebelMoon from '../assets/images/RebelMoon.jpg'
import Imdb from '@/assets/images/la--imdb.svg'
import Tag from "@/components/Tag.vue";


export default {
  name: 'cards',
  components: { Tag },
  props: {
    link: {
      type: String,
      default: RebelMoon
    },
    thumbnail: {
      type: String,
      default: RebelMoon
    },
    like: {
      type: Number,
      default: 86
    },
    imdb: {
      type: String,
      default: '5.1'
    },
    title_en: {
      type: String,
      default: 'Rebel Moon 2 2024'
    },
    title_fa: {
      type: String,
      default: 'فیلم ربل مون 2'
    },
    hasTag: {
      type: Boolean,
      default: false
    },
    tag: {
      type: Object,
      default: {
        title: 'زیرنویس چسبیده',
        color: 'orange'
      }
    }
  },

  data() {
    return {
      RebelMoon,
      Imdb,
    }
  }
}

</script>


<style scoped lang="scss">
.card-container {
  box-shadow: 0 5px 25px rgba(0, 0, 0, .13);
  position: relative;

  a {
    text-decoration: none;
    color: #fff;
  }
}

.card-img {
  display: block;
  border-radius: 4px;
  width: 100%;
  height: 180px;
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;

  img {
    display: block;
    width: auto;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
  }
}

.card-info-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background: rgba(0, 0, 0, .7);
  border-radius: 4px;
  transition: all 400ms;
}

.card-info {
  position: absolute;
  top: 50%;
  right: 0;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  box-shadow: 0 5px 25px rgba(0, 0, 0, .13) !important;
}


.card-container:hover .card-info-overlay {
  opacity: 1;
}

.internal-distance-l {
  margin-left: 10px;
}

.card-font {
  font-family: inherit;
  line-height: 1.3;
  color: #fff;

  &--title-fa {
    font-weight: 700;
    font-size: 15px;
  }

  &--title-en{
    font-weight: 200;
    font-size: 12px;
  }
}

//search-box </style>