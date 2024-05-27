<script setup>
import MediumMovieCards from "@/components/MediumMovieCards.vue";
import MovieCards from "@/components/MovieCards.vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
</script>

<template>
    <div class="container-fluid background-dark gx-0">
        <section class="cover">
            <img :src="thumbnail">
            <div class="cover-bg-1"></div>
            <div class="cover-bg-2"></div>

            <div class="cover-info">
                <div class="cover-fa-title">{{ titleFa }}</div>
                <div class="cover-en-title">{{ titleEn }}</div>
                <div class="cover-subtitle read-more-wrap">{{ subtitle }} </div>
            </div>
        </section>

        <section class="mb-5 respansive-display ">
            <div class="top-movies-slider">
                <Splide class="row" :options="{
                    arrows: false, pagination: false, direction: 'rtl', type: 'slide', trimSpace: false, perPage: 8, perMove: 1,
                }" aria-label="My Favorite Images">
                    <SplideSlide v-for="topMovie in topMovies">
                        <MovieCards v-bind="topMovie"></MovieCards>
                    </SplideSlide>
                </Splide>
            </div>
        </section>

        <section class="pb-4">
            <div class="container bv-example-row">
                <div class="row mb-4">
                    <div class="col-lg-2 col-md-4 col-4" v-for="topMovieCard in topMovieCards">
                        <MediumMovieCards v-bind="topMovieCard"></MediumMovieCards>
                    </div>
                </div>
                <div class="text-align">
                    <button class="button button--outline-white">بارگزاری بیشتر
                        <font-awesome-icon class="internal-distance" icon="arrow-down" />
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>


<script>

export default {
    name: 'TopMovie',

    data() {
        return {
            titleFa: '250 فیلم برتر IMDb',
            titleEn: 'IMDb Top 250 Movies',
            thumbnail: 'https://www.uptvs.com/wp-contents/themes/UPnw/assets/Top2502.jpg',
            subtitle: ' IMDB یکی از مهم ترین وب سایت های مرجع سینمایی دنیاست که میلیون ها بازدید کننده دارد. در این قسمت امکانی فراهم شده تا شما بتوانید 250 فیلم برتر به انتخاب کاربران این وب سایت را تماشا کنید. ',

            topMovies: [
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
            ],

            topMovieCards: [
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
            ]
        }
    }
}
</script>


<style scoped lang="scss">
.container {
    @media (min-width:450px) and (max-width:820px) {
        max-width: 80%;
    }

    @media (max-width:449px) {
        max-width: 98%;
    }
}

.background-dark {
    background-color: #101014;
}

.cover {
    position: relative;
    height: 590px;
    width: 100%;
    overflow: hidden;
    object-fit: cover;

    img {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @media (min-width:450px) and (max-width:820px) {
        height: 480px;
    }

    @media (max-width:449px) {
        height: 330px;
        margin-bottom: 30px;
    }
}

.cover-info {
    width: 50%;
    padding: 150px 50px 200px;
    margin-top: 80px;
    z-index: 2;
    position: absolute;

    @media (max-width:449px) {
        width: 100%;
        text-align: right;
        padding: 100px 30px 200px;
    }

    @media (min-width:450px) and (max-width:820px) {
        width: 100%;
        text-align: center;
        padding: 170px 30px 200px;
    }
}

.cover-bg-1 {
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(16, 16, 20, 1) 89%);
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0px;
    right: -1px;
    z-index: 1;

}

.cover-bg-2 {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(16, 16, 20, 1) 89%);
    position: absolute;
    bottom: -1px;
    width: 100%;
    height: 60%;
    z-index: 1;

    @media (min-width:450px) and (max-width:820px) {
        height: 100%;
    }
}

.cover-fa-title {
    font-size: 40px;
    line-height: 1.3;
    color: #fff;
    font-weight: 400;

    @media (min-width:450px) and (max-width:820px) {
        font-size: 35px;
    }

    @media (max-width:449px) {
        font-size: 20px;
    }
}

.cover-en-title {
    font-size: 20px;
    color: rgb(138, 141, 143);
    margin-bottom: 20px;
    font-weight: 400;

    @media (max-width:820px) {
        font-size: 18px;
    }
}

.cover-subtitle {
    text-align: justify;
    color: #fffffff1;
    margin-top: 16px;
    font-weight: 500;
    display: contents;

    @media (max-width:449px) {
        font-size: 10px;
    }
}

.top-movies-slider {
    padding-right: 80px;
    padding-left: 80px;
    margin-top: -100px;
    position: relative;
    width: 100%;
    z-index: 2;
}

.text-align {
    text-align: center;
}

.internal-distance {
    margin-right: 5px;
}

.respansive-display {
    @media (max-width:820px) {
        display: none;
    }
}
</style>