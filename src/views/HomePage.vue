<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import MovieCards from "@/components/MovieCards.vue";
import LargeMovieCards from "@/components/LargeMovieCards.vue";
import SmallMovieCards from "@/components/SmallMovieCards.vue";
import movieIcon from '@/assets/images/movie.svg'
import Pagination from '@/components/Pagination.vue'
</script>


<template>
  <div class="container-fluid">

    <section class="movie-card">
      <div class="container bv-example-row">

        <div class="row">
          <div class=" mt-5 mb-3 d-flex align-items-center justify-content-between">
            <h4 class="title">فیلم ایرانی رایگان</h4>
            <button class="button button--transparent">
              <router-link class="active" :to='{ name: "freeMoviespageRoute" }'> مشاهده
                همه </router-link>
            </button>
          </div>
        </div>

        <Splide class="row"
          :options="{ arrows: false, pagination: false, direction: 'rtl', type: 'slide', trimSpace: false, perPage: 6, perMove: 1 }"
          aria-label="My Favorite Images">
          <SplideSlide v-for="freeIranianMovie in freeIranianMovies">
            <MovieCards v-bind="freeIranianMovie"></MovieCards>
          </SplideSlide>
        </Splide>

      </div>
    </section>

    <section class="movie-card">
      <div class="container bv-example-row">
        <div class="row">
          <div class=" mt-5 mb-3 d-flex align-items-center justify-content-between">
            <h4 class="title"> فیلم جدید </h4>
            <button class="button button--transparent">
              <router-link class="active" :to='{ name: "newMoviePageRoute" }'> مشاهده همه </router-link>
            </button>
          </div>
        </div>

        <Splide class="row"
          :options="{ arrows: false, pagination: false, direction: 'rtl', type: 'slide', trimSpace: false, perPage: 6, perMove: 1 }"
          aria-label="My Favorite Images">
          <SplideSlide v-for="newMovie in newMovies">
            <MovieCards v-bind="newMovie"></MovieCards>
          </SplideSlide>
        </Splide>

      </div>
    </section>

    <section class="movie-card">
      <div class="container bv-example-row">
        <div class="row">
          <div class=" mt-5 mb-3 d-flex align-items-center justify-content-between">
            <h4 class="title"> سریال خارجی </h4>
            <button class="button button--transparent">
              <router-link class="active"
                :to='{ name: "countrySeriesPageRoute", params: { country: "international" } }'>
                مشاهده همه </router-link>
            </button>
          </div>
        </div>

        <Splide class="row"
          :options="{ arrows: false, pagination: false, direction: 'rtl', type: 'slide', trimSpace: false, perPage: 6, perMove: 1 }"
          aria-label="My Favorite Images">
          <SplideSlide v-for="internationalSerial in internationalSeries">
            <MovieCards v-bind="internationalSerial"></MovieCards>
          </SplideSlide>
        </Splide>

      </div>
    </section>

    <section class="movie-card">
      <div class="container bv-example-row">
        <div class="row">
          <div class=" mt-5 mb-3 d-flex align-items-center justify-content-between">
            <h4 class="title"> سریال ایرانی </h4>
            <button class="button button--transparent">
              <router-link class="active" :to='{ name: "countrySeriesPageRoute", params: { country: "iran" } }'> مشاهده
                همه </router-link>
            </button>
          </div>
        </div>

        <Splide class="row"
          :options="{ arrows: false, pagination: false, direction: 'rtl', type: 'slide', trimSpace: false, perPage: 6, perMove: 1 }"
          aria-label="My Favorite Images">
          <SplideSlide v-for="newPersianSerial in newPersianSeries">
            <MovieCards v-bind="newPersianSerial"></MovieCards>
          </SplideSlide>
        </Splide>

      </div>
    </section>

    <section class="movie-card">
      <div class="container bv-example-row">
        <div class="row">
          <div class=" mt-5 mb-3 d-flex align-items-center justify-content-between">
            <h4 class="title"> فیلم دوبله فارسی جدید </h4>
            <button class="button button--transparent">
              <router-link class="active" :to='{ name: "persianDubPageRoute", params: { slug: "movies" } }'> مشاهده همه
              </router-link>
            </button>
          </div>
        </div>

        <Splide class="row"
          :options="{ arrows: false, pagination: false, direction: 'rtl', type: 'slide', trimSpace: false, perPage: 6, perMove: 1 }"
          aria-label="My Favorite Images">
          <SplideSlide v-for="newPersianDubbingMovie in newPersianDubbingMovies">
            <MovieCards v-bind="newPersianDubbingMovie"></MovieCards>
          </SplideSlide>
        </Splide>

      </div>
    </section>

    <section class="movie-card mb-4">
      <div class="container bv-example-row">
        <div class="row">
          <div class=" mt-5 mb-3 d-flex align-items-center justify-content-between">
            <h4 class="title"> انیمیشن</h4>
            <button class="button button--transparent">
              <router-link class="active" :to='{ name: "animationPageRoute" }'> مشاهده همه </router-link>
            </button>
          </div>
        </div>

        <Splide class="row"
          :options="{ arrows: false, pagination: false, direction: 'rtl', type: 'slide', trimSpace: false, perPage: 6, perMove: 1 }"
          aria-label="My Favorite Images">
          <SplideSlide v-for="animation in animations">
            <MovieCards v-bind="animation"></MovieCards>
          </SplideSlide>
        </Splide>

      </div>
    </section>

    <section class="large-movie-card">
      <div class="container bv-example-row">
        <div class="row">

          <div class="col-lg-9 col-md-12 mb-40">
            <div v-for="largeMovieCard in largeMovieCards">
              <LargeMovieCards v-bind="largeMovieCard"></LargeMovieCards>
            </div>

            <Pagination></Pagination>

          </div>

          <div class="col-lg-3 col-md-12">

            <div class="sidebar-tabs respansive-display mb-40">
              <div class="sidebar-tabs-btn">
                <a href="#" class="sidebar-btn-wrap"> به روز شده ها </a>
              </div>
            </div>

            <section class="update-series mb-40">
              <div class="mb-4 d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <img alt="calendar" :src="movieIcon">
                  <h5 class="sidebar sidebar--title internal-distance-r">آپدیت سریال‌ها</h5>
                </div>
                <button class="button button--transparent button--transparent-gray">
                  <router-link class="active" :to='{ name: "updateSeriesPageRoute" }'> مشاهده همه </router-link>
                </button>
              </div>

              <div class="row flex-direction">
                <div class="col-lg-12 col-md-6" v-for="smallMovieCard in smallMovieCards">
                  <SmallMovieCards v-bind="smallMovieCard"></SmallMovieCards>
                </div>
              </div>
            </section>

            <section class="persian-dubbing mb-40">
              <div class="main-sidebar-wrap">
                <div class="row  d-flex align-items-center mb-2">
                  <div class="col-lg-4 col-md-2 col-4">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="90"
                      height="90" viewBox="0 0 90 90">
                      <defs>
                        <linearGradient id="a" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                          <stop offset="0" stop-color="#cce3fb"></stop>
                          <stop offset="1" stop-color="#5facfa"></stop>
                        </linearGradient>
                        <filter id="b" x="0" y="0" width="90" height="90" filterUnits="userSpaceOnUse">
                          <feOffset dy="2" input="SourceAlpha"></feOffset>
                          <feGaussianBlur stdDeviation="7.5" result="c"></feGaussianBlur>
                          <feFlood flood-color="#5facfa" flood-opacity="0.271"></feFlood>
                          <feComposite operator="in" in2="c"></feComposite>
                          <feComposite in="SourceGraphic"></feComposite>
                        </filter>
                        <linearGradient id="d" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                          <stop offset="0" stop-color="#fccf78"></stop>
                          <stop offset="1" stop-color="#ff8a7d"></stop>
                        </linearGradient>
                      </defs>
                      <g transform="translate(-519.5 -1013.5)">
                        <circle cx="29.5" cy="29.5" r="29.5" transform="translate(535 1027)" opacity="0.1"
                          fill="url(#a)"></circle>
                        <g transform="matrix(1, 0, 0, 1, 519.5, 1013.5)" filter="url(#b)">
                          <circle cx="22.5" cy="22.5" r="22.5" transform="translate(22.5 20.5)" fill="#fff"></circle>
                        </g>
                        <g transform="translate(557.244 1044.938)">
                          <g transform="translate(0 10.863)">
                            <g transform="translate(0)">
                              <path
                                d="M92.785,210.2a.8.8,0,1,0-1.594,0,5.631,5.631,0,0,1-11.261,0,.8.8,0,1,0-1.594,0,7.223,7.223,0,0,0,6.427,7.2v2.125h-2.9a.8.8,0,1,0,0,1.594h7.384a.8.8,0,1,0,0-1.594h-2.9V217.4A7.223,7.223,0,0,0,92.785,210.2Z"
                                transform="translate(-78.336 -209.408)" fill="url(#d)"></path>
                            </g>
                          </g>
                          <g transform="translate(2.789)">
                            <g transform="translate(0)">
                              <path
                                d="M136.531,0A4.443,4.443,0,0,0,132.1,4.435v7.2a4.435,4.435,0,1,0,8.871.027V4.435A4.443,4.443,0,0,0,136.531,0Z"
                                transform="translate(-132.096)" fill="url(#d)"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>

                  <div class="col-lg-8 col-md-10 col-8">
                    <span class="sidebar sidebar--subtitle">فقط در آپ تیوی</span>
                    <h5 class="sidebar sidebar--title">دوبله‌های فارسی</h5>
                  </div>
                </div>

                <div class="flex-direction">
                  <button class="button button-lg button-lg--sidebar mb-15">
                    <router-link class="active" :to='{ name: "persianDubPageRoute", params: { slug: "animation" } }'>
                      انیمیشن دوبله فارسی
                    </router-link>
                  </button>
                  <button class="button button-lg button-lg--sidebar">
                    <router-link class="active" :to='{ name: "persianDubPageRoute", params: { slug: "movies" } }'>فیلم
                      های دوبله فارسی
                    </router-link>
                  </button>
                </div>

              </div>
            </section>

            <section class="update-series">
              <div class="mb-4 d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <img alt="calendar" :src="movieIcon">
                  <h5 class="sidebar sidebar--title internal-distance-r"> به زودی </h5>
                </div>
                <button class="button button--transparent button--transparent-gray">
                  <router-link class="active" :to='{ name: "comingSoonPageRoute" }'>
                    مشاهده
                    همه </router-link>
                </button>
              </div>

              <div class="row flex-direction">
                <div class="col-lg-12 col-md-6" v-for="comingSoonMovieSmallCard in comingSoonMovieSmallCards">
                  <SmallMovieCards v-bind="comingSoonMovieSmallCard"></SmallMovieCards>
                </div>
              </div>

            </section>

          </div>

        </div>
      </div>
    </section>

  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {

      freeIranianMovies: [
        {
          slug: 'شهرزاد',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2018/06/shahrzad-s3-final-min-214x300.jpg',
          link: 'thumbnail',
          genre: ' درام,تاریخی,رمانتیک',
          imdb: '6.3',
          title: 'شهرزاد',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        },
        {
          slug: 'دل',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2020/09/del-40-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,رمانتیک',
          imdb: '7.2',
          title: 'سریال دل ',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        },
        {
          slug: 'متری-شیش-و-نیم',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2019/03/Metri6.5-207x290.jpg',
          link: 'thumbnail',
          genre: 'اکشن,جنایی,درام',
          imdb: '8.1',
          title: 'متری شیش و نیم',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        },
        {
          slug: 'گناه-فرشته',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/GonahFereshteh-18-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام, خانوادگی',
          imdb: '7.3',
          title: 'گناه فرشته  ',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        },
        {
          slug: 'افعی-تهران',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Viper-of-Tehran-8-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,رمانتیک',
          imdb: '8.3',
          title: 'افعی تهران',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        },
        {
          slug: 'جنگل-آسفالت',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Jangal-Asphalt-5-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,تاریخی,رمانتیک',
          imdb: '6.3',
          title: 'جنگل آسفالت  ',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        },
        {
          slug: 'شهرزاد',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2018/06/shahrzad-s3-final-min-214x300.jpg',
          link: 'thumbnail',
          genre: ' درام,تاریخی,رمانتیک',
          imdb: '6.3',
          title: 'شهرزاد',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        },
        {
          slug: 'دل',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2020/09/del-40-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,رمانتیک',
          imdb: '7.2',
          title: 'سریال دل ',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        },
      ],

      newMovies: [
        {
          slug: 'شهرزاد',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2018/06/shahrzad-s3-final-min-214x300.jpg',
          link: 'thumbnail',
          genre: ' درام,تاریخی,رمانتیک',
          imdb: '6.3',
          title: 'شهرزاد',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'دل',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2020/09/del-40-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,رمانتیک',
          imdb: '7.2',
          title: 'سریال دل ',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: 'دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'متری-شیش-و-نیم',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2019/03/Metri6.5-207x290.jpg',
          link: 'thumbnail',
          genre: 'اکشن,جنایی,درام',
          imdb: '8.1',
          title: 'متری شیش و نیم',
          subtitle: '',
          hasSubtitle: false,
          hasTag: false,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        },
        {
          slug: 'گناه-فرشته',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/GonahFereshteh-18-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام, خانوادگی',
          imdb: '7.3',
          title: 'گناه فرشته  ',
          subtitle: '',
          hasSubtitle: false,
          hasTag: false,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        },
        {
          slug: 'افعی-تهران',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Viper-of-Tehran-8-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,رمانتیک',
          imdb: '8.3',
          title: 'افعی تهران',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی  ',
            small: true,
          }
        },
        {
          slug: 'جنگل-آسفالت',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Jangal-Asphalt-5-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,تاریخی,رمانتیک',
          imdb: '6.3',
          title: 'جنگل آسفالت  ',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی  ',
            small: true,
          }
        },
        {
          slug: 'شهرزاد',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2018/06/shahrzad-s3-final-min-214x300.jpg',
          link: 'thumbnail',
          genre: ' درام,تاریخی,رمانتیک',
          imdb: '6.3',
          title: 'شهرزاد',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        },
        {
          slug: 'دل',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2020/09/del-40-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,رمانتیک',
          imdb: '7.2',
          title: 'سریال دل ',
          subtitle: '',
          hasSubtitle: false,
          hasTag: false,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        },
        {
          slug: 'گناه-فرشته',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/GonahFereshteh-18-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام, خانوادگی',
          imdb: '7.3',
          title: 'گناه فرشته  ',
          subtitle: '',
          hasSubtitle: false,
          hasTag: false,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        },
        {
          slug: 'افعی-تهران',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Viper-of-Tehran-8-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,رمانتیک',
          imdb: '8.3',
          title: 'افعی تهران',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی  ',
            small: true,
          }
        },
        {
          slug: 'جنگل-آسفالت',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Jangal-Asphalt-5-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,تاریخی,رمانتیک',
          imdb: '6.3',
          title: 'جنگل آسفالت  ',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی  ',
            small: true,
          }
        },
      ],

      internationalSeries: [
        {
          slug: 'شهرزاد',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2018/06/shahrzad-s3-final-min-214x300.jpg',
          link: 'thumbnail',
          genre: ' درام,تاریخی,رمانتیک',
          imdb: '6.3',
          title: 'شهرزاد',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'دل',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2020/09/del-40-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,رمانتیک',
          imdb: '7.2',
          title: 'سریال دل ',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: 'دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'متری-شیش-و-نیم',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2019/03/Metri6.5-207x290.jpg',
          link: 'thumbnail',
          genre: 'اکشن,جنایی,درام',
          imdb: '8.1',
          title: 'متری شیش و نیم',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: false,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        },
        {
          slug: 'گناه-فرشته',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/GonahFereshteh-18-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام, خانوادگی',
          imdb: '7.3',
          title: 'گناه فرشته  ',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: false,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        },
        {
          slug: 'افعی-تهران',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Viper-of-Tehran-8-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,رمانتیک',
          imdb: '8.3',
          title: 'افعی تهران',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی  ',
            small: true,
          }
        },
        {
          slug: 'جنگل-آسفالت',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Jangal-Asphalt-5-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,تاریخی,رمانتیک',
          imdb: '6.3',
          title: 'جنگل آسفالت  ',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی  ',
            small: true,
          }
        },
        {
          slug: 'شهرزاد',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2018/06/shahrzad-s3-final-min-214x300.jpg',
          link: 'thumbnail',
          genre: ' درام,تاریخی,رمانتیک',
          imdb: '6.3',
          title: 'شهرزاد',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        },
        {
          slug: 'دل',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2020/09/del-40-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,رمانتیک',
          imdb: '7.2',
          title: 'سریال دل ',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: false,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        },
        {
          slug: 'گناه-فرشته',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/GonahFereshteh-18-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام, خانوادگی',
          imdb: '7.3',
          title: 'گناه فرشته  ',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: false,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        },
        {
          slug: 'افعی-تهران',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Viper-of-Tehran-8-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,رمانتیک',
          imdb: '8.3',
          title: 'افعی تهران',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی  ',
            small: true,
          }
        },
        {
          slug: 'جنگل-آسفالت',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Jangal-Asphalt-5-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,تاریخی,رمانتیک',
          imdb: '6.3',
          title: 'جنگل آسفالت  ',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی  ',
            small: true,
          }
        },
      ],

      newPersianSeries: [
        {
          slug: 'شهرزاد',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2018/06/shahrzad-s3-final-min-214x300.jpg',
          link: 'thumbnail',
          genre: ' درام,تاریخی,رمانتیک',
          imdb: '6.3',
          title: 'شهرزاد',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' جمعه ها ',
            small: true,
          }
        },
        {
          slug: 'دل',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2020/09/del-40-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,رمانتیک',
          imdb: '7.2',
          title: 'سریال دل ',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' پنجشنبه ها ',
            small: true,
          }
        },
        {
          slug: 'متری-شیش-و-نیم',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2019/03/Metri6.5-207x290.jpg',
          link: 'thumbnail',
          genre: 'اکشن,جنایی,درام',
          imdb: '8.1',
          title: 'متری شیش و نیم',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' شنبه ها ',
            small: true,
          }
        },
        {
          slug: 'گناه-فرشته',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/GonahFereshteh-18-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام, خانوادگی',
          imdb: '7.3',
          title: 'گناه فرشته  ',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' یکشنبه ها ',
            small: true,
          }
        },
        {
          slug: 'افعی-تهران',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Viper-of-Tehran-8-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,رمانتیک',
          imdb: '8.3',
          title: 'افعی تهران',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: '  شنبه ها  ',
            small: true,
          }
        },
        {
          slug: 'جنگل-آسفالت',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Jangal-Asphalt-5-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,تاریخی,رمانتیک',
          imdb: '6.3',
          title: 'جنگل آسفالت  ',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: false,
          tag: {
            title: ' ',
            small: true,
          }
        },
        {
          slug: 'شهرزاد',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2018/06/shahrzad-s3-final-min-214x300.jpg',
          link: 'thumbnail',
          genre: ' درام,تاریخی,رمانتیک',
          imdb: '6.3',
          title: 'شهرزاد',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: false,
          tag: {
            title: '  ',
            small: true,
          }
        },
        {
          slug: 'دل',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2020/09/del-40-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,رمانتیک',
          imdb: '7.2',
          title: 'سریال دل ',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' پنجشنبه ها ',
            small: true,
          }
        },
        {
          slug: 'گناه-فرشته',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/GonahFereshteh-18-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام, خانوادگی',
          imdb: '7.3',
          title: 'گناه فرشته  ',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: false,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        },
        {
          slug: 'افعی-تهران',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Viper-of-Tehran-8-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,رمانتیک',
          imdb: '8.3',
          title: 'افعی تهران',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: false,
          tag: {
            title: ' ',
            small: true,
          }
        },
        {
          slug: 'جنگل-آسفالت',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Jangal-Asphalt-5-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,تاریخی,رمانتیک',
          imdb: '6.3',
          title: 'جنگل آسفالت  ',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' پنجشنبه ها ',
            small: true,
          }
        },
      ],

      newPersianDubbingMovies: [
        {
          slug: 'شهرزاد',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2018/06/shahrzad-s3-final-min-214x300.jpg',
          link: 'thumbnail',
          genre: ' درام,تاریخی,رمانتیک',
          imdb: '6.3',
          title: 'شهرزاد',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'دل',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2020/09/del-40-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,رمانتیک',
          imdb: '7.2',
          title: 'سریال دل ',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: 'دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'متری-شیش-و-نیم',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2019/03/Metri6.5-207x290.jpg',
          link: 'thumbnail',
          genre: 'اکشن,جنایی,درام',
          imdb: '8.1',
          title: 'متری شیش و نیم',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'گناه-فرشته',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/GonahFereshteh-18-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام, خانوادگی',
          imdb: '7.3',
          title: 'گناه فرشته  ',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'افعی-تهران',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Viper-of-Tehran-8-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,رمانتیک',
          imdb: '8.3',
          title: 'افعی تهران',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی  ',
            small: true,
          }
        },
        {
          slug: 'جنگل-آسفالت',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Jangal-Asphalt-5-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,تاریخی,رمانتیک',
          imdb: '6.3',
          title: 'جنگل آسفالت  ',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی  ',
            small: true,
          }
        },
        {
          slug: 'شهرزاد',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2018/06/shahrzad-s3-final-min-214x300.jpg',
          link: 'thumbnail',
          genre: ' درام,تاریخی,رمانتیک',
          imdb: '6.3',
          title: 'شهرزاد',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'دل',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2020/09/del-40-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,رمانتیک',
          imdb: '7.2',
          title: 'سریال دل ',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'گناه-فرشته',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/GonahFereshteh-18-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام, خانوادگی',
          imdb: '7.3',
          title: 'گناه فرشته  ',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'افعی-تهران',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Viper-of-Tehran-8-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,رمانتیک',
          imdb: '8.3',
          title: 'افعی تهران',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی  ',
            small: true,
          }
        },
        {
          slug: 'جنگل-آسفالت',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Jangal-Asphalt-5-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,تاریخی,رمانتیک',
          imdb: '6.3',
          title: 'جنگل آسفالت  ',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی  ',
            small: true,
          }
        }
      ],

      animations: [
        {
          slug: 'شهرزاد',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2018/06/shahrzad-s3-final-min-214x300.jpg',
          link: 'thumbnail',
          genre: ' درام,تاریخی,رمانتیک',
          imdb: '6.3',
          title: 'شهرزاد',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'دل',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2020/09/del-40-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,رمانتیک',
          imdb: '7.2',
          title: 'سریال دل ',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: 'دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'متری-شیش-و-نیم',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2019/03/Metri6.5-207x290.jpg',
          link: 'thumbnail',
          genre: 'اکشن,جنایی,درام',
          imdb: '8.1',
          title: 'متری شیش و نیم',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: false,
          tag: {
            title: ' دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'گناه-فرشته',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/GonahFereshteh-18-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام, خانوادگی',
          imdb: '7.3',
          title: 'گناه فرشته  ',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'افعی-تهران',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Viper-of-Tehran-8-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,رمانتیک',
          imdb: '8.3',
          title: 'افعی تهران',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: false,
          tag: {
            title: ' دوبله فارسی  ',
            small: true,
          }
        },
        {
          slug: 'جنگل-آسفالت',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Jangal-Asphalt-5-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,تاریخی,رمانتیک',
          imdb: '6.3',
          title: 'جنگل آسفالت  ',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی  ',
            small: true,
          }
        },
        {
          slug: 'شهرزاد',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2018/06/shahrzad-s3-final-min-214x300.jpg',
          link: 'thumbnail',
          genre: ' درام,تاریخی,رمانتیک',
          imdb: '6.3',
          title: 'شهرزاد',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'دل',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2020/09/del-40-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,رمانتیک',
          imdb: '7.2',
          title: 'سریال دل ',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: false,
          tag: {
            title: ' دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'گناه-فرشته',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/GonahFereshteh-18-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام, خانوادگی',
          imdb: '7.3',
          title: 'گناه فرشته  ',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'افعی-تهران',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Viper-of-Tehran-8-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,رمانتیک',
          imdb: '8.3',
          title: 'افعی تهران',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: false,
          tag: {
            title: ' دوبله فارسی  ',
            small: true,
          }
        },
        {
          slug: 'جنگل-آسفالت',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Jangal-Asphalt-5-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام,تاریخی,رمانتیک',
          imdb: '6.3',
          title: 'جنگل آسفالت  ',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی  ',
            small: true,
          }
        }
      ],

      largeMovieCards: [
        {
          slug: 'شهرزاد',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2018/06/shahrzad-s3-final-min-214x300.jpg',
          link: 'thumbnail',
          genres: [
            {
              title: 'درام',
              slug: 'drama'
            },
            {
              title: 'عاشقانه',
              slug: 'romance'
            }
          ],
          imdb: '6.3',
          title: 'شهرزاد',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: 'true',
          actors: [
            {
              title: 'امیر جعفری',
              slug: 'امیر-جعفری'
            },
            {
              title: 'آزاده صمدی',
              slug: 'آزاده-صمدی'
            },
            {
              title: 'دیبا زاهد',
              slug: 'دیبا-زاهد'
            }
          ],
          like: 86,
          hasDirector: true,
          directors: [
            {
              title: 'پژمان تیمورتاش',
              slug: 'پژمان-تیمورتاش'
            }
          ],
          synopsis: 'هنگامه برای نجات جان برادرش نیاز به پول دارد. او برای آماده کردن این پول دست به...',
          year: 1403,
          Country: 'ایران',
          hasBadge: false,
          btnTitle: 'دانلود سریال'
        },
        {
          slug: 'شهرزاد',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2018/06/shahrzad-s3-final-min-214x300.jpg',
          link: 'thumbnail',
          genres: [
            {
              title: 'درام',
              slug: 'drama'
            },
            {
              title: 'عاشقانه',
              slug: 'romance'
            }
          ],
          imdb: '6.3',
          title: 'شهرزاد',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: 'true',
          actors: [
            {
              title: 'امیر جعفری',
              slug: 'امیر-جعفری'
            },
            {
              title: 'آزاده صمدی',
              slug: 'آزاده-صمدی'
            },
            {
              title: 'دیبا زاهد',
              slug: 'دیبا-زاهد'
            }
          ],
          like: 86,
          directors: [
            {
              title: 'پژمان تیمورتاش',
              slug: 'پژمان-تیمورتاش'
            }
          ],
          hasDirector: true,
          synopsis: 'هنگامه برای نجات جان برادرش نیاز به پول دارد. او برای آماده کردن این پول دست به...',
          year: 1403,
          Country: 'ایران',
          hasBadge: false,
          btnTitle: 'دانلود سریال'
        },
        {
          slug: 'شهرزاد',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2018/06/shahrzad-s3-final-min-214x300.jpg',
          link: 'thumbnail',
          genres: [
            {
              title: 'درام',
              slug: 'drama'
            },
            {
              title: 'عاشقانه',
              slug: 'romance'
            }
          ],
          imdb: '6.3',
          title: 'شهرزاد',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: 'true',
          actors: [
            {
              title: 'امیر جعفری',
              slug: 'امیر-جعفری'
            },
            {
              title: 'آزاده صمدی',
              slug: 'آزاده-صمدی'
            },
            {
              title: 'دیبا زاهد',
              slug: 'دیبا-زاهد'
            }
          ],
          like: 86,
          directors: [
            {
              title: 'پژمان تیمورتاش',
              slug: 'پژمان-تیمورتاش'
            }
          ],
          hasDirector: true,
          synopsis: 'هنگامه برای نجات جان برادرش نیاز به پول دارد. او برای آماده کردن این پول دست به...',
          year: 1403,
          Country: 'ایران',
          hasBadge: false,
          btnTitle: 'دانلود سریال'
        },
        {
          slug: 'شهرزاد',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2018/06/shahrzad-s3-final-min-214x300.jpg',
          link: 'thumbnail',
          genres: [
            {
              title: 'درام',
              slug: 'drama'
            },
            {
              title: 'عاشقانه',
              slug: 'romance'
            }
          ],
          imdb: '6.3',
          title: 'شهرزاد',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: 'true',
          actors: [
            {
              title: 'امیر جعفری',
              slug: 'امیر-جعفری'
            },
            {
              title: 'آزاده صمدی',
              slug: 'آزاده-صمدی'
            },
            {
              title: 'دیبا زاهد',
              slug: 'دیبا-زاهد'
            }
          ],
          like: 86,
          directors: [
            {
              title: 'پژمان تیمورتاش',
              slug: 'پژمان-تیمورتاش'
            }
          ],
          hasDirector: true,
          synopsis: 'هنگامه برای نجات جان برادرش نیاز به پول دارد. او برای آماده کردن این پول دست به...',
          year: 1403,
          Country: 'ایران',
          hasBadge: false,
          btnTitle: 'دانلود سریال'
        },
        {
          slug: 'شهرزاد',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2018/06/shahrzad-s3-final-min-214x300.jpg',
          link: 'thumbnail',
          genres: [
            {
              title: 'درام',
              slug: 'drama'
            },
            {
              title: 'عاشقانه',
              slug: 'romance'
            }
          ],
          imdb: '6.3',
          title: 'شهرزاد',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: 'true',
          actors: [
            {
              title: 'امیر جعفری',
              slug: 'امیر-جعفری'
            },
            {
              title: 'آزاده صمدی',
              slug: 'آزاده-صمدی'
            },
            {
              title: 'دیبا زاهد',
              slug: 'دیبا-زاهد'
            }
          ],
          like: 86,
          directors: [
            {
              title: 'پژمان تیمورتاش',
              slug: 'پژمان-تیمورتاش'
            }
          ],
          hasDirector: true,
          synopsis: 'هنگامه برای نجات جان برادرش نیاز به پول دارد. او برای آماده کردن این پول دست به...',
          year: 1403,
          Country: 'ایران',
          hasBadge: false,
          btnTitle: 'دانلود سریال'
        },
      ],

      smallMovieCards: [
        {
          slug: 'زیر-پل',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Under-The-Bridge-s1-Jadval.jpg',
          link: 'thumbnail',
          title: 'زیر پل',
          hasTag: true,
          tag: {
            title: ' امروز ',
            color: 'white'
          }
        },
        {
          slug: 'زیر-پل',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Under-The-Bridge-s1-Jadval.jpg',
          link: 'thumbnail',
          title: 'زیر پل',
          hasTag: true,
          tag: {
            title: ' امروز ',
            color: 'white'
          }
        },
        {
          slug: 'زیر-پل',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Under-The-Bridge-s1-Jadval.jpg',
          link: 'thumbnail',
          title: 'زیر پل',
          hasTag: true,
          tag: {
            title: ' امروز ',
            color: 'white'
          }
        },
        {
          slug: 'زیر-پل',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Under-The-Bridge-s1-Jadval.jpg',
          link: 'thumbnail',
          title: 'زیر پل',
          hasTag: true,
          tag: {
            title: ' امروز ',
            color: 'white'
          }
        },
        {
          slug: 'زیر-پل',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Under-The-Bridge-s1-Jadval.jpg',
          link: 'thumbnail',
          title: 'زیر پل',
          hasTag: true,
          tag: {
            title: ' امروز ',
            color: 'white'
          }
        },
      ],

      comingSoonMovieSmallCards: [
        {
          slug: 'alex-rider',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2021/12/Alex-Rider-s3-JAdval.jpg',
          link: 'thumbnail',
          title: 'سریال الکس رایدر Alex Rider',
          hasTag: true,
          tag: {
            title: ' 8 روز پیش ',
            color: 'white'
          }
        },
        {
          slug: 'alex-rider',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2021/12/Alex-Rider-s3-JAdval.jpg',
          link: 'thumbnail',
          title: 'سریال الکس رایدر Alex Rider',
          hasTag: true,
          tag: {
            title: ' 7 روز پیش ',
            color: 'white'
          }
        },
        {
          slug: 'alex-rider',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2021/12/Alex-Rider-s3-JAdval.jpg',
          link: 'thumbnail',
          title: 'سریال الکس رایدر Alex Rider',
          hasTag: true,
          tag: {
            title: ' 6 روز پیش ',
            color: 'white'
          }
        },
        {
          slug: 'alex-rider',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2021/12/Alex-Rider-s3-JAdval.jpg',
          link: 'thumbnail',
          title: 'سریال الکس رایدر Alex Rider',
          hasTag: true,
          tag: {
            title: ' 5 روز پیش ',
            color: 'white'
          }
        },
        {
          slug: 'alex-rider',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2021/12/Alex-Rider-s3-JAdval.jpg',
          link: 'thumbnail',
          title: 'سریال الکس رایدر Alex Rider',
          hasTag: true,
          tag: {
            title: ' 4 روز پیش ',
            color: 'white'
          }
        },
        {
          slug: 'alex-rider',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2021/12/Alex-Rider-s3-JAdval.jpg',
          link: 'thumbnail',
          title: 'سریال الکس رایدر Alex Rider',
          hasTag: true,
          tag: {
            title: ' 3 روز پیش ',
            color: 'white'
          }
        },
      ],

    }
  }
}

