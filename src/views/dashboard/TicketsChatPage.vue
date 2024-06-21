<script setup>
import house from '@/assets/images/house.svg'
import subscription from '@/assets/images/subscription.svg'
import wallet from '@/assets/images/wallet.svg'
import headphones from '@/assets/images/headphones.svg'
import list from '@/assets/images/list.svg'
import shopping from '@/assets/images/shopping.svg'
import arrowLeft from '@/assets/images/arrow-left.svg'
import comments from '@/assets/images/comments.svg'
import userImg from '@/assets/images/user-img.jpg'
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

                    <div class="before_msg mb-5">
                        <div class="item_dashboard danger" v-if="hasConfirmationAlert">
                            <span class="alert"> لینک تائیدیه به آدرس ایمیل شما ارسال
                                شده است. در صورت عدم دریافت لینک تائیدیه می‌توانید هر 5 دقیقه یکبار برای دریافت لینک
                                اقدام کنید. </span>
                        </div>
                    </div>

                    <div class="chat d-flex flex-column" v-for="tichet in tichets">
                        <div class="d-flex gap-3">
                            <div class="author-info">
                                <div class="author-img">
                                    <img alt="user" :src="userImg">
                                </div>
                                <span class="text-14 text-14--300">{{ tichet.userName }} </span>
                            </div>
                            <div class="inner_ticket_item">
                                <div class="author-text">
                                    <p class="text-14 text-14--300"> {{ tichet.userMessage }} </p>
                                    <span class="time-ago"> {{ tichet.userMessageTime }} </span>
                                    <div>
                                        <hr v-if="tichet.hasUserAttachments">
                                        <div class="ticket-attachments" v-if="tichet.hasUserAttachments">
                                            <font-awesome-icon icon="file" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex flex-row-reverse left-float gap-3" v-if="tichet.hasAnswer">
                            <div class="author-info">
                                <div class="author-img">
                                    <img alt="user" :src="userImg">
                                </div>
                                <span class="text-14 text-14--300"> {{ tichet.managerName }} </span>
                            </div>
                            <div class="inner_ticket_item">
                                <div class="author-text">
                                    <p class="text-14 text-14--300"> {{ tichet.managerMessage }} </p>
                                    <span class="time-ago"> {{ tichet.managerMessageTime }}</span>
                                    <div>
                                        <hr v-if="tichet.hasManagerAttachments">
                                        <div class="ticket-attachments" v-if="tichet.hasManagerAttachments">
                                            <font-awesome-icon icon="file" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="form_item">
                        <label for="message_ticket">پیام شما</label>
                        <textarea name="message_ticket" id="message_ticket" placeholder="پیام شما" rows="5"></textarea>
                    </div>

                    <div class="d-flex justify-content-between flex-row-reverse align-items-center">
                        <div class="form_item">
                            <button class="btn-send-ticket" name="create_tickets" type="submit">ارسال تیکت</button>
                        </div>
                        <div>
                            <input type="file" name="attachment" id="attachment" accept="image/jpeg, image/png">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TicketsChat',

    data() {
        return {
            userName: 'tannaz71',
            avatar: 'T',
            hasBeforeMsgAlert: true,
            hasConfirmationAlert: true,

            tichets: [
                {
                    userName: 'tannaz',
                    userMessage: ' با سلام در دانلود فیلم به مشکل خوردم لطفا راهنمایی کنید',
                    userMessageTime: '14 ساعت قبل',
                    hasUserAttachments: true,
                    hasAnswer: true,
                    managerName: 'مدیریت',
                    managerMessage: 'برای دانلود از سایت میبایست از اپلیکیشن های مدیریت دانلود استفاده کنید و بدون فیلترشکن وارد سایت شوید ، به همین منظور کافیست بدون فیلترشکن وارد سایت شوید لینک دانلود فیلم مورد نظر خود را از سایت کپی نمایید و در دانلود منیجر های معرفی شده وارد نمایید . سپس بر روی گزینه start کلیک کنید تا دانلود شما شروع شود',
                    managerMessageTime: '13 ساعت قبل',
                    hasManagerAttachments: true,
                },
                {
                    userName: 'tannaz',
                    userMessage: 'ممنونم',
                    userMessageTime: '10 ساعت قبل',
                    hasUserAttachments: false,
                    hasAnswer: true,
                    managerName: 'مدیریت',
                    managerMessage: 'خواهش میکنم',
                    managerMessageTime: '9 ساعت قبل',
                    hasManagerAttachments: false,
                }
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

    &--300 {
        font-weight: 300;
        font-size: 14px;
    }
}

.time-ago {
    font-size: 12px;
    font-weight: 200;
    color: #acb3bf;
}

.inner_ticket_item {
    position: relative;
    border-radius: 10px;
    width: auto;
    background: #1c1c22;
    padding: 15px 20px;
    position: relative;
    margin-bottom: 20px;
    max-width: 86%;
}

.left-float {
    float: left;
}

.right-float {
    float: right;
}

.author-img {
    color: #fff;
    display: block;
    width: 48px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    margin-bottom: 5px;
    border-radius: 10px;

    img {
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        border-radius: 10px;
    }
}

.ticket-attachments {
    font-size: 14px;
    color: #acb3bf;
}

.form_item label {
    display: inline-block;
    width: 100%;
    font-size: 16px;
    font-weight: 300;
    text-align: right;
    padding: 10px 12px 10px 0;
}

.form_item textarea {
    width: 100%;
    background: #1c1c22;
    padding: 15px 10px;
    border-radius: 35px;
    color: #fff;
    outline: none;
    border: none;
}

.btn-send-ticket {
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