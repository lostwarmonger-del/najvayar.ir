<template>
  <div class="container">
    <header>
      <div class="logo">
        <div class="logo-img">
          <img src="../assets/logo.png" alt="" />
        </div>
        <div class="logo-text">سامانه نجوایار</div>
      </div>
      <nav ref="navElement" :class="{ active: isNavActive }">
        <a href="#works">نحوه عملکرد</a>
        <a href="#price">تعرفه</a>
        <a href="#send"> ارسال پیامک</a>
        <a href="#contact">تماس با ما</a>
      </nav>
      <button class="nav-toggle" @click="toggleNav">
        <span class="material-symbols-outlined"> menu </span>
      </button>
    </header>

    <section class="hero">
      <div class="hero-content">
        <h1>ناراحتی خود از همسایگان را با خیال راحت به آن ها اعلام کنید!!!</h1>
        <p>
          در جامعه امروز، زندگی در کنار افراد مختلف با فرهنگ های متفاوت می‌تواند
          چالش‌برانگیز باشد. چالش هایی مربوط به ایجاد سر و صدا، عدم رعایت
          بهداشت، نگهداری از حیوانات خانگی، مشکلات پارکینگ و مسائل مربوط به
          نگهداری مشاعات و بسیاری موارد دیگر. گاهی اوقات برقراری ارتباط مستقیم و
          بیان این مشکلات می‌تواند باعث تنش یا ناراحتی شود. سرویس "نجوایار" به
          شما این امکان را می‌دهد که به صورت کاملاً ناشناس و محترمانه، ناراحتی
          خود را بدون نیاز به مواجهه مستقیم و نگرانی از ایجاد کدورت به همسایگان
          اعلام کنید. انتقال پیام شما به شیوه‌ای حرفه‌ای و مودبانه به همسایه‌تان
          بر عهده ماست. 😉
        </p>
      </div>
      <div class="hero-image">
        <i
          class="fas fa-shield-alt"
          style="font-size: 4rem; margin-bottom: 20px"
        ></i>
        <div>۱۰۰٪ ناشناس و امن</div>
        <div>بدون ایجاد تنش و یا ناراحتی</div>
        <div>بیان راحت و بدون دغدغه مشکلات</div>
      </div>
    </section>

    <section class="features">
      <div class="feature-card">
        <div class="feature-icon">
          <i class="fas fa-user-secret"></i>
        </div>
        <h3>به صورت ناشناس</h3>
        <p>
          هویت شما در سامانه نجوایار کاملاً محرمانه باقی می‌ماند. ما هیچ‌گاه
          اطلاعات شما را با دریافت‌کننده به اشتراک نمی‌گذاریم.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">
          <i class="fas fa-comments"></i>
        </div>
        <h3>حرفه ای و مودبانه</h3>
        <p>
          سیستم نجوایار پیام‌های مودبانه و تأثیرگذاری ایجاد می‌کند که نگرانی‌های
          شما را به طور مؤثر منتقل می‌کنند.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">
          <i class="fas fa-home"></i>
        </div>
        <h3>محیط زندگی بهتر</h3>
        <p>
          با استفاده از سرویس نجوایار، محیط زندگی خود را بدون تنش و ناراحتی
          بهبود ببخشید.
        </p>
      </div>
    </section>

    <section class="how-it-works" id="works">
      <h2>نحوه عملکرد سرویس</h2>
      <div class="steps">
        <div class="step">
          <div class="step-number">۱</div>
          <h3>وارد کردن شماره تلفن و انتخاب موضوع پیامک</h3>
          <p>
            شماره تلفن فرد مورد نظر را وارد کرده و مسئله‌ای که می‌خواهید مطرح
            کنید را انتخاب نمایید.
          </p>
        </div>

        <div class="step">
          <div class="step-number">۲</div>
          <h3>پرداخت هزینه</h3>
          <p>
            هزینه خدمات برای پوشش هزینه‌های پیامک و نگهداری پلتفرم را پرداخت
            کنید.
          </p>
        </div>

        <div class="step">
          <div class="step-number">۳</div>
          <h3>ارسال ناشناس</h3>
          <p>
            ما پیام شما را در حالی که هویت شما کاملاً خصوصی باقی می‌ماند، ارسال
            می‌کنیم.
          </p>
        </div>
      </div>
    </section>

    <section class="preview-section" id="send">
      <h2>ارسال شکایت</h2>
      <div class="form-preview">
        <div class="form-group">
          <label for="phone">شماره تلفن همسایه</label>
          <input
            type="tel"
            id="phone"
            placeholder="شماره تلفن را با کد کشور وارد کنید"
          />
        </div>

        <h3>نوع شکایت را انتخاب کنید</h3>
        <div class="complaint-options">
          <div class="complaint-option">
            <i
              class="fas fa-volume-up"
              style="font-size: 1.5rem; margin-bottom: 10px"
            ></i>
            <div>شکایت از سروصدا</div>
          </div>

          <div class="complaint-option">
            <i
              class="fas fa-car"
              style="font-size: 1.5rem; margin-bottom: 10px"
            ></i>
            <div>مشکلات پارکینگ</div>
          </div>

          <div class="complaint-option">
            <i
              class="fas fa-trash"
              style="font-size: 1.5rem; margin-bottom: 10px"
            ></i>
            <div>نگهداری ملک</div>
          </div>

          <div class="complaint-option">
            <i
              class="fas fa-dog"
              style="font-size: 1.5rem; margin-bottom: 10px"
            ></i>
            <div>مشکلات حیوانات خانگی</div>
          </div>
        </div>

        <button class="submit-btn">ارسال ناشناس</button>
      </div>
    </section>

    <section class="pricing" id="price">
      <h2>تعرفه مناسب</h2>
      <div class="price-tag">۱۳,۰۰۰ تومان</div>
      <p>
        هزینه یک‌باره برای هر پیام. این هزینه شامل هزینه پیامک و نگهداری پلتفرم
        می‌شود. بدون هیچ هزینه پنهان یا اشتراک.
      </p>
    </section>

    <footer>
      <p>© 2025 سرویس شکایت همسایه. تمام حقوق محفوظ است.</p>
      <p>ما به ارتباط محترمانه و هماهنگی جامعه پایبندیم.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isNavActive = ref(false);
const navElement = ref(null);

const toggleNav = () => {
  isNavActive.value = !isNavActive.value;
};
</script>


<style scoped>
</style>