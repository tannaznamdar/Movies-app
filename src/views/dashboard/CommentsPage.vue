<script setup>
import house from '@/assets/images/house.svg'
import subscription from '@/assets/images/subscription.svg'
import wallet from '@/assets/images/wallet.svg'
import headphones from '@/assets/images/headphones.svg'
import list from '@/assets/images/list.svg'
import shopping from '@/assets/images/shopping.svg'
import arrowLeft from '@/assets/images/arrow-left.svg'
import comments from '@/assets/images/comments.svg'
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
                    <div class="before_msg mb-4" v-if="hasBeforeMsgAlert">
                        <div class="item_dashboard danger d-flex justify-content-between direction-column">
                            <span class="alert mb-15"> کاربر گرامی برای بهره‌مندی از همه
                                امکانات سایت لطفاً آدرس ایمیل خود را تایید کنید.
                            </span>
                            <span class="alert-btn">
                                <router-link class="active" :to='{ name: "" }'> ارسال تائیدیه </router-link>
                            </span>
                        </div>
                    </div>

                    <div class="before_msg mb-4">
                        <div class="item_dashboard danger" v-if="hasConfirmationAlert">
                            <span class="alert"> لینک تائیدیه به آدرس ایمیل شما ارسال
                                شده است. در صورت عدم دریافت لینک تائیدیه می‌توانید هر 5 دقیقه یکبار برای دریافت لینک
                                اقدام کنید. </span>
                        </div>
                    </div>

                    <div class="title_sec mb-5 mt-3">
                        <h2> لیست دیدگاه ها </h2>
                    </div>

                    <div>
                        <div class="status_message mb-3" v-if="hasNoCommentAlert">تاکنون دیدگاهی ثبت نکرده اید</div>

                        <div class="inner_comment_item" v-for=" yourComment in yourComments">
                            <div class="row align-items-center">
                                <div class="col-lg-2   display-none">
                                    <div class="d-flex align-items-center mb-15 justify-content-between">
                                        <div class="like_holder d-flex">
                                            <a href="#" class=" like_dislike-wrapper d-flex flex-column text-center"
                                                title="لایک">
                                                <font-awesome-icon class="internal-distance-l like" icon="thumbs-up" />
                                                <span class="like">{{ yourComment.numberOfLikes }}</span>
                                            </a>
                                            <a href="#" class=" like_dislike-wrapper d-flex flex-column text-center"
                                                title="دیسلایک">
                                                <font-awesome-icon class="internal-distance-l dislike"
                                                    icon="thumbs-down" />
                                                <span class="dislike">{{ yourComment.numberOfDislike }}</span>
                                            </a>
                                        </div>
                                        <div class="avatar">
                                            <font-awesome-icon class="user-icon ernalint-distance avatar_comments"
                                                icon="user" />
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-10">
                                    <div class="d-flex justify-content-between  direction-column-mobile mb-3">
                                        <a href="" class="cm_author"> {{ yourComment.moviesName }} </a>
                                        <div class="date_comment"> {{ yourComment.messageTime }} - {{
                                            yourComment.messageCondition }} </div>
                                    </div>
                                    <div class="d-flex justify-content-between direction-column">
                                        <div class="comment_text_cm">
                                            <p> {{ yourComment.message }} </p>
                                        </div>
                                        <div class="display-none">
                                            <button class="delet-btn">حذف دیدگاه</button>
                                        </div>
                                    </div>

                                    <div class="display-none-lg">
                                        <div class="">
                                            <button class="delet-btn">حذف دیدگاه</button>
                                        </div>

                                        <div class="d-flex align-items-center mb-15 justify-content-between">
                                            <div class="like_holder d-flex">
                                                <a href="#" class=" like_dislike-wrapper d-flex flex-column text-center"
                                                    title="لایک">
                                                    <font-awesome-icon class="internal-distance-l like"
                                                        icon="thumbs-up" />
                                                    <span class="like">{{ yourComment.numberOfLikes }}</span>
                                                </a>
                                                <a href="#" class=" like_dislike-wrapper d-flex flex-column text-center"
                                                    title="دیسلایک">
                                                    <font-awesome-icon class="internal-distance-l dislike"
                                                        icon="thumbs-down" />
                                                    <span class="dislike">{{ yourComment.numberOfDislike }}</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
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
    name: 'Comments',

    data() {
        return {
            userName: 'tannaz71',
            avatar: 'T',
            hasBeforeMsgAlert: true,
            hasConfirmationAlert: true,
            hasNoCommentAlert: true,

            yourComments: [
                {
                    numberOfLikes: 2,
                    numberOfDislike: 1,
                    message: 'جالب نبود',
                    moviesName: 'دانلود فیلم Late Bloomers 2023',
                    messageCondition: '(تایید شده)',
                    messageTime: '(50 دقیقه قبل) ',
                },
                {
                    numberOfLikes: 10,
                    numberOfDislike: 3,
                    message: 'عالی بود',
                    moviesName: 'دانلود فیلم Late of us ',
                    messageCondition: '(در انتظار)',
                    messageTime: '(35 ثانیه قبل) ',
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

    &--300 {
        font-weight: 300;
    }

    &--blue {
        color: #6898f8;
    }
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

.inner_comment_item {
    border-radius: 10px;
    width: 100%;
    background: #1c1c22;
    padding: 15px 20px;
    position: relative;
    margin-bottom: 10px;
}

.like_holder {
    a {
        text-decoration: none;
        color: #FFF;
    }
}

.like_dislike-wrapper {
    border-radius: 10px;
    width: 43px;
    height: 59px;
    background: #23232b;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
}

.like {
    color: #e91e63;
    width: 19px;
    height: 19px;
}

.dislike {
    color: #8bc34a;
    width: 19px;
    height: 19px;
}

.avatar_comments {
    color: #6e7072;
    width: 20px;
    height: 20px;
}

.cm_author {
    text-decoration: none;
    color: #6898f8;
    font-weight: 400;
    font-size: 16px;
}

.comment_text_cm {
    line-height: 23px;
    margin: 5px 0;

    p {
        font-weight: 200;
        font-size: 14px;
    }
}

.delet-btn {
    text-decoration: none;
    border-radius: 10px;
    background: #6898f8;
    color: #fff;
    font-size: 14px;
    padding: 7px 20px;
    font-size: 13px;
    font-weight: 300;
    border: none;
}

.direction-column {
    @media (max-width:820px) {
        display: flex;
        flex-direction: column;
    }
}

.direction-column-mobile {
    @media (max-width:449px) {
        display: flex;
        flex-direction: column;
    }
}

.mb-15 {
    @media (max-width:820px) {
        margin-bottom: 15px;
    }
}

.display-none {
    @media (max-width:820px) {
        display: none;
    }
}

.display-none-lg {
    display: none;

    @media (max-width:820px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
}
</style>