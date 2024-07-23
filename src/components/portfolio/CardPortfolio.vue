<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="container-fluid d-flex">
    <div :style="{ backgroundImage: 'url(' + imageUrl + ')' }" class="card-empreendimento d-flex rounded-5 m-auto" v-motion-slide-visible-once-bottom :duration="100">
      <div class="textos-card text-center mt-auto rounded-5 p-4 text-white">
        <h2 class="titulo-card text-start ms-2 m-0">{{ name }}</h2>
        <p class="local-card text-start ms-2 m-0">{{ type }}</p>
        <p class="local-card text-start ms-2 m-0 mt-2 fs-5"><i class="bi bi-geo-alt-fill"></i> {{ location }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-empreendimento {
  width: 400px;
  height: 500px;
  box-shadow: 0px -180px 250px inset rgba(1, 5, 50, 0.9),
              5px 5px 25px rgba(0, 0, 0, .3);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: .2s;
}

.card-empreendimento:hover {
  box-shadow: 0px -150px 150px inset rgba(1, 5, 53, 0.4),
              5px 5px 15px rgba(0, 0, 0, 0.6);
  transform: scale(1.02);
  transition: .2s;
  cursor: pointer;
}
</style>
