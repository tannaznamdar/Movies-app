<template>
  <div class="new-search-box ">
    <form action="#" method="get">
      <input type="text" style="display: none;">
      <div class="row">

        <div class="col-lg-2">
          <div class="search-box-list">
            <span class="dropbtn d-flex justify-content-between" @click="seriesMenuShow = !seriesMenuShow">
              فیلم یا سریال
              <font-awesome-icon class="angle-left-icon" icon="angle-left" />
            </span>

            <div class="dropdown-content" v-show="seriesMenuShow">
              <div class="text-item  align-item-center" v-for="movieMenuShow in moviesMenuShow">
                <label class="custom-radio" name="cat-all" value>
                  <input checked="checked" name="radio" type="radio">
                  <span class="checkmark"></span>
                  {{ movieMenuShow.title }}
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-2">
          <div class="search-box-list">
            <span class="dropbtn d-flex justify-content-between" @click="genreMenuShow = !genreMenuShow">
              ژانر
              <font-awesome-icon class="angle-left-icon" icon="angle-left" />
            </span>

            <div class="dropdown-content" v-show="genreMenuShow">
              <div class="text-item  align-item-center" v-for="genreMenuShow in genresMenuShow">
                <label class="custom-radio" name="cat-all" value>
                  <input checked="checked" name="radio" type="radio">
                  <span class="checkmark"></span>
                  {{ genreMenuShow.title }}
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-2">
          <div class="search-box-list">
            <span class="dropbtn d-flex justify-content-between" @click="countryMenuShow = !countryMenuShow">
              کشور
              <font-awesome-icon class="angle-left-icon" icon="angle-left" />
            </span>

            <div class="dropdown-content" v-show="countryMenuShow">
              <div class="text-item  align-item-center" v-for="countryMenuShow in countriesMenuShow">
                <label class="custom-radio" name="cat-all" value>
                  <input checked="checked" name="radio" type="radio">
                  <span class="checkmark"></span>
                  {{ countryMenuShow.title }}
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-2">
          <div class="search-box-list">
            <span class="dropbtn d-flex justify-content-between" @click="doubleMenuShow = !doubleMenuShow">
              دوبله و زیر نویس
              <font-awesome-icon class="angle-left-icon" icon="angle-left" />
            </span>

            <div class="dropdown-content" v-show="doubleMenuShow">
              <div class="text-item  align-item-center" v-for="doubleMovieMenuShow in doubleMoviesMenuShow">
                <label class="custom-radio" name="cat-all" value>
                  <input checked="checked" name="radio" type="radio">
                  <span class="checkmark"></span>
                  {{ doubleMovieMenuShow.title }}
                </label>
              </div>

            </div>
          </div>
        </div>

        <div class="col-lg-2">
          <div class="search-box-list">
            <span class="dropbtn d-flex justify-content-between" @click="scoreMenuShow = !scoreMenuShow">
              امتیاز
              <font-awesome-icon class="angle-left-icon" icon="angle-left" />
            </span>

            <div class="dropdown-content" v-show="scoreMenuShow">
              <div class="text-item  align-item-center" v-for="scoreMenuShow in scoresMenuShow">
                <label class="custom-radio" name="cat-all" value>
                  <input checked="checked" name="radio" type="radio">
                  <span class="checkmark"></span>
                  {{ scoreMenuShow.title }}
                </label>
              </div>

            </div>
          </div>
        </div>

        <div class="col-lg-2">
          <button class="button button--lg " type="submit"> جستجو </button>
        </div>

      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: 'searchBox',

  data() {
    return {
      seriesMenuShow: false,
      genreMenuShow: false,
      countryMenuShow: false,
      doubleMenuShow: false,
      scoreMenuShow: false,

      moviesMenuShow: [
        {
          title: 'همه',
        },
        {
          title: 'فیلم',
        },
        {
          title: 'سریال',
        }
      ],

      genresMenuShow: [
        {
          title: 'همه',
        },
        {
          title: 'درام',
        },
        {
          title: 'اکشن',
        },
        {
          title: 'خانوادگی',
        },
        {
          title: 'عاشقانه',
        },
        {
          title: 'هیجان انگیز',
        },
        {
          title: 'کمدی',
        },
      ],

      countriesMenuShow: [
        {
          title: 'همه',
        },
        {
          title: 'ایرانی',
        },
        {
          title: 'هندی',
        },
        {
          title: 'کره ای',
        },
        {
          title: 'ترکیه ای',
        },
        {
          title: 'آمریکایی',
        },
      ],

      doubleMoviesMenuShow: [
        {
          title: 'همه',
        },
        {
          title: 'دوبله شذه',
        },
        {
          title: 'زیر نویس ',
        },
      ],

      scoresMenuShow: [
        {
          title: 'همه',
        },
        {
          title: '0 تا 2',
        },
        {
          title: ' 2 تا 5',
        },
        {
          title: ' 5 تا 7 ',
        },
        {
          title: 'بالای 7',
        },
      ],
    }

  },

  watch: {
    seriesMenuShow: function () {
      if (this.seriesMenuShow == true) {
        this.genreMenuShow = false;
        this.countryMenuShow = false;
        this.doubleMenuShow = false;
        this.scoreMenuShow = false;
      }
    },
    genreMenuShow: function () {
      if (this.genreMenuShow == true) {
        this.countryMenuShow = false;
        this.doubleMenuShow = false;
        this.scoreMenuShow = false;
        this.seriesMenuShow = false;
      }
    },
    countryMenuShow: function () {
      if (this.countryMenuShow == true) {
        this.genreMenuShow = false;
        this.doubleMenuShow = false;
        this.scoreMenuShow = false;
        this.seriesMenuShow = false;
      }
    },
    doubleMenuShow: function () {
      if (this.doubleMenuShow == true) {
        this.genreMenuShow = false;
        this.countryMenuShow = false;
        this.scoreMenuShow = false;
        this.seriesMenuShow = false;
      }
    },
    scoreMenuShow: function () {
      if (this.scoreMenuShow == true) {
        this.genreMenuShow = false;
        this.doubleMenuShow = false;
        this.countryMenuShow = false;
        this.seriesMenuShow = false;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.new-search-box {
  padding: 10px;
  background-color: #23232b !important;
  border-radius: 5px;
  margin-bottom: 30px;
  display: block;
}

.search-box-list {
  position: relative;
  display: block;
}

.dropbtn {
  background-color: #1c1c22;
  border-color: #1c1c22;
  color: white;
  text-align: right;
  border: none;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 14px;
  position: relative;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  line-height: 2;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  align-items: center;
}

.angle-left-icon {
  font-size: 14px;
  color: #fff;
  display: block;
}

.dropdown-content {
  position: absolute;
  background-color: #1c1c22;
  border-color: #1c1c22;
  margin-top: 2px !important;
  backdrop-filter: blur(4px);
  width: 100%;
  z-index: 999;
  padding: 15px;
  border-radius: 5px;
  max-height: 420px;
  overflow-y: auto !important;
}

//checkbox

.custom-radio {
  display: block;
  position: relative;
  cursor: pointer;
  line-height: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  align-items: center;


  input {
    opacity: 0;
    cursor: pointer;
    margin-right: 10px;
  }
}

.text-item {
  margin-bottom: 10px;
  color: #bbc1c6;
}

.checkmark {
  position: absolute;
  top: 0;
  right: 0;
  height: 15px;
  width: 15px;
  background-color: #eee;
  border-radius: 50%;
}

.custom-radio:hover input~.checkmark {
  background-color: #ccc;
}

.custom-radio input:checked~.checkmark {
  background-color: #2196F3;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.custom-radio input:checked~.checkmark:after {
  display: block;
}
</style>