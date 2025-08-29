<template>
  <section class="preview-section" id="send">
    <h2>ارسال شکایت</h2>
    <div class="form-preview">
      <div class="form-group">
        <label for="phone">شماره تلفن همسایه موردنظر</label>
        <div class="phone-input-wrapper">
          <input
            type="tel"
            id="phone"
            v-model="phoneNumber"
            @input="formatPhoneNumber"
            @focus="isFocused = true"
            @blur="isFocused = false; validatePhoneNumber()"
            placeholder="09123456789"
            maxlength="13"
            dir="ltr"
            class="persian-phone-input"
          />
          <span class="validation-icon" v-if="phoneNumber">
            <i v-if="isValid" class="fas fa-check-circle valid"></i>
            <i v-else class="fas fa-times-circle invalid"></i>
          </span>
        </div>
        <div v-if="phoneError" class="error-message">{{ phoneError }}</div>
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
import { ref } from 'vue'

export default {
  name: 'ComplaintForm',
  setup() {
    const phoneNumber = ref('')
    const phoneError = ref('')
    const isFocused = ref(false)
    const isValid = ref(false)

    const formatPhoneNumber = () => {
      // Remove all non-digit characters except the starting 0
      let digits = phoneNumber.value.replace(/\D/g, '')
      
      // Ensure it starts with 0
      if (!digits.startsWith('0') && digits.length > 0) {
        digits = '0' + digits
      }
      
      // Limit to 11 digits (with starting 0)
      if (digits.length > 11) {
        digits = digits.substring(0, 11)
      }

      // Validate as user types
      validatePhoneNumber()
    }

    const validatePhoneNumber = () => {
      const digits = phoneNumber.value.replace(/\D/g, '')
      
      if (!digits) {
        phoneError.value = ''
        isValid.value = false
        return false
      }
      
      if (digits.length !== 11) {
        phoneError.value = 'شماره تلفن باید ۱۱ رقم باشد'
        isValid.value = false
        return false
      }
      
      if (!digits.startsWith('09')) {
        phoneError.value = 'شماره تلفن باید با ۰۹ شروع شود'
        isValid.value = false
        return false
      }
      
      phoneError.value = ''
      isValid.value = true
      return true
    }

    return {
      phoneNumber,
      phoneError,
      isFocused,
      isValid,
      formatPhoneNumber,
      validatePhoneNumber
    }
  }
}
</script>

<style scoped>
.form-group {
  position: relative;
  margin-bottom: 24px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
  text-align: right;
}

.phone-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.persian-phone-input {
  width: 100%;
  padding: 12px 45px 12px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  text-align: center;
  direction: ltr;
  unicode-bidi: plaintext;
}

.persian-phone-input:focus {
  border-color: #4a90e2;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
  outline: none;
  background: linear-gradient(to top, #e0f7fa, #80deea);
}

.persian-phone-input::placeholder {
  color: #aaa;
  text-align: center;
}

.validation-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
}

.validation-icon .valid {
  color: #28a745;
}

.validation-icon .invalid {
  color: #dc3545;
}

.error-message {
  margin-top: 6px;
  font-size: 13px;
  color: #dc3545;
  text-align: right;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

</style>