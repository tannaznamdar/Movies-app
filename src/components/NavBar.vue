<script setup>
import { useRoute } from 'vue-router'
const location = useRoute();
</script>
<template>

  <div class="wrapper">
    <header class="header pb-1 pt-3">
      <div class="container bv-example-row">
        <div class="row align-items-center">

          <div class="col-1">
            <figure class="logo-img">
              <router-link to="/"> <img alt="logo" :src="logo"> </router-link>
            </figure>
          </div>

          <div class="col-7">
            <nav class="menu-bar">
              <ul>
                <li class="menu-has-childern"> ژانر <span><font-awesome-icon class="angle-down-icon"
                      icon="angle-down" /></span>

                  <div class="dropdown-menu">
                    <ul>
                      <li v-for="genre in genres">
                        <router-link class="active"
                          :to='{ name: "moviesGenrePageRoute", params: { genre: genre.slug } }'>
                          {{ genre.title }} </router-link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li class="menu-has-childern"> فیلم <span><font-awesome-icon class="angle-down-icon"
                      icon="angle-down" /></span>

                  <div class="dropdown-menu">
                    <ul>
                      <li v-for="country in countries">
                        <router-link class="active"
                          :to='{ name: "countryMoviePageRoute", params: { country: country.slug } }'>
                          {{ country.title }}</router-link>
                      </li>
                    </ul>
                  </div>
                </li>


                <li class="menu-has-childern"> سریال <span><font-awesome-icon class="angle-down-icon"
                      icon="angle-down" /></span>

                  <div class="dropdown-menu">
                    <ul>
                      <li v-for="country in countries">
                        <router-link class="active"
                          :to='{ name: "countrySeriesPageRoute", params: { country: country.slug } }'>
                          {{ country.title }}</router-link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <router-link class="active" :to='{ name: "animationPageRoute" }'> انیمیشن </router-link>
                </li>
                <li>
                  <router-link class="active" :to='{ name: "persianDubPageRoute" }'> دوبله فارسی </router-link>
                </li>

                <li class="menu-has-childern"> سایر <span><font-awesome-icon class="angle-down-icon"
                      icon="angle-down" /></span>

                  <div class="dropdown-menu">
                    <ul>
                      <li v-for="content in contents">
                        <router-link class="active" :to='{ name: "otherPageRoute", params: { content: content.slug } }'>
                          {{ content.title }}</router-link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <router-link class="active" :to='{ name: "jobPageRoute" }'> استخدام </router-link>
                </li>
                <li>
                  <router-link class="active" :to='{ name: "contactUsPageRoute" }'> ارتباط با ما </router-link>
                </li>

              </ul>
            </nav>
          </div>


          <div class="col-3">
            <div>
              <form>
                <div class="search-box align-items-center">
                  <input class="search-input" type="search" name="search" autocomplete="off"
                    placeholder="کلمه مورد نظر...">
                  <button class="search-btn" type="submit"><a href="#"><font-awesome-icon class="icon-size"
                        icon="magnifying-glass" /></a></button>
                </div>
              </form>
            </div>
          </div>


          <div class="col-1">
            <button class="button button--login">
              <router-link :to='{ name: "loginPageRoute" }'> ورود </router-link>
            </button>
          </div>
        </div>

        <section v-if="location.name !== 'titlePageRoute'">

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
import { useRoute } from 'vue-router'
import logo from '../assets/images/logo.jpg'
import headerCards from "@/components/HeaderCards.vue";
import SearchBox from "@/components/SearchBox.vue";
export default {
  name: 'navbar',
  components: { SearchBox, headerCards },
  data() {
    return {
      logo,
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
          title: 'فیلم ایرانی ',
          slug: 'iran'
        },
        {
          title: 'فیلم ترکی ',
          slug: 'turkey'
        },
        {
          title: 'فیلم خارجی ',
          slug: 'international'
        }
      ],

      contents: [
        {
          title: '250 فیلم برتر ',
          slug: 'imdb-250'
        },
        {

          title: 'اسکار 2023',
          slug: 'oscar2023'
        },
        {
          title: ' به زودی  ',
          slug: 'ComingSoon'
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
      ]
    }
  }
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

  &:is(:hover, :focus) {
    color: #fff;
    transform: rotatex(180deg);
  }
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
}
</style>