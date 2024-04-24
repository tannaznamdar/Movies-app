<template>

    <div class="wrapper">
        <footer class="footer pt-5">
            <div class="container bv-example-row">
                <div class="row  mb-5">

                    <div class="col-lg-9">
                        <div class="main-footer-help-section">
                            <div class="row">
                                <div class="col-4">
                                    <div class="row">

                                        <div class="col-auto">
                                            <div class="badge badge--yellow">
                                                <font-awesome-icon class="icon-size" icon="gear" />
                                            </div>
                                        </div>

                                        <div class="col pt-half">
                                            <a class="footer-item" href="#">
                                                <span class="text-gray">مورد نیاز </span>
                                                <h6>نرم‌افزار‌های پخش فیلم <font-awesome-icon class="text-gray" icon="arrow-left" /></h6>
                                            </a>
                                        </div>

                                    </div>
                                </div>

                                <div class="col-4">
                                    <div class="row">

                                        <div class="col-auto">
                                            <div class="badge badge--blue">
                                                <font-awesome-icon class="icon-size" icon="volume-high" />
                                            </div>
                                        </div>

                                        <div class="col pt-half">
                                            <a class="footer-item" href="#">
                                                <span class="text-gray">پخش دوبله  </span>
                                                <h6>راهنمای تنظیم صدا <font-awesome-icon class="text-gray" icon="arrow-left" /></h6>
                                            </a>
                                        </div>

                                    </div>
                                </div>

                                <div class="col-4">
                                    <div class="row">

                                        <div class="col-auto">
                                            <div class="badge badge--green">
                                                <font-awesome-icon class="icon-size" icon="film" />
                                            </div>
                                        </div>

                                        <div class="col pt-half">
                                            <a class="footer-item" href="#">
                                                <span class="text-gray">مورد نیاز</span>
                                                <h6> راهنمای فرمت ها  <font-awesome-icon class="text-gray" icon="arrow-left" /></h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3">

                        <button
                            class="button button-lg mb-4 button-lg--instagram d-flex justify-content-between align-items-center">
                            <div>
                                <img class="internal-distance" alt="logo" :src="instagramIcon">
                                <router-link class="active" to='/'> صفحه اینستاگرام </router-link>
                            </div>
                            <div class="icon-background">
                                <font-awesome-icon class="angle-left-icon" icon="angle-left" />
                            </div>
                        </button>

                        <button class="button button-lg button-lg--telegram d-flex justify-content-between align-items-center">
                            <div>
                                <img class="internal-distance" alt="logo" :src="telegramIcon">
                                <router-link class="active" to='/'> کانال تلگرام </router-link>
                            </div>
                            <div class="icon-background">
                                <font-awesome-icon class="angle-left-icon" icon="angle-left" />
                            </div>
                        </button>

                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-1">
                        <figure class="logo-img">
                            <router-link to="/"> <img alt="logo" :src="logo"> </router-link>
                        </figure>
                    </div>

                    <div class="col-lg-8">
                        <div class="footer-navbar">
                            <ul>
                                <li v-for="genre in genres">
                                    <router-link class="active"
                                        :to='{ name: "moviesGenrePageRoute", params: { genre: genre.slug } }'>
                                        {{ genre.title }} </router-link>
                                </li>
                                <li v-for="country in countries">
                                    <router-link class="active"
                                        :to='{ name: "countryMoviePageRoute", params: { country: country.slug } }'>
                                        {{ country.title }}</router-link>
                                </li>
                                <li><router-link class="active" :to='{ name: "animationPageRoute" }'> انیمیشن
                                    </router-link></li>
                                <li><router-link class="active" :to='{ name: "loginPageRoute" }'>ورود به حساب
                                    </router-link> </li>
                                <li><router-link class="active" :to='{ name: "persianDubPageRoute" }'> دوبله فارسی
                                    </router-link></li>
                                <li> <router-link class="active" :to='{ name: "contactUsPageRoute" }'> ارتباط با ما
                                    </router-link></li>
                            </ul>
                        </div>

                    </div>

                    <div class="col-lg-3">
                        <a class="main-footer-application d-flex justify-content-between" href="#">
                            <div>
                                <font-awesome-icon class="gear-icon" icon="gear" />
                                <span> اپلیکیشن آپ تی وی </span>
                            </div>

                            <span class="button button--download"> دانلود </span>
                        </a>
                    </div>
                </div>

                    <p class="copyright">استفاده از محتوا و لینک های دانلود آپ تی وی، مجاز نمی باشد. تمامی حقوق این سایت به
                    نام آپ تی وی محفوظ است.</p>
                
            </div>
        </footer>
    </div>

