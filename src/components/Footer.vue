<template>

    <div class="wrapper">
        <footer class="footer">
            <div class="container bv-example-row">
                <div class="row  mb-5">

                    <div class="col-lg-9 col-md-7 col-12">
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
                                                <span class="text-gray">مورد نیاز</span>
                                                <h6>نرم‌افزار‌های پخش فیلم</h6>
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
                                                <span class="text-gray">مورد نیاز</span>
                                                <h6>نرم‌افزار‌های پخش فیلم</h6>
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
                                                <h6>نرم‌افزار‌های پخش فیلم</h6>
                                            </a>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="col-lg-3 col-md-5 col-12">

                        <button
                            class="btn btn-lg mb-2 btn-lg--instagram d-flex justify-content-between align-items-center">
                            <div>
                                <font-awesome-icon icon="instagram" />
                                <router-link class="active" to='/'> Instagram </router-link>
                            </div>
                            <font-awesome-icon class="angle-left-icon" icon="angle-left" />
                        </button>

                        <button class="btn btn-lg btn-lg--telegram d-flex justify-content-between align-items-center">
                            <div>
                                <font-awesome-icon icon="telegram" />
                                <router-link class="active" to='/'> Telegram </router-link>
                            </div>
                            <font-awesome-icon class="angle-left-icon" icon="angle-left" />
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
                                <i></i>
                                <span> اپلیکیشن آپ تی وی </span>
                            </div>

                            <span class="btn btn--download"> دانلود </span>
                        </a>
                    </div>

                </div>

                <p class="copyright ">استفاده از محتوا و لینک های دانلود آپ تی وی، مجاز نمی باشد. تمامی حقوق این سایت به
                    نام آپ تی وی محفوظ است.</p>

            </div>
        </footer>

    </div>

</template>


<script>

import logo from '../assets/images/logo.jpg'
export default {
    name: 'footer',
    compatConfig: { MODE: 3 },

    data() {
        return {
            logo,
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
// .wrapper{
//     min-height:100%;
// 	    position:relative;
// }

// .footer{
// 	width:100%;
// 	position:absolute;
// 	bottom:0;
// 	left:0;
// }

.main-footer-help-section {
    background-color: #1c1c22;
    padding: 30px;
}

.btn {
    background-color: #1c1c22;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 7px 22px 8px;
    font-size: 14px;
    line-height: 2;
    border-radius: 3px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    a {
        text-decoration: none;
        color: #fff;
        transition: .3s;
        font-size: 14px;
    }

    &--download {
        background-color: #89d64f26;
        padding: 2px 11px 2px;
        color: #89d64f;
        text-decoration: none;
    }
}

.btn-lg {
    width: 100%;

    &--instagram {
        background: linear-gradient(145deg, #FA9F6F, #FA697C);
        box-shadow: 0 3px 20px rgba(250, 123, 119, .3);

        i {
            color: #fff;
        }
    }

    &--telegram {
        background: linear-gradient(145deg, #96D5F5, #5EBAE8);
        box-shadow: 0 3px 20px rgba(142, 209, 243, .35);

        i {
            color: #fff;
        }
    }
}

.main-footer-application {
    text-decoration: none;
    color: #89d64f;
    font-size: 14px;
}

.angle-left-icon {
    font-size: 14px;
    margin-right: 3px;
    font-weight: 900;
    transition: .3s;
    color: #fff;
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

                &:is(:hover, :focus) {
                    color: #FA697C;
                }
            }
        }
    }

}

.copyright {
    color: #9ba1a6;
    font-size: 14px;
    border-top: 1px solid #4b515a;
    margin-top: 20px;
    padding-top: 20px;
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


.text-gray {
    color: #9ba1a6;
    font-size: 12px;
}

.icon-size{
    font-size: 22px;
}

.footer-item {
    text-decoration: none;

    h6 {
        color: #fff;
    }
}
</style>