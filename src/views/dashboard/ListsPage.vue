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
                                <router-link class="active" :to='{ name: "" }'>
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

                    <div class="mb-3">
                        <div class="message_top_info text-14">
                            <p class="text-14"> شما در این بخش، می‌توانید لیست‌های شخصی خود را بسازید؛ لیست‌هایی که در
                                آن می‌توان، مجموعه‌ای از فیلم‌ها، سریال‌ها و یا هنرمندان را بر اساس شاخص‌های شخصی اضافه
                                نمود.
                            </p>
                        </div>
                    </div>

                    <div class="title_sec">
                        <h2> ساخت لیست جدید </h2>
                    </div>

                    <div class="status_message mb-3 mt-5" v-if="hasTitleNameAlert"> لطفا عنوانی برای لیست خود انتخاب
                        کنید
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
                        <textarea name="message_ticket" id="message_ticket" placeholder="توضیحات " rows="4"
                            data-v-inspector="src/views/dashboard/TicketsPage.vue:186:25" data-v-b22b2aa5="">
                        </textarea>
                    </div>

                    <div class="checkbox_holder mb-3">
                        <label class="text-14 text-14--300" for="private_list">
                            <input type="checkbox" name="private" id="private_list" value="on">لیست را بطور خصوصی فقط
                            برای خودم ایجاد میکنم
                        </label>
                    </div>

                    <div class="form_item">
                        <button class="btnCreateList" name="create_lists" type="submit">ساخت لیست</button>
                    </div>

                    <div>
                        <div class="title_sec mb-5" data-v-3df379c4="">
                            <h2 data-v-inspector="src/views/dashboard/ListsPage.vue:171:25" data-v-3df379c4=""> لیست های
                                شما
                            </h2>
                        </div>

                        <div class="item_box ">
                            <div class="text-center d-flex flex-row justify-content-around">
                                <table class="text-center" style="width:100%">
                                    <tr>
                                        <th class="text-14 text-14--blue">عنوان </th>
                                        <th class="text-14 text-14--blue">نوع </th>
                                        <th class="text-14 text-14--blue">تعداد آیتم </th>
                                        <th class="text-14 text-14--blue">تاریخ ایجاد </th>
                                        <th class="text-14 text-14--blue">عملیات </th>
                                    </tr>
                                    <tr v-for="tableItem in tableItems">
                                        <td class="text-14 text-14--300">{{ tableItem.title }}</td>
                                        <td class="text-14 text-14--300">{{ tableItem.type }}</td>
                                        <td class="text-14 text-14--300">{{ tableItem.numberOfItems }}</td>
                                        <td class="text-14 text-14--300">{{ tableItem.time }}</td>
                                        <td class="text-14 text-14--300">
                                            <router-link class="edit_link" :to='{ name: "" }'> ویرایش اطلاعات
                                            </router-link>
                                            |
                                            <router-link class="edit_link" :to='{ name: "" }'> ویرایش آیتم‌ها
                                            </router-link>
                                            |
                                            <router-link class="remove_link" :to='{ name: "" }'>حذف </router-link>
                                            |
                                            <router-link class="show_link" :to='{ name: "" }'>مشاهده</router-link>
                                        </td>
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
    name: 'Lists',

    data() {
        return {
            userName: 'tannaz71',
            avatar: 'T',
            hasBeforeMsgAlert: true,
            hasConfirmationAlert: true,
            hasTitleNameAlert: true,

            tableItems: [
                {
                    title: 'لیست دلخواه',
                    type: 'سریال',
                    numberOfItems: 1,
                    time: '25خرداد 1403',
                },
                {
                    title: 'لیست درام',
                    type: 'فیلم',
                    numberOfItems: 2,
                    time: '20خرداد 1403',
                },
            ]
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

.form_item {
    display: inline-block;
    width: 100%;
    margin-bottom: 20px;
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
    font-size: 16px;
    font-weight: 200;
    text-align: right;
    padding: 10px 12px 10px 0;
}

.mr-20 {
    margin-right: 20px;
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
    color: #4179e9;
    border: 1px solid #ffebce;
    line-height: 23px;
    border-radius: 5px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
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

.btnCreateList {
    float: left;
    padding: 10px 20px;
    border-radius: 35px;
    background: #6898f8;
    color: #fff;
    border: none;
}

.edit_link {
    color: #2b9fdc;
    margin: 0 5px;
    font-size: 14px;
    font-weight: 400;
}

.remove_link {
    color: #e00000;
    margin: 0 5px;
    font-size: 14px;
    font-weight: 400;
}

.show_link {
    color: #1cc09f;
    margin: 0 5px;
    font-size: 14px;
    font-weight: 400;
}
</style>