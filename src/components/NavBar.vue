<template>

  <div class="wrapper">
    <header class="header">
      <div class="container bv-example-row">
        <div class="row align-items-center">

          <div class="col-1">
            <figure class="logo-img">
              <router-link to="/"> <img  alt="logo" :src="logo"> </router-link>
            </figure>
          </div>

          <div class="col-7">
            <nav class="menu-bar">
              <ul>
                <li class="menu-has-childern">
                  <router-link class="active" to="/"> ژانر <font-awesome-icon class="angle-down-icon" icon="angle-down" />
                  </router-link>
                  <div class="dropdown-menu">
                    <ul>
                      <li v-for="genre in genres">
                        <router-link class="active" :to='{ name: "moviesGenrePageRoute", params:{genre:genre.slug} }'> {{genre.title}} </router-link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li class="menu-has-childern">
                  <router-link class="active" to="/"> فیلم <span><font-awesome-icon class="angle-down-icon" icon="angle-down" /></span>
                  </router-link>
                  <div class="dropdown-menu">
                    <ul>
                      <li>
                        <router-link class="active" :to='{ name: "countryMoviePageRoute" ,params:{country:"iran"} }'> فیلم ایرانی </router-link>
                      </li>
                      <li>
                        <router-link class="active" :to='{ name: "countryMoviePageRoute" ,params:{country:"turkey"}}'> فیلم ترکی </router-link>
                      </li>
                      <li>
                        <router-link class="active" :to='{ name: "countryMoviePageRoute" ,params:{country:"international"}}'> فیلم خارجی </router-link>
                      </li>
                    </ul>
                  </div>
                </li>
                

                <li class="menu-has-childern">
                  <router-link class="active" to="/" > سریال <span><font-awesome-icon class="angle-down-icon" icon="angle-down" /></span>
                  </router-link>

                  <div class="dropdown-menu">
                    <ul>
                      <li>
                        <router-link class="active" :to='{ name: "countrySeriesPageRoute" ,params:{country:"turkey"}}'> سریال ترکی </router-link>
                      </li>
                      <li>
                        <router-link class="active" :to='{ name: "countrySeriesPageRoute" ,params:{country:"Korean"}}'> سریال کره ای </router-link>
                      </li>
                      <li>
                        <router-link class="active" :to='{ name: "countrySeriesPageRoute" ,params:{country:"international"} }'> سریال خارجی </router-link>
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
                  <router-link class="active" to="/" > سایر <span><font-awesome-icon class="angle-down-icon" icon="angle-down" /></span>
                  </router-link>

                  <div class="dropdown-menu">
                    <ul>
                      <li>
                        <router-link class="active" :to='{ name: "categoryPageRoute" ,params:{content:"imdb-250"} }'> 250 فیلم برتر </router-link>
                      </li>
                      <li>
                        <router-link class="active" :to='{ name: "categoryPageRoute" ,params:{content:"oscar2023"} }'> 2023 اسکار  </router-link>
                      </li>
                      <li>
                        <router-link class="active" :to='{ name: "categoryPageRoute" ,params:{content:"ComingSoon"} }'> به زودی </router-link>
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
                        <button class="search-btn" type="submit"><a href="#"><font-awesome-icon icon="magnifying-glass" /></a></button>
                  </div>
                </form>
              </div>
          </div>

          
          <div class="col-1">   
              <button class="login-btn">
                  <router-link :to='{ name: "loginPageRoute" }'> ورود </router-link>
              </button>
          </div>

        </div>
      </div>
    </header>

  </div>

</template>


<script>

import logo from '../assets/images/logo.jpg'
export default {
  name: 'navbar',
  compatConfig: { MODE: 3 },
  data(){
    return {
      logo,
      genres:[
        {
          title:'اکشن',
          slug:'action'
        },        {
          title:'عاشقانه',
          slug:'romance'
        },        {
          title:'خانوادگی',
          slug:'family'
        },        {
          title:'ترسناک',
          slug:'horror'
        },        {
          title:'درام',
          slug:'drama'
        },        {
          title:'جنایی',
          slug:'criminal'
        },
      ]
    }
  },
}
</script>



<style scoped>

.logo-img{
  padding: 0;
  margin: 0;
  img{
    width: 96px;
    height: 45px;
  }
}

.header {
  margin-top: 15px;
  margin-bottom: 15px;

  @media (max-width:820px) {
    margin-bottom: 30px;
    margin-top: 20px;
  }
}

.menu-bar {
  width: 100%;
  display: flex;
  flex-direction: row;
  float: right;
  align-items: center;
  padding: 0;
  margin: 0;

  ul {
    list-style-type: none;
    display: flex;
    padding: 0;
    margin: 0;

    li {
      position: relative;
      /*in nemizare vaghti hover mishe tekon bokhoran*/
      margin-left: 25px;
      margin-right: 5px;

      a {
        text-decoration: none;
        color: #c6c9cc;
        display: block;
        transition: .3s;
        font-weight: 400;
        font-size: 14px;
      }

      &:is(:hover, :focus) {
        &>a {
          color: #fff;
          font-family: 400;
        }
      }
    }
  }
}

.menu-has-childern {
  position: relative;
}

.angle-down-icon {
    font-size: 12px;
    margin-right: 3px;
    font-weight: 900;
    transition: .3s;

  &:is(:hover, :focus) {
        color: #fff;
        transform: rotatex(180deg);
  }
}

.dropdown-menu {
  display: none;

  ul {
    display: block;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
    border-radius: 6px;
    width: 250px;

    li {
      padding: 0;
      margin-bottom: 10px;
    }
  }
}

.menu-has-childern:hover .dropdown-menu {
  display: block;
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 2;
  background-color: #101014de;
  text-align: right;
  box-shadow: 0 5px 30px rgba(0, 0, 0, .075);
  padding: 10px 0;
  border-radius: 4px;
  backdrop-filter: blur(10px);
  transform-origin: top center;
  transform: rotateY(-10deg);
  transition: transform .3s, opacity .3s;
}

/*search-box*/

.search-box {
  color: #8e939b;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display: flex;

    width: 100%;
    height: 45px;
    padding: 8px 15px;
    font-size: 14px;
    font-weight: 500;
    background-color: #1c1c22;
    border-radius: 3px;
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
    color: #8e939b;
    background: transparent;   

    &:is(:hover, :focus) {
      & {
        color: #fff;
      }
    }
  }
}

/*login*/

.login-btn{
  background-color: #1c1c22;
  padding: 5px 25px;
  border-radius: 5px;
  border: none;
  
  a{
    text-decoration: none;
    color: #8e939b;
    transition: .3s;
    font-size: 14px;
  }

  &:is(:hover, :focus) {
      a {
        color: #fff;
      }
    }
}

</style>