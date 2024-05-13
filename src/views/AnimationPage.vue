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

    <section class="background">
      <div class="container bv-example-row">

        <div class="row">
          <div class=" mt-5 mb-3 d-flex align-items-center justify-content-between">
            <h4 class="title">انیمیشن های 2023</h4>
            <button class="button button--transparent">
              <router-link class="active" :to='{ name: "countryMoviePageRoute", params: { country: "iran" } }'> مشاهده
                همه </router-link>
            </button>
          </div>
        </div>

        <Splide class="row"
          :options="{ arrows: false, pagination: false, direction: 'rtl', type: 'slide', trimSpace: false, perPage: 6, perMove: 1 }"
          aria-label="My Favorite Images">
          <SplideSlide v-for="newAnimation in newAnimations">
            <MovieCards v-bind="newAnimation"></MovieCards>
          </SplideSlide>
        </Splide>

      </div>
    </section>

    <section class="background">
      <div class="container bv-example-row">
        <div class="row">
          <div class=" mt-5 mb-3 d-flex align-items-center justify-content-between">
            <h4 class="title"> انیمیشن های برتر </h4>
            <button class="button button--transparent">
              <router-link class="active" :to='{ name: "newMoviePageRoute" }'> مشاهده همه </router-link>
            </button>
          </div>
        </div>

        <Splide class="row"
          :options="{ arrows: false, pagination: false, direction: 'rtl', type: 'slide', trimSpace: false, perPage: 6, perMove: 1 }"
          aria-label="My Favorite Images">
          <SplideSlide v-for="topAnimation in topAnimations">
            <MovieCards v-bind="topAnimation"></MovieCards>
          </SplideSlide>
        </Splide>

      </div>
    </section>

    <section class="background">
      <div class="container bv-example-row">

        <div class=" mt-5 mb-3 d-flex">
          <h4 class="title"> جدیدترین انیمیشن ها </h4>
        </div>

        <div class="row">
          <div class="col-lg-9">
            <div v-for="largeAnimationCard in largeAnimationCards">
              <LargeMovieCards v-bind="largeAnimationCard"></LargeMovieCards>
            </div>
            <Pagination></Pagination>
          </div>

          <div class="col-lg-3">

            <div class="sidebar-tabs mb-5">
              <div class="sidebar-tabs-btn">
                <a href="#" class="sidebar-btn-wrap"> به روز شده ها </a>
              </div>
            </div>

            <section class="update-series mb-5">
              <div class="mb-4 d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <img alt="calendar" :src="movieIcon">
                  <h5 class="sidebar sidebar--title internal-distance-r">آپدیت انیمیشن ها</h5>
                </div>
                <button class="button button--transparent">
                  <router-link class="active" :to='{ name: "updateSeriesPageRoute" }'> مشاهده همه </router-link>
                </button>
              </div>

              <div v-for="smallAnimationCard in smallAnimationCards">
                <SmallMovieCards v-bind="smallAnimationCard"></SmallMovieCards>
              </div>
            </section>

            <section class="persian-dubbing mb-5">
              <div class="main-sidebar-wrap">
                <div class="row  d-flex align-items-center mb-2">
                  <div class="col-lg-4">
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

                  <div class="col-lg-8">
                    <span class="sidebar sidebar--subtitle">فقط در آپ تیوی</span>
                    <h5 class="sidebar sidebar--title">دوبله‌های فارسی</h5>
                  </div>
                </div>

                <div>
                  <button class="button button-lg button-lg--sidebar mb-3">
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
                <button class="button button--transparent">
                  <router-link class="active" :to='{ name: "comingSoonPageRoute" }'>
                    مشاهده
                    همه </router-link>
                </button>
              </div>

              <div v-for="comingSoonAnimationSmallCard in comingSoonAnimationSmallCards">
                <SmallMovieCards v-bind="comingSoonAnimationSmallCard"></SmallMovieCards>
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
  name: 'Animation',


  data() {
    return {

      newAnimations: [
        {
          slug: 'فیل-شعبده-باز',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/03/The-Magicians-Elephant-2023-1-207x290.jpg',
          link: 'thumbnail',
          genre: 'انیمیشن',
          imdb: '6.3',
          title: 'انیمیشن فیل شعبده باز',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'نفرین',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/10/Curses-s1-Poster-207x290.jpg',
          link: 'thumbnail',
          genre: 'انیمیشن',
          imdb: '7.2',
          title: 'انیمیشن نفرین ',
          subtitle: 'فصل 1 قسمت 10',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'لئو',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/11/Leo-2023-207x290.jpg',
          link: 'thumbnail',
          genre: 'انیمیشن ,درام',
          imdb: '8.1',
          title: 'لئو',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        },
        {
          slug: 'فیل-شعبده-باز',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/03/The-Magicians-Elephant-2023-1-207x290.jpg',
          link: 'thumbnail',
          genre: 'انیمیشن',
          imdb: '6.3',
          title: 'انیمیشن فیل شعبده باز',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'نفرین',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/10/Curses-s1-Poster-207x290.jpg',
          link: 'thumbnail',
          genre: 'انیمیشن',
          imdb: '7.2',
          title: 'انیمیشن نفرین ',
          subtitle: 'فصل 1 قسمت 10',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'لئو',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/11/Leo-2023-207x290.jpg',
          link: 'thumbnail',
          genre: 'انیمیشن ,درام',
          imdb: '8.1',
          title: 'لئو',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        },
        {
          slug: 'فیل-شعبده-باز',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/03/The-Magicians-Elephant-2023-1-207x290.jpg',
          link: 'thumbnail',
          genre: 'انیمیشن',
          imdb: '6.3',
          title: 'انیمیشن فیل شعبده باز',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'نفرین',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/10/Curses-s1-Poster-207x290.jpg',
          link: 'thumbnail',
          genre: 'انیمیشن',
          imdb: '7.2',
          title: 'انیمیشن نفرین ',
          subtitle: 'فصل 1 قسمت 10',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'لئو',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/11/Leo-2023-207x290.jpg',
          link: 'thumbnail',
          genre: 'انیمیشن ,درام',
          imdb: '8.1',
          title: 'لئو',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        }
      ],

      topAnimations: [
        {
          slug: 'لئو',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/11/Leo-2023-207x290.jpg',
          link: 'thumbnail',
          genre: 'انیمیشن ,درام',
          imdb: '8.1',
          title: 'لئو',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        },
        {
          slug: 'فیل-شعبده-باز',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/03/The-Magicians-Elephant-2023-1-207x290.jpg',
          link: 'thumbnail',
          genre: 'انیمیشن',
          imdb: '6.3',
          title: 'انیمیشن فیل شعبده باز',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'نفرین',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/10/Curses-s1-Poster-207x290.jpg',
          link: 'thumbnail',
          genre: 'انیمیشن',
          imdb: '7.2',
          title: 'انیمیشن نفرین ',
          subtitle: 'فصل 1 قسمت 10',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'لئو',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/11/Leo-2023-207x290.jpg',
          link: 'thumbnail',
          genre: 'انیمیشن ,درام',
          imdb: '8.1',
          title: 'لئو',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        },
        {
          slug: 'فیل-شعبده-باز',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/03/The-Magicians-Elephant-2023-1-207x290.jpg',
          link: 'thumbnail',
          genre: 'انیمیشن',
          imdb: '6.3',
          title: 'انیمیشن فیل شعبده باز',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'نفرین',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/10/Curses-s1-Poster-207x290.jpg',
          link: 'thumbnail',
          genre: 'انیمیشن',
          imdb: '7.2',
          title: 'انیمیشن نفرین ',
          subtitle: 'فصل 1 قسمت 10',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'لئو',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/11/Leo-2023-207x290.jpg',
          link: 'thumbnail',
          genre: 'انیمیشن ,درام',
          imdb: '8.1',
          title: 'لئو',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        },
        {
          slug: 'نفرین',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/10/Curses-s1-Poster-207x290.jpg',
          link: 'thumbnail',
          genre: 'انیمیشن',
          imdb: '7.2',
          title: 'انیمیشن نفرین ',
          subtitle: 'فصل 1 قسمت 10',
          hasSubtitle: true,
          hasTag: true,
          tag: {
            title: ' دوبله فارسی ',
            small: true,
          }
        },
        {
          slug: 'لئو',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/11/Leo-2023-207x290.jpg',
          link: 'thumbnail',
          genre: 'انیمیشن ,درام',
          imdb: '8.1',
          title: 'لئو',
          subtitle: '',
          hasSubtitle: false,
          hasTag: true,
          tag: {
            title: ' رایگان ',
            small: true,
          }
        }
      ],

      largeAnimationCards: [
        {
          slug: 'گارفیلد',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/02/The-Garfield-Movie-2024-207x290.jpg',
          link: 'thumbnail',
          genre: ' انیمیشن ، ماجراجویی ',
          imdb: '6.3',
          title: 'انیمیشن گارفیلد ۳ The Garfield 3 Movie 2024 با دوبله فارسی',
          subtitle: '',
          hasSubtitle: 'false',
          actors: 'Chris Pratt، Hannah Waddingham، Samuel L. Jackson',
          like: 86,
          director: 'Mark Dindal',
          hasDirector: true,
          synopsis: 'گارفیلد پس از یک ملاقات غیرمنتظره با پدر گمشده‌اش، یک گربه خیابانی ژولیده به نام ویک، مجبور...',
          year: 2024,
          Country: 'انگلستان',
          hasBadge: false,
          btnTitle: 'دانلود انیمیشن'
        },
        {
          slug: 'استاد-مولی',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/05/Master-Moley-2019-207x290.jpg',
          link: 'thumbnail',
          genre: ' انیمیشن ، کوتاه',
          imdb: '6.3',
          title: 'انیمیشن استاد مولی با دعوت سلطنتی Master Moley 2019 با دوبله فارسی',
          subtitle: '',
          hasSubtitle: 'false',
          actors: 'Gemma Arterton، Togo Igawa، Warwick Davis',
          like: 86,
          director: 'Leon Joosen',
          hasDirector: false,
          synopsis: 'داستان یک موش کور جوان و ماجراجویی او برای چیدن گل رز از باغ ملکه، بدون اینکه...',
          year: 2019,
          Country: 'انگلستان',
          hasBadge: true,
          btnTitle: 'دانلود انیمیشن'
        },
        {
          slug: 'پسر-دلفینی',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/03/PesarDolphini-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام, تاریخی, رمانتیک',
          imdb: '6.3',
          title: 'سریال پسر دلفینی',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: 'true',
          actors: 'حامد عزیزی، جواد پزشکیان، مهدی امینی',
          like: 86,
          director: 'رضا فصاحت',
          hasDirector: true,
          synopsis: 'پسر دلفینی اکنون یک وظیفه‌ی مهم دارد. او نگهبان دریاست و باید از موجودات دریایی محافظت کند....',
          year: 2024,
          Country: 'ایران',
          hasBadge: true,
          btnTitle: 'دانلود سریال'
        },
        {
          slug: 'گارفیلد',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/02/The-Garfield-Movie-2024-207x290.jpg',
          link: 'thumbnail',
          genre: ' انیمیشن ، ماجراجویی ',
          imdb: '6.3',
          title: 'انیمیشن گارفیلد ۳ The Garfield 3 Movie 2024 با دوبله فارسی',
          subtitle: '',
          hasSubtitle: 'false',
          actors: 'Chris Pratt، Hannah Waddingham، Samuel L. Jackson',
          like: 86,
          director: 'Mark Dindal',
          hasDirector: true,
          synopsis: 'گارفیلد پس از یک ملاقات غیرمنتظره با پدر گمشده‌اش، یک گربه خیابانی ژولیده به نام ویک، مجبور...',
          year: 2024,
          Country: 'انگلستان',
          hasBadge: false,
          btnTitle: 'دانلود انیمیشن'
        },
        {
          slug: 'استاد-مولی',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/05/Master-Moley-2019-207x290.jpg',
          link: 'thumbnail',
          genre: ' انیمیشن ، کوتاه',
          imdb: '6.3',
          title: 'انیمیشن استاد مولی با دعوت سلطنتی Master Moley 2019 با دوبله فارسی',
          subtitle: '',
          hasSubtitle: 'false',
          actors: 'Gemma Arterton، Togo Igawa، Warwick Davis',
          like: 86,
          director: 'Leon Joosen',
          hasDirector: false,
          synopsis: 'داستان یک موش کور جوان و ماجراجویی او برای چیدن گل رز از باغ ملکه، بدون اینکه...',
          year: 2019,
          Country: 'انگلستان',
          hasBadge: true,
          btnTitle: 'دانلود انیمیشن'
        },
        {
          slug: 'پسر-دلفینی',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/03/PesarDolphini-207x290.jpg',
          link: 'thumbnail',
          genre: ' درام, تاریخی, رمانتیک',
          imdb: '6.3',
          title: 'سریال پسر دلفینی',
          subtitle: 'فصل اول قسمت هفتم',
          hasSubtitle: 'true',
          actors: 'حامد عزیزی، جواد پزشکیان، مهدی امینی',
          like: 86,
          director: 'رضا فصاحت',
          hasDirector: true,
          synopsis: 'پسر دلفینی اکنون یک وظیفه‌ی مهم دارد. او نگهبان دریاست و باید از موجودات دریایی محافظت کند....',
          year: 2024,
          Country: 'ایران',
          hasBadge: true,
          btnTitle: 'دانلود سریال'
        },
      ],

      smallAnimationCards: [
        {
          slug: 'ولما',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/01/Velma-s1-Jadval.jpg',
          link: 'thumbnail',
          title: 'انیمیشن ولما Velma',
          hasTag: true,
          tag: {
            title: ' امروز ',
            color: 'white'
          }
        },
        {
          slug: 'ولما',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/01/Velma-s1-Jadval.jpg',
          link: 'thumbnail',
          title: 'انیمیشن ولما Velma',
          hasTag: true,
          tag: {
            title: ' امروز ',
            color: 'white'
          }
        },
        {
          slug: 'ولما',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/01/Velma-s1-Jadval.jpg',
          link: 'thumbnail',
          title: 'انیمیشن ولما Velma',
          hasTag: true,
          tag: {
            title: ' دیروز ',
            color: 'white'
          }
        },
        {
          slug: 'ولما',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/01/Velma-s1-Jadval.jpg',
          link: 'thumbnail',
          title: 'انیمیشن ولما Velma',
          hasTag: true,
          tag: {
            title: ' امروز ',
            color: 'white'
          }
        },
        {
          slug: 'ولما',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/01/Velma-s1-Jadval.jpg',
          link: 'thumbnail',
          title: 'انیمیشن ولما Velma',
          hasTag: true,
          tag: {
            title: ' امروز ',
            color: 'white'
          }
        },
        {
          slug: 'ولما',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/01/Velma-s1-Jadval.jpg',
          link: 'thumbnail',
          title: 'انیمیشن ولما Velma',
          hasTag: true,
          tag: {
            title: ' دیروز ',
            color: 'white'
          }
        },
        {
          slug: 'ولما',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/01/Velma-s1-Jadval.jpg',
          link: 'thumbnail',
          title: 'انیمیشن ولما Velma',
          hasTag: true,
          tag: {
            title: ' دیروز ',
            color: 'white'
          }
        },
        {
          slug: 'ولما',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/01/Velma-s1-Jadval.jpg',
          link: 'thumbnail',
          title: 'انیمیشن ولما Velma',
          hasTag: true,
          tag: {
            title: ' دیروز ',
            color: 'white'
          }
        },
      ],

      comingSoonAnimationSmallCards: [
        {
          slug: 'Elio',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/07/elio-2.jpg',
          link: 'thumbnail',
          title: 'انیمیشن الیو Elio 2024 ',
          hasTag: true,
          tag: {
            title: '7 روز مانده',
            color: 'white'
          }
        },
        {
          slug: 'Elio',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/07/elio-2.jpg',
          link: 'thumbnail',
          title: 'انیمیشن الیو Elio 2024 ',
          hasTag: true,
          tag: {
            title: '7 روز مانده',
            color: 'white'
          }
        },
        {
          slug: 'Elio',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/07/elio-2.jpg',
          link: 'thumbnail',
          title: 'انیمیشن الیو Elio 2024 ',
          hasTag: true,
          tag: {
            title: '7 روز مانده',
            color: 'white'
          }
        },
        {
          slug: 'Elio',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/07/elio-2.jpg',
          link: 'thumbnail',
          title: 'انیمیشن الیو Elio 2024 ',
          hasTag: true,
          tag: {
            title: '7 روز مانده',
            color: 'white'
          }
        },
        {
          slug: 'Elio',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/07/elio-2.jpg',
          link: 'thumbnail',
          title: 'انیمیشن الیو Elio 2024 ',
          hasTag: true,
          tag: {
            title: '7 روز مانده',
            color: 'white'
          }
        },
        {
          slug: 'Elio',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/07/elio-2.jpg',
          link: 'thumbnail',
          title: 'انیمیشن الیو Elio 2024 ',
          hasTag: true,
          tag: {
            title: '7 روز مانده',
            color: 'white'
          }
        },
        {
          slug: 'Elio',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/07/elio-2.jpg',
          link: 'thumbnail',
          title: 'انیمیشن الیو Elio 2024 ',
          hasTag: true,
          tag: {
            title: '7 روز مانده',
            color: 'white'
          }
        },
        {
          slug: 'Elio',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/07/elio-2.jpg',
          link: 'thumbnail',
          title: 'انیمیشن الیو Elio 2024 ',
          hasTag: true,
          tag: {
            title: '7 روز مانده',
            color: 'white'
          }
        },
      ],

    }
  }

}
</script>

<style scoped lang="scss">
.background {
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
  padding: 0 10px 20px;
  border-radius: 4px;
}
</style>