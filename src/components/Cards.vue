<template>

    <main class="wrapper">
        <div class="container bv-example-row">
            <section>
                <div class="row mt-4">

                    <div class="col-lg-3">
                        <article class="card-container">
                            <a href="#">
                                <figure class="card-img">
                                    <img alt="RebelMoon" :src="RebelMoon">
                                </figure>

                                <div class="card-info-overlay">
                                    <div class="card-info">
                                        <div class="mb-2 d-flex flex-row">
                                            <span class="internal-distance-l">
                                                <font-awesome-icon icon="heart" />
                                                86%
                                            </span>
                                            <span>
                                                <img alt="Imdb" :src="Imdb">
                                                10/ 5.1
                                            </span>
                                        </div>

                                        <h2 class="card-font card-font--title"> فیلم ربل مون 2 </h2>
                                        <p class="card-font card-font--subTitle"> Rebel Moon 2 2024 </p>
                                        <span class="button button-transparent-orange">زیرنویس چسبیده</span>
                                    </div>
                                </div>
                            </a>
                        </article>
                    </div>

                </div>

                <div class="new-search-box ">
                    <form action="#" method="get">
                        <input type="text" style="display: none;">
                        <div class="row">

                            <div class="col-lg-2">
                                <div class="search-box-list">
                                    <button class="dropbtn d-flex justify-content-between">
                                        سریال
                                        <font-awesome-icon class="angle-left-icon" icon="angle-left" />
                                    </button>

                                    <div class="dropdown-content ">
                                        <div class="text-item  align-item-center">
                                            <label class="custom-radio" name="cat-all" value>
                                                <input checked="checked" name="radio" type="radio">
                                                <span class="checkmark"></span>
                                                همه
                                            </label>
                                        </div>

                                        <div class="text-item  align-item-center">
                                            <label class="custom-radio" name="cat-all" value>
                                                <input checked="checked" name="radio" type="radio">
                                                <span class="checkmark"></span>
                                                فیلم
                                            </label>
                                        </div>

                                        <div class="text-item  align-item-center">
                                            <label class="custom-radio" name="cat-all" value>
                                                <input checked="checked" name="radio" type="radio">
                                                <span class="checkmark"></span>
                                                سریال
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-2">
                                <div class="search-box-list">
                                    <button class="dropbtn d-flex justify-content-between">
                                        ژانر
                                        <font-awesome-icon class="angle-left-icon" icon="angle-left" />
                                    </button>

                                    <div class="dropdown-content ">
                                        <div class="text-item  align-item-center">
                                            <label class="custom-radio" name="cat-all" value>
                                                <input checked="checked" name="radio" type="radio">
                                                <span class="checkmark"></span>
                                                همه
                                            </label>
                                        </div>

                                        <div class="text-item  align-item-center">
                                            <label class="custom-radio" name="cat-all" value>
                                                <input checked="checked" name="radio" type="radio">
                                                <span class="checkmark"></span>
                                                فیلم
                                            </label>
                                        </div>

                                        <div class="text-item  align-item-center">
                                            <label class="custom-radio" name="cat-all" value>
                                                <input checked="checked" name="radio" type="radio">
                                                <span class="checkmark"></span>
                                                سریال
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-2">
                                <div class="search-box-list">
                                    <button class="dropbtn d-flex justify-content-between">
                                        کشور
                                        <font-awesome-icon class="angle-left-icon" icon="angle-left" />
                                    </button>

                                    <div class="dropdown-content ">
                                        <div class="text-item  align-item-center">
                                            <label class="custom-radio" name="cat-all" value>
                                                <input checked="checked" name="radio" type="radio">
                                                <span class="checkmark"></span>
                                                همه
                                            </label>
                                        </div>

                                        <div class="text-item  align-item-center">
                                            <label class="custom-radio" name="cat-all" value>
                                                <input checked="checked" name="radio" type="radio">
                                                <span class="checkmark"></span>
                                                فیلم
                                            </label>
                                        </div>

                                        <div class="text-item  align-item-center">
                                            <label class="custom-radio" name="cat-all" value>
                                                <input checked="checked" name="radio" type="radio">
                                                <span class="checkmark"></span>
                                                سریال
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-2">
                                <div class="search-box-list">
                                    <button class="dropbtn d-flex justify-content-between">
                                        دوبله و زیر نویس
                                        <font-awesome-icon class="angle-left-icon" icon="angle-left" />
                                    </button>

                                    <div class="dropdown-content ">
                                        <div class="text-item  align-item-center">
                                            <label class="custom-radio" name="cat-all" value>
                                                <input checked="checked" name="radio" type="radio">
                                                <span class="checkmark"></span>
                                                همه
                                            </label>
                                        </div>

                                        <div class="text-item  align-item-center">
                                            <label class="custom-radio" name="cat-all" value>
                                                <input checked="checked" name="radio" type="radio">
                                                <span class="checkmark"></span>
                                                فیلم
                                            </label>
                                        </div>

                                        <div class="text-item  align-item-center">
                                            <label class="custom-radio" name="cat-all" value>
                                                <input checked="checked" name="radio" type="radio">
                                                <span class="checkmark"></span>
                                                سریال
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-2">
                                <div class="search-box-list">
                                    <button class="dropbtn d-flex justify-content-between">
                                        امتیاز
                                        <font-awesome-icon class="angle-left-icon" icon="angle-left" />
                                    </button>

                                    <div class="dropdown-content ">
                                        <div class="text-item  align-item-center">
                                            <label class="custom-radio" name="cat-all" value>
                                                <input checked="checked" name="radio" type="radio">
                                                <span class="checkmark"></span>
                                                همه
                                            </label>
                                        </div>

                                        <div class="text-item  align-item-center">
                                            <label class="custom-radio" name="cat-all" value>
                                                <input checked="checked" name="radio" type="radio">
                                                <span class="checkmark"></span>
                                                فیلم
                                            </label>
                                        </div>

                                        <div class="text-item  align-item-center">
                                            <label class="custom-radio" name="cat-all" value>
                                                <input checked="checked" name="radio" type="radio">
                                                <span class="checkmark"></span>
                                                سریال
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-2">
                                <button class="button button--lg " type="submit" > جستجو </button>
                            </div>

                        </div>
                    </form>

                </div>


            </section>
        </div>
    </main>

