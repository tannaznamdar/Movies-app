<script setup>

</script>

<template>
  <div class="new-search-box ">
    <form action="#" method="get">
      <input type="text" style="display: none;">
      <div class="row">

        <div class="col-lg-2">
          <div class="search-box-list">
            <button class="dropbtn d-flex justify-content-between">
              سریال
              <font-awesome-icon class="angle-left-icon" icon="angle-left" />
            </button>

            <div class="dropdown-content ">
              <div class="text-item  align-item-center">
                <label class="custom-radio" name="cat-all" value>
                  <input checked="checked" name="radio" type="radio">
                  <span class="checkmark"></span>
                  همه
                </label>
              </div>

              <div class="text-item  align-item-center">
                <label class="custom-radio" name="cat-all" value>
                  <input checked="checked" name="radio" type="radio">
                  <span class="checkmark"></span>
                  فیلم
                </label>
              </div>

              <div class="text-item  align-item-center">
                <label class="custom-radio" name="cat-all" value>
                  <input checked="checked" name="radio" type="radio">
                  <span class="checkmark"></span>
                  سریال
                </label>
              </div>

            </div>
          </div>
        </div>

        <div class="col-lg-2">
          <div class="search-box-list">
            <button class="dropbtn d-flex justify-content-between">
              ژانر
              <font-awesome-icon class="angle-left-icon" icon="angle-left" />
            </button>

            <div class="dropdown-content ">
              <div class="text-item  align-item-center">
                <label class="custom-radio" name="cat-all" value>
                  <input checked="checked" name="radio" type="radio">
                  <span class="checkmark"></span>
                  همه
                </label>
              </div>

              <div class="text-item  align-item-center">
                <label class="custom-radio" name="cat-all" value>
                  <input checked="checked" name="radio" type="radio">
                  <span class="checkmark"></span>
                  فیلم
                </label>
              </div>

              <div class="text-item  align-item-center">
                <label class="custom-radio" name="cat-all" value>
                  <input checked="checked" name="radio" type="radio">
                  <span class="checkmark"></span>
                  سریال
                </label>
              </div>

            </div>
          </div>
        </div>

        <div class="col-lg-2">
          <div class="search-box-list">
            <button class="dropbtn d-flex justify-content-between">
              کشور
              <font-awesome-icon class="angle-left-icon" icon="angle-left" />
            </button>

            <div class="dropdown-content ">
              <div class="text-item  align-item-center">
                <label class="custom-radio" name="cat-all" value>
                  <input checked="checked" name="radio" type="radio">
                  <span class="checkmark"></span>
                  همه
                </label>
              </div>

              <div class="text-item  align-item-center">
                <label class="custom-radio" name="cat-all" value>
                  <input checked="checked" name="radio" type="radio">
                  <span class="checkmark"></span>
                  فیلم
                </label>
              </div>

              <div class="text-item  align-item-center">
                <label class="custom-radio" name="cat-all" value>
                  <input checked="checked" name="radio" type="radio">
                  <span class="checkmark"></span>
                  سریال
                </label>
              </div>

            </div>
          </div>
        </div>

        <div class="col-lg-2">
          <div class="search-box-list">
            <button class="dropbtn d-flex justify-content-between">
              دوبله و زیر نویس
              <font-awesome-icon class="angle-left-icon" icon="angle-left" />
            </button>

            <div class="dropdown-content ">
              <div class="text-item  align-item-center">
                <label class="custom-radio" name="cat-all" value>
                  <input checked="checked" name="radio" type="radio">
                  <span class="checkmark"></span>
                  همه
                </label>
              </div>

              <div class="text-item  align-item-center">
                <label class="custom-radio" name="cat-all" value>
                  <input checked="checked" name="radio" type="radio">
                  <span class="checkmark"></span>
                  فیلم
                </label>
              </div>

              <div class="text-item  align-item-center">
                <label class="custom-radio" name="cat-all" value>
                  <input checked="checked" name="radio" type="radio">
                  <span class="checkmark"></span>
                  سریال
                </label>
              </div>

            </div>
          </div>
        </div>

        <div class="col-lg-2">
          <div class="search-box-list">
            <button class="dropbtn d-flex justify-content-between">
              امتیاز
              <font-awesome-icon class="angle-left-icon" icon="angle-left" />
            </button>

            <div class="dropdown-content ">
              <div class="text-item  align-item-center">
                <label class="custom-radio" name="cat-all" value>
                  <input checked="checked" name="radio" type="radio">
                  <span class="checkmark"></span>
                  همه
                </label>
              </div>

              <div class="text-item  align-item-center">
                <label class="custom-radio" name="cat-all" value>
                  <input checked="checked" name="radio" type="radio">
                  <span class="checkmark"></span>
                  فیلم
                </label>
              </div>

              <div class="text-item  align-item-center">
                <label class="custom-radio" name="cat-all" value>
                  <input checked="checked" name="radio" type="radio">
                  <span class="checkmark"></span>
                  سریال
                </label>
              </div>

            </div>
          </div>
        </div>

        <div class="col-lg-2">
          <button class="button button--lg " type="submit" > جستجو </button>
        </div>

      </div>
    </form>

  </div>
</template>

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
  display: none;
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