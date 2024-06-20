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

                    <div class="item_dashboard mb-4">
                        <div class="d-flex justify-content-between">
                            <span class="text-14"> موجودی کیف پول شما: </span>
                            <span class="text-14"> {{ walletBalance }} تومان </span>
                        </div>
                    </div>

                    <div class="mb-1">
                        <div class="message_top_info text-14"> <strong>نکته مهم خرید :</strong>
                            <p class="text-14">- برای شارژ کیف پول با استفاده از ووچر پرفکت مانی از فرم زیر استفاده
                                کنید..
                            </p>
                            <p class="text-14"> - به ازای هر دلار پرفکت مانی کیف پول شما 59,500 تومان شارژ خواهد شد.
                            </p>
                            <p class="text-14"> - برای شارژ کیف پول با ووچر پرفکت مانی پیشنهاد می‌شود به سایت لایسنس 98
                                و یا کافه ارز مراجعه کنید ، در این سایت‌ها نیازی به احراز هویت نمی‌باشد ، همچنین
                                می‌توانید از سایت‌های دلخواه دیگری نیز ووچر پرفکت مانی را برای شارژ کیف پول خود تهیه
                                نمایید.
                            </p>
                        </div>
                    </div>

                    <div class="payments mb-4">
                        <div class="title mb-4">
                            <h3 class="text-14">شارژ با ووچر پرفکت مانی + 10 درصد شارژ هدیه </h3>
                        </div>

                        <form action="" method="post" class="text-center w-100 ">
                            <div class="direction-colum">
                                <div class="form_item">
                                    <label for="pmv-ev">سریال ووچر</label>
                                    <input placeholder="10 رقمی" id="pmv-ev" autocomplete="off" maxlength="10"
                                        name="pmv-ev" type="text" required="">
                                </div>
                                <div class="form_item mr-20">
                                    <label for="pmv-aev">کد فعال‌سازی</label>
                                    <input placeholder="16 رقمی" class="pmv-recharge-input" id="pmv-aev"
                                        autocomplete="off" maxlength="16" name="pm-aev" type="text" required="">
                                </div>
                            </div>
                            <button type="submit" class="form-btn">ثبت و دریافت شارژ</button>
                        </form>
                    </div>

                    <div>
                        <div class="title title--border-none">
                            <h4 class="text-14 border-b"> سوابق شارژ</h4>
                        </div>
                        <div class="item_box ">
                            <div class="text-center d-flex flex-row justify-content-around">
                                <table class="text-center" style="width:100%">
                                    <tr>
                                        <th class="text-14 text-14--blue">شناسه </th>
                                        <th class="text-14 text-14--blue">مبلغ </th>
                                        <th class="text-14 text-14--blue">جزئیات </th>
                                        <th class="text-14 text-14--blue">تاریخ </th>
                                    </tr>
                                    <tr v-for="tableItem in tableItems">
                                        <td class="text-14 text-14--300">{{ tableItem.id }}</td>
                                        <td class="text-14 text-14--300">{{ tableItem.price }}</td>
                                        <td class="text-14 text-14--300">{{ tableItem.details }}</td>
                                        <td class="text-14 text-14--300">{{ tableItem.data }}</td>
                                    </tr>
                                </table>
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
    name: 'Wallet',

    data() {
        return {
            userName: 'tannaz71',
            avatar: 'T',
            hasBeforeMsgAlert: true,
            hasConfirmationAlert: true,
            walletBalance: '10.000',

            tableItems: [
                {
                    id: '1',
                    price: '25.000',
                    details: 'اشتراک یک ماهه',
                    data: '25خرداد 1403',
                },
                {
                    id: '2',
                    price: '25.000',
                    details: 'اشتراک دو ماهه',
                    data: '28خرداد 1403',
                },
                {
                    id: '3',
                    price: '25.000',
                    details: 'اشتراک سه ماهه',
                    data: '29خرداد 1403',
                },
            ]
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

.item_box {
    display: inline-block;
    width: 100%;
    background: #1c1c22;
    color: #fff;
    padding: 15px;
    border-radius: 10px;
}

.title {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    border-bottom: 2px solid #6898f8;

    &--border-none {
        border: none;
    }
}

.payments {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background-color: #1c1c22;
    box-shadow: 0 4px 0 0 rgba(0, 0, 0, .4);
    padding: 20px;
    border-radius: 5px;
    width: 100%;
}

.form_item {
    display: inline-block;
    width: 48%;
    margin-bottom: 20px;

    @media (max-width:820px) {
        width: 100%;
    }
}

.form_item input {
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
    font-size: 16;
    font-weight: 300;
    text-align: right;
    padding: 10px 12px 10px 0;
}

.mr-20 {
    margin-right: 20px;

    @media (max-width:820px) {
        margin-right: 0;
    }
}

.form-btn {
    display: inline-block;
    background: #6898f8;
    color: #fff;
    padding: 8px 20px;
    border-radius: 35px;
    cursor: pointer;
    border: none;
}

.border-b {
    border-bottom: 2px solid #6898f8;
}

tr {
    border-bottom: 1px solid rgb(48, 47, 47);
}

tr:last-child {
    border: none;
}

td,
th {
    padding: 10px 0;
}

.mb-15 {
    @media (max-width:820px) {
        margin-bottom: 15px;
    }
}

.direction-column {
    @media (max-width:820px) {
        display: flex;
        flex-direction: column;
    }
}
</style>