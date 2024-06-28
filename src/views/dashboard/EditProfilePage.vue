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
                            <router-link class="active" :to='{ name: "editProfilePageRoute" }'> نمایش پروفایل
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
                        <form class="item_box" method="post" action="">
                            <div class="d-flex direction-column gap-3">
                                <div class="form_item">
                                    <label for="userlogin">نام کاربری</label>
                                    <div class="put_item_from">
                                        <div class="icon_holder">
                                            <font-awesome-icon icon="user" />
                                        </div>
                                        <input type="text" name="userlogin" id="userlogin" value="">
                                    </div>
                                </div>
                                <div class="form_item">
                                    <label for="useremail">پست الکترونیک</label>
                                    <div class="put_item_from">
                                        <div class="icon_holder">
                                            <font-awesome-icon icon="envelope" />
                                        </div>
                                        <input type="email" name="useremail" id="useremail" value="" >
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex direction-column gap-3">
                                <div class="form_item">
                                    <label for="userchangepass">رمز عبور</label>
                                    <div class="put_item_from">
                                        <div class="icon_holder">
                                            <font-awesome-icon icon="lock" />
                                        </div>
                                        <input type="password" name="userchangepass" id="userchangepass"
                                            autocomplete="new-password">
                                    </div>
                                </div>

                                <div class="form_item">
                                    <label for="reuserchangepass">تکرار رمز عبور</label>
                                    <div class="put_item_from">
                                        <div class="icon_holder">
                                            <font-awesome-icon icon="lock" />
                                        </div>
                                        <input type="password" name="reuserchangepass" id="reuserchangepass"
                                            autocomplete="new-password">
                                    </div>
                                </div>
                            </div>
                            <div class="help_message">
                                <span> اگه میخوای رمزتو عوض کنی رمز جدیدتو اینجا بنویس.در
                                    غیر
                                    اینصورت خالی رهاش کن.
                                </span>
                            </div>

                            <div class="d-flex direction-column gap-3">
                                <div class="form_item">
                                    <label for="name">نام</label>
                                    <div class="put_item_from">
                                        <div class="icon_holder">
                                            <font-awesome-icon icon="user" />
                                        </div>
                                        <input type="text" name="name" id="name" value="">
                                    </div>
                                </div>
                                <div class="form_item">
                                    <label for="lastname">نام خانوادگی</label>
                                    <div class="put_item_from">
                                        <div class="icon_holder">
                                            <font-awesome-icon icon="user" />
                                        </div>
                                        <input type="text" name="lastname" id="lastname" value="">
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex direction-column gap-3">
                                <div class="form_item">
                                    <label for="display_name">نام نمایشی</label>
                                    <div class="put_item_from">
                                        <div class="icon_holder">
                                            <font-awesome-icon icon="user" />
                                        </div>
                                        <input type="text" name="display_name" id="display_name" value="">
                                    </div>
                                </div>
                                <div class="form_item">
                                    <label for="mobile">شماره موبایل</label>
                                    <div class="put_item_from">
                                        <div class="icon_holder">
                                            <font-awesome-icon icon="phone" />
                                        </div>
                                        <input type="number" name="mobile" id="mobile" value="">
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button class="btn-edit-info" type="submit">ذخیره تنظیمات</button>
                            </div>
                        </form>

                        <div class="status_message mt-4" v-if="hasSuccessAlert"> تغییرات شما با موفقیت ثبت گردید </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'EditProfile',

    data() {
        return {
            userName: 'tannaz71',
            avatar: 'T',
            hasNoSubscriptionAlert: true,
            hasBeforeMsgAlert: true,
            hasConfirmationAlert: true,
            hasSuccessAlert: true,
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

.item_box {
    display: inline-block;
    width: 100%;
    background: #1c1c22;
    color: #fff;
    padding: 15px;
    border-radius: 10px;
}

.form_item {
    display: inline-block;
    margin-bottom: 20px;
    width: 100%;
}

.form_item input {
    width: 100%;
    background: #23232b;
    padding: 15px 10px;
    border-radius: 10px;
    color: #fff;
    outline: none;
    border: none;
    margin-right: 70px;
}

.form_item label {
    display: inline-block;
    width: 100%;
    font-size: 16px;
    font-weight: 300;
    text-align: right;
    padding: 10px 12px 10px 0;

    @media (max-width:820px) {
        font-size: 14px;
    }
}

.btn-edit-info {
    float: left;
    padding: 10px 20px;
    border-radius: 35px;
    background: #6898f8;
    color: #fff;
    border: none;
}

.put_item_from {
    background: #23232b;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    width: 100%;
}

.icon_holder {
    align-content: center;
    align-items: center;
    background: #23232b;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
    width: 62px;
}
</style>