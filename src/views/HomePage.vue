<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import MovieCards from "@/components/MovieCards.vue";
import LargeMovieCards from "@/components/LargeMovieCards.vue";
</script>


<template>
  <div class="container-fluid">

    <section class="movie-card">
      <div class="container bv-example-row">

        <div class="row">
          <div class=" mt-5 mb-3 d-flex align-items-center justify-content-between">
            <h4 class="title">فیلم ایرانی رایگان</h4>
            <button class="button button--transparent"><a href="#"> مشاهده همه </a></button>
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
            <button class="button button--transparent"><a href="#"> مشاهده همه </a></button>
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
            <button class="button button--transparent"><a href="#"> مشاهده همه </a></button>
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
            <h4 class="title"> سریال ایرانی جدید </h4>
            <button class="button button--transparent"><a href="#"> مشاهده همه </a></button>
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
            <button class="button button--transparent"><a href="#"> مشاهده همه </a></button>
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
            <button class="button button--transparent"><a href="#"> مشاهده همه </a></button>
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
          <div class="col-lg-9" v-for="largeMovieCard in largeMovieCards">
            <LargeMovieCards v-bind="largeMovieCard"></LargeMovieCards>
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
          genre: ' درام, تاریخی, رمانتیک',
          imdb: '6.3',
          title: 'شهرزاد',
          subtitle: 'فصل اول قسمت هفتم',
          actors: 'امیر جعفری، آزاده صمدی، دیبا زاهدی',
          like: 86,
          director: 'پژمان تیمورتاش',
          synopsis: 'هنگامه برای نجات جان برادرش نیاز به پول دارد. او برای آماده کردن این پول دست به...',
          year: 1403,
          Country: 'ایران'
        },
        {
          slug: 'شهرزاد',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2018/06/shahrzad-s3-final-min-214x300.jpg',
          link: 'thumbnail',
          genre: ' درام, تاریخی, رمانتیک',
          imdb: '6.3',
          title: 'شهرزاد',
          subtitle: 'فصل اول قسمت هفتم',
          actors: 'امیر جعفری، آزاده صمدی، دیبا زاهدی',
          like: 86,
          director: 'پژمان تیمورتاش',
          synopsis: 'هنگامه برای نجات جان برادرش نیاز به پول دارد. او برای آماده کردن این پول دست به...',
          year: 1403,
          Country: 'ایران'
        },
        {
          slug: 'شهرزاد',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2018/06/shahrzad-s3-final-min-214x300.jpg',
          link: 'thumbnail',
          genre: ' درام, تاریخی, رمانتیک',
          imdb: '6.3',
          title: 'شهرزاد',
          subtitle: 'فصل اول قسمت هفتم',
          actors: 'امیر جعفری، آزاده صمدی، دیبا زاهدی',
          like: 86,
          director: 'پژمان تیمورتاش',
          synopsis: 'هنگامه برای نجات جان برادرش نیاز به پول دارد. او برای آماده کردن این پول دست به...',
          year: 1403,
          Country: 'ایران'
        },
        {
          slug: 'شهرزاد',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2018/06/shahrzad-s3-final-min-214x300.jpg',
          link: 'thumbnail',
          genre: ' درام, تاریخی, رمانتیک',
          imdb: '6.3',
          title: 'شهرزاد',
          subtitle: 'فصل اول قسمت هفتم',
          actors: 'امیر جعفری، آزاده صمدی، دیبا زاهدی',
          like: 86,
          director: 'پژمان تیمورتاش',
          synopsis: 'هنگامه برای نجات جان برادرش نیاز به پول دارد. او برای آماده کردن این پول دست به...',
          year: 1403,
          Country: 'ایران'
        },
        {
          slug: 'شهرزاد',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2018/06/shahrzad-s3-final-min-214x300.jpg',
          link: 'thumbnail',
          genre: ' درام, تاریخی, رمانتیک',
          imdb: '6.3',
          title: 'شهرزاد',
          subtitle: 'فصل اول قسمت هفتم',
          actors: 'امیر جعفری، آزاده صمدی، دیبا زاهدی',
          like: 86,
          director: 'پژمان تیمورتاش',
          synopsis: 'هنگامه برای نجات جان برادرش نیاز به پول دارد. او برای آماده کردن این پول دست به...',
          year: 1403,
          Country: 'ایران'
        },
      ],

    }
  }
}

</script>

<style scoped>
.movie-card .large-movie-card{
  background-color: #16161b;
}
</style>