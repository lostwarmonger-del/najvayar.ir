<script setup>
import Features from "./components/Features.vue";
import Header from "./components/Header.vue";
import HowItWorks from "./components/HowItWorks.vue";
import Preview from "./components/Preview.vue";
import Pricing from "./components/Pricing.vue";
import Footer from "./components/Footer.vue";
import Description from "./components/Description.vue";
import { useHead } from '@vueuse/head'

useHead({
  title: "سامانه نجوایار - پلتفرم مشاوره آنلاین روانشناسی",
  meta: [
    {
      name: "description",
      content:
        "با نجوایار، بهترین مشاوران حرفه‌ای روانشناسی را پیدا کنید و جلسه آنلاین بگیرید.",
    },
    {
      name: "keywords",
      content: "مشاوره روانشناسی, نجوایار, مشاور آنلاین, رواندرمانی",
    },
    // Open Graph / Social Sharing
    { property: "og:title", content: "سامانه نجوایار - پلتفرم مشاوره آنلاین" },
    {
      property: "og:description",
      content:
        "با نجوایار، بهترین مشاوران حرفه‌ای روانشناسی را پیدا کنید و جلسه آنلاین بگیرید.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://najvayar.ir" },
    { property: "og:image", content: "https://najvayar.ir/og-image.jpg" },
  ],
  link: [{ rel: "canonical", href: "https://najvayar.ir" }],
});
</script>

<template>
  <div class="container">
    <Header />
    <Description />
    <Features />
    <HowItWorks />
    <Preview />
    <Pricing />
    <Footer />
  </div>
</template>

<style scoped>
</style>
