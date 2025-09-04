<template>
  <section class="pricing" id="price">
    <h2>تعرفه مناسب و دوست داشتنی</h2>
    <div class="price-tag">۱۳,۰۰۰ تومان</div>
    <p>هزینه‌ای ناچیز برای آرامش و احترام در همسایگی</p>

    <div class="value-proposition">
      <h3>همه این خدمات فقط با ۱۳,۰۰۰ تومان:</h3>

      <div class="value-list">
        <div class="value-item">
          <i class="fas fa-check-circle"></i> ارسال پیامک حرفه‌ای
        </div>
        <div class="value-item">
          <i class="fas fa-check-circle"></i> فعالیت ۲۴ ساعته
        </div>
        <div class="value-item">
          <i class="fas fa-check-circle"></i> حفظ ناشناسی شما
        </div>
        <div class="value-item">
          <i class="fas fa-check-circle"></i> تضمین رضایت
        </div>
      </div>
    </div>

    <div class="heart-message">
      <p>ما در نجوایار به روابط محترمانه و جامعه همدل اعتقاد داریم ❤️</p>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Pricing Section Styling */
.pricing {
  text-align: center;
  margin-bottom: 60px;
  background: linear-gradient(
    135deg,
    rgba(255, 235, 184, 0.2) 0%,
    rgba(255, 214, 225, 0.2) 100%
  );
  border-radius: 20px;
  padding: 40px;
  position: relative;
  overflow: hidden;
}

.pricing::before {
  content: "";
  position: absolute;
  top: -50px;
  right: -50px;
  width: 100px;
  height: 100px;
  background: var(--primary);
  opacity: 0.1;
  border-radius: 50%;
}

.pricing::after {
  content: "";
  position: absolute;
  bottom: -30px;
  left: -30px;
  width: 80px;
  height: 80px;
  background: var(--secondary);
  opacity: 0.1;
  border-radius: 50%;
}

.pricing h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--primary);
  position: relative;
  z-index: 1;
}

.price-tag {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--secondary);
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
  z-index: 1;
}

.price-tag::before {
  content: "❤️";
  position: absolute;
  left: -40px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
}

.price-tag::after {
  content: "❤️";
  position: absolute;
  right: -40px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
}

.pricing p {
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

.value-proposition {
  background: white;
  border-radius: 16px;
  padding: 20px;
  margin-top: 25px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 1;
}

.value-proposition h3 {
  color: var(--primary);
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.value-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 15px;
}

.value-item {
  background: rgba(108, 99, 255, 0.1);
  border-radius: 50px;
  padding: 8px 16px;
  font-size: 0.9rem;
  color: var(--dark);
  display: flex;
  align-items: center;
  gap: 5px;
}

.value-item i {
  color: var(--primary);
}

.heart-message {
  margin-top: 20px;
  padding: 15px;
  background: rgba(255, 101, 132, 0.1);
  border-radius: 12px;
  color: var(--dark);
  font-weight: 500;
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .pricing {
    padding: 30px;
  }

  .pricing h2 {
    font-size: 2.2rem;
  }

  .price-tag {
    font-size: 3rem;
  }

  .price-tag::before,
  .price-tag::after {
    display: none;
  }
}

@media (max-width: 600px) {
  .pricing {
    padding: 25px 20px;
  }

  .pricing h2 {
    font-size: 2rem;
  }

  .price-tag {
    font-size: 2.5rem;
  }

  .value-list {
    flex-direction: column;
    align-items: center;
  }
}
</style>