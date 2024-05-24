<template>
    <div class="pt-150 ">
        <form method="post" action="" class="form_user_dashbord">

            <div class="item_form">
                <label for="email"> پست الکترونیک </label>
                <input type="email" name="email" id="email">
            </div>

            <button type="submit" class="blue_btn">
                <a href="#">
                    فراموشی رمز عبور
                </a>
            </button>

            <button class="gray-btn">
                <router-link :to='{ name: "loginPageRoute" }'> ورود به پنل کاربری </router-link>
            </button>
        </form>

        <div class="footer_menu">
            <nav class="menu-footer_menu-container">
                <ul id="menu-footer_menu" class="menu">
                    <li class="menu-item"> <router-link to="/"> صفحه نخست </router-link></li>
                    <li class="menu-item"> <router-link class="active" :to='{ name: "topMoviePageRoute" }'> فیلم ها
                        </router-link>
                    </li>
                    <li class="menu-item"> <router-link class="active" :to='{ name: "updateSeriesPageRoute" }'> سریال ها
                        </router-link></li>
                </ul>
            </nav>
        </div>
        <div class="bottom_line"></div>
    </div>
</template>

<script>

export default {
    name: 'ForgotPassword',

    data() {
        return {

        };
    },

}
</script>

<style scoped>
.form_user_dashbord {
    background-color: #23232b;
    border-radius: 20px;
    box-shadow: 0 0 100px 0 rgba(0, 0, 0, .25);
    margin-bottom: 70px;
    padding: 25px;
    width: 430px;
    margin-right: auto;
    margin-left: auto;
}

.item_form {
    margin-bottom: 20px;
    position: relative;
    text-align: right;
    width: 100%;
}

.item_form label {
    background: #1e1e1e;
    line-height: 0;
    padding: 3px 10px 0;
    z-index: 5;
    display: inline-block;
    color: #666;
    font-size: 16px;
    font-weight: 500;
}

input {
    background: #1e1e1e;
    border: 3px solid #23232b;
    border-radius: 12px;
    padding: 15px;
    width: 100%;
    touch-action: manipulation;
    overflow: visible;
    color: inherit;
    font: inherit;
    margin: 0;
    color: #fff;
}

.blue_btn {
    margin-bottom: 10px;
    background: #6898f8;
    border: 0;
    border-radius: 12px;
    font-size: 20px;
    font-weight: 800;
    margin-top: 20px;
    outline: none;
    padding: 13px;
    position: relative;
    transition: all .3s ease-in-out;
    width: 100%;

    a {
        text-decoration: none;
        color: #fff;
    }
}

.gray-btn {
    background: #313136;
    border-radius: 12px;
    display: inline-block;
    padding: 13px;
    text-align: center;
    width: 100%;
    margin-top: 20px;
    border: none;

    a {
        text-decoration: none;
        color: #6898f8;
        font-size: 20px;
        font-weight: 800;
    }
}

ul#menu-footer_menu {
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    list-style: none;
    flex-direction: row;
    display: flex;
}

.menu-item {
    a {
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        color: #666;
        font-weight: 500;
        margin-right: 15px;
        margin-left: 15px;

        &:is(:hover, :focus) {
            color: #6898f8;
        }
    }
}

.bottom_line {
    background: #6898f8;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    height: 5px;
    width: 80%;
    margin: 0 auto;
}

.footer_menu {
    margin-bottom: 40px;
}

.pt-150 {
    padding-top: 150px;
}
</style>