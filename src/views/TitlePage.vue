<template>
    <div class="container-fluid">
        <section class="post-header">

            <div class="uptvs-big-play-btn">
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

            <div class="post-header-cover"> </div>
            <div class="post-header-grad-info-background"> </div>

            <div class="container bv-example-row">
                <div class="row">

                    <div class="col-lg-2">
                        <a href="#">
                            <figure class="movie-img">
                                <img alt=" انیمیشن پاندای کونگ فوکار ۴ Kung Fu Panda 4 2024 با دوبله فارسی"
                                    src="https://www.uptvs.com/wp-contents/uploads/2024/03/Kung-Fu-Panda-4-207x290.jpg">
                            </figure>
                        </a>
                    </div>

                    <div class="col-lg-10 movie-info mb-5">
                        <div>
                            <h1 class="font-text font-text--title">انیمیشن پاندای کونگ فوکار ۴ Kung Fu Panda 4 2024
                            </h1>
                            <div class="post-single-meta">
                                <div class="row">
                                    <div class="col-lg">
                                        <span class="font-text font-text--subtitle">
                                            <a href="#">انیمیشن</a>
                                            ،
                                            <a href="#"> اکشن </a>
                                        </span>
                                        <span class="text-white-25 internal-distance">|</span>
                                        <span class="font-text font-text--subtitle">2024</span>
                                        <span class="text-white-25 internal-distance">|</span>

                                        <span class="d-inline-block">
                                            <span class="font-text font-text--subtitle font-text--subtitle-green">بالای
                                                13 سال</span> </span>
                                        <span class="text-white-25 internal-distance">|</span>
                                        <span class="font-text font-text--subtitle">آمریکا </span>
                                        <span class="text-white-25 internal-distance">|</span>
                                        <span class="font-text font-text--subtitle"> 94 دقیقه </span>
                                    </div>

                                    <div class="col-lg-auto">
                                        <span class="button button-transparent-green">دوبله فارسی</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">

                            <div class="col-lg-12">
                                <div class="row mt-3 mb-3 align-items-center">

                                    <div class="col-md-auto col-auto xs-p-0 ml-lg-30 ml-md-15">
                                        <img class="internal-distance" alt="Imdb" :src="ImdbYellow">
                                        <span class="font-text font-text--subtitle"> 6.7 </span>
                                        <span class="font-text font-text--sm-12 internal-distance">از 10 </span>
                                        <span class="font-text font-text--sm-11">از 3,000 رای</span>
                                    </div>

                                    <div class="col-md-auto col-auto  ml-lg-20">
                                        <img class="internal-distance" alt="like" :src="heart">
                                        <span class="font-text font-text--subtitle">86% </span>
                                        <span class="font-text font-text--sm-11 internal-distance"> رضایت </span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="post-single-artist  py-20">
                                    <div class="mb-half">
                                        <span class="font-text font-text--subtitle font-text--subtitle-gray"> بازیگران :
                                        </span>
                                        <span class="font-text font-text--subtitle internal-distance">tannaz</span>
                                    </div>

                                    <div class="">
                                        <span class="font-text font-text--subtitle font-text--subtitle-gray"> کارگردان :
                                        </span>
                                        <span class="font-text font-text--subtitle internal-distance">namdar</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-12">

                                <div class="pt-3">
                                    <button class="button button--gray button--gray-like">
                                        7022
                                        <img alt="like" :src="like">
                                    </button>

                                    <button class="button button--gray button--gray-dislike internal-distance">
                                        1091
                                        <img alt="dislike" :src="dislike">
                                    </button>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    </div>

</template>

<script>

import ImdbYellow from '@/assets/images/imdb-yellow.svg'
import heart from '@/assets/images/heart.svg'
import like from '@/assets/images/like-orange.svg'
import dislike from '@/assets/images/dislike-green.svg'

export default {
    name: 'singlePage',

    data() {
        return {

            ImdbYellow,
            heart,
            like,
            dislike,

        }
    }
}


</script>



<style scoped lang="scss">
.post-header {
    padding-top: 120px;
    position: relative;
    overflow: hidden;
    background: #101014;
}

.uptvs-big-play-btn {
    width: 100%;
    float: right;
    height: 300px;
    position: relative;
    z-index: 9;
    margin-bottom: 30px;
}

.uptvs-big-play-btn .ic {
    transition-duration: 0.3s;
    position: absolute;
    top: calc(50% - 50px);
    right: calc(50% - 30px);
}

.uptvs-big-play-btn .ic::before {
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

.uptvs-big-play-btn .ic,
.uptvs-big-play-btn .ic svg {
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
        vertical-align: middle;
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
    }

    &--sm-11 {
        font-size: 11px;
        font-weight: 200;
        color: #9ba1a6;
    }

    &--sm-12 {
        font-size: 12px;
        font-weight: 200;
    }

}

.text-white-25 {
    color: rgba(255, 255, 255, .25) !important;
}

.internal-distance {
    margin-left: 5px;
    margin-right: 5px;
}

.post-single-meta {
    padding-top: 5px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, .1);
}

.post-single-artist {
    border-bottom: 1px solid rgba(255, 255, 255, .1);
    padding-top: 10px;
    padding-bottom: 20px;
}
</style>