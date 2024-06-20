<script setup>
import house from '@/assets/images/house.svg'
import subscription from '@/assets/images/subscription.svg'
import wallet from '@/assets/images/wallet.svg'
import headphones from '@/assets/images/headphones.svg'
import list from '@/assets/images/list.svg'
import shopping from '@/assets/images/shopping.svg'
import arrowLeft from '@/assets/images/arrow-left.svg'
import comments from '@/assets/images/comments.svg'
import MediumMovieCards from "@/components/MediumMovieCards.vue";
</script>

<template>
    <div class="pt-150 pb-5 container bv-example-row">
        <div class="row">
            <div class="col-lg-3 col-md-4 mb-15">
                <div class="sidebar_dashboard">
                    <div class="side_head_dashboard">
                        <div class="inner_side_head_dashboard">
                            <div class="avatar_user_panel"> {{ avatar }} </div>
                        </div>
                        <span class="wellcome_message">کاربر گرامی ، <strong>خوش آمدید</strong></span>
                        <span class="user_name"> {{ userName }} </span>
                        <div class="btn_show_profile">
                            <router-link class="active" :to='{ name: "" }'> نمایش پروفایل
                            </router-link>
                        </div>
                    </div>

                    <div class="dashboard_menu_nav">
                        <ul>
                            <li>
                                <router-link class="active" :to='{ name: "dashboardPageRoute" }'>
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <span class="right_icon">
                                                <img alt="#" :src="house">
                                            </span>
                                            <span class="text_link">پیـــشخوان</span>
                                        </div>

                                        <span class="arrow_icon">
                                            <img alt="#" :src="arrowLeft">
                                        </span>
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link class="active" :to='{ name: "subscriptionPageRoute" }'>
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <span class="right_icon">
                                                <img alt="#" :src="subscription">
                                            </span>
                                            <span class="text_link"> خرید اشتراک </span>
                                        </div>

                                        <span class="arrow_icon">
                                            <img alt="#" :src="arrowLeft">
                                        </span>
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link class="active" :to='{ name: "walletPageRoute" }'>
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <span class="right_icon">
                                                <img alt="#" :src="wallet">
                                            </span>
                                            <span class="text_link"> کیف پول </span>
                                        </div>

                                        <span class="arrow_icon">
                                            <img alt="#" :src="arrowLeft">
                                        </span>
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link class="active" :to='{ name: "ticketsPageRoute" }'>
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <span class="right_icon">
                                                <img alt="#" :src="headphones">
                                            </span>
                                            <span class="text_link"> تیکت ها </span>
                                        </div>

                                        <span class="arrow_icon">
                                            <img alt="#" :src="arrowLeft">
                                        </span>
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link class="active" :to='{ name: "listsPageRoute" }'>
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <span class="right_icon">
                                                <img alt="#" :src="list">
                                            </span>
                                            <span class="text_link"> لیست ها </span>
                                        </div>

                                        <span class="arrow_icon">
                                            <img alt="#" :src="arrowLeft">
                                        </span>
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link class="active" :to='{ name: "PaymentsPageRoute" }'>
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <span class="right_icon">
                                                <img alt="#" :src="shopping">
                                            </span>
                                            <span class="text_link"> پرداخت ها </span>
                                        </div>

                                        <span class="arrow_icon">
                                            <img alt="#" :src="arrowLeft">
                                        </span>
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link class="active" :to='{ name: "commentsPageRoute" }'>
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <span class="right_icon">
                                                <img alt="#" :src="comments">
                                            </span>
                                            <span class="text_link"> دیـدگاه ها </span>
                                        </div>

                                        <span class="arrow_icon">
                                            <img alt="#" :src="arrowLeft">
                                        </span>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-lg-9 col-md-8">
                <div class="main_dashboard">
                    <div class="before_msg mb-3" v-if="hasBeforeMsgAlert">
                        <div class="item_dashboard danger d-flex justify-content-between direction-column">
                            <span class="alert mb-15"> کاربر گرامی برای بهره‌مندی از همه
                                امکانات سایت لطفاً آدرس ایمیل خود را تایید کنید.
                            </span>
                            <span class="alert-btn">
                                <router-link class="active" :to='{ name: "" }'> ارسال تائیدیه </router-link>
                            </span>
                        </div>
                    </div>

                    <div class="before_msg mb-3">
                        <div class="item_dashboard danger" v-if="hasConfirmationAlert">
                            <span class="alert"> لینک تائیدیه به آدرس ایمیل شما ارسال
                                شده است. در صورت عدم دریافت لینک تائیدیه می‌توانید هر 5 دقیقه یکبار برای دریافت لینک
                                اقدام کنید. </span>
                        </div>
                    </div>

                    <div class="item_box mb-3">
                        <div class="form_item">
                            <div class="row align-items-center justify-content-around mb-4">
                                <div class="col-lg-10 d-flex gx-0">
                                    <label for="str_search"> {{ title }} </label>
                                    <input type="text" name="str_search" id="search_ajax" data-typesearch="series">
                                </div>
                                <div class="col-lg-2">
                                    <button class="btnSearch float-end">جستجو</button>
                                </div>
                            </div>
                            <div v-if="hasSearching">
                                <span class="text-14 text-14--blue">در حال جستجو ...</span>
                            </div>
                        </div>
                    </div>

                    <div class="text-end mb-5">
                        <button class="btnSaveList">ذخیره تغییرات</button>
                    </div>

                    <div class="list-items">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 mb-3 relative" v-for="searchMovie in searchMovies">
                                <MediumMovieCards v-bind="searchMovie"></MediumMovieCards>
                                <font-awesome-icon class="delet-btn" icon="trash" />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EditListItems',

    data() {
        return {
            userName: 'tannaz71',
            avatar: 'T',
            hasBeforeMsgAlert: true,
            hasConfirmationAlert: true,
            hasSearching: true,
            title: 'نام سریال:',

            searchMovies: [
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
            ],
        }
    }
}
</script>


