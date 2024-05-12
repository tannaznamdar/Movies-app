<template>
  <div class="container bv-example-row">
    <div class="row justify-content-center align-items-center">
      <div class="col-lg-9 ">
        <div class="main-posts">
          <h1 class="titil titil--lg">ارتباط با ما</h1>
          <h3 class="titil titil-md text-align-center">برای ارتباط با ما و انتقادات و پیشنهادات از طریق فرم زیریا در
            تلگرام اقدام بفرمایید :<br>
          </h3>
          <p>&nbsp;</p>
          <form method="post" action="">
            <div class="mb-4">
              <label class="label-text">نام
                <span class="required-label">*</span>
              </label>
              <input type="text" class="form-field" id="name" name="name" required />
              <label class="wpforms-error" for="wpforms-135922-field_0" v-show="wpformsError">این فیلد پر نشده
                است.</label>
            </div>

            <div class="mb-4">
              <label class="label-text ">شماره تماس:</label>
              <input type="number" class="form-field mb-1" id="number" name="number" placeholder="(0912***)">
              <div class="titil titil--sm">برای ارتباط سریع ما با شما</div>
            </div>

            <div class="mb-4 pt-2">
              <label class="label-text ">ایمیل شما:</label>
              <input type="email" id="email" name="email" class="form-field" required />
            </div>

            <div class="mb-4">
              <label class="label-text pb-1">موضوع :</label>
              <input type="checkbox" id="item1" name="item1" value="درخواست فیلم">
              <label class="titil titil--sm mb-2" for="item1"> درخواست فیلم </label><br>
              <input type="checkbox" id="item2" name="item2" value="گزارش خرابی">
              <label class="titil titil--sm mb-2" for="item2"> گزارش خرابی </label><br>
              <input type="checkbox" id="item3" name="item3" value="انتقاد و پیشنهاد">
              <label class="titil titil--sm mb-2" for="item3"> انتقاد و پیشنهاد </label><br>
            </div>

            <div class="mb-4 pt-2">
              <label class="label-text ">متن پیام :
                <span class="required-label">*</span>
              </label>
              <textarea class="textarea-box" id="message" name="message" placeholder="متن پیام شما" required
                aria-invalid="true"></textarea>
              <label class="wpforms-error" v-show="wpformsError">این فیلد پر نشده است.</label>
            </div>

            <div>
              <button type="submit" class="form-button">ارسال پیام</button>
            </div>
          </form>
          <div class="alert"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'ContactUs',

  data() {
    return {

      wpformsError: true,

    }
  }

}


</script>



<style scoped lang="scss">
.main-posts {
  padding: 25px;
  border-radius: 4px;
  background-color: #23232b;
  box-shadow: 0 5px 25px rgba(0, 0, 0, .13) !important;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
}

.titil {
  line-height: 1.3;
  font-weight: 700;
  color: #f5f5f5;

  &--lg {
    font-size: 22px;
  }

  &-md {
    font-size: 18px;
    font-weight: 500;
  }

  &--sm {
    font-size: 13px;
    font-weight: 500;
    margin-right: 8px;
  }
}

.label-text {
  color: #f5f5f5;
  font-size: 16px;
  font-weight: 400;
  display: block;
  line-height: 1.3;
  margin: 0 0 4px 0;
  padding: 0;
  word-break: break-word;
  word-wrap: break-word;
}

.text-align-center {
  text-align: center;
}

.required-label {
  color: #ff0000;
  font-weight: 400;
}

.form-field {
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 2px;
  color: #333;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  display: block;
  float: none;
  font-size: 16px;
  font-family: inherit;
  border: 1px solid #ccc;
  padding: 6px 10px;
  height: 38px;
  width: 100%;
  line-height: 1.3;
  max-width: 60%;
}

input[type=radio] {
  border: 1px solid #ccc;
  background-color: #fff;
  width: 14px;
  height: 14px;
  margin: 0 10px 0 3px;
  display: inline-block;
  vertical-align: baseline;
}

.wpforms-error {
  display: block;
  color: #990000;
  font-size: 14px;
  font-weight: 700;
  float: none;
  cursor: default;
  margin-top: 8px;
}

.textarea-box {
  height: 120px;
  resize: vertical;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 2px;
  color: #333;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  display: block;
  float: none;
  font-size: 16px;
  font-family: inherit;
  border: 1px solid #ccc;
  padding: 6px 10px;
  width: 100%;
  line-height: 1.3;
  max-width: 100%;
}

.form-button {
  background-color: #eee;
  border: 1px solid #ddd;
  color: #333;
  font-size: 16px;
  font-family: inherit;
  padding: 8px 15px;
  border-radius: 4px;
}

.alert {
  padding: .75rem 1rem;
  border: 0 solid transparent;
  border-radius: 4px;
  margin-bottom: 15px;
  margin-top: 50px;
  background: #f1faea0a;
}
</style>