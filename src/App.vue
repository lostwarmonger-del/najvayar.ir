
<script setup>
import Features from "./components/Features.vue";
import Header from "./components/Header.vue";
import HowItWorks from "./components/HowItWorks.vue";
import Preview from "./components/Preview.vue";
import Pricing from "./components/Pricing.vue";
import Footer from "./components/Footer.vue";
import Terms from "./components/terms.vue";
import Description from "./components/Description.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useHead } from "@vueuse/head";

const route = useRoute();
const isHomePage = computed(() => route.path === "/");
useHead({
  title: "نجوایار: پیام ناشناس به همسایه‌ها",
  meta: [
    {
      name: "description",
      content:
        "با نجوایار مشکلات همسایگی را ناشناس و مودبانه حل کنید. سر و صدا، پارکینگ و بیشتر. همین حالا شروع کنید!",
    },
    {
      name: "keywords",
      content:
        "نجوایار، پیام ناشناس، شکایت همسایه، مشکلات همسایگی، پیامک مودبانه، سر و صدا، پارکینگ، آپارتمان‌نشینی",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      charset: "UTF-8",
    },
    // Open Graph / Social Sharing
    { property: "og:title", content: "نجوایار: حل مشکلات همسایگی بدون تنش" },
    {
      property: "og:description",
      content:
        "با نجوایار، مشکلات همسایگی مثل سر و صدا یا پارکینگ را ناشناس و مودبانه مطرح کنید. محیط زندگی بهتری بسازید!",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://najvayar.ir" },
    { property: "og:image", content: "https://najvayar.ir/og-image.jpg" },
    {
      property: "og:image:alt",
      content: "لوگوی نجوایار: سرویس پیام ناشناس به همسایگان",
    },
    { property: "og:locale", content: "fa_IR" },
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "نجوایار: پیام ناشناس به همسایه‌ها" },
    {
      name: "twitter:description",
      content:
        "مشکلات همسایگی را با نجوایار ناشناس و مودبانه حل کنید. همین حالا امتحان کنید!",
    },
    { name: "twitter:image", content: "https://najvayar.ir/og-image.jpg" },
  ],
  link: [
    { rel: "canonical", href: "https://najvayar.ir" },
    { rel: "icon", type: "image/png", href: "/favicon.png" },
    { rel: "alternate", hreflang: "fa", href: "https://najvayar.ir/fa" },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "نجوایار",
        url: "https://najvayar.ir",
        description:
          "سرویس ارسال پیام ناشناس برای حل مشکلات همسایگی به‌صورت مودبانه",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://najvayar.ir/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      }),
    },
  ],
});
</script>

<template>
  <div class="container">
    <Terms v-if="$route.path === '/terms'" />
    <div v-else>
      <Header />
      <Description />
      <Features />
      <HowItWorks />
      <Preview />
      <Pricing />
      <Footer />
    </div>
  </div>
</template>

<style scoped>
</style>
