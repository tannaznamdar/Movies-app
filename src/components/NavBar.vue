<template>

  <div class="wrapper">
    <header class="header responsive-header-lg ">
      <div class="container bv-example-row">
        <div class="row align-items-center">

          <div class="col-1">
            <figure>
              <router-link to="/"> <img alt="logo" :src="logo"> </router-link>
            </figure>
          </div>

          <div class="col-8">
            <nav class="menu-bar">
              <ul>
                <li>
                  <router-link class="active" to="/"> </router-link>
                </li>

                <li class="menu-has-childern">
                  <router-link class="active" to="/"> فیلم خارجی <span><i class="fas fa-angle-down"></i></span>
                  </router-link>
                  <div class="dropdown-menu">
                    <ul>
                      <li>
                        <router-link class="active" :to='{ name: "actionMoviePageRoute" }'> اکشن </router-link>
                      </li>
                      <li>
                        <router-link class="active" :to='{ name: "romanceMoviePageRoute" }'> عاشقانه </router-link>
                      </li>
                      <li>
                        <router-link class="active" :to='{ name: "familyMoviePageRoute" }'> خانوادگی </router-link>
                      </li>
                      <li>
                        <router-link class="active" :to='{ name: "familyMoviePageRoute" }'> ترسناک </router-link>
                      </li>
                      <li>
                        <router-link class="active" :to='{ name: "familyMoviePageRoute" }'> هندی </router-link>
                      </li>
                      <li>
                        <router-link class="active" :to='{ name: "familyMoviePageRoute" }'> خانوادگی </router-link>
                      </li>
                      <li>
                        <router-link class="active" :to='{ name: "familyMoviePageRoute" }'> جنگی </router-link>
                      </li>
                      <li>
                        <router-link class="active" :to='{ name: "familyMoviePageRoute" }'> درام </router-link>
                      </li>
                      <li>
                        <router-link class="active" :to='{ name: "familyMoviePageRoute" }'> جنایی </router-link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <router-link class="active" :to='{ name: "iranianMoviePageRoute" }'> فیلم ایرانی </router-link>
                </li>

                <li class="menu-has-childern">
                  <router-link class="active" to="/" > سریال <span><i
                        class="fas fa-angle-down"></i></span>
                  </router-link>

                  <div class="dropdown-menu">
                    <ul>
                      <li>
                        <router-link class="active" :to='{ name: "turkiyeMoviePageRoute" }'> سریال ترکی </router-link>
                      </li>
                      <li>
                        <router-link class="active" :to='{ name: "turkiyeMoviePageRoute" }'> سریال خارجی </router-link>
                      </li>
                      <li>
                        <router-link class="active" :to='{ name: "koreanMoviePageRoute" }'> سریال کره ای </router-link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                    <router-link class="active" :to='{name:"animationPageRoute"}'> انیمیشن </router-link>
                </li>
                <li>
                    <router-link class="active" :to='{name:"PersianDubPageRoute"}'> دوبله فارسی </router-link>
                </li>

                <li class="menu-has-childern">
                  <router-link class="active" to="/" > سایر <span><i
                        class="fas fa-angle-down"></i></span>
                  </router-link>

                  <div class="dropdown-menu">
                    <ul>
                      <li>
                        <router-link class="active" :to='{ name: "turkiyeMoviePageRoute" }'> 250 فیلم برتر </router-link>
                      </li>
                      <li>
                        <router-link class="active" :to='{ name: "turkiyeMoviePageRoute" }'>  اسکار 2023 </router-link>
                      </li>
                      <li>
                        <router-link class="active" :to='{ name: "turkiyeMoviePageRoute" }'> به زودی </router-link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                    <router-link class="active" :to='{name:"JobPageRoute"}'> استخدام </router-link>
                </li>
                <li>
                    <router-link class="active" :to='{name:"contactUsPageRoute"}'> ارتباط با ما </router-link>
                </li>

              </ul>
            </nav>
          </div>


          <div class="col-3">
            <div>
                <form>
                  <div class="search-box">
                      <input class="search-input" type="search" name="search" autocomplete="off"
                        placeholder="کلمه مورد نظر...">
                        <button class="search-btn" type="submit"><a href="#"><i
                          class="fa-sharp fa-solid fa-magnifying-glass"></i></a></button>
                  </div>

                </form>

              </div>
          </div>

        </div>
      </div>
    </header>

  </div>

</template>


<script>



import logo from '../assets/images/LogoFormatForMovies.png'
export default {
  compatConfig: { MODE: 3 },
  name: 'navbar',
  data(){
    return {
      logo
    }
  },
}
</script>



