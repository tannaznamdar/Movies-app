<template>

    <div class="container-fluid">
      <section class="movie-card">
        <div class="container bv-example-row">
  
          <div class="row">
            <div class=" mt-5 mb-3 d-flex align-items-center justify-content-between">
              <h4 class="title">ایرانی رایگان</h4>
              <button class="button button--transparent"><a href="#"> مشاهده همه </a></button>
            </div>
          </div>
  
          <div class="row">
            <div class="col-lg-2" v-for="movieCard in movieCards">
              <MovieCards v-bind="movieCard"></MovieCards>
            </div>
          </div>
  
        </div>
      </section>
  
    </div>
  
  </template>
  
  <script>
  
  import MovieCards from "@/components/MovieCards.vue";
  
  export default {
    name: 'Animation',
    components: {MovieCards},
  
    data() {
      return {
  
        movieCards: [
          {
            slug:'شهرزاد',
            thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2018/06/shahrzad-s3-final-min-214x300.jpg',
            link: 'thumbnail',
            genre: ' درام,تاریخی,رمانتیک',
            imdb: '6.3',
            title_fa: 'شهرزاد',
          },
          {
            slug:'دل',
            thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2020/09/del-40-207x290.jpg',
            link: 'thumbnail',
            genre: ' درام,رمانتیک',
            imdb: '7.2',
            title_fa: 'سریال دل ',
          },
          {
            slug:'متری-شیش-و-نیم',
            thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2019/03/Metri6.5-207x290.jpg',
            link: 'thumbnail',
            genre: 'اکشن,جنایی,درام',
            imdb: '8.1',
            title_fa: 'متری شیش و نیم',
          },
          {
            slug:'گناه-فرشته',
            thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/GonahFereshteh-18-207x290.jpg',
            link: 'thumbnail',
            genre: ' درام, خانوادگی',
            imdb: '7.3',
            title_fa: 'گناه فرشته  ',
          },
          {
            slug:'افعی-تهران',
            thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Viper-of-Tehran-8-207x290.jpg',
            link: 'thumbnail',
            genre: ' درام,رمانتیک',
            imdb: '8.3',
            title_fa: 'افعی تهران',
          },
          {
            slug:'جنگل-آسفالت',
            thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/04/Jangal-Asphalt-5-207x290.jpg',
            link: 'thumbnail',
            genre: ' درام,تاریخی,رمانتیک',
            imdb: '6.3',
            title_fa: 'جنگل آسفالت  ',
          },
        ]
      }
    }
  
  }
  
  </script>
  
  <style scoped>
  
  .movie-card {
    background-color: #16161b;
  }
  
  </style>