<template>

    <article class=" movieCard">
        <div class="row">

            <div class="col-lg-3 col-md-3">
                <router-link :to='{ name: "titlePageRoute", params: { slug } }'>
                    <figure class="card-img">
                        <img alt="#" :src="thumbnail">
                    </figure>
                </router-link>
            </div>

            <div class="col-lg-9 col-md-9">
                <div>
                    <router-link class="card-text card-text--title" :to='{ name: "titlePageRoute", params: { slug } }'>
                        {{ title }} </router-link>
                    <p class="card-text card-text--subtitle">{{ subtitle }}</p>
                    <div v-if="hasBadge">
                        <font-awesome-icon icon="circle-check" style="color: #5394c6;" />
                        <span class="card-text card-text--badge">قانونی</span>
                    </div>
                </div>

                <div class="card-info d-flex d-grid gap-4 mt-2">
                    <div>
                        <font-awesome-icon class="icon" icon="bars" style="color: #ffffff;" />
                        <span class="card-text card-text--subtitle" v-for="genre in genres">
                            <router-link class="active"
                                :to='{ name: "moviesGenrePageRoute", params: { genre: genre.slug } }'>
                                {{ genre.title }} {{ }}
                            </router-link>
                        </span>
                    </div>

                    <div>
                        <font-awesome-icon class="icon" icon="heart" />
                        <span class="card-text card-text--info-num internal-distance-l">{{ like }}%</span>
                        <span class="card-text card-text--info">رضایت</span>
                    </div>

                    <div class="respansive-display-d">
                        <img class="internal-distance-l" alt="Imdb" :src="Imdb">
                        <span class="card-text card-text--subtitle internal-distance-l"> امتیاز:</span>
                        <span class="card-text card-text--subtitle">{{ imdb }}</span>
                    </div>

                </div>

                <div>
                    <div class="d-flex d-grid gap-4 align-items-center">
                        <span class="card-text card-text--subtitle  respansive-display-t">بازیگران:</span>
                        <span class="card-text card-text--subtitle  respansive-display-t" v-for="actor in actors">
                            <router-link class="active"
                                :to='{ name: "actorsPageRoute", params: { actor: actor.slug } }'>
                                {{ actor.title }}
                            </router-link>
                        </span>
                    </div>
                    <div class="d-flex d-grid gap-4 align-items-center" v-if="hasDirector">
                        <span class="card-text card-text--subtitle  respansive-display-t">کارگردان:</span>
                        <span class="card-text card-text--subtitle respansive-display-t" v-for="director in directors">
                            <router-link class="active"
                                :to='{ name: "directorPageRoute", params: { director: director.slug } }'>
                                {{ director.title }}
                            </router-link>
                        </span>
                    </div>
                </div>

                <div class="alert  respansive-display-t">
                    <p class="card-text card-text--description">{{ synopsis }}</p>
                </div>
                <div class="d-flex align-items-center justify-content-between pt-20">
                    <div class="d-flex d-grid gap-4">
                        <div class=" respansive-display-m">
                            <img class="internal-distance-l" alt="calendar" :src="calendar">
                            <span class="card-text card-text--subtitle internal-distance-l">سال انتشار:</span>
                            <span class="card-text card-text--subtitle">{{ year }}</span>
                        </div>

                        <div class=" respansive-display-m">
                            <img class="internal-distance-l" alt="planetEarth" :src="planetEarth">
                            <span class="card-text card-text--subtitle internal-distance-l"> کشور:</span>
                            <span class="card-text card-text--subtitle">{{ Country }}</span>
                        </div>

                        <div class=" respansive-display-m">
                            <img class="internal-distance-l" alt="Imdb" :src="Imdb">
                            <span class="card-text card-text--subtitle internal-distance-l"> امتیاز:</span>
                            <span class="card-text card-text--subtitle">{{ imdb }}</span>
                        </div>
                    </div>

                    <button class="button button--outline-blue respansive-display-m">
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
        genres: {
            type: Array,
            default: []
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
            type: Array,
            default: []
        },
        directors: {
            type: Array,
            default: []
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
    margin-bottom: 20px;

    @media (max-width:449px) {
        text-align: center;
    }
}

.card-img {
    display: block;
    border-radius: 4px;
    width: 100%;
    height: 290px;
    position: relative;
    overflow: hidden;

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

    @media (min-width:450px) and (max-width:820px) {
        height: 230px;
        margin: 0;
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
        text-decoration: none;
        font-size: 13px;
        font-weight: 300;
        line-height: 1.9;
        color: #c6c9cc;
        margin-top: 5px;

        a {
            text-decoration: none;
            font-size: 13px;
            font-weight: 300;
            line-height: 1.9;
            color: #c6c9cc;
            margin-top: 5px;

            &:is(:hover, :focus) {
                color: #69a3dd;
            }
        }

        margin-top: 5px;


        &:is(:hover, :focus) {
            color: #c6c9cc;
        }
    }

    &--info {
        font-family: inherit;
        line-height: 1.3;
        color: #c6c9cc;
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

    @media (max-width:449px) {
        border: none;
    }
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

.respansive-display-d {
    @media (min-width:450px) and (max-width: 1320px) {
        display: none;
    }

    @media (min-width: 1320px) {
        display: none;
    }

}

.respansive-display-t {
    @media (max-width:820px) {
        display: none;
    }
}

.respansive-display-m {
    @media (max-width:449px) {
        display: none;
    }
}

.pt-20 {
    @media (min-width:450px) and (max-width:820px) {
        padding-top: 20px;
    }
}
</style>