<style scoped>
.header {
  margin-top: 35px;
  margin-bottom: 60px;

  @media (max-width:820px) {
    margin-bottom: 30px;
    margin-top: 20px;
  }
}

.menu-bar {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 18px;
  float: right;
  align-items: center;
  padding: 0;
  margin: 0;

  ul {
    list-style-type: none;
    display: flex;
    gap: 30px;
    padding: 0;
    margin: 0;

    li {
      position: relative;
      /*in nemizare vaghti hover mishe tekon bokhoran*/

      a {
        text-decoration: none;
        color: white;
        display: block;
        transition: .3s;
      }

      &:is(:hover, :focus) {
        &>a {
          color: #FF0000;
        }
      }
    }
  }
}

.menu-has-childern {
  position: relative;
  /*in nemizare vaghti hover mishe tekon bokhoran*/

  i {
    margin-left: 5px;
    font-weight: 900;
    transition: .3s;
  }

  &:is(:hover, :focus) {
    &>a {
      color: #FF0000;

      i {
        color: #FF0000;
        transform: rotatex(180deg);
      }
    }
  }
}

.dropdown-menu {
  display: none;

  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
    background-color: #212121;
    border-radius: 6px;
    width: 200px;

    li {
      padding: 0;
      margin: 0;

      a {
        background-color: #212121;
      }
    }
  }
}

.menu-has-childern:hover .dropdown-menu {
  display: block;
  position: absolute;
  left: 0;
  top: 100%;
  border: none;
  z-index: 2;
  background-color: transparent;
  text-align: left;
  width: 100%;
}


/*mobile-menu*/

.mobile-menu-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  height: 100%;
  z-index: 100;
  padding: 40px;
  display: none;

  @media (min-width:450px) and (max-width:820px) {
    width: 50%;
  }
}

.mobile-menu {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 0;
    margin: 0;

    li {
      position: relative;
      /*in nemizare vaghti hover mishe tekon bokhoran*/

      a {
        text-decoration: none;
        color: white;
        display: block;
      }

      &:is(:hover, :focus) {
        &>a {
          color: #FF0000;
          transition: 0.2s;
        }
      }
    }
  }
}

.mobile-menu-has-childern {
  position: relative;

  i {
    margin-left: 5px;
    font-weight: 900;
  }

  &:is(:hover, :focus) {
    &>a {
      color: #FF0000;

      i {
        color: #FF0000;
        transform: rotateY(180deg);
        transition: 0.2s;
      }
    }
  }
}

.mobile-dropdown-menu {
  display: none;

  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
    background-color: #212121;
    border-radius: 6px;

    li {
      padding: 0;
      margin: 0;

      a {
        background-color: #212121;
      }
    }
  }
}

.mobile-menu-has-childern:hover .mobile-dropdown-menu {
  display: block;
  position: absolute;
  left: 50%;
  top: 40%;
  border: none;
  z-index: 2;
  background-color: transparent;
  text-align: left;
  width: 100%;

  @media (min-width:450px) and (max-width:820px) {
    left: 35%;
  }
}


.search-box {
  width: 80%;
  background-color: #ECEFF1;
  display: flex;
  flex-direction: row;
  border-radius: 30px;
  justify-content: space-between;
  align-items: center;
  padding: 8px 15px 8px 15px;

  @media(max-width:820px) {
    width: 100%;
  }

  @media (max-width:449px) {
    padding: 5px 11px 5px 11px;
  }
}

.search-input {
  background: transparent;
  border: none;
  font-size: 14px;
  outline: none;
  width: 100%;
}

.search-btn {
  background: transparent;
  border: none;

  a {
    color: black;
    background: transparent;

    i {
      background: transparent;
      margin-right: 10px;
    }

    &:is(:hover, :focus) {
      & {
        color: black;
      }
    }
  }
}

/*login*/

.login {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  a {
    text-decoration: none;
    color: white;
    display: block;
    text-align: center;
    transition: .3s;

    i {
      margin-left: 10px;
      font-weight: 900;
      transition: .3s;
    }

    @media (max-width:449px) {
      font-size: 14px;

      i {
        font-size: 14px;
      }
    }
  }

  &:is(:hover, :focus) {
    &>a {
      color: #FF0000;

      i {
        color: #FF0000;
      }
    }
  }
}

.responsive-header {
  display: none;
}

.responsive-header {
  @media (max-width:820px) {
    display: block;
  }
}


.responsive-header-lg {
  display: block;
}

.responsive-header-lg {
  @media (max-width:820px) {
    display: none;
  }
}

.white-color{
  color: white;
}

</style>