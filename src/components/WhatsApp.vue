<script setup>
</script>

<template>
  <div class="whatsapp-contact" v-motion-pop-visible-once :duration="1200">
    <a target="_blank" href="https://wa.me/5516996342599?text=Incorpora%20anúncio"
      class="whatsapp-icon"> <i class="bi bi-whatsapp"></i>
    </a>
  </div>
</template>

<style scoped>
.whatsapp-contact {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 2;
}

.whatsapp-icon {
  background-color: #25D366;
  color: white;
  font-size: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  animation: pulse 2.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

.contact-form {
  position: fixed;
  bottom: 90px;
  right: 20px;
  width: 300px;
  z-index: 2;
}
</style>
