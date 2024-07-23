<script setup>
import Header from './components/Header.vue'
import WhatsApp from './components/WhatsApp.vue'
import Footer from './components/Footer.vue'

</script>

<template>

  <div>
    <Header />
    <RouterView />
    <WhatsApp />
    <Footer />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