</template>


<script>

import RebelMoon from '../assets/images/RebelMoon.jpg'

import Imdb from '../assets/images/la--imdb.svg'


export default {
    name: 'cards',

    data() {
        return {
            RebelMoon,
            Imdb,
        }
    }
}

</script>




<style scoped lang="scss">
.card-container {
    box-shadow: 0 5px 25px rgba(0, 0, 0, .13);
    position: relative;

    a {
        text-decoration: none;
        color: #fff;
    }
}

.card-img {
    display: block;
    border-radius: 4px;
    width: 100%;
    height: 180px;
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
        border-radius: 8px;
    }
}

.card-info-overlay {

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background: rgba(0, 0, 0, .7);
    border-radius: 4px;
    transition: all 400ms;
}

.card-info {
    position: absolute;
    top: 50%;
    right: 0;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    box-shadow: 0 5px 25px rgba(0, 0, 0, .13) !important;
}


.card-container:hover .card-info-overlay {
    opacity: 1;
}

.internal-distance-l {
    margin-left: 10px;
}

.card-font {
    font-family: inherit;
    line-height: 1.3;
    color: #fff;

    &--title {
        font-weight: 700;
        font-size: 15px;
    }

    &--subTitle {
        font-weight: 200;
        font-size: 12px;
    }
}

.button {
    display: inline-block;
    padding: 8px 14px 8px;
    font-size: 12px;
    font-weight: 400;
    line-height: 1;
    text-align: center;
    border-radius: 3px;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;


    &-transparent-orange {
        background: transparent;
        border-color: #FF7555;
        color: #FF7555;
    }

    &-transparent-green {
        background: transparent;
        border-color: #89d64f;
        color: #89d64f;
    }

    &--lg {
        color: #fff;
        background-color: #6898f8;
        border-color: #6898f8;
        width: 100%;
        font-size: 14px;
        line-height: 2;
    }
}

//search-box 

.new-search-box {
    padding: 10px;
    background-color: #23232b !important;
    border-radius: 5px;
    margin-bottom: 30px;
    display: block;
}

.search-box-list {
    position: relative;
    display: block;
}

.dropbtn {
    background-color: #1c1c22;
    border-color: #1c1c22;
    color: white;
    text-align: right;
    border: none;
    width: 100%;
    cursor: pointer;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 14px;
    position: relative;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    line-height: 2;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    align-items: center;
}

.angle-left-icon {
    font-size: 14px;
    color: #fff;
    display: block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #1c1c22;
    border-color: #1c1c22;
    margin-top: 2px !important;
    backdrop-filter: blur(4px);
    width: 100%;
    z-index: 999;
    padding: 15px;
    border-radius: 5px;
    max-height: 420px;
    overflow-y: auto !important;
}

//checkbox

.custom-radio {
    display: block;
    position: relative;
    cursor: pointer;
    line-height: 20px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    align-items: center;


    input {
        opacity: 0;
        cursor: pointer;
        margin-right: 10px;
    }
}

.text-item {
    margin-bottom: 10px;
    color: #bbc1c6;
}

.checkmark {
    position: absolute;
    top: 0;
    right: 0;
    height: 15px;
    width: 15px;
    background-color: #eee;
    border-radius: 50%;
}

.custom-radio:hover input~.checkmark {
    background-color: #ccc;
}

.custom-radio input:checked~.checkmark {
    background-color: #2196F3;
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.custom-radio input:checked~.checkmark:after {
    display: block;
}


</style>