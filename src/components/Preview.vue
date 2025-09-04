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
        <div 
          v-for="(option, index) in complaintOptions" 
          :key="index" 
          class="complaint-option"
          :class="{ active: option.active }"
        >
          <div class="option-header" @click="toggleOption(index)">
            <i :class="option.icon" style="font-size: 1.5rem; margin-bottom: 10px"></i>
            <div>{{ option.title }}</div>
          </div>
          
          <div v-if="option.active" class="sub-options">
            <div v-for="(subOption, subIndex) in option.subOptions" :key="subIndex" class="sub-option">
              <input 
                type="checkbox" 
                :id="`sub-option-${index}-${subIndex}`" 
                :value="subOption.value"
                v-model="subOption.selected"
                @click.stop
              >
              <label :for="`sub-option-${index}-${subIndex}`" @click.stop>{{ subOption.label }}</label>
            </div>
          </div>
        </div>
      </div>

      <button class="submit-btn" @click="submitComplaint">ارسال ناشناس</button>
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
    
    // Define complaint options with sub-options
    const complaintOptions = ref([
      {
        title: 'شکایت از سروصدا',
        icon: 'fas fa-volume-up',
        active: false,
        subOptions: [
          { label: 'موسیقی بلند', value: 'loud_music', selected: false },
          { label: 'میزان صدا در شب', value: 'night_noise', selected: false },
          { label: 'میزان صدا در روز', value: 'day_noise', selected: false },
          { label: 'میزان صدا در تعطیلات', value: 'holiday_noise', selected: false }
        ]
      },
      {
        title: 'مشکلات پارکینگ',
        icon: 'fas fa-car',
        active: false,
        subOptions: [
          { label: 'پارک کردن در جای ممنوع', value: 'illegal_parking', selected: false },
          { label: 'مسدود کردن راه', value: 'blocking_path', selected: false },
          { label: 'پارک کردن در جای اختصاصی', value: 'reserved_spot', selected: false },
          { label: 'پارک کردن دوبل', value: 'double_parking', selected: false }
        ]
      },
      {
        title: 'نگهداری ملک',
        icon: 'fas fa-trash',
        active: false,
        subOptions: [
          { label: 'جمع‌آوری زباله', value: 'garbage_disposal', selected: false },
          { label: 'تعمیرات لازم', value: 'necessary_repairs', selected: false },
          { label: 'نظافت عمومی', value: 'general_cleanliness', selected: false },
          { label: 'نگهداری فضای سبز', value: 'green_space', selected: false }
        ]
      },
      {
        title: 'مشکلات حیوانات خانگی',
        icon: 'fas fa-dog',
        active: false,
        subOptions: [
          { label: 'سروصدا', value: 'pet_noise', selected: false },
          { label: 'نظافت', value: 'pet_cleanliness', selected: false },
          { label: 'کنترل در فضای عمومی', value: 'public_control', selected: false },
          { label: 'جمع‌آوری فضولات', value: 'waste_disposal', selected: false }
        ]
      }
    ])

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
      
      phoneNumber.value = digits
      
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
    
    const toggleOption = (index) => {
      complaintOptions.value[index].active = !complaintOptions.value[index].active
    }
    
    const submitComplaint = () => {
      // Validate phone number first
      if (!validatePhoneNumber()) {
        alert('لطفاً شماره تلفن معتبر وارد کنید')
        return
      }
      
      // Prepare data for submission
      const complaintData = {
        phone: phoneNumber.value,
        complaints: []
      }
      
      // Collect selected options
      complaintOptions.value.forEach(option => {
        const selectedSubOptions = option.subOptions
          .filter(sub => sub.selected)
          .map(sub => sub.value)
        
        if (selectedSubOptions.length > 0) {
          complaintData.complaints.push({
            category: option.title,
            issues: selectedSubOptions
          })
        }
      })
      
      // Check if at least one complaint is selected
      if (complaintData.complaints.length === 0) {
        alert('لطفاً حداقل یک نوع شکایت انتخاب کنید')
        return
      }
      
      // You can now submit to your FastAPI backend
      console.log('Complaint data:', complaintData)
      alert('شکایت شما با موفقیت ثبت شد و آماده ارسال است')
    }

    return {
      phoneNumber,
      phoneError,
      isFocused,
      isValid,
      complaintOptions,
      formatPhoneNumber,
      validatePhoneNumber,
      toggleOption,
      submitComplaint
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

.complaint-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 25px;
}

.complaint-option {
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 15px;
  transition: all 0.3s ease;
  background-color: #fff;
}

.complaint-option.active {
  border-color: #4a90e2;
  background-color: #f0f8ff;
}

.option-header {
  text-align: center;
  cursor: pointer;
}

.option-header:hover {
  transform: translateY(-3px);
}

.sub-options {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px dashed #ddd;
  text-align: right;
}

.sub-option {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.sub-option input[type="checkbox"] {
  margin-left: 8px;
  transform: scale(1.2);
  cursor: pointer;
}

.sub-option label {
  margin-bottom: 0;
  font-weight: normal;
  cursor: pointer;
}

.submit-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(to right, #4a90e2, #357abd);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background: linear-gradient(to right, #357abd, #2a5d8a);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* Responsive design */
@media (max-width: 768px) {
  .complaint-options {
    grid-template-columns: 1fr;
  }
}
</style>