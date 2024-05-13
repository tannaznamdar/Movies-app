<script setup>
import imdb from '@/assets/images/la--imdb.svg'
</script>

<template>

    <article class="collection-cards">
        <img :src="thumbnail" class="collection-cards-bg">
        <div class="collection-cards-overly">
            <router-link :to='{ name: "titlePageRoute", params: { slug } }'>
                <img class="movie-img" :src="thumbnail">

                <h6 class="card-title">{{ title }}</h6>
                <p class="card-subtitle"> {{ subtitle }}
                </p>

                <div class="d-flex align-items-center justify-content-between mt-40">
                    <span class="col-auto card-item">
                        قسمت‌ها :
                        {{ episode }}
                    </span>

                    <span class="col-auto mr-auto card-item">
                        <img alt="imdb" :src="imdb">
                        امتیاز :
                        {{ Imdb }}
                    </span>
                </div>
            </router-link>
        </div>
    </article>
    
</template>


<script>

export default {
    name: 'collectioncards',

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
        title: {
            type: String,
            default: ''
        },
        subtitle: {
            type: String,
            default: ''
        },
        Imdb: {
            type: String,
            default: ''
        },
        episode: {
            type: Number,
            default: ''
        }
    },

    data() {
        return {

        }
    }
}
</script>


<style scoped lang="scss">
.collection-cards {
    box-shadow: 0 5px 25px rgba(0, 0, 0, .13) !important;
    border-radius: 4px;
    background-color: #23232b;
    overflow: hidden;
    position: relative;
    margin-bottom: 25px;
    height: 341px;

    a {
        text-decoration: none;
        color: #f5f5f5;
    }
}

.collection-cards-overly {
    background: linear-gradient(to bottom, rgba(51, 51, 51, 0.5), rgba(51, 51, 51, 1)) !important;
    position: absolute;
    bottom: 0;
    top: 0;
    text-align: center;
    width: 100%;
    height: auto;
    z-index: 1;
    padding: 20px;
}

.collection-cards-bg {
    filter: blur(5px);
    opacity: .8;
    position: absolute;
    width: 100%;
    z-index: 0;
}

.movie-img {
    border-radius: 4px;
    max-width: 130px;
    height: auto;
    box-shadow: 0 5px 25px rgba(0, 0, 0, .13) !important;
    display: block;
    position: relative;
    overflow: hidden;
    margin-right: auto;
    margin-left: auto;
}

.card-title {
    padding-top: 15px;
    font-size: 15px;
    font-weight: 700;
    color: #f5f5f5;
}

.card-subtitle {
    padding-top: 10px;
    line-height: 1.5;
    font-weight: 400;
    color: #bbc1c6;
    font-size: 13px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: clip;
    text-overflow: ellipsis;

    &:is(:hover, :focus) {
        color: #b8daff;
        text-decoration: none;
    }
}

.card-item {
    font-weight: 400;
    color: #bbc1c6;
    font-size: 13px;
    line-height: 1.3;
}

.mt-40 {
    margin-top: 40px;
}
</style>