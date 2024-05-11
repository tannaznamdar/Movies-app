<script setup>

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import SinglePageCards from "@/components/SinglePageCards.vue";
import heart from '@/assets/images/heart.svg'
import likeSvg from '@/assets/images/like-orange.svg'
import dislikeSvg from '@/assets/images/dislike-green.svg'
import videoSvg from '@/assets/images/video-gray.svg'
import downloadSvg from '@/assets/images/download.svg'
import movieIcon from '@/assets/images/movie.svg'
import ImdbYellow from '@/assets/images/imdb-yellow.svg'
import chat from '@/assets/images/chat.svg'
import xmarkwhite from '@/assets/images/xmarkwhite.svg'

</script>

<template>
  <div class="container-fluid gx-0">

    <section class="post-header">
      <div class="uptvs-big-play" v-if="hasPlayOnline">
        <a href="#" class="ic">
          <svg fill="#fba087" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 459 459" xml:space="preserve">
            <g>
              <g>
                <path
                  d="M229.5,0C102.751,0,0,102.751,0,229.5S102.751,459,229.5,459S459,356.249,459,229.5S356.249,0,229.5,0z M310.292,239.651l-111.764,76.084c-3.761,2.56-8.63,2.831-12.652,0.704c-4.022-2.128-6.538-6.305-6.538-10.855V153.416c0-4.55,2.516-8.727,6.538-10.855c4.022-2.127,8.891-1.857,12.652,0.704l111.764,76.084c3.359,2.287,5.37,6.087,5.37,10.151C315.662,233.564,313.652,237.364,310.292,239.651z">
                </path>
              </g>
            </g>
          </svg>
        </a>
      </div>
      <div class="post-header-cover" v-if="hasPlayOnline"></div>
      <div class="post-header-grad-info-background"></div>
      <div class="container bv-example-row mb-5">
        <div class="row">
          <div class="col-lg-2">
            <a href="#">
              <figure class="movie-img">
                <img alt="#" :src="thumbnail">
              </figure>
            </a>
          </div>
          <div class="col-lg-10 movie-info ">
            <div>
              <h1 class="font-text font-text--title">{{ title }}</h1>
              <span class="font-text font-text--subtitle font-text--subtitle-yellow" v-if="hasSubtitle">{{
                subtitle
              }}</span>
              <div class="post-single-meta">
                <div class="row">
                  <div class="col-lg">
                    <span class="font-text font-text--subtitle">
                      <a href="#">{{ genre }}</a>
                      ،
                      <a href="#"> {{ genre2 }} </a>
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
                  <div class="col-lg-auto">
                    <tag v-if="hasTag" v-bind="tag"></tag>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="row mt-3 mb-3 align-items-center">

                  <div class="col-md-auto col-auto xs-p-0 ml-lg-30 ml-md-15">
                    <img class="internal-distance" alt="Imdb" :src="ImdbYellow">
                    <span class="font-text font-text--subtitle"> {{ imdb }}</span>
                    <span class="font-text font-text--sm-12 internal-distance">از 10 </span>
                    <span class="font-text font-text--sm-11">از {{ votes }}
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
                  <div class="mb-half">
                    <span class="font-text font-text--subtitle font-text--subtitle-gray"> بازیگران :
                    </span>
                    <span class="font-text font-text--subtitle internal-distance">{{
                      actors
                    }}</span>
                  </div>
                  <div class="">
                    <span class="font-text font-text--subtitle font-text--subtitle-gray" v-if="hasDirector"> کارگردان :
                    </span>
                    <span class="font-text font-text--subtitle internal-distance" v-if="hasDirector">{{
                      director
                    }}</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="pt-3">
                  <button class="button button--gray button--gray-like">
                    {{ like }}
                    <img alt="like" :src="likeSvg">
                  </button>
                  <button class="button button--gray button--gray-dislike internal-distance">
                    {{ dislike }}
                    <img alt="dislike" :src="dislikeSvg">
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="dark-background pt-4">
    <div class="container bv-example-row">

      <section>
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="position-relative">
              <video class="video-box" controls="" :poster="poster" preload="none">
                <source :src="video" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div class="col-lg-6">
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

          <div class="post-content-download" v-for="downloadItem in downloadItems">
            <div class="row align-items-lg-center gutter-6">
              <div class="d-flex justify-content-between">
                <div class="d-flex align-items-center">
                  <span class="font-text font-text--subtitle font-text--subtitle-gray">
                    کیفیت: 1080p حجم: 1.88 گیگابایت | کیفیت: 720p حجم: 1.04 گیگابایت
                  </span>

                  <span class="badge badge--red internal-distance">{{ downloadItem.title }}</span>
                </div>

                <div class="d-flex">
                  <button class="button button--medium button--medium-green internal-distance-l">
                    <a href="#"> دانلود 1080p </a>
                  </button>
                  <button class="button button--medium button--medium-green internal-distance-l">
                    <a href="#"> دانلود 720p </a>
                  </button>
                  <button class="button button--medium button--medium-green internal-distance-l">
                    <a href="#"> دانلود 480p </a>
                  </button>
                  <button class="button button--medium button--medium-yellow">
                    <a href="#"> تماشای آنلاین </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section class="related-post pb-5">
        <h4 class="font-text font-text--medium-title pb-4">
          <img alt="calendar" :src="movieIcon">
          {{ relatedPostTitle }}
        </h4>

        <Splide class="row"
          :options="{ arrows: false, pagination: false, direction: 'rtl', type: 'slide', trimSpace: false, perPage: 6, perMove: 1 }"
          aria-label="My Favorite Images">
          <SplideSlide v-for="relatedPost in relatedPosts">
            <SinglePageCards v-bind="relatedPost"></SinglePageCards>
          </SplideSlide>
        </Splide>
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

        <transition name="fade">
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
                  <font-awesome-icon class="user-icon internal-distance" icon="user" />
                  <span class="font-text font-text--sm-15 internal-distance">{{ comment.userName }}</span>
                  <span class="font-text font-text--sm-12 font-text-gray internal-distance">
                    {{ comment.messageTime }} </span>
                </div>

                <div class="d-flex">
                  <button class="button button-transparent internal-distance">
                    <img class="internal-distance" alt="like" :src="likeSvg">
                    {{ comment.commentLike }}
                  </button>

                  <button class="button button-transparent internal-distance">
                    <img class="internal-distance" alt="dislike" :src="dislikeSvg">
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

  props: {
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

      hasPlayOnline: true,
      thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/03/Kung-Fu-Panda-4-207x290.jpg',
      link: 'thumbnail',
      title: 'انیمیشن پاندای کونگ فوکار ۴ Kung Fu Panda 4 2024',
      hasSubtitle: true,
      subtitle: 'قسمت 4',
      genre: 'انیمیشن',
      genre2: 'اکشن',
      actors: 'Awkwafina، Jack Black، Viola Davis',
      hasDirector: true,
      director: 'Mike Mitchell',
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
        title: 'زیرنویس چسبیده ',
        color: 'orange'
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

      downloadItems: [
        {
          title: 'دوبله فارسی اول'
        },
        {
          title: 'دوبله فارسی دوم'
        },
        {
          title: 'زیرنویس چسبیده '
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
  }
}

</script>


<style scoped lang="scss">
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

.uptvs-big-play .ic {
  transition-duration: 0.3s;
  position: absolute;
  top: calc(50% - 50px);
  right: calc(50% - 30px);
}

.uptvs-big-play .ic::before {
  transition-duration: 0.3s;
  border-radius: 50%;
  content: "";
  right: 0;
  width: 100%;
  position: absolute;
  top: 0;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  animation: sonarWave 2s linear infinite;
}

.uptvs-big-play .ic,
.uptvs-big-play .ic svg {
  width: 60px;
  height: 60px;
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

.movie-img {
  z-index: 999;
  display: block;
  border-radius: 4px;
  width: 100%;
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
  z-index: 999;
  padding-left: 10px;
  padding-right: 10px;
}

.font-text {
  color: #fff;
  text-decoration: none;

  &--title {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0
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
</style>