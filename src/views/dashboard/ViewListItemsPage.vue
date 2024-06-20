<script setup>
import house from '@/assets/images/house.svg'
import subscription from '@/assets/images/subscription.svg'
import wallet from '@/assets/images/wallet.svg'
import headphones from '@/assets/images/headphones.svg'
import list from '@/assets/images/list.svg'
import shopping from '@/assets/images/shopping.svg'
import arrowLeft from '@/assets/images/arrow-left.svg'
import comments from '@/assets/images/comments.svg'
import LargeMovieCards from "@/components/LargeMovieCards.vue";
</script>

<template>
    <div class="pt-150 pb-5 container bv-example-row">
        <div class="row">
            <div class="col-lg-3">
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

            <div class="col-lg-9">
                <div class="main_dashboard mb-4">
                    <div class="before_msg mb-3" v-if="hasBeforeMsgAlert">
                        <div class="item_dashboard danger d-flex justify-content-between">
                            <span class="alert"> کاربر گرامی برای بهره‌مندی از همه
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

                    <div class="title_sec mt-4">
                        <h2>{{ listTitle }}</h2>
                    </div>
                </div>

                <div class="list-items">
                    <div class="row">
                        <div v-for="largeMovieCard in largeMovieCards">
                            <LargeMovieCards v-bind="largeMovieCard"></LargeMovieCards>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ViewListItems',

    data() {
        return {
            userName: 'tannaz71',
            avatar: 'T',
            hasBeforeMsgAlert: false,
            hasConfirmationAlert: false,
            listTitle: 'لیست دلخواه',

            largeMovieCards: [
                {
                    slug: 'شهرزاد',
                    thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2018/06/shahrzad-s3-final-min-214x300.jpg',
                    link: 'thumbnail',
                    genres: [
                        {
                            title: 'درام',
                            slug: 'drama'
                        },
                        {
                            title: 'عاشقانه',
                            slug: 'romance'
                        }
                    ],
                    imdb: '6.3',
                    title: 'شهرزاد',
                    subtitle: 'فصل اول قسمت هفتم',
                    hasSubtitle: 'true',
                    actors: [
                        {
                            title: 'امیر جعفری',
                            slug: 'امیر-جعفری'
                        },
                        {
                            title: 'آزاده صمدی',
                            slug: 'آزاده-صمدی'
                        },
                        {
                            title: 'دیبا زاهد',
                            slug: 'دیبا-زاهد'
                        }
                    ],
                    like: 86,
                    hasDirector: true,
                    directors: [
                        {
                            title: 'پژمان تیمورتاش',
                            slug: 'پژمان-تیمورتاش'
                        }
                    ],
                    synopsis: 'هنگامه برای نجات جان برادرش نیاز به پول دارد. او برای آماده کردن این پول دست به...',
                    year: 1403,
                    Country: 'ایران',
                    hasBadge: true,
                    btnTitle: 'دانلود سریال'
                },
            ],
        }
    }
}
</script>


<style scoped lang="scss">
.pt-150 {
    padding-top: 150px;

    @media (max-width:449px) {
        padding-top: 120px;
    }
}

.sidebar_dashboard {
    min-height: 820px;
    width: 100%;
    border-radius: 14px;
    background: #23232b;
    overflow: hidden;
}

.inner_side_head_dashboard {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: #6e7072;
    position: relative;
    text-align: center;
    width: 100%;
    height: 126px;
}

.avatar_user_panel {
    width: 89px;
    height: 89px;
    line-height: 93px;
    font-size: 250%;
    text-align: center;
    color: #fff;
    border-radius: 100%;
    background-color: #6898f8;
    box-shadow: 0 0 29px 0 rgba(88, 83, 167, 0.4);
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    margin-right: auto;
    margin-left: auto;
}

.wellcome_message {
    display: inline-block;
    width: 100%;
    text-align: center;
    color: #fff;
    margin-top: 55px;
    font-size: 16px;
    font-weight: 300;
}

.user_name {
    font-size: 14px;
    font-weight: 500;
    display: inline-block;
    width: 100%;
    text-align: center;
    color: #6898f8;
    margin-top: 5px;
    margin: 0;
}

.btn_show_profile {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 15px;

    a {
        text-decoration: none;
        font-size: 14px;
        display: inline-block;
        padding: 10px 15px;
        background: #050505;
        box-shadow: 0 0 10px rgba(0, 0, 0, .7);
        color: #fff;
        border-radius: 35px;
        line-height: normal;
    }
}

.dashboard_menu_nav {
    display: inline-block;
    width: 100%;
    margin-top: 10px;

    ul {
        list-style: none;
        padding: 0;

        li {
            float: right;
            width: 100%;

            a {
                font-weight: 400;
                font-size: 16px;
                text-decoration: none;
                display: inline-block;
                padding: 20px;
                color: #fff;
                width: 100%;
                position: relative;
                transition: .3s;
                border-right: solid;
                border-width: 3px;
                border-color: #23232b;

                i {
                    font-size: 14PX;
                    color: #6e7072;
                }

                &:is(:hover, :focus) {
                    background: #0a0a0a;
                    border-color: #6898f8;
                }
            }
        }
    }
}

.right_icon {
    float: right;
    margin-left: 8px;
}

.main_dashboard {
    border-radius: 14px;
    background-color: #23232b;
    color: #fff;
    padding: 20px;
}

.item_dashboard {
    display: inline-block;
    width: 100%;
    margin-bottom: 10px;
    background-color: #1c1c22;
    box-shadow: 0 4px 0 0 rgba(0, 0, 0, .4);
    padding: 20px;
    border-radius: 5px;
    border-right: 5px;
}

.danger {
    background: #910909;
    box-shadow: 0 4px 0 0 #91090900;
}

.alert {
    font-size: 15px;
    font-weight: 300;
    line-height: normal;
    margin: 0;
    padding: 0;
}

.alert-btn a {
    text-decoration: none;
    border-radius: 35px;
    background: #6898f8;
    color: #fff;
    font-size: 90%;
    padding: 7px 20px;
    font-size: 13px;
    font-weight: 300;
}

.title_sec {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10px;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, .1);
    position: relative;
    margin-bottom: 20px;
}

.title_sec h2 {
    display: inline-block;
    background: #23232b;
    padding: 5px 10px;
    margin-top: -5px;
    font-size: 18px;
    font-weight: 400;
}
</style>