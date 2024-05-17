<script setup>
import {useRoute} from 'vue-router'

const location = useRoute();
</script>
<template>

  <div class="wrapper">
    <header class="header pb-1 pt-3">
      <div class="container bv-example-row">
        <div class="row align-items-center">

          <div class="col-1">
            <figure class="logo-img">
              <router-link to="/"><img alt="logo" :src="logo"></router-link>
            </figure>
          </div>

          <div class="col-7">
            <nav class="menu-bar">
              <ul>
                <li class="menu-has-childern"> ژانر
                  <font-awesome-icon class="angle-down-icon" icon="angle-down"/>

                  <div class="dropdown-menu">
                    <ul>
                      <li v-for="genre in genres">
                        <router-link class="active"
                                     :to='{ name: "moviesGenrePageRoute", params: { genre: genre.slug } }'>
                          {{ genre.title }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li class="menu-has-childern"> فیلم <span><font-awesome-icon class="angle-down-icon"
                                                                             icon="angle-down"/></span>

                  <div class="dropdown-menu">
                    <ul>
                      <li v-for="country in countries">
                        <router-link class="active"
                                     :to='{ name: "countryMoviePageRoute", params: { country: country.slug } }'>
                          {{ country.title }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>


                <li class="menu-has-childern"> سریال <span><font-awesome-icon class="angle-down-icon"
                                                                              icon="angle-down"/></span>

                  <div class="dropdown-menu">
                    <ul>
                      <li v-for="country in countries">
                        <router-link class="active"
                                     :to='{ name: "countrySeriesPageRoute", params: { country: country.slug } }'>
                          {{ country.title }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <router-link class="active" :to='{ name: "animationPageRoute" }'> انیمیشن</router-link>
                </li>

                <li class="menu-has-childern"> دوبله فارسی <span><font-awesome-icon class="angle-down-icon"
                                                                                    icon="angle-down"/></span>

                  <div class="dropdown-menu">
                    <ul>
                      <li v-for="doubleGenre in doubleGenres">
                        <router-link class="active"
                                     :to='{ name: "persianDubPageRoute", params: { slug: doubleGenre.slug } }'>
                          {{ doubleGenre.title }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li class="menu-has-childern"> سایر <span><font-awesome-icon class="angle-down-icon"
                                                                             icon="angle-down"/></span>

                  <div class="dropdown-menu">
                    <ul>
                      <li>
                        <router-link class="active" :to='{ name: "collectionPageRoute" }'> کالکشن</router-link>
                      </li>
                      <li>
                        <router-link class="active" :to='{ name: "comingSoonPageRoute" }'> به زودی</router-link>
                      </li>
                      <li>
                        <router-link class="active" :to='{ name: "topMoviePageRoute" }'> 250 فیلم برتر</router-link>
                      </li>
                      <li>
                        <router-link class="active" :to='{ name: "oscarMoviesPageRoute" }'> اسکار ۲۰۲۳</router-link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <router-link class="active" :to='{ name: "jobPageRoute" }'> استخدام</router-link>
                </li>

                <li>
                  <router-link class="active" :to='{ name: "contactUsPageRoute" }'> ارتباط با ما</router-link>
                </li>

              </ul>
            </nav>
          </div>


          <div class="col-3">
            <div>
              <form>
                <div class="search-box align-items-center" @click="searchBox = true">
                  <input class="search-input" name="search" autocomplete="off" placeholder="کلمه مورد نظر...">
                  <button class="search-btn" type="submit"><a href="#">
                    <font-awesome-icon class="icon-size"
                                       icon="magnifying-glass"/>
                  </a></button>
                </div>
              </form>
            </div>
          </div>

          <transition name="fade">
            <div class="fixed_back" v-show="searchBox">
              <div class="d-flex flex-column">
                <div>
                  <div class="search-container">

                    <div class="head_boxsearch">
                      <div class="search-suggest-gradient"></div>

                      <div class="search-input-uptv align-item-center">
                        <input type="text" class="search-ajax-input" placeholder="جستجو کنید..." v-model="inputValue"
                               @keyup.enter="addSearchItem">
                        <button class="icon-transparent-btn" @click="addSearchItem">
                          <font-awesome-icon class="icon-size  internal-distance-l" icon="magnifying-glass"/>
                        </button>
                      </div>

                      <div class="close-button" @click="searchBox = false">بستن</div>
                    </div>

                    <div class="search-result">
                      <div class="mb-4">
                        <h4 class="history_title">ترند ها</h4>

                        <div class="item_history d-flex align-items-center" v-for="trendMovie in trendMovies"
                             @click="searchBox = false">
                          <router-link :to='{ name: "titlePageRoute", params: { slug: trendMovie.slug } }'>
                            <font-awesome-icon class="icon-size icon-size--gray internal-distance-l"
                                               icon="magnifying-glass"/>
                            <span class="w-100"> {{ trendMovie.title }} </span>
                          </router-link>
                        </div>

                      </div>

                      <div>
                        <h4 class="history_title last_item">
                          <span>تاریخچه جستجو شما</span>
                          <span @click="removeHistory">(حذف تاریخچه)</span>
                        </h4>

                        <div class="item_history  last_item d-flex align-items-center" v-for="(item, index) in items">
                          <div class="d-flex align-items-center">
                            <font-awesome-icon class="icon-size icon-size--gray internal-distance-l"
                                               icon="magnifying-glass"/>
                            <span class="w-100"> {{ item }} </span>
                          </div>
                          <button class="icon-transparent-btn" @click="removeSearchItem(index)">
                            <img alt="xMark" :src="xMark">
                          </button>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>


          <div class="col-1">
            <button class="button button--login">
              <router-link :to='{ name: "loginPageRoute" }'> ورود</router-link>
            </button>
          </div>
        </div>

        <section v-if="checkRouteName(location)">

          <div class="row mt-4">
            <div class="col-lg-3 mb-2" v-for="card in cards">
              <headerCards v-bind="card"></headerCards>
            </div>
          </div>

          <search-box v-if="location.name === 'homePageRoute'"></search-box>

        </section>
      </div>
    </header>
  </div>
</template>


<script>
import {useRoute} from 'vue-router'
import logo from '../assets/images/logo.jpg'
import xMark from '@/assets/images/xmark.svg'
import headerCards from "@/components/HeaderCards.vue";
import SearchBox from "@/components/SearchBox.vue";


export default {
  name: 'navbar',
  components: {SearchBox, headerCards, xMark},

  data() {
    return {
      showCards: true,
      searchBox: false,

      logo,

      inputValue: "",
      items: ["مردگان متحرک"],

      genres: [
        {
          title: 'اکشن',
          slug: 'action'
        }, {
          title: 'عاشقانه',
          slug: 'romance'
        }, {
          title: 'خانوادگی',
          slug: 'family'
        }, {
          title: 'ترسناک',
          slug: 'horror'
        }, {
          title: 'درام',
          slug: 'drama'
        }, {
          title: 'جنایی',
          slug: 'criminal'
        },
      ],

      countries: [
        {
          title: ' ایرانی ',
          slug: 'iran'
        },
        {
          title: ' ترکی ',
          slug: 'turkey'
        },
        {
          title: ' خارجی ',
          slug: 'international'
        }
      ],

      cards: [
        {
          slug: 'immaculate-2024',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Immaculate-2024-Header.jpg',
          like: 70,
          imdb: '6.3',
          title_en: 'Immaculate 2024',
          title_fa: 'فیلم معصوم ',
          hasTag: true,
          tag: {
            title: 'زیر نویس چسبیده',
            color: 'orange'
          }
        },
        {
          slug: "rebel-moon-2-2024",
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Rebel-Moon-2-2024-Header.jpg',
          like: 80,
          imdb: '5.1',
          title_en: 'Rebel Moon 2 2024',
          title_fa: 'فیلم ربل مون 2',
          hasTag: true,
          tag: {
            title: 'دوبله فارسی',
            color: 'green'
          }
        },
        {
          slug: "tehran-viper",
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/AfieTehran-7-header.jpg',
          hasTag: false,
          like: 54,
          imdb: '8.1',
          title_en: 'Tehran Viper',
          title_fa: 'سریال افعی تهران '
        },
        {
          slug: 'kung-fu-panda-4-2024',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/03/Kung-Fu-Panda-4-Header.jpg',
          hasTag: true,
          tag: {
            title: 'فیلم برتر ',
            color: 'yellow'
          },
          like: 87,
          imdb: '6.7',
          title_en: 'Kung Fu Panda 4 2024',
          title_fa: 'انیمیشن پاندای کونگ فوکار ۴ '
        },
        {
          slug: 'immaculate-2024',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Immaculate-2024-Header.jpg',
          like: 70,
          imdb: '6.3',
          title_en: 'Immaculate 2024',
          title_fa: 'فیلم معصوم ',
          hasTag: true,
          tag: {
            title: 'زیر نویس چسبیده',
            color: 'orange'
          }
        },
        {
          slug: "rebel-moon-2-2024",
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Rebel-Moon-2-2024-Header.jpg',
          like: 80,
          imdb: '5.1',
          title_en: 'Rebel Moon 2 2024',
          title_fa: 'فیلم ربل مون 2',
          hasTag: true,
          tag: {
            title: 'دوبله فارسی',
            color: 'green'
          }
        },
        {
          slug: "tehran-viper",
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/AfieTehran-7-header.jpg',
          hasTag: false,
          like: 54,
          imdb: '8.1',
          title_en: 'Tehran Viper',
          title_fa: 'سریال افعی تهران '
        },
        {
          slug: 'kung-fu-panda-4-2024',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/03/Kung-Fu-Panda-4-Header.jpg',
          hasTag: true,
          tag: {
            title: 'فیلم برتر ',
            color: 'yellow'
          },
          like: 87,
          imdb: '6.7',
          title_en: 'Kung Fu Panda 4 2024',
          title_fa: 'انیمیشن پاندای کونگ فوکار ۴ '
        },
        {
          slug: 'immaculate-2024',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Immaculate-2024-Header.jpg',
          like: 70,
          imdb: '6.3',
          title_en: 'Immaculate 2024',
          title_fa: 'فیلم معصوم ',
          hasTag: true,
          tag: {
            title: 'زیر نویس چسبیده',
            color: 'orange'
          }
        },
        {
          slug: "rebel-moon-2-2024",
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Rebel-Moon-2-2024-Header.jpg',
          like: 80,
          imdb: '5.1',
          title_en: 'Rebel Moon 2 2024',
          title_fa: 'فیلم ربل مون 2',
          hasTag: true,
          tag: {
            title: 'دوبله فارسی',
            color: 'green'
          }
        },
        {
          slug: "tehran-viper",
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/AfieTehran-7-header.jpg',
          hasTag: false,
          like: 54,
          imdb: '8.1',
          title_en: 'Tehran Viper',
          title_fa: 'سریال افعی تهران '
        },
        {
          slug: 'kung-fu-panda-4-2024',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/03/Kung-Fu-Panda-4-Header.jpg',
          hasTag: true,
          tag: {
            title: 'فیلم برتر ',
            color: 'yellow'
          },
          like: 87,
          imdb: '6.7',
          title_en: 'Kung Fu Panda 4 2024',
          title_fa: 'انیمیشن پاندای کونگ فوکار ۴ '
        },
      ],

      trendMovies: [
        {
          title: 'گناه فرشته',
          slug: 'گناه-فرشته',
          link: 'thumbnail',
        },
        {
          title: ' باب اسفنجی ',
          slug: 'باب-اسفنجی',
          link: 'thumbnail',
        },
        {
          title: 'روح ',
          slug: 'روح',
          link: 'thumbnail',
        },
        {
          title: 'آواتار',
          slug: 'اواتار',
          link: 'thumbnail',
        },
        {
          title: 'گودزیلا ',
          slug: 'گودزیلا',
          link: 'thumbnail',
        },
        {
          title: 'سیلو ',
          slug: 'سیلو',
          link: 'thumbnail',
        },
      ],

      doubleGenres: [
        {
          title: 'فیلم  ',
          slug: 'movies'
        },
        {
          title: 'سریال ',
          slug: 'series'
        },
        {
          title: ' انیمیشن ',
          slug: 'animation'
        }
      ]

    }
  },
  watch: {
    searchBox(val) {
      if (val) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  },
  methods: {
    checkRouteName(location) {
      if (location.name === 'titlePageRoute') {
        return false;
      }
      if (location.name === 'oscarMoviesPageRoute') {
        return false
      }
      return (location.name !== 'topMoviePageRoute');
    },
    addSearchItem: function () {
      if (this.inputValue === "") {
        alert(" لطفا نام فیلم مورد نظر خود را وارد کنید")
      } else {
        this.items.push(this.inputValue)
        this.inputValue = ""
      }
    },

    removeSearchItem: function (index) {
      this.items.splice(index, 1)
    },

    removeHistory: function () {
      this.items = []
    },

  },
}
</script>


<style scoped lang="scss">
.logo-img {
  padding: 0;
  margin: 0;

  img {
    width: 96px;
    height: 45px;
  }
}

.header {
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: #101014;
  padding: 0;
  margin: 0;
}

.menu-bar {
  width: 100%;
  display: flex;
  flex-direction: row;
  float: right;
  align-items: center;
  padding: 0;
  margin: 0;

  ul {
    list-style-type: none;
    display: flex;
    padding: 0;
    margin: 0;

    li {
      position: relative;
      /*in nemizare vaghti hover mishe tekon bokhoran*/
      margin-left: 25px;
      margin-right: 5px;
      color: #c6c9cc;
      font-weight: 400;
      cursor: pointer;

      a {
        text-decoration: none;
        color: #c6c9cc;
        display: block;
        transition: .3s;
        font-weight: 300;
        font-size: 14px;

        &:is(:hover, :focus) {
          color: #fff;
        }
      }

      &:is(:hover, :focus) {
        color: #fff;
      }
    }
  }
}

.menu-has-childern {
  position: relative;
}

.angle-down-icon {
  font-size: 10px;
  line-height: inherit;
  margin-right: 3px;
  font-weight: 900;
  transition: .3s;
  color: #999;
}

.dropdown-menu {
  display: none;

  ul {
    display: block;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
    border-radius: 6px;
    width: 250px;

    li {
      padding: 0;
      margin-bottom: 10px;
    }
  }
}

.menu-has-childern:hover .dropdown-menu {
  display: block;
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 2;
  background-color: #101014de;
  text-align: right;
  box-shadow: 0 5px 30px rgba(0, 0, 0, .075);
  padding: 10px 0;
  border-radius: 4px;
  backdrop-filter: blur(10px);
  transform-origin: top center;
  transform: rotateY(-10deg);
  transition: transform .3s, opacity .3s;
}

.menu-has-childern:hover .angle-down-icon {
  color: #fff;
  transform: rotatex(180deg);
}

/*search-box*/

.search-box {
  color: #8e939b;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 100%;
  height: 45px;
  padding: 8px 15px;
  font-size: 14px;
  font-weight: 500;
  background-color: #1c1c22;
  border-radius: 3px;
  backdrop-filter: blur(20px);
}

.search-input {
  background: transparent;
  border: none;
  font-size: 14px;
  outline: none;
  width: 100%;
}

.search-btn {
  background: transparent;
  border: none;
  line-height: 0;

  a {
    color: #8e939b;
    background: transparent;

    &:is(:hover, :focus) {
      & {
        color: #fff;
      }
    }
  }
}

.icon-size {
  font-size: 17px;
  font-weight: 700;

  &--gray {
    color: #bbc1c6;
    line-height: 0;
  }
}

.internal-distance-l {
  margin-left: 10px;
}

//search page

.fixed_back {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(10 10 10 / 98%);
  top: 0;
  right: 0;
  z-index: 50;
  overflow-y: auto;
}

.head_boxsearch {
  position: fixed;
  width: 830px;
  top: 100px;
  display: flex;
  z-index: 55;
}

.search-container {
  width: 830px;
  margin-right: auto;
  margin-left: auto;
}

.search-suggest-gradient {
  width: 100%;
  height: 110px;
  right: 0;
  position: fixed;
  top: 0;
  z-index: 5;
  background-image: linear-gradient(-180deg, #1a1a1a 10%, rgba(26, 26, 26, 0) 100%);
}

.search-input-uptv {
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  a {
    margin: 0;
    padding: 0;
    color: #1a1a1a;
    line-height: 0;
  }
}

.search-ajax-input {
  width: calc(100% - 60px);
  height: 100%;
  border: 0;
  background-color: transparent;
  font-size: 15px;
  outline: none;
  padding-right: 15px;
  padding-left: 15px;
  color: #000;
}

.close-button {
  color: #fdc13c;
  float: left;
  text-align: center;
  line-height: 41px;
  background: rgba(8, 8, 8, .57);
  width: 50px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 10px;
  font-weight: 500;
}

.search-result {
  margin-top: 180px;
}

.history_title {
  padding-top: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  line-height: 1.3;
  font-weight: 500;
  color: #f5f5f5;
}

.item_history {
  padding: 6px 0px;
  border-bottom: 1px solid #414141;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 300;
  color: #bbc1c6;

  a {
    text-decoration: none;
    color: #bbc1c6;

    &:is(:hover, :focus) {
      color: #fff;
    }
  }
}

.history_title > span:last-child {
  cursor: pointer;
  font-size: 13px;
  color: #f5bb3a;
  margin-right: 10px;
}

.icon-transparent-btn {
  background-color: transparent;
  border: none;
  line-height: 0;
}

/* .fade-leave-active below version 2.1.8 */

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0
}
</style>