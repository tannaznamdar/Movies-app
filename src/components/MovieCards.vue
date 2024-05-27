<template>

  <article class=" movieCard mb-3">
    <router-link :to='{ name: "titlePageRoute", params: { slug } }'>
      <div class="card-container">

        <figure class="card-img">
          <img alt="#" :src="thumbnail">
        </figure>

        <tag v-if="hasTag" v-bind="tag"></tag>

        <div class="card-info-overlay">
          <div class="card-info">
            <p class="card-text--info"> {{ genre }} </p>
            <div class="imdb-info">
              <img class="internal-distance-l" alt="Imdb" :src="Imdb">
              <span class="card-text--info card-text--info-num"> {{ imdb }} </span>
            </div>
          </div>
        </div>
      </div>
      <p class="card-text card-text--title"> {{ title }} </p>
      <small class="card-text card-text--subtitle" v-if="hasSubtitle">{{ subtitle }}</small>
    </router-link>
  </article>

</template>


<script>


import Imdb from '@/assets/images/la--imdb.svg'
import Tag from "@/components/Tag.vue";

export default {
  name: 'movieCards',
  components: { Tag },
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
    hasSubtitle: {
      type: Boolean,
      default: false
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
.movieCard {
  a {
    text-decoration: none;
  }
}

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

  @media (max-width:820px) {
    height: 170px;
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
  background: linear-gradient(to bottom, transparent 0%, transparent 100px, #101014 100%);
  width: 100%;
  border-radius: 4px;
  padding-top: calc(100% - -20px);
}

.card-info {
  position: absolute;
  top: 90%;
  right: 0;
  -webkit-transform: translate(-20%, -50%);
  -ms-transform: translate(-20%, -50%);
  transform: translate(-20%, -50%);
  box-shadow: 0 5px 25px rgba(0, 0, 0, .13) !important;

  @media (min-width:450px) and (max-width:820px) {
    transform: translate(-10%, -65%);
    top: 86%;
  }
}

.card-container:hover .card-info-overlay {
  opacity: 1;
}

.internal-distance-l {
  margin-left: 10px;
}

.card-text {
  line-height: 0;
  margin-right: 5px;
  text-decoration: none;
  color: #c6c9cc;

  &:is(:hover, :focus) {
    color: #b8daff;
  }

  &--title {
    font-size: 13px;
    font-weight: 400;
  }

  &--subtitle {
    font-size: 11px;
    font-weight: 400;
  }

  &--info {
    font-family: inherit;
    line-height: 1.3;
    color: #fff;
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 12px;

    &-num {
      font-weight: 400;
      font-size: 11px;
    }
  }
}

.badge-sm {
  position: absolute;
  flex-direction: column;
  background: #f6b828;
  color: #000;
  font-size: 10px;
  left: 15px;
  bottom: 10px;
  text-align: center;
  line-height: 15px;
  font-weight: 400;
  display: flex;
  z-index: 3;
  border-radius: 5px;
  padding: 2px;

  @media (min-width:450px) and (max-width:820px) {
    left: 10px;
  }
}

.imdb-info {
  align-items: center;
  line-height: 0;
}
</style>