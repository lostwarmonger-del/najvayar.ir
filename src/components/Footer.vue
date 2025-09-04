<template>
<section class="footer">
  <div class="container">
    <div class="footer-content">
      <!-- About Us Section -->
      <div class="footer-section">
        <h3>درباره ما</h3>
        <p>سرویس شکایت همسایه با هدف ایجاد ارتباط بهتر و حل مسالمت آمیز اختلافات بین همسایگان ایجاد شده است. ما معتقدیم که جامعه ای سالم با ارتباطات محترمانه شکل می گیرد.</p>
        <p>ماموریت ما ارائه بستری امن و قابل اعتماد برای رفع ناراحتی های همسایه ها در محیط زندگی است.</p>
      </div>
      
      <!-- Contact Us Section -->
      <div class="footer-section">
        <h3>تماس با ما</h3>
        <ul>
          <li>
            <a href="mailto:info@najvayar.ir">
              <i class="fas fa-envelope"></i>
              info@najvayar.ir
            </a>
          </li>
          <li>
            <a href="tel:+982188651946">
              <i class="fas fa-phone"></i>
              021-88651946
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-map-marker-alt"></i>
              استان تهران
            </a>
          </li>
        </ul>
      </div>
      
      <!-- Payment & Trust Section -->
      <div class="footer-section">
        <h3>پرداخت امن و مجوزها</h3>
        <p>تمامی تراکنش های مالی با امنیت کامل از طریق درگاه زرین پال انجام می شود.</p>
        <div class="payment-methods">
          <img src="../assets/zarinpal.png" alt="زرین پال">
          <img src="../assets/enamad.png" alt="اینماد">
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>© 2025 سرویس شکایت محترمانه از همسایه. تمامی حقوق محفوظ است.</p>
      <p class="footer-slogan"> نجوایار: ناشناس، مودبانه، مؤثر</p>
    </div>
  </div>
</section>

</template>

<script setup>

</script>

<style scoped>

.footer-slogan {
  font-size: 0.9rem;
  color: #1565C0; /* Calming blue for trust */
  text-align: center;
  direction: rtl; /* Support for Persian text */
  letter-spacing: 0.05em; /* Improved readability */
  margin: 10px 0;
  padding: 5px 0;
  transition: color 0.3s ease, transform 0.2s ease; /* Smooth hover effect */
  font-weight: 700; /* Regular weight for subtlety */
  line-height: 1.5;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

.footer-slogan:hover {
  color: #ac0505; /* Darker blue on hover */
  transform: scale(1.04); /* Slight zoom effect */
}

@media (max-width: 600px) {
  .footer-slogan {
    font-size: 0.8rem; /* Smaller font for mobile */
    padding: 8px 10px; /* Adjusted padding for smaller screens */
  }
}
/* Footer Styles */
.footer {
    background: white;
    border-radius: 20px;
    padding: 40px;
    margin-top: 60px;
    box-shadow: 0 -5px 30px rgba(0, 0, 0, 0.05);
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-bottom: 40px;
    text-align: justify ;
}

.footer-section h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: var(--primary);
    position: relative;
    padding-bottom: 10px;
}

.footer-section h3::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
    border-radius: 3px;
}

.footer-section p {
    line-height: 1.8;
    margin-bottom: 15px;
    color: #555;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 12px;
}

.footer-section ul li a {
    color: #555;
    text-decoration: none;
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 10px;
}

.footer-section ul li a:hover {
    color: var(--primary);
    transform: translateX(-5px);
}

.payment-methods {
    display: flex;
    gap: 20px;
    margin-top: 15px;
}

.payment-methods img {
    width: 80px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
}

.payment-methods img:hover {
    transform: translateY(-3px);
}

.footer-bottom {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid #eee;
}

.footer-bottom p {
    color: #666;
    margin-bottom: 10px;
}

/* Responsive adjustments for footer */
@media (max-width: 900px) {
    .footer-content {
        grid-template-columns: 1fr;
        gap: 30px;
    }
    
    .footer {
        padding: 30px;
    }
}

@media (max-width: 600px) {
    .footer {
        padding: 25px;
    }
    
    .payment-methods {
        flex-direction: column;
        align-items: center;
    }
    
    .payment-methods img {
        width: 70px;
    }
}
</style>