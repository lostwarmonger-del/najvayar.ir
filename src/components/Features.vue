<template>
     <!-- Why Najvayar Section -->
<section class="features-section">
  <h2 class="features-heading">چرا نجوایار؟</h2>
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
</section>
</template>

<script>
</script>

<style scoped>
/* Why Najvayar Section Heading */
.features-heading {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: var(--primary);
  position: relative;
  padding-bottom: 15px;
}

.features-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  border-radius: 2px;
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .features-heading {
    font-size: 2.2rem;
    margin-bottom: 30px;
  }
}

@media (max-width: 600px) {
  .features-heading {
    font-size: 1.8rem;
    margin-bottom: 25px;
  }
  
  .features-heading::after {
    width: 80px;
    height: 3px;
  }
}
</style>