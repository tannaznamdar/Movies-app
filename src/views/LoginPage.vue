<script setup>
import lock from "@/assets/images/lock.svg";
</script>

<template>
  <div class="pt-150 ">
    <form method="post" action="" class="form_user_dashbord">

      <div class="item_form">
        <label for="user_name">نام کاربری یا پست الکترونیک یا شماره موبایل</label>
        <input type="text" name="username" id="user_name">
      </div>

      <div class="item_form">
        <label for="user_password">رمز عبور شما</label>
        <div class="form-element">
          <div>
            <input v-if="showPassword" type="text" name="password" id="password-field" v-model="password">
            <input v-else type="password" v-model="password">
          </div>

          <div class="put_icon toggle-password" @click="togglePasswordVisibility">
            <font-awesome-icon v-if="!showPassword" icon="eye" />
            <font-awesome-icon v-else icon="eye-slash" />
          </div>
        </div>
      </div>

      <div class="item_form captcha">
        <label for="user_name">کد مقابل را وارد کنید</label>
        <div class="d-flex align-items-center">
          <input class="" type="text" name="captcha" id="captcha">
          <img class="internal-distance-r captcha-border" :src="captcha">
        </div>
      </div>

      <button type="submit" id="dologin" class="blue_btn">
        <router-link class="bottom_link" :to='{ name: "dashboardPageRoute" }'>
          ورود به پنل کاربری
        </router-link>
      </button>

      <div>
        <router-link class="bottom_link" :to='{ name: "forgotPasswordPageRoute" }'>
          <img alt="lock" :src="lock">
          فراموشی رمز عبور
        </router-link>
      </div>

      <button class="gray-btn">
        <router-link class="bottom_link" :to='{ name: "membershipPageRoute" }'>
          عضویت در سایت
        </router-link>
      </button>


    </form>

    <div class="footer_menu">
      <nav class="menu-footer_menu-container">
        <ul id="menu-footer_menu" class="menu">
          <li class="menu-item"> <router-link to="/"> صفحه نخست </router-link></li>
          <li class="menu-item"> <router-link class="active" :to='{ name: "topMoviePageRoute" }'> فیلم ها </router-link>
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
  name: 'login',

  data() {
    return {

      captcha: ' https://zarfilm.com/captcha/?rnd=0.7958875497123545',
      password: '',
      showPassword: false,
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
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

  @media (max-width:449px) {
    width: 360px;
    margin-bottom: 50px;
  }
}

.item_form {
  margin-bottom: 20px;
  position: relative;
  text-align: right;
  width: 100%;
}

.item_form label {
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

.internal-distance-r {
  margin-right: 8px;
}

.captcha-border {
  border-radius: 4px;
}

.blue_btn {
  user-select: none;
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
    font-size: 20px;
  }
}

.put_icon {
  align-content: center;
  align-items: center;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  width: 50px;
  top: 12px;
}

.bottom_form_links {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 30px;
}

.bottom_link {
  text-decoration: none;
  color: #666;
  font-size: 14px;
  font-weight: 500;
}

.gray-btn {
  user-select: none;
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

.form-element {
  position: relative;
}

.form-element .toggle-password {
  position: absolute;
  width: 40px;
  height: 40px;
  top: 10px;
  left: 5px;
  border-radius: 50%;
  text-align: center;
  line-height: 35px;
  font-size: 20px;
  cursor: pointer;
  color: #666;
}

.pt-150 {
  padding-top: 150px;

  @media (max-width:449px) {
    padding-top: 120px;
  }
}
</style>