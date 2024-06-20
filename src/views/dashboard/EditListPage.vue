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

                    <div class="mb-3">
                        <div class="message_top_info text-14">
                            <p class="text-14"> شما در این بخش، می‌توانید لیست‌های شخصی خود را بسازید؛ لیست‌هایی که در
                                آن می‌توان، مجموعه‌ای از فیلم‌ها، سریال‌ها و یا هنرمندان را بر اساس شاخص‌های شخصی اضافه
                                نمود.
                            </p>
                        </div>
                    </div>

                    <div class="title_sec">
                        <h2> ویرایش لیست </h2>
                    </div>

                    <div class="status_message mb-3 mt-5" v-if="hasSuccessfulAlert"> با موفقیت ویرایش شد
                    </div>

                    <div class="form_item">
                        <label for="title_list">عنوان لیست</label>
                        <input type="text" name="title_list" id="title_list" placeholder="عنوان لیست را اینجا بنویسید">
                    </div>

                    <div class="form_item">
                        <label for="title_list">نوع لیست</label>
                        <div class="radio_holder">
                            <div class="item_radio">
                                <input type="radio" name="type" id="movie" value="movie" checked="checked">
                                <label for="movie">فیلم</label>
                            </div>
                            <div class="item_radio">
                                <input type="radio" name="type" id="series" value="series">
                                <label for="series">سریال</label>
                            </div>
                            <div class="item_radio">
                                <input type="radio" name="type" id="people" value="people">
                                <label for="people">افراد</label>
                            </div>
                        </div>
                    </div>

                    <div class="form_item">
                        <label for="title_list"> توضیحات شما </label>
                        <textarea name="message_ticket" id="message_ticket" placeholder="توضیحات" rows="4"></textarea>
                    </div>

                    <div class="checkbox_holder mb-3">
                        <label class="text-14 text-14--300" for="private_list">
                            <input type="checkbox" name="private" id="private_list" value="on">لیست را بطور خصوصی فقط
                            برای خودم ایجاد میکنم
                        </label>
                    </div>

                    <div class="form_item">
                        <button class="btnEditList" name="create_lists" type="submit"> ویرایش لیست </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EditList',

    data() {
        return {
            userName: 'tannaz71',
            avatar: 'T',
            hasBeforeMsgAlert: true,
            hasConfirmationAlert: true,
            hasSuccessfulAlert: true,
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

.message_top_info {
    display: inline-block;
    width: 100%;
    background: #d1ecf1;
    color: #0c5460;
    border: 1px solid #bee5eb;
    padding: 10px;
    margin-bottom: 30px;
    border-radius: 15px;

    a {
        text-decoration: none;
        color: #331c2d;

        &:is(:hover, :focus) {
            color: #6898f8;
        }
    }
}

.form_item {
    display: inline-block;
    width: 100%;
    margin-bottom: 20px;
}

.form_item input,
textarea {
    width: 100%;
    background: #050505;
    padding: 15px 10px;
    border-radius: 35px;
    color: #fff;
    outline: none;
    border: none;
}

.form_item label {
    display: inline-block;
    width: 100%;
    font-size: 16px;
    font-weight: 200;
    text-align: right;
    padding: 10px 12px 10px 0;

    @media (max-width:820px) {
        font-size: 13px;
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

.item_radio {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    width: fit-content;
    line-height: 1;
}

.radio_holder {
    margin-right: 10px;
}

.btnEditList {
    float: left;
    padding: 10px 20px;
    border-radius: 35px;
    background: #6898f8;
    color: #fff;
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
</style>