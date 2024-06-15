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
                                <router-link class="active" :to='{ name: "" }'>
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
                    <div class="before_msg" v-if="hasBeforeMsgAlert">
                        <div class="item_dashboard danger d-flex justify-content-between">
                            <span class="alert"> کاربر گرامی برای بهره‌مندی از همه
                                امکانات سایت لطفاً آدرس ایمیل خود را تایید کنید.
                            </span>
                            <span class="alert-btn">
                                <router-link class="active" :to='{ name: "" }'> ارسال تائیدیه </router-link>
                            </span>
                        </div>
                    </div>

                    <div class="before_msg">
                        <div class="item_dashboard danger" v-if="hasConfirmationAlert">
                            <span class="alert"> لینک تائیدیه به آدرس ایمیل شما ارسال
                                شده است. در صورت عدم دریافت لینک تائیدیه می‌توانید هر 5 دقیقه یکبار برای دریافت لینک
                                اقدام کنید. </span>
                        </div>
                    </div>

                    <div class="mt-4 mb-2">
                        <div class="message_top_info text-14"> <strong>نکته مهم خرید :</strong>
                            <p class="text-14"> - کاربر گرامی پس از پرداخت هزینه صبر کنید تا دوباره از درگاه به همین
                                صفحه بصورت اتومات
                                بازگردانده شوید.</p>
                            <p class="text-14"> - در صورت عدم بازگشت به سایت یا بروز خطا در برگشت به سایت نهایت تا 72
                                ساعت مبلغ عودت
                                داده خواهد شد</p>
                            <p class="text-14"> - برای خرید حتما بدون vpn یا فیلترشکن و از آدرس بدون فیلتر اقدام
                                نمایید.در صورت خرید از
                                آدرس دائمی با فیلترشکن تمام مراحل خرید را انجام دهید..</p>
                            <p class="text-14"> - در صورت وجود اختلال بر روی درگاه پرداخت مستقیم از طریق کیف پول اقدام
                                به پرداخت نمایید.
                            </p>
                            <p class="text-14"> - برای خرید اشتراک با کیف پول، ابتدا کیف پول خود را
                                <router-link class="active" :to='{ name: "walletPageRoute" }'> شارژ کنید </router-link>.
                            </p>
                        </div>
                    </div>

                    <form name="main" method="post" action="" class="subscriptions_list mb-4">
                        <label for="subscriptionID9" data-price="39000" data-price_formated="39,000"
                            data-usd_price="0.65" class="item_subscription active" data-subscriptionid="9"
                            v-for="subscription in subscriptions">
                            <div class="d-flex justify-content-between">
                                <h3 class="text-14"> {{ subscription.time }}</h3>
                                <span class="text-14"> {{ subscription.info }}<small>تومان</small>
                                </span>
                            </div>
                            <h4 class="text-14 text-14--300">{{ subscription.description }}</h4>
                            <input type="radio" name="subscriptionID" id="subscriptionID9" value="9"
                                data-usd_price="0.65" checked="checked">
                        </label>

                        <div class="item_discount mb-4">
                            <input placeholder="کد تخفیف" type="text" name="discount_code" id="discount_code">
                            <button type="button" name="check_discount" id="check_discount" class="check_discount">اعمال
                                تخفیف</button>
                        </div>

                        <div class="chosse_gateway mb-4">
                            <div class="item_gateway">
                                <label class="mb-2">
                                    <input type="radio" name="gateway" value="6" checked="">
                                    <span class="text-14 text-14--300">درگاه پرداخت مستقیم 1 (شامل اندکی کارمزد)</span>
                                </label>
                                <br>
                                <label class="mb-2">
                                    <input type="radio" name="gateway" value="my_wallet">
                                    <span class="text-14 text-14--300">پرداخت با کیف پول (موجودی: تومان -
                                        <router-link class="active text-14 text-14--yellow"
                                            :to='{ name: "walletPageRoute" }'> شارژ کیف
                                            پول </router-link> )
                                    </span>
                                </label class="mb-2">
                                <br>
                                <label>
                                    <input type="radio" name="gateway" value="4">
                                    <span class="text-14 text-14--300"> درگاه ارزی پرفکت مانی(نیاز به حساب پرفکت
                                        مانی)</span>
                                </label>
                                <br>
                            </div>
                        </div>

                        <div class="mb-2">
                            <label for="policy_url_check">
                                <input id="policy_url_check" type="checkbox" value="1" required="required">
                                <span class="text-14">
                                    من
                                    <router-link class="active text-14 text-14--yellow" :to='{ name: "tosPageRoute" }'>
                                        قوانین
                                    </router-link>
                                    سایت را می‌پذیرم
                                </span>
                            </label>
                        </div>
                        <div>
                            <label for="mb-2">
                                <input id="global_user" name="global_user" type="checkbox" value="1">
                                <span class="text-14"> خارج از ایران هستم </span>
                            </label>
                        </div>
                        <br>
                        <div class="text-center">
                            <button type="submit" name="buy_subscription" id="buy_subscription"
                                class="buy_subscription">
                                <img alt="#" :src="shopping">
                                خرید اشتراک
                                <br>
                                <small> <span class="amount">39,000</span> تومان </small>
                            </button>
                        </div>
                    </form>

                    <div class="recent_payments">
                        <div class="title">
                            <h3 class="text-14"> سابقه پرداخت</h3>
                        </div>
                        <div class="item_discount ">
                            <div class="text-center d-flex flex-row justify-content-around">
                                <table class="text-center" style="width:100%">
                                    <tr>
                                        <th class="text-14 text-14--blue">اشتراک: </th>
                                        <th class="text-14 text-14--blue">سطح: </th>
                                        <th class="text-14 text-14--blue">مبلغ: </th>
                                        <th class="text-14 text-14--blue">وضعیت: </th>
                                        <th class="text-14 text-14--blue">تاریخ: </th>
                                    </tr>
                                    <tr v-for="tableItem in tableItems">
                                        <td class="text-14 text-14--300">{{ tableItem.subscribe }}</td>
                                        <td class="text-14 text-14--300">{{ tableItem.level }}</td>
                                        <td class="text-14 text-14--300">{{ tableItem.price }} تومان</td>
                                        <td class="text-14 text-14--300">{{ tableItem.condition }}</td>
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
    name: 'Subscription',

    data() {
        return {
            userName: 'tannaz71',
            avatar: 'T',
            hasBeforeMsgAlert: true,
            hasConfirmationAlert: true,

            subscriptions: [
                {
                    time: ' اشتراک یک ماهه ',
                    info: ' 31 روز - 39,000',
                    description: 'دسترسی به تمامی لینک های دانلود و پخش آنلاین فیلم و سریال ، پشتیبانی از طریق تیکت ، امکان دانلود برای کاربران خارج از کشور',
                },
                {
                    time: ' اشتراک دو ماهه ',
                    info: ' 62 روز - 77,000',
                    description: 'دسترسی به تمامی لینک های دانلود و پخش آنلاین فیلم و سریال ، پشتیبانی از طریق تیکت ، امکان دانلود برای کاربران خارج از کشور',
                },
                {
                    time: ' اشتراک چهار ماهه ',
                    info: ' 120 روز - 152,000',
                    description: 'دسترسی به تمامی لینک های دانلود و پخش آنلاین فیلم و سریال ، پشتیبانی از طریق تیکت ، امکان دانلود برای کاربران خارج از کشور',
                },
                {
                    time: ' اشتراک شش ماهه ',
                    info: ' 180 219,000',
                    description: 'دسترسی به تمامی لینک های دانلود و پخش آنلاین فیلم و سریال ، پشتیبانی از طریق تیکت ، امکان دانلود برای کاربران خارج از کشور',
                },
                {
                    time: ' اشتراک یک ساله ',
                    info: ' 365 روز - 399,000',
                    description: 'دسترسی به تمامی لینک های دانلود و پخش آنلاین فیلم و سریال ، پشتیبانی از طریق تیکت ، امکان دانلود برای کاربران خارج از کشور',
                }
            ],

            tableItems: [
                {
                    subscribe: 'اشتراک یک ماهه',
                    level: 'نقره ای',
                    price: '39,000',
                    condition: ' در انتظار پرداخت ',
                    data: '25خرداد 1403',
                },
                {
                    subscribe: 'اشتراک دو ماهه',
                    level: 'طلایی',
                    price: '50,000',
                    condition: ' در انتظار پرداخت ',
                    data: '29خرداد 1403',
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
    margin-right: 5px;

    a {
        text-decoration: none;
    }

    &--300 {
        font-weight: 300;
    }

    &--yellow {
        color: #ff0;
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

.item_subscription {
    display: inline-block;
    width: 100%;
    background: #1c1c22;
    color: #fff;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    text-align: right;
    transition: .3s;

    &:is(:active, :hover) {
        background-color: #6898f8;
    }
}

.item_subscription input[type="radio"] {
    display: none;
}

input {
    width: auto;
    background: #23232b;
    padding: 15px 10px;
    border-radius: 35px;
    color: #fff;
    border: none;
    outline: none;
    padding: 10px;
}

.item_discount {
    display: inline-block;
    width: 100%;
    background: #1c1c22;
    color: #fff;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 10px;
}

.check_discount {
    display: inline-block;
    background: #6898f8;
    color: #fff;
    line-height: normal;
    padding: 10px 20px;
    border-radius: 35px;
    cursor: pointer;
    margin-right: 15px;
    border: none;
}

.chosse_gateway .item_gateway {
    display: inline-block;
    width: 100%;
    font-size: 85%;
    padding: 10px 0;
    cursor: pointer;
}

.buy_subscription {
    display: inline-block;
    background: #484848;
    color: #fff;
    padding: .5rem 4rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .3rem;
    font-weight: 400;
    text-align: center;
    border: none;
    transition: .3s;

    &:is(:active, :hover) {
        background-color: #6898f8;
    }
}

.title h3 {
    padding: 7px 0;
    border-bottom: 2px solid #6898f8;
    margin-bottom: 25px;
}

.recent_payments {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
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
</style>