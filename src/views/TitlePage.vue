<script setup>

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import SinglePageCards from "@/components/SinglePageCards.vue";
import heart from '@/assets/images/heart.svg'
import videoSvg from '@/assets/images/video-gray.svg'
import downloadSvg from '@/assets/images/download.svg'
import movieIcon from '@/assets/images/movie.svg'
import ImdbYellow from '@/assets/images/imdb-yellow.svg'
import chat from '@/assets/images/chat.svg'
import xmarkwhite from '@/assets/images/xmarkwhite.svg'
import Tag from "@/components/Tag.vue";
import { getActivePinia } from "pinia";

</script>

<template>
  <div class="container-fluid gx-0">

    <section class="post-header">

      <div class="uptvs-big-play mt-5" v-if="hasPlayOnline">
        <button type="button" class="video-play-button">
          <span></span>
        </button>
        <div v-if="showOverlay" class="video-overlay"> <button class="video-overlay-close"></button>
        </div>
      </div>

      <div class="post-header-cover"></div>
      <div class="post-header-grad-info-background"></div>
      <div class="container-sm bv-example-row mb-5 pt-5">
        <div class="row">
          <div class="d-flex flex-row">
            <div class="display-none">
              <a href="#">
                <figure class="movie-img">
                  <img alt="#" :src="thumbnail">
                </figure>
              </a>
            </div>

            <div class="movie-info">
              <div>
                <h1 class="font-text font-text--title">{{ title }}</h1>
                <span class="font-text font-text--subtitle font-text--subtitle-yellow display-none"
                  v-if="hasSubtitle">{{
                    subtitle
                  }}</span>
                <div class="post-single-meta">
                  <div class="row">
                    <div class="col-lg">
                      <span class="font-text font-text--subtitle" v-for="genre in genres">
                        <router-link class="active"
                          :to='{ name: "moviesGenrePageRoute", params: { genre: genre.slug } }'>
                          {{ genre.title }} {{ }}
                        </router-link>
                      </span>
                      <span class="text-white-25 internal-distance">|</span>
                      <span class="font-text font-text--subtitle">{{ year }}</span>
                      <span class="text-white-25 internal-distance">|</span>

                      <span class="d-inline-block">
                        <span class="font-text font-text--subtitle font-text--subtitle-green">{{
                          age
                        }}</span>
                      </span>
                      <span class="text-white-25 internal-distance">|</span>
                      <span class="font-text font-text--subtitle">{{ country }}
                      </span>
                      <span class="text-white-25 internal-distance">|</span>
                      <span class="font-text font-text--subtitle"> {{ time }}</span>
                    </div>
                    <div class="col-lg-auto display-none">
                      <tag v-if="hasTag" v-bind="tag"></tag>
                    </div>
                  </div>
                </div>
              </div>
              <div class="display-flex">
                <div class="col-lg-12">
                  <div class="row mt-3 mb-3 align-items-center">

                    <div class="col-md-auto col-auto xs-p-0 ml-lg-30 ml-md-15">
                      <img class="internal-distance" alt="Imdb" :src="ImdbYellow">
                      <span class="font-text font-text--subtitle"> {{ imdb }}</span>
                      <span class="font-text font-text--sm-12 internal-distance display-none">از 10 </span>
                      <span class="font-text font-text--sm-11 display-none">از {{ votes }}
                        رای</span>
                    </div>
                    <div class="col-md-auto col-auto  ml-lg-20">
                      <img class="internal-distance" alt="like" :src="heart">
                      <span class="font-text font-text--subtitle"> % {{ consent }}
                      </span>
                      <span class="font-text font-text--sm-11 internal-distance"> رضایت </span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="post-single-artist  py-20">
                    <div class="mb-half display-none">
                      <span class="font-text font-text--subtitle font-text--subtitle-gray"> بازیگران :
                      </span>
                      <span class="font-text font-text--subtitle internal-distance" v-if="hasDirector"
                        v-for="actor in actors">
                        <router-link class="active" :to='{ name: "actorsPageRoute", params: { actor: actor.slug } }'>
                          {{ actor.title }}
                        </router-link>
                      </span>
                    </div>
                    <div class="display-none">
                      <span class="font-text font-text--subtitle font-text--subtitle-gray" v-if="hasDirector"> کارگردان
                        :
                      </span>
                      <span class="font-text font-text--subtitle internal-distance" v-if="hasDirector"
                        v-for="director in directors">
                        <router-link class="active"
                          :to='{ name: "directorPageRoute", params: { director: director.slug } }'>
                          {{ director.title }}
                        </router-link>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="pt-3">
                    <button class="button button--gray button--gray-like">
                      {{ like }}
                      <font-awesome-icon icon="thumbs-up" />
                    </button>
                    <button class="button button--gray button--gray-dislike internal-distance">
                      {{ dislike }}
                      <font-awesome-icon icon="thumbs-down" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>

  <div class="dark-background pt-4">
    <div class="container-sm bv-example-row">

      <section class="movie-trailer">
        <div class="row align-items-center">
          <div class="col-lg-6" v-if="hasMovieTrailer">
            <div class="position-relative">
              <video class="video-box" controls="" :poster="poster" preload="none">
                <source :src="video" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div class="col-md">
            <h4 class="font-text font-text--title">
              <img class="internal-distance" alt="video" :src="videoSvg">
              داستان انیمیشن
            </h4>
            <p class="font-text font-text--description"> {{ story }}</p>

            <h4 class="font-text font-text--title mt-20">
              <img class="internal-distance" alt="video" :src="videoSvg">
              درباره انیمیشن
            </h4>
            <p class="font-text font-text--description"> {{ about }}</p>
          </div>
        </div>
      </section>

      <section v-if="hasAlert">
        <div class="alert alert-red">
          <img class="internal-distance" alt="download" :src="downloadSvg">
          <span class="d-inline-block"> {{ alert }} </span>
        </div>
      </section>

      <section class="pb-5">
        <div class="download-box">
          <div class="post-content-download" v-for="downloadMovieItem in downloadMovieItems">
            <div class="row align-items-lg-center gutter-6">
              <div class="d-flex justify-content-between responsive-display">
                <div class="d-flex align-items-center pb-20 responsive-display responsive-display-t">
                  <span class="font-text font-text--subtitle font-text--subtitle-gray">
                    {{ downloadMovieItem.title }}
                  </span>

                  <span class="badge badge--red internal-distance" v-if="downloadMovieItem.hasBadge">{{
                    downloadMovieItem.badgeTitle
                  }}</span>
                </div>

                <div class="d-flex responsive-display-m gap-10">
                  <div class="d-flex pb-10">
                    <button class=" col-6 button button--medium button--medium-green internal-distance-l"
                      v-if="downloadMovieItem.hasDl1080">
                      <a href="#"> دانلود 1080p </a>
                    </button>
                    <button class="col-6 button button--medium button--medium-green" v-if="downloadMovieItem.hasDl720">
                      <a href="#"> دانلود 720p </a>
                    </button>
                  </div>

                  <div class="d-flex ">
                    <button class="col-6 button button--medium button--medium-green internal-distance-l"
                      v-if="downloadMovieItem.hasDl480">
                      <a href="#"> دانلود 480p </a>
                    </button>
                    <button class="col-6 button button--medium button--medium-yellow"
                      v-if="downloadMovieItem.hasWatchOnline">
                      <a href="#"> تماشای آنلاین </a>
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section class="pb-5">
        <div class="download-box download-box-series">
          <div class="tab-holder d-flex">
            <button v-for="downloadSeriesItem in downloadSeriesItems" class="table-tab-btn"
              :class="{ 'active': downloadSeriesItem.id === activeSeriesTab }"
              @click="activeSeriesTab = downloadSeriesItem.id"> {{ downloadSeriesItem.title }} </button>
          </div>

          <div class="tab-background">
            <div class="Serial-content-download"
              v-for="episode in downloadSeriesItems.find(x => { return x.id === activeSeriesTab }).episodes">
              <div class="row align-items-lg-center gutter-6">
                <div class="d-flex justify-content-between responsive-display">
                  <div class="d-flex align-items-center pb-20 responsive-display-t">
                    <span class="font-text font-text--subtitle font-text--subtitle-gray internal-distance bold-text">{{
                      episode.title }} - </span>
                    <span class="font-text font-text--subtitle font-text--subtitle-gray internal-distance"> {{
                      episode.description }}
                    </span>
                    <span class="badge badge--red internal-distance" v-if="episode.hasBadge"> {{
                      episode.badgeTitle
                    }}</span>
                  </div>

                  <div class="d-flex responsive-display-m gap-10">
                    <div class="d-flex pb-10">
                      <button class="col-6 button button--medium button--medium-green internal-distance-l"
                        v-if="episode.hasDl1080">
                        <a href="#"> دانلود 1080p </a>
                      </button>
                      <button class="col-6 button button--medium button--medium-green internal-distance-l"
                        v-if="episode.hasDl720">
                        <a href="#"> دانلود 720p </a>
                      </button>
                    </div>

                    <div class="d-flex ">
                      <button class="col-6 button button--medium button--medium-green internal-distance-l"
                        v-if="episode.hasDl480">
                        <a href="#"> دانلود 480p </a>
                      </button>
                      <button class="col-6 button button--medium button--medium-yellow" v-if="episode.hasWatchOnline">
                        <a href="#"> تماشای آنلاین </a>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section class="related-post pb-5">
        <div class="container bv-example-row">
          <h4 class="font-text font-text--medium-title pb-4">
            <img alt="calendar" :src="movieIcon">
            {{ relatedPostTitle }}
          </h4>

          <Splide class="row" :options="{
            arrows: false, pagination: false, direction: 'rtl', type: 'slide', trimSpace: false, perPage: 6, perMove: 1, breakpoints: {
              1200: { perPage: 6 },
              820: { perPage: 4 },
              449: { perPage: 2 },
            }
          }" aria-label="My Favorite Images">
            <SplideSlide v-for="relatedPost in relatedPosts">
              <SinglePageCards v-bind="relatedPost"></SinglePageCards>
            </SplideSlide>
          </Splide>
        </div>
      </section>

      <section>
        <div class="align-items-center d-flex justify-content-between  pb-4">
          <h4 class="font-text font-text--medium-title">
            <img alt="chat" :src="chat">
            {{ NumberOfViews }} دیدگاه
          </h4>
          <button v-if="!addCommentBox" class="button button--outline-green"
            @click="addCommentBox = true"><font-awesome-icon class="internal-distance-l" icon="plus" size="sm" />
            افزودن دیدگاه </button>
          <button v-else class="button button--outline-green" @click="addCommentBox = false">
            <img alt="xmarkwhite" :src="xmarkwhite">
          </button>
        </div>

        <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter"
          v-on:enter-cancelled="enterCancelled" v-on:before-leave="beforeLeave" v-on:leave="leave"
          v-on:after-leave="afterLeave" v-on:level-cancelled="leaveCancelled" v-bind:css="false">
          <div class="add-comment-box pb-2" v-show="addCommentBox">
            <div class="respond">
              <h3 class="font-text font-text--medium-title pt-2 pb-4">دیدگاهتان را بنویسید</h3>
              <form action="" class="comment-form">
                <textarea name="comment" class="w-100 form-control" placeholder="این فیلم چطور بود؟" maxlength="65525"
                  aria-required="true" required="required"></textarea>

                <div class="comment-form-author">
                  <input id="author" name="author" placeholder="نام شما" class="w-100 form-control" type="text" value=""
                    size="30" maxlength="245">
                </div>

                <div class="form-submit">
                  <input name="submit" type="submit" class="button button--medium button--medium-green"
                    value="فرستادن دیدگاه">
                </div>
              </form>
            </div>
          </div>
        </transition>

        <section>
          <div class="comment" v-for="comment in comments">
            <div class="row vcard gutter-x-6 gutter-y-0 pb-2">
              <div class=" d-flex flex-row   align-items-center justify-content-between">
                <div>
                  <font-awesome-icon class="user-icon ernalint-distance" icon="user" />
                  <span class="font-text font-text--sm-15 internal-distance">{{ comment.userName }}</span>
                  <span class="font-text font-text--sm-12 font-text-gray internal-distance">
                    {{ comment.messageTime }} </span>
                </div>

                <div class="d-flex">
                  <button class="button button-transparent button-transparent-like internal-distance">
                    <font-awesome-icon class="internal-distance-l" icon="thumbs-up" />
                    {{ comment.commentLike }}
                  </button>

                  <button class="button button-transparent button-transparent-dislike internal-distance">
                    <font-awesome-icon class="internal-distance-l" icon="thumbs-down" />
                    {{ comment.commentDislike }}
                  </button>
                </div>
              </div>
            </div>

            <div>
              <p class="font-text font-text--sm-15 internal-distance-r-45">{{ comment.message }}</p>
            </div>
          </div>
        </section>
      </section>

    </div>

    <section>
      <div class="breadcrumbs pt-5">
        <span><a href="">آپ تی وی</a></span>
        /
        <span><a href="https://www.uptvs.com/category/animationsz">انیمیشن</a></span>
        /
        <span class="breadcrumb_last" aria-current="page">انیمیشن پاندای کونگ فوکار ۴ Kung Fu Panda 4 2024 با دوبله
          فارسی</span>
      </div>
    </section>
  </div>