</script>

<style scoped lang="scss">
.container {
  @media (min-width:450px) and (max-width:820px) {
    max-width: 98%;
  }
}

.movie-card .large-movie-card {
  background-color: #16161b;
}

.sidebar-tabs {
  background-color: #23232b;
  border-radius: 4px;
  position: relative;
  padding: 5px;
  cursor: pointer;

  a {
    text-decoration: none;
    font-size: 14px;
    color: #9ea1a6;
    font-weight: 500;
    line-height: 0;
  }
}

.sidebar-tabs-btn {
  background: #32323d;
  right: 5px;
  height: 52px;
  transition: all 400ms;
  border-radius: 4px;
  box-shadow: 0 3px 20px rgb(88 93 110 / 10%);
}

.sidebar-btn-wrap {
  position: absolute;
  top: 50%;
  left: 40%;
}

.internal-distance-r {
  margin-right: 5px;
}

.sidebar {
  margin-bottom: .5rem;
  font-family: inherit;
  line-height: 1.3;
  margin-bottom: 0;

  &--title {
    font-weight: 700;
    font-size: 16px;
    color: #f5f5f5;
  }

  &--subtitle {
    color: #9ba1a6;
    font-size: 12px;
    font-weight: 200;
  }
}

.main-sidebar-wrap {
  box-shadow: 0 5px 25px rgba(0, 0, 0, .13) !important;
  background-color: #23232b;
  padding: 10px 20px 20px;
  border-radius: 4px;
}

.mb-15 {
  margin-bottom: 15px;

  @media (min-width:450px) and (max-width:820px) {
    margin-bottom: 0;
  }
}

.mb-40 {
  margin-bottom: 40px;
}

.flex-direction {
  @media (min-width:450px) and (max-width:820px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

.respansive-display {
  @media (max-width:820px) {
    display: none;
  }
}
</style>