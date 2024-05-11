<template>

    <article class=" movieCard mb-3">
        <div class="row">

            <div class="col-lg-3">
                <router-link :to='{ name: "titlePageRoute", params: { slug } }'>
                    <figure class="card-img">
                        <img alt="#" :src="thumbnail">
                    </figure>
                </router-link>
            </div>


            <div class="col-lg-9">
                <div>
                    <router-link class="card-text card-text--title" :to='{ name: "titlePageRoute", params: { slug } }'>
                        {{ title }} </router-link>
                    <p class="card-text card-text--subtitle">{{ subtitle }}</p>
                    <div v-if="hasBadge">
                        <font-awesome-icon icon="circle-check" style="color: #5394c6;" />
                        <span class="card-text card-text--badge">قانونی</span>
                    </div>
                </div>

                <div class="card-info d-flex d-grid gap-4">
                    <div>
                        <font-awesome-icon class="icon" icon="bars" style="color: #ffffff;" />
                        <span class="card-text card-text--subtitle">{{ genre }}</span>
                    </div>

                    <div>
                        <font-awesome-icon class="icon" icon="heart" />
                        <span class="card-text card-text--info-num internal-distance-l">{{ like }}%</span>
                        <span class="card-text card-text--info">رضایت</span>
                    </div>
                </div>

                <div>
                    <div class="d-flex d-grid gap-4">
                        <span class="card-text card-text--subtitle">بازیگران:</span>
                        <span class="card-text card-text--subtitle">{{ actors }}</span>
                    </div>
                    <div class="d-flex d-grid gap-4" v-if="hasDirector">
                        <span class="card-text card-text--subtitle">کارگردان:</span>
                        <span class="card-text card-text--subtitle"> {{ director }}</span>
                    </div>
                </div>

                <div class="alert">
                    <p class="card-text card-text--description">{{ synopsis }}</p>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="d-flex d-grid gap-4">
                        <div>

                            <img class="internal-distance-l" alt="calendar" :src="calendar">
                            <span class="card-text card-text--subtitle internal-distance-l">سال انتشار:</span>
                            <span class="card-text card-text--subtitle">{{ year }}</span>
                        </div>

                        <div>
                            <img class="internal-distance-l" alt="planetEarth" :src="planetEarth">
                            <span class="card-text card-text--subtitle internal-distance-l"> کشور:</span>
                            <span class="card-text card-text--subtitle">{{ Country }}</span>
                        </div>

                        <div>
                            <img class="internal-distance-l" alt="Imdb" :src="Imdb">
                            <span class="card-text card-text--subtitle internal-distance-l"> امتیاز:</span>
                            <span class="card-text card-text--subtitle">{{ imdb }}</span>
                        </div>
                    </div>

                    <button class="button button--outline-blue">

                        <router-link :to='{ name: "titlePageRoute", params: { slug } }'>
                            <font-awesome-icon class="internal-distance-l" icon="download" style="color: #164ea2;" />
                            {{ btnTitle }} </router-link>

                    </button>
                </div>

            </div>


        </div>
    </article>
</template>


<script>


import Imdb from '@/assets/images/imdb-gray.svg'
import planetEarth from '@/assets/images/planet-earth.svg'
import calendar from '@/assets/images/calendar.svg'


export default {
    name: 'largeMovieCards',

    props: {
        slug: {
            type: String,
            default: ''
        },
        link: {
            type: String,
            default: ''
        },
        thumbnail: {
            type: String,
            default: ''
        },
        genre: {
            type: String,
            default: ' '
        },
        imdb: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        subtitle: {
            type: String,
            default: ''
        },
        hasSubtitle: {
            type: Boolean,
            default: false
        },
        like: {
            type: Number,
            default: ''
        },
        actors: {
            type: String,
            default: ''
        },
        director: {
            type: String,
            default: ''
        },
        hasDirector: {
            type: Boolean,
            default: false
        },
        synopsis: {
            type: String,
            default: ''
        },
        year: {
            type: Number,
            default: ''
        },
        Country: {
            type: String,
            default: ''
        },
        hasBadge: {
            type: Boolean,
            default: false
        },
        btnTitle: {
            type: String,
            default: 'دانلود'
        }
    },

    data() {
        return {
            Imdb,
            planetEarth,
            calendar,
        }
    }
}

</script>


<style scoped lang="scss">
.movieCard {
    background-color: #23232b;
    padding: 20px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, .13) !important;
    border-radius: 4px;
}

.card-img {
    display: block;
    border-radius: 4px;
    width: 100%;
    height: 290px;
    position: relative;
    overflow: hidden;
    margin-bottom: 20px;

    img {
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

.internal-distance-l {
    margin-left: 5px;
}

.card-text {
    line-height: 0;
    text-decoration: none;
    color: #fff;

    &:is(:hover, :focus) {
        color: #c6c9cc;
    }

    &--title {
        font-size: 16px;
        font-weight: 700;
        line-height: 1.3;
    }

    &--subtitle {
        font-size: 13px;
        font-weight: 300;
        line-height: 1.9;
        margin-top: 5px;
        color: #c6c9cc;

        &:is(:hover, :focus) {
            color: #c6c9cc;
        }
    }

    &--info {
        font-family: inherit;
        line-height: 1.3;
        color: #c6c9cc;
        margin: 0;
        margin-bottom: 5px;
        font-weight: 300;
        font-size: 12px;

        &-num {
            font-weight: 300;
            font-size: 11px;
            color: #c6c9cc;

            &:is(:hover, :focus) {
                color: #c6c9cc;
            }
        }
    }

    &--description {
        font-size: 13px;
        font-weight: 300;
        line-height: 1.9;
        margin-top: 5px;
        color: #c6c9cc;

        &:is(:hover, :focus) {
            color: #c6c9cc;
        }
    }

    &--badge {
        color: #5FACFA;
        font-size: 13px;
        margin-right: 5px;
        font-weight: 400;
        line-height: 1.9;

        &:is(:hover, :focus) {
            color: #5FACFA;
        }
    }
}

.card-info {
    padding-bottom: 15px;
    border-bottom: 1px solid #1b1c1e;
}

.icon {
    color: #9ba1a6;
    font-size: 12px;
    margin-left: 5px;
}

.alert {
    margin-top: 20px;
    margin-bottom: 30px;
    background-color: #1c1c22;
    position: relative;
    padding: 12px;
    border: 0 solid transparent;
    border-radius: 3px;
}
</style>