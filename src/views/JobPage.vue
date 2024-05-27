<template>
  <div class="container bv-example-row">
    <div class="row justify-content-center align-items-center pt-100">
      <div class="col-lg-9 ">
        <div class="main-posts">
          <h1 class="titil titil--lg">استخدام</h1>
          <P class="titil titil--sm pb-3">
            آپ تی وی در راستای گسترش فعالیت خود استخدام می‌کند. اگر تصور می‌کنید، دانش لازم برای فعالیت به عنوان نویسنده
            در آپ تی وی را دارید، سخت کوش هستید،

            به سینما پیرامون آن‌ها علاقه دارید و از نوشتن در یکی از پربازدید ترین سایت های ایران لذت می‌برید، الان
            بهترین زمان برای پیوستن به آپ تی وی است.
          </P>
          <h2 class="titil titil-md"> موقعیت شغلی: نویسنده </h2>
          <h2 class="titil titil-md"> مشخصات فردی </h2>

          <ul class="titil titil--sm internal-distance-r pb-3">
            <li>تسلط کامل به زبان انگلیسی</li>
            <li>آشنا با اصول و قوانین نگارش</li>
            <li><strong>حداقل سن ۱۸ سال</strong></li>
            <li>دانش فنی در سینما و آشنا با فیلم‌ها و. سریال های سینمایی</li>
            <li>دارای خلاقیت و با پشتکار</li>
            <li>علاقه‌مند فیلم‌ و سریال های سینمایی جدید</li>
          </ul>

          <h2 class="titil titil-md">موقعیت شغلی: Front-Developer </h2>
          <P class="titil titil--sm pb-3">
            ما در تیم خود به یک برنامه نویس مسلط به frontend با انگیزه و مسئولیت پذیر با شرایط زیر نیازمندیم:
          </P>

          <h2 class="titil titil-md">مشخصات فردی </h2>
          <ul class="titil titil--sm internal-distance-r pb-3">
            <li>تسلط کامل به css و html </li>
            <li> تسلط کامل به javascript </li>
            <li> تسلط کامل به bootstrap </li>
            <li>تسلط کامل به jquery </li>
          </ul>

          <h2 class="titil titil-md">شرایط کاری </h2>
          <ul class="titil titil--sm internal-distance-r pb-3">
            <li>دورکاری</li>
            <li>دارای نمونه کار مرتبط</li>
          </ul>


          <p>&nbsp;</p>
          <form method="post" action="">
            <div class="mb-4">
              <label class="label-text">نام
                <span class="required-label">*</span>
              </label>
              <input type="text" class="form-field" id="name" name="name" required />
              <label class="forms-error" for="forms-135922-field_0" v-show="formsError">این فیلد پر نشده
                است.</label>
            </div>

            <div class="mb-4">
              <label class="label-text ">شماره تماس:
                <span class="required-label">*</span>
              </label>
              <input type="number" class="form-field mb-1" id="number" name="number" placeholder="(0912***)">
              <div class="titil titil--sm">برای ارتباط سریع ما با شما</div>
              <label class="forms-error" for="forms-135922-field_0" v-show="formsError">این فیلد پر نشده
                است.</label>
            </div>

            <div class="mb-4">
              <label class="label-text">سن شما:
                <span class="required-label">*</span>
              </label>
              <input type="text" class="form-field" id="age" name="age" placeholder="مثلا ۱۸ سال" required />
              <label class="forms-error" for="forms-135922-field_0" v-show="formsError">این فیلد پر نشده
                است.</label>
            </div>

            <div class="mb-4 pt-2">
              <label class="label-text ">آی دی تلگرام شما :</label>
              <input type="text" id="Telegram" name="Telegram" class="form-field" required />
            </div>

            <div class="mb-4 pt-2">
              <label class="label-text ">ایمیل شما:
                <span class="required-label">*</span>
              </label>
              <input type="email" id="email" name="email" class="form-field" required />
              <label class="forms-error" for="forms-135922-field_0" v-show="formsError">این فیلد پر نشده
                است.</label>
            </div>

            <div class="mb-4 pt-2">
              <label class="label-text ">متن پیام :
                <span class="required-label">*</span>
              </label>
              <textarea class="textarea-box" id="message" name="message"
                placeholder="در مورد سوابق کاری و نمونه کار اگر دارید اینجا قرار دهید" required
                aria-invalid="true"></textarea>
              <label class="forms-error" v-show="formsError">این فیلد پر نشده است.</label>
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
  name: 'Job',

  data() {
    return {

      formsError: true,

    }
  }
}
</script>


<style scoped lang="scss">
.main-posts {
  padding: 30px;
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
    line-height: 2;
    color: #bbc1c6;
    text-align: justify;
    align-items: right;
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

  @media (max-width:449px) {
    max-width: 100%;
  }
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

.forms-error {
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

.internal-distance-r {
  margin-right: 40px;
}

.pt-100 {
  padding-top: 100px;
}
</style>