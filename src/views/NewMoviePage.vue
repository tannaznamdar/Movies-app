<script setup>
import MovieCards from "@/components/MovieCards.vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
</script>

<template>
    <div class="container-fluid">
        <section class="cover">
            <img :src="thumbnail" alt="#">
            <div class="cover-bg-1"></div>
            <div class="cover-bg-2"></div>

            <div class="cover-info">
                <div class="cover-fa-title">{{ titleFa }}</div>
                <div class="cover-en-title">{{ titleEn }}</div>
                <div class="cover-subtitle read-more-wrap">{{ subtitle }} </div>
            </div>
        </section>

        <section class="mb-5">
            <div class="top-movies-slider">
                <Splide class="row"
                    :options="{ arrows: false, pagination: false, direction: 'rtl', type: 'slide', trimSpace: false, perPage: 8, perMove: 1 }"
                    aria-label="My Favorite Images">
                    <SplideSlide v-for="oscarMovie in oscarMovies">
                        <MovieCards v-bind="oscarMovie"></MovieCards>
                    </SplideSlide>
                </Splide>
            </div>
        </section>

        <section class="mb-5">
            <div class="container bv-example-row">
                <div class="row mb-4">
                    <div class="col-lg-2" v-for="oscarMovieCard in oscarMovieCards">
                        <MovieCards v-bind="oscarMovieCard"></MovieCards>
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
    name: 'newMovie',

    data() {
        return {
            titleFa: 'فیلم های جدید ',
            titleEn: 'Year 2023 / 2024',
            thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2024/01/movie2024.jpg',

            oscarMovies: [
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

            oscarMovieCards: [
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
.cover {
    position: relative;
    height: 590px;
    width: 100%;
    overflow: hidden;
    object-fit: cover;

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

.cover-info {
    width: 50%;
    padding: 200px 50px 200px;
    margin-top: 80px;
    z-index: 2;
    position: absolute;
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
}

.cover-fa-title {
    font-size: 40px;
    line-height: 1.3;
    color: #fff;
    font-weight: 500;
}

.cover-en-title {
    font-size: 20px;
    color: rgb(138, 141, 143);
    margin-bottom: 20px;
    font-weight: 400;
}

.cover-subtitle {
    text-align: justify;
    color: #fffffff1;
    margin-top: 16px;
    font-weight: 500;
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
</style>