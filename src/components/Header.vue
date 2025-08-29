<template>
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