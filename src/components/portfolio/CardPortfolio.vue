<script setup>
import { ref } from 'vue';
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

const showModal = ref(false);

const toggleModal = () => {
  showModal.value = !showModal.value;
};

const mouseX = ref(0);
const mouseY = ref(0);
const isZoomed = ref(false);

const handleMouseMove = (event) => {
  const rect = event.target.getBoundingClientRect();
  mouseX.value = ((event.clientX - rect.left) / rect.width) * 100;
  mouseY.value = ((event.clientY - rect.top) / rect.height) * 100;
};

const toggleZoom = () => {
  isZoomed.value = !isZoomed.value;
};
</script>

<template>
  <div class="container-fluid d-flex">
    <div :style="{ backgroundImage: 'url(' + imageUrl + ')' }" class="card-empreendimento d-flex rounded-5 m-auto" v-motion-slide-visible-once-bottom :duration="100" @click="toggleModal">
      <div class="textos-card text-center mt-auto rounded-5 p-4 text-white">
        <h2 class="titulo-card text-start ms-2 m-0">{{ name }}</h2>
        <p class="local-card text-start ms-2 m-0">{{ type }}</p>
        <p class="local-card text-start ms-2 m-0 mt-2 fs-5"><i class="bi bi-geo-alt-fill"></i> {{ location }}</p>
      </div>
    </div>

    <div v-if="showModal" class="modal-overlay" @click="toggleModal"><i class="bi bi-x-lg fs-1 text-light position-absolute top-0 end-0 p-5"></i>
      <div class="modal-content" @click.stop>
        <div class="zoom-container" @mousemove="handleMouseMove" @mouseleave="isZoomed = false" @mouseenter="isZoomed = true">
          <img :src="imageUrl" alt="Ampliada" :style="{ transformOrigin: mouseX + '% ' + mouseY + '%', transform: isZoomed ? 'scale(2)' : 'scale(1)' }" />
        </div>
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  width: 800px;
  height: 700px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
}

.zoom-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.modal-content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s;
}
</style>