<style scoped lang="scss">
.container {
    @media (max-width:820px) {
        max-width: 99%;
    }
}

.pt-150 {
    padding-top: 150px;

    @media (max-width:820px) {
        padding-top: 120px;
    }
}

.text-14 {
    font-size: 14px;
    font-weight: 500;
    margin: 0;

    @media (max-width:820px) {
        font-size: 12px;
        line-height: 2;
    }

    a {
        text-decoration: none;
    }

    &--blue {
        color: #6898f8;
    }
}

.form_item {
    display: inline-block;
    width: 100%;
}

.form_item input,
textarea {
    width: 100%;
    background: #23232b;
    padding: 15px 10px;
    border-radius: 8px;
    color: #fff;
    outline: none;
    border: none;

    @media (min-width:450px) and (max-width:820px) {
        width: 75%;
        margin-bottom: 10px;
    }

    @media (max-width:449px) {
        width: 65%;
        margin-bottom: 10px;
    }
}

.form_item label {
    display: inline-block;
    width: 15%;
    font-size: 16px;
    font-weight: 200;
    text-align: right;
    padding: 10px 12px 10px 0;

    @media (min-width:450px) and (max-width:820px) {
        width: 20%;
    }

    @media (max-width:449px) {
        width: 30%;
    }
}

.item_box {
    display: inline-block;
    width: 100%;
    background: #1c1c22;
    color: #fff;
    padding: 20px 15px;
    border-radius: 10px;
}

.btnSearch {
    display: inline-block;
    padding: 10px 15px;
    border-radius: 8px;
    background: #0a0a0a;
    color: #fff;
    cursor: pointer;
    border: none;
}

.btnSaveList {
    display: inline-block;
    background: #6898f8;
    padding: 10px 15px;
    border-radius: 5px;
    color: #fff;
    font-size: 12px;
    cursor: pointer;
    border: none;
}

.direction-column {
    @media (max-width:820px) {
        display: flex;
        flex-direction: column;
    }
}

.mb-15 {
    @media (max-width:820px) {
        margin-bottom: 15px;
    }
}

.delet-btn {
    position: absolute;
    left: 20px;
    top: 10px;
    font-size: 20px;
    font-weight: 500;
    background-color: transparent;
    border: none;
    outline: none;

    &:is(:hover, :focus) {
        color: red;
    }
}

.relative {
    position: relative;
}
</style>