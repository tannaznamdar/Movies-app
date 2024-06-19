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
                <div class="main_dashboard">
                    <div class="before_msg mb-4" v-if="hasBeforeMsgAlert">
                        <div class="item_dashboard danger d-flex justify-content-between">
                            <span class="alert"> کاربر گرامی برای بهره‌مندی از همه
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
                                <div class="col-lg-2">
                                    <div class="d-flex align-items-center  justify-content-between">
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
                                    <div class="d-flex justify-content-between mb-3">
                                        <a href="" class="cm_author"> {{ yourComment.moviesName }} </a>
                                        <div class="date_comment"> {{ yourComment.messageTime }} - {{
                                            yourComment.messageCondition }} </div>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <div class="comment_text_cm">
                                            <p> {{ yourComment.message }} </p>
                                        </div>
                                        <div>
                                            <button class="delet-btn">حذف دیدگاه</button>
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
    min-height: 820px;
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

.text-14 {
    font-size: 14px;
    font-weight: 500;
    margin: 0;

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

.status_message {
    width: 100%;
    padding: 7px 10px;
    margin: 10px 0 0;
    background: #fffbe7;
    color: #6898f8;
    border: 1px solid #ffebce;
    line-height: 23px;
    border-radius: 5px;
    text-align: center;
    font-size: 14px;
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
</style>