<script setup>
import '@splidejs/vue-splide/css';
import { RouterView } from 'vue-router'
import BaseLayout from "@/layouts/BaseLayout.vue";
</script>

<template>
  <BaseLayout>
    <router-view :key="$route.fullPath" />
  </BaseLayout>
</template>

<style lang="scss">
* {
  direction: rtl;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: IRANSansWeb;
}

body {
  position: relative;
  height: 100%;
  font-weight: 300;
  font-size: 13px;
  line-height: 1.9;
  background-color: #101014;
}

@font-face {
  font-family: "myFont";
  src: url("assets/fonts/Iranian Sans.ttf") format('ttf');
}

.button {
  user-select: none;
  display: inline-block;
  padding: 8px 14px 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  border-radius: 3px;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  a {
    text-decoration: none;
    color: #fff;
    transition: .3s;
  }

  &--transparent {
    display: inherit;
    background: transparent;
    padding: 0;

    a {
      color: #6898f8;
      font-size: 11px;
    }

    &:is(:hover, :focus) {
      a {
        color: #3777f6;
      }
    }

    &-gray {
      a {
        color: #c6c9cc;
        font-size: 13px;
      }

      &:is(:hover, :focus) {
        a {
          color: #b8daff;
        }
      }
    }
  }

  &-transparent {
    display: inherit;
    background: transparent;
    padding: 0;
    color: #999;
    font-size: 13px;

    &-like {
      i {
        color: #999;
      }

      &:is(:hover, :focus) {
        color: #FF7555;

        i {
          color: #FF7555;
        }
      }
    }

    &-dislike {
      color: #999;

      &:is(:hover, :focus) {
        color: #89d64f;

        i {
          color: #89d64f;
        }
      }
    }
  }

  &--gray {
    backdrop-filter: blur(10px);
    background: rgba(250, 250, 250, .1);
    font-size: 13px;
    line-height: 2;

    &:is(:hover, :focus) {
      background: rgba(250, 250, 250, .125);
    }

    &-like {
      color: #cbcfd3;

      i {
        color: #fff;
      }

      &:is(:hover, :focus) {
        color: #FF7555;

        i {
          color: #FF7555;
        }
      }
    }

    &-dislike {
      color: #cbcfd3;

      &:is(:hover, :focus) {
        color: #89d64f;

        i {
          color: #89d64f;
        }
      }
    }
  }

  &-transparent-orange {
    background: transparent;
    border-color: #FF7555;
    color: #FF7555;
    font-size: 12px;
  }

  &-transparent-green {
    background: transparent;
    border-color: #89d64f;
    color: #89d64f;
    font-size: 12px;
  }

  &-transparent-yellow {
    background: transparent;
    border-color: #ffc107;
    color: #ffc107;
    font-size: 12px;
  }

  &-transparent-white {
    background: transparent;
    border-color: #fff;
    color: #FFF;
    font-size: 11px;
    padding: 5px 10px;
  }

  &--lg {
    color: #fff;
    background-color: #6898f8;
    border-color: #6898f8;
    width: 100%;
    line-height: 2;
  }

  &--medium {
    padding: .6rem 1.25rem;
    line-height: 1.5;
    font-weight: 300;
    color: #fff;
    display: block;

    &-green {
      background-color: #12AE40;
      border-color: #12AE40;

      &:is(:hover, :focus) {
        background-color: #92ca55;
        border-color: #92ca55;
      }
    }

    &-yellow {
      background-color: #ffb231;
      border-color: #ffb231;

      &:is(:hover, :focus) {
        background-color: #f2b551;
        border-color: #f2b551;
      }
    }
  }

  &--login {
    line-height: 2;
    padding: 8px 22px 8px;
    background-color: #1c1c22;

    a {
      color: #8e939b;
    }

    &:is(:hover, :focus) {
      a {
        color: #fff;
      }
    }
  }

  &--download {
    background-color: #89d64f26;
    padding: 1px 14px;
    color: #89d64f;
    font-size: 12px;
    line-height: 2;
  }

  &--outline-blue {
    background-color: transparent;
    background-image: none;
    border-color: #6898f8;
    padding: 12px 14px 12px;

    a {
      color: #6898f8;
    }

    &:is(:hover, :focus) {
      a {
        color: #fff;
      }

      background-color: #6898f8;
      border-color: #6898f8;
    }
  }

  &--outline-green {
    background-color: transparent;
    background-image: none;
    border-color: #89d64f;
    padding: 12px 14px 12px;
    color: #89d64f;

    i {
      color: #89d64f;
    }

    &:is(:hover, :focus) {

      color: #fff;

      i {
        color: #fff;
      }

      background-color: #89d64f;
      border-color: #89d64f;
    }
  }

  &--outline-white {
    background-color: transparent;
    color: #c6c9cc;
    cursor: pointer;
    border: 1px #ddd solid;
    display: inline-block;
    padding: 10px 25px;
    border-radius: 10px;

    &:is(:hover, :focus) {

      color: #6898f8;

      i {
        color: #6898f8;
      }
    }

    @media (max-width:449px) {
      padding: 10px 15px;
      font-size: 12px;
    }
  }

  &-lg {
    width: 100%;
    font-size: 15px;
    padding: 8px 22px 8px;
    line-height: 2;

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

    &--sidebar {
      border: 1px solid transparent;
      background-color: #1c1c22;
      border-color: #1c1c22;

      @media (min-width:450px) and (max-width:820px) {
        width: 48%;
      }

      a {
        color: #8e949a;
        font-size: 14px;
        line-height: 2;
      }

      &:is(:hover, :focus) {
        color: #bec4cb;
        background-color: #292931;
        border-color: #292931;
      }
    }
  }

}

.title {
  font-size: 17px;
  font-family: inherit;
  line-height: 1.3;
  font-weight: 500;
  color: #fff;
}

// dashboard

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

        @media (max-width:820px) {
          font-size: 14px;
        }

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

  @media (max-width:820px) {
          font-size: 13px;
        }
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

.status_message {
    width: 100%;
    padding: 7px 10px;
    margin: 10px 0 0;
    background: #fffbe7;
    color: #8c6d39;
    border: 1px solid #ffebce;
    line-height: 23px;
    border-radius: 5px;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
}

/* For  desktop: */
@media (min-width: 1200px) {

  body,
  html {

    .container,
    .container-lg,
    .container-md,
    .container-sm,
    .container-xl {
      max-width: 1320px;
    }
  }
}

/* For tablets: */
@media (min-width:450px) and (max-width:820px) {}

/* For mobile: */
@media (max-width:449px) {}
</style>