</template>

<script>

export default {
  name: 'singlePage',
  data() {
    return {
      activeSeriesTab: 1,
      showOverlay: true,
      videoSrc: 'https://www.youtube.com/embed/ngElkyQ6Rhs',
      hasMovieTrailer: true,
      hasPlayOnline: true,
      thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/03/Kung-Fu-Panda-4-207x290.jpg',
      link: 'thumbnail',
      title: 'انیمیشن پاندای کونگ فوکار ۴ Kung Fu Panda 4 2024',
      hasSubtitle: true,
      subtitle: 'قسمت 4',
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
      actors: [
        {
          title: 'Awkwafina',
          slug: 'awkwafina'
        },
        {
          title: 'Jack Black',
          slug: 'Jack-Black'
        },
        {
          title: 'Viola Davis',
          slug: 'Viola-Davis'
        }
      ],
      hasDirector: true,
      directors: [
        {
          title: 'Mike Mitchell',
          slug: 'Mike-Mitchell'
        }
      ],
      year: '2024',
      time: '94 دقیقه ',
      country: 'آمریکا',
      age: 'بالای 13 سال',
      like: 750,
      dislike: 250,
      imdb: '6.7',
      consent: 86,
      votes: 3000,
      hasTag: true,
      tag: {
        title: ' دوبله فارسی ',
        color: 'green'
      },
      poster: "https://www.uptvs.com/wp-contents/uploads/2024/03/Kung-Fu-Panda-4-Trailer.jpg",
      video: 'https://trailer.uptvs.com/trailer/Kung-Fu-Panda-4-Trailer.mp4',
      story: 'در انیمیشن پاندای کونگ فوکار ۴ : پو در حال آماده شدن برای تبدیل شدن به رهبر معنوی دره صلح خود است، اما همچنین به کسی نیاز دارد که جای او را به عنوان جنگجوی اژدها بگیرد. به این ترتیب، او یک کونگ فو کار جدید را برای آن نقطه آموزش می دهد و با شروری به نام آفتاب پرست روبرو می شود که شرورانی از گذشته را تداعی می کند.',
      about: 'انیمیشن پاندای کونگ فوکار ۴ Kung Fu Panda 4 محصول کشور آمریکا و در ژانر انیمیشن ، اکشن می‌باشد و به کارگردانی Mike Mitchell در سال 2024 ساخته شده است. در انیمیشن پاندای کونگ فوکار ۴ بازیگرانی چون Awkwafina، Jack Black، Viola Davis، و... به ایفای نقش پرداخته اند.',
      hasAlert: true,
      alert: ' کیفیت Web-Dl جایگزین شد ',
      relatedPostTitle: 'انیمیشن های مشابه',
      NumberOfViews: 115,
      addCommentBox: false,

      downloadMovieItems: [
        {
          title: '  کیفیت: 1080p حجم: 1.88 گیگابایت | کیفیت: 720p حجم: 1.04 گیگابایت',
          hasDescription: false,
          description: '',
          hasBadge: true,
          badgeTitle: 'دوبله فارسی اول',
          hasBadge: true,
          hasDl480: true,
          hasDl720: true,
          hasDl1080: true,
          hasWatchOnline: true,

        },
        {
          title: '  کیفیت: 1080p حجم: 1.88 گیگابایت | کیفیت: 720p حجم: 1.04 گیگابایت',
          hasDescription: false,
          description: '',
          hasBadge: true,
          badgeTitle: 'دوبله فارسی دوم',
          hasBadge: true,
          hasDl480: true,
          hasDl720: true,
          hasDl1080: true,
          hasWatchOnline: true,
        },
        {
          title: '  کیفیت: 1080p حجم: 1.88 گیگابایت | کیفیت: 720p حجم: 1.04 گیگابایت',
          hasDescription: false,
          description: '',
          hasBadge: true,
          badgeTitle: 'زیرنویس چسبیده ',
          hasBadge: true,
          hasDl480: true,
          hasDl720: true,
          hasDl1080: true,
          hasWatchOnline: true,
        }
      ],

      downloadSeriesItems: [
        {
          id: 1,
          title: 'فصل یک',
          episodes: [
            {
              title: ' قسمت 21 ',
              hasDescription: false,
              description: 'زیرنویس فارسی',
              hasBadge: false,
              hasDl480: true,
              hasDl720: true,
              hasDl1080: true,
              hasWatchOnline: true,

            },
            {
              title: ' قسمت 22 ',
              hasDescription: true,
              description: 'زیرنویس فارسی',
              hasBadge: false,
              hasDl480: true,
              hasDl720: true,
              hasDl1080: true,
              hasWatchOnline: true,

            },
            {
              title: ' قسمت 23 ',
              hasDescription: true,
              description: 'زیرنویس فارسی',
              hasBadge: true,
              badgeTitle: '10 روز پیش',
              hasDl480: true,
              hasDl720: true,
              hasDl1080: true,
              hasWatchOnline: true,
            },
            {
              title: ' قسمت 23 ',
              hasDescription: true,
              description: 'زیرنویس فارسی',
              hasBadge: true,
              badgeTitle: ' 1 روز پیش',
              hasDl480: true,
              hasDl720: true,
              hasDl1080: true,
              hasWatchOnline: true,
            }
          ]
        },
        {
          id: 2,
          title: 'فصل دو',
          episodes: [
            {
              title: ' قسمت 01 ',
              hasDescription: false,
              description: 'زیرنویس فارسی',
              hasBadge: false,
              hasDl480: true,
              hasDl720: true,
              hasDl1080: true,
              hasWatchOnline: true,

            },
            {
              title: ' قسمت 02 ',
              hasDescription: true,
              description: 'زیرنویس فارسی',
              hasBadge: false,
              hasDl480: true,
              hasDl720: true,
              hasDl1080: true,
              hasWatchOnline: true,

            },
            {
              title: ' قسمت 03 ',
              hasDescription: true,
              description: 'زیرنویس فارسی',
              hasBadge: true,
              badgeTitle: '10 روز پیش',
              hasDl480: true,
              hasDl720: true,
              hasDl1080: true,
              hasWatchOnline: true,
            },
            {
              title: ' قسمت 04 ',
              hasDescription: true,
              description: 'زیرنویس فارسی',
              hasBadge: true,
              badgeTitle: ' 1 روز پیش',
              hasDl480: true,
              hasDl720: true,
              hasDl1080: true,
              hasWatchOnline: true,
            }
          ]
        }
      ],

      relatedPosts: [
        {
          slug: 'گارفیلد',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/02/The-Garfield-Movie-2024-207x290.jpg',
          link: 'thumbnail',
          title: 'گارفیلد 3',
          like: 87
        },
        {
          slug: 'ناکلز',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Knuckles-s1-Poster-207x290.jpg',
          link: 'thumbnail',
          title: 'ناکلز',
          like: 92
        },
        {
          slug: 'استاد-مولی',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/05/Master-Moley-2019-207x290.jpg',
          link: 'thumbnail',
          title: 'استاد مولی با دعوت سلطنتی	',
          like: 79
        },
        {
          slug: 'نفرین',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/02/Curses-207x290.jpg',
          link: 'thumbnail',
          title: 'انیمیشن نفرین ',
          like: 65
        },
        {
          slug: 'المنتال',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/06/Elemental-2023-207x290.jpg',
          link: 'thumbnail',
          title: 'انیمیشن المنتال',
          like: 87
        },
        {
          slug: 'گارفیلد',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/02/The-Garfield-Movie-2024-207x290.jpg',
          link: 'thumbnail',
          title: 'گارفیلد 3',
          like: 87
        },
        {
          slug: 'ناکلز',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Knuckles-s1-Poster-207x290.jpg',
          link: 'thumbnail',
          title: 'ناکلز',
          like: 92
        },
        {
          slug: 'استاد-مولی',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/05/Master-Moley-2019-207x290.jpg',
          link: 'thumbnail',
          title: 'استاد مولی با دعوت سلطنتی	',
          like: 79
        },

      ],

      comments: [
        {
          userName: 'امیر',
          messageTime: ' 03-05-2024',
          message: 'عالی بود',
          commentLike: 5,
          commentDislike: 8,
        },
        {
          userName: 'علی',
          messageTime: ' 02-05-2024',
          message: ' خوووووب بود',
          commentLike: 5,
          commentDislike: 8,
        },
        {
          userName: 'بابک',
          messageTime: ' 01-05-2024',
          message: 'بد بود',
          commentLike: 5,
          commentDislike: 8,
        },
        {
          userName: 'طناز',
          messageTime: ' 01-05-2024',
          message: 'عالی بود',
          commentLike: 5,
          commentDislike: 8,
        },
      ]

    }
  },

  methods: {
    beforeEnter(el) {
      el.style.height = 0;
      el.style.overflow = "hidden";
    },
    enter(el, done) {
      const increaseHeight = () => {
        if (el.clientHeight < el.scrollHeight) {
          const height = `${parseInt(el.style.height) + 5}px`;
          el.style.height = height;
        } else {
          clearInterval(this.enterInterval);
          done();
        }
      };
      this.enterInterval = setInterval(increaseHeight, 10);
    },
    afterEnter(el) { },
    enterCancelled(el) {
      clearInterval(this.enterInterval);
    },
    beforeLeave(el) { },
    leave(el, done) {
      const decreaseHeight = () => {
        if (el.clientHeight > 0) {
          const height = `${parseInt(el.style.height) - 5}px`;
          el.style.height = height;
        } else {
          clearInterval(this.leaveInterval);
          done();
        }
      };
      this.leaveInterval = setInterval(decreaseHeight, 10);
    },
    afterLeave(el) { },
    leaveCancelled(el) {
      clearInterval(this.leaveInterval);
    },
  },
}