</template>


<script>

import logo from '@/assets/images/logo.jpg'
import telegramIcon from '@/assets/images/file-icons--telegram.svg'
import instagramIcon from '@/assets/images/bi--instagram.svg'

export default {
    name: 'footer',

    data() {
        return {
            logo,
            telegramIcon,
            instagramIcon,

            genres: [
                {
                    title: 'ژانر اکشن',
                    slug: 'action'
                }, {
                    title: ' ژانر عاشقانه',
                    slug: 'romance'
                }, {
                    title: ' ژانر خانوادگی',
                    slug: 'family'
                }, {
                    title: ' ژانر ترسناک',
                    slug: 'horror'
                }, {
                    title: ' ژانر درام',
                    slug: 'drama'
                }, {
                    title: ' ژانر جنایی',
                    slug: 'criminal'
                },
            ],

            countries: [
                {
                    title: 'فیلم ایرانی ',
                    slug: 'iran'
                },
                {
                    title: 'فیلم ترکی ',
                    slug: 'turkey'
                },
                {
                    title: 'فیلم خارجی ',
                    slug: 'international'
                }
            ],

        }
    }
}

</script>




<style scoped lang="scss">
.footer{
    background-color: #16161b;
}

.main-footer-help-section {
    background-color: #23232b;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, .13) !important;
}

.badge{
    width: 62px;
    display: inline-block;
    height: 62px;
    text-align: center;
    line-height: 62px;
    font-size: 17px;
    border-radius: 5px;

    &--yellow{
        color: #ffc107;
    background-color: #ffc10729;
    }

    &--blue{
        color: #6898f8;
    background-color: #6898f824;
    }

    &--green{
        color: #89d64f;
        background-color: #89d64f26;
    }
}

.footer-item {
    text-decoration: none;

    h6 {
        color: #fff;
    }
}

.text-gray {
    color: #9ba1a6;
    font-size: 12px;
}

.icon-size{
    font-size: 22px;
}

.logo-img {
    padding: 0;
    margin: 0;

    img {
        width: 96px;
        height: 45px;
    }
}

.footer-navbar {
    margin-right: 30px;

    ul {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        display: flex;
        list-style-type: none;
        padding: 0;
        margin: 0;

        li {
            margin-left: 25px;
            padding: 0 0 15px;

            a {
                text-decoration: none;
                color: #c6c9cc;
                font-size: 14px;
                font-weight: 300;

                &:is(:hover, :focus) {
                    color: #b8daff;
                }
            }
        }
    }
}

.main-footer-application {
    text-decoration: none;
    color: #89d64f;
    font-size: 14px;
    font-weight: 500;
}

.gear-icon{
    font-size: 20px;
    margin-left: 5px;
    color: #89d64f ;
}

.icon-background{
    background: rgba(255, 255, 255, .15);
    width: 22px;
    height: 22px;
    border-radius:100%;
    padding: 3px 7px 0 0;
}

.angle-left-icon {
    font-size: 14px;
    color: #fff;
    display: block;
}

.internal-distance{
    margin-left: 5px;
}

.copyright {
    color: #c6c9cc;
    font-size: 14px;
    border-top: 1px solid #4b515a;
    margin-top: 20px;
    padding-top: 20px;
    padding-bottom: 30px;
}

</style>