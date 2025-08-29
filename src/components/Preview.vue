<template>
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
</template>

<script>
</script>

<style>
</style>