</script>


<style scoped lang="scss">
.video-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.video-overlay.open {
  display: block;
}

.video-play-button {
  position: absolute;
  z-index: 10;
  top: 40%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  box-sizing: content-box;
  display: block;
  width: 10px;
  height: 20px;
  border-radius: 50%;
  padding: 18px 20px 18px 28px;
}

.video-play-button:before {
  content: "";
  position: absolute;
  z-index: 0;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: block;
  width: 80px;
  height: 80px;
  background: #583759;
  border-radius: 50%;
  animation: pulse-border 1500ms ease-out infinite;
}

.video-play-button:after {
  content: "";
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: block;
  width: 50px;
  height: 50px;
  background: #fa183d;
  border-radius: 50%;
  transition: all 200ms;
}

.video-play-button:hover:after {
  background-color: darken(#fa183d, 10%);
}

.video-play-button img {
  position: relative;
  z-index: 3;
  max-width: 100%;
  width: auto;
  height: auto;
}

.video-play-button span {
  display: block;
  position: relative;
  z-index: 3;
  width: 13px;
  height: 0;
  border-left: 14px solid #fff;
  border-top: 9px solid transparent;
  border-bottom: 9px solid transparent;
}

@keyframes pulse-border {
  0% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  100% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
}

.video-overlay {
  position: fixed;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.80);
  opacity: 0;
  transition: all ease 500ms;
}

