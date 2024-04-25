<template>
  <article class=" mb-3">
    <router-link :to='{ name: "titlePageRoute", params: { slug }}'>
      <div class="card-container">

        <figure class="card-img">
          <img alt="#" :src="thumbnail">
        </figure>

        <tag v-if="hasTag" v-bind="tag"></tag>
        <!-- <span class="badge-sm-free">رایگان</span> -->

        <div class="card-info-overlay">
          <div class="card-info">
            <p class="card-font card-font--title-fa"> {{ genre }} </p>
            <div>
              <img class="internal-distance-l" alt="Imdb" :src="Imdb">
              <span class="card-font card-font--title-fa"> {{ imdb }} </span>
            </div>
          </div>
        </div>

      </div>
    </router-link>
    <p class="movie-name"> <router-link :to="link"> {{ title }} </router-link>  </p>
    <small v-if="hasSubtitle">{{ subtitle }}</small>
  </article>
</template>


<script>


import Imdb from '@/assets/images/la--imdb.svg'
import Tag from "@/components/Tag.vue";

export default {
  name: 'movieCards',
  components: { Tag },
  props: {
    hasSubtitle: {
      type: Boolean,
      default: false
    },
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
    genre: {
      type: String,
      default: ' '
    },
    imdb: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    hasTag: {
      type: Boolean,
      default: false
    },
    tag: {
      type: Object,
      default: {
        title: ' ',
        color: ' '
      }
    }
  },

  data() {
    return {
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
  height: 290px;
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
  left: 0;
  transition: .5s ease;
  opacity: 0;
  bottom: 0;
  right: 0;
  padding: 10px;
  background: linear-gradient(to bottom, transparent 0%, transparent 100px, #101014 100%);
  width: 100%;
  border-radius: 4px;
  padding-top: calc(100% - -20px);
}

.card-info {
  position: absolute;
  top: 85%;
  right: 0;
  -webkit-transform: translate(-20%, -50%);
  -ms-transform: translate(-20%, -50%);
  transform: translate(-20%, -50%);
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
  margin: 0;
  margin-bottom: 5px;

  &--title-fa {
    font-weight: 700;
    font-size: 12px;
  }
}

.movie-name {
  line-height: 0;
  margin-right: 5px;
  a {
    text-decoration: none;
    color: #c6c9cc;
    font-size: 13px;
    font-weight: 400;

    &:is(:hover, :focus) {
      color: #b8daff;
    }
  }
}

.badge-sm-free {
  position: absolute;
    flex-direction: column;
    background: #f6b828;
    color: #000;
    font-size: 10px;
    left: 10px;
    bottom: 10px;
    text-align: center;
    line-height: 15px;
    font-weight: 400;
    display: flex;
    z-index: 3;
    border-radius: 5px;
    padding: 2px;
}

</style>