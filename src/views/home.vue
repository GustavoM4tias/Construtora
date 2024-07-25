<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import CardEmpreendimento from '../components/empreendimento/CardEmpreendimento.vue';
import BannerHome from '../components/home/BannerHome.vue';
import Condicoes from '../components/home/Condicoes.vue';
import Conheca from '../components/home/Conheca.vue';

const empreendimentos = ref([]);
const startIndex = ref(0);

onMounted(async () => {
  try {
    const response = await axios.get('/empreendimentos.json');
    empreendimentos.value = response.data.empreendimentos;
  } catch (error) {
    console.error('Erro ao carregar empreendimentos:', error);
  }
});

const next = () => {
  if (startIndex.value < empreendimentos.value.length - 3) {
    startIndex.value++;
  }
};

const prev = () => {
  if (startIndex.value > 0) {
    startIndex.value--;
  }
};
</script>



<template>
  <div>
    <BannerHome />

    <div class="container pt-5 pb-3 d-flex flex-column align-items-center" v-motion-pop-visible :duration="600">
      <h2 class="text-center fs-1 px-5 custom-line-height">
        Explore nossos empreendimentos <br> e encontre o espaço ideal para você
      </h2>
    </div>

    <div class="container-fluid cards-empreendimento d-flex flex-column pb-5 mb-5" v-motion-slide-bottom :duration="800">
      <div class="d-flex justify-content-center flex-wrap position-relative">
        <button @click="prev" class="carousel-button left-button">‹</button>

        <transition-group name="slide-fade" tag="div" class="d-flex">
          <CardEmpreendimento 
            v-for="(empreendimento, index) in empreendimentos.slice(startIndex, startIndex + 3)" 
            :key="index" 
            :empreendimento="empreendimento" 
          />
        </transition-group>
        
        <button @click="next" class="carousel-button right-button">›</button>
      </div>

      <RouterLink class="btn btn-outline-primary p-2 fs-5 m-auto" to="/empreendimentos">Visualizar Todos 
        <i class="bi bi-arrow-right fw"></i>
      </RouterLink>
    </div>

    <Condicoes />
    <Conheca />
  </div>
</template>



<style scoped>
* {
  overflow-x: hidden;
}

template {
  min-height: 200vh;
}

.custom-line-height {
  line-height: .8;
  overflow: hidden;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
}

.left-button {
  left: 10px;
}

.right-button {
  right: 10px;
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.slide-fade-leave-to {
  transform: translateX(-100%);
}
</style>