.video-overlay.open {
  position: fixed;
  z-index: 1000;
  opacity: 1;
}

.video-overlay-close {
  position: absolute;
  z-index: 1000;
  top: 15px;
  right: 20px;
  font-size: 36px;
  line-height: 1;
  font-weight: 400;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: all 200ms;
}

.video-overlay-close:hover {
  color: #fa183d;
}

.video-overlay iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.75);
}

.dark-background {
  background: #101014;
}

.post-header {
  position: relative;
  overflow: hidden;
  background: #101014;
  padding-top: 80px;
}

.uptvs-big-play {
  width: 100%;
  float: right;
  height: 300px;
  position: relative;
  z-index: 9;
  margin-bottom: 30px;
}

.post-header-cover {
  background-image: url(https://www.uptvs.com/wp-contents/uploads/2024/03/Kung-Fu-Panda-4.jpg);
  position: absolute;
  right: 0;
  left: 0;
  height: 100%;
  opacity: 0.4;
  transform: scale(3);
  top: 0;
  background-size: 100% auto;
  background-position: center -30px;
  background-repeat: no-repeat;
  filter: blur(5px);

  @media (min-width:450px) and (max-width:820px) {
    transform: scale(2);
  }

  @media (max-width:449px) {
    transform: scale(1);
    filter: blur(1px);
  }
}

.post-header-grad-info-background {
  position: absolute;
  right: 0;
  left: -10px;
  height: 100%;
  opacity: 1;
  top: 0;
  background: linear-gradient(to bottom, transparent 0%, #101014 470px);
  backdrop-filter: blur(0px);
}

.container-sm {
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}

.movie-trailer {
  border-bottom: 1px solid #1b1c1e;
  padding-bottom: 20px;
}

.movie-img {
  z-index: 3;
  display: block;
  border-radius: 4px;
  width: 207px;
  height: 290px;
  position: relative;
  overflow: hidden;
  margin-left: 10px;

  img {
    border-style: none;
    display: block;
    width: auto;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
  }
}

.movie-info {
  z-index: 3;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;

  @media (max-width:449px) {
    position: absolute;
    top: 340px;
  }
}

.font-text {
  color: #fff;
  text-decoration: none;

  &--title {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;

    @media (max-width:449px) {
      font-size: 16px;
    }
  }

  &--subtitle {
    a {
      font-size: 14px;
      color: #fff;
      text-decoration: none;
      font-size: 14px
    }

    &-gray {
      color: #cbcfd3;
    }

    &-green {
      color: #89d64f;
    }

    &-yellow {
      color: #ffae00;
      font-weight: 500;
      font-size: 13px;
    }
  }

  &--sm-11 {
    font-size: 11px;
    font-weight: 200;
    color: #9ba1a6;
  }

  &-gray {
    color: #9ba1a6;
  }

  &--sm-12 {
    font-size: 12px;
    font-weight: 200;
  }

  &--sm-15 {
    font-size: 15px;
    font-weight: 500;
    color: #bbbfc3;
    margin: 0;
  }

  &--description {
    font-size: 13px;
    font-weight: 300;
    line-height: 1.9;
    color: #bbc1c6;
    width: 100%;
    text-align: justify;
    text-align-last: right;
  }

  &--medium-title {
    font-family: inherit;
    line-height: 1.3;
    font-weight: 700;
    color: #f5f5f5;
    font-size: 17px;
    padding: 0;
  }
}

.text-white-25 {
  color: rgba(255, 255, 255, .25) !important;
}

.internal-distance {
  margin-left: 5px;
  margin-right: 5px;
}

.internal-distance-l {
  margin-left: 5px;
}

.internal-distance-r-45 {
  margin-right: 45px;
}

.post-single-meta {
  padding-top: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, .1);
}

.post-single-artist {
  border-bottom: 1px solid rgba(255, 255, 255, .1);
  padding-top: 10px;
  padding-bottom: 20px;

  @media (max-width:449px) {
    border-bottom: none;
  }
}

.video-box {
  height: auto;
  width: 100%;
}

.download-section {
  background: #101014;
}

.alert-red {
  color: #d84e32;
  font-weight: 500;
  background-color: #141419;
  margin-bottom: 15px;
  margin-top: 30px;
}

.movie-info-section {
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.download-box {
  padding: 20px 20px 1px 20px;
  border-radius: 4px;
  background-color: #15151a;
  margin-bottom: 5px;

  &-series {
    padding: 20px;
  }
}

.post-content-download {
  position: relative;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, .13) !important;
  background-color: #23232b;
}

.badge {
  display: inline-block;
  padding: 8px 14px 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 3px;

  &--red {
    color: #FF7555;
    background-color: #ff4b4b17;
  }

  &--purple {
    color: #aa7df2;
    background-color: #aa7df224;
  }
}

.add-comment-box {
  display: block;
}

.respond {
  border-bottom: 1px solid #f1f2f3;
  padding-bottom: 30px;
  margin-bottom: 30px;
}

.form-control {
  display: block;
  padding: 8px 15px;
  font-size: 14px;
  line-height: 2;
  font-weight: 500;
  color: #8e939b;
  background-color: #1c1c22;
  background-clip: padding-box;
  border: 0 solid #ced4da;
  border-radius: 3px;
  box-shadow: 0 0;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin-bottom: 20px;
}

.comment-form-author {
  width: 42%;
  margin-left: 20px;
  float: right;
}

::placeholder {
  color: #8e939b;
  opacity: 1;
}

textarea::placeholder {
  color: #8e939b;
  opacity: 1;
}

input:focus {
  border: 1px solid #8e939b;
  background-color: #fff;
}

textarea:focus {
  border: 1px solid #8e939b;
  background-color: #fff;
}

.slidedown-enter-active,
.slidedown-leave-active {
  transition: max-height 0.5s ease-in-out;
}

.slidedown-enter-to,
.slidedown-leave-from {
  overflow: hidden;
  max-height: 1000px;
}

.slidedown-enter-from,
.slidedown-leave-to {
  overflow: hidden;
  max-height: 0;
}

.comment {
  padding: 15px 15px 15px 25px;
  margin-bottom: 15px;
  background-color: #1c1c22;
  border-radius: 4px;
  position: relative;
}

.user-icon {
  font-size: 17px;
  font-weight: 700;
  color: #bbc1c6;
}

.breadcrumbs {
  color: #c6c9cc;
  font-size: 13px;

  &:is(:hover, :focus) {
    a {
      color: #b8daff;
    }
  }

  a {
    text-decoration: none;
    color: #c6c9cc;
  }
}

.tab-holder {
  width: 100%;
  margin-right: 0px;
}

.table-tab-btn {
  background-color: transparent;
  text-align: center;
  width: 238px;
  height: 48px;
  border: none;
  border-radius: 5px 5px 0 0;
  display: inline-block;
  padding: 12px;
  color: #bdbfc3;
  text-decoration: none;
  font-size: 13px;

  &:is(:hover, :focus, :active) {
    background: #23232b;
    color: #FFF;
  }
}

.tab-background {
  padding: 20px;
  background-color: #23232b;
  border-radius: 4px;
}

.Serial-content-download {
  padding: 15px;
  margin-bottom: 5px;
  border-radius: 4px;
  background-color: #1c1c22;
  font-size: 13px;
  font-weight: 300;
  color: #bbc1c6;
  width: 100%;
}

.bold-text {
  font-weight: 500;
}

.container-sm {
  max-width: 1140px;
}

.responsive-display {
  @media (max-width:820px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

.responsive-display-t {
  @media (min-width:450px) and (max-width:820px) {
    display: flex;
    flex-direction: row;
  }
}

.responsive-display-m {
  @media (max-width:449px) {
    display: flex;
    flex-direction: column;
  }
}

.display-flex {
  @media (max-width:449px) {
    display: flex;
  }
}

.pb-20 {
  @media (max-width:820px) {
    padding-bottom: 20px;
  }
}

.pb-10 {
  @media (max-width:449px) {
    padding-bottom: 10px;
  }
}

.gap-10 {
  gap: 10px;
  margin-left: 10px
}

.display-none {
  @media (max-width:449px) {
    display: none;
  }
}
</style>