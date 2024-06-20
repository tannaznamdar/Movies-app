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
                    <div class="before_msg mb-3" v-if="hasBeforeMsgAlert">
                        <div class="item_dashboard danger d-flex justify-content-between direction-column">
                            <span class="alert  mb-15"> کاربر گرامی برای بهره‌مندی از همه
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

                    <div class="no_subscription mb-3" v-if="hasNoSubscriptionAlert">
                        <div class="item_dashboard danger danger d-flex justify-content-between">
                            <span class="alert">شما اشتراک فعال ندارید</span>
                            <span class="alert-btn">
                                <router-link class="active" :to='{ name: "subscriptionPageRoute" }'> خرید اشتراک
                                </router-link>
                            </span>
                        </div>
                    </div>

                    <div class="inner_main mb-4">
                        <div class="item_dashboard mb-4">
                            <div class="d-flex justify-content-between">
                                <span class="text-14"> آخرین فعالیت شما : </span>
                                <span class="text-14"> {{ lastActivity }} </span>
                            </div>
                            <div class="border_bottom_1"></div>
                            <div class="d-flex justify-content-between">
                                <span class="text-14"> تاریخ عضویت : </span>
                                <span class="text-14"> {{ registeryDate }} </span>
                            </div>
                        </div>

                        <div class="item_dashboard mb-4">
                            <div class="d-flex justify-content-between">
                                <span class="text-14">آی پی شما</span>
                                <span class="text-14"> {{ ip }} </span>
                            </div>
                            <div class="border_bottom_1"></div>
                            <div class="d-flex justify-content-between">
                                <span class="text-14">ایمیل</span>
                                <span class="text-14"> {{ email }}</span>
                            </div>
                            <div class="border_bottom_1 "></div>
                            <div class="d-flex justify-content-between">
                                <span class="text-14">نام نمایشی</span>
                                <span class="text-14">{{ userName }} </span>
                            </div>
                        </div>

                        <div class="item_dashboard commentslist d-flex justify-content-between">
                            <div class="text-14"> تعداد نظرات شما :
                                <span> {{ numberOfComments }} </span>
                            </div>
                            <span class="alert-btn">
                                <router-link class="active" :to='{ name: "" }'> مشاهده دیـدگاه ها </router-link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Dashboard',

    data() {
        return {
            userName: 'tannaz71',
            avatar: 'T',
            hasNoSubscriptionAlert: true,
            hasBeforeMsgAlert: true,
            hasConfirmationAlert: true,
            lastActivity: ' 19 خرداد 1403 | 14:24 ',
            registeryDate: ' 18 خرداد 1403 | 09:12 ',
            ip: '98.98.49.226',
            email: 'tannaznamdar@gmail.com',
            numberOfComments: 0,
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
    font-weight: 200;
    line-height: normal;
}

.border_bottom_1 {
    width: 100%;
    display: inline-block;
    margin: 20px 0;
    border-bottom: 1px solid rgba(190, 190, 190, .1);
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
</style>