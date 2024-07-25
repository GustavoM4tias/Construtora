<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import CardEmpreendimento from '../components/empreendimento/CardEmpreendimento.vue';
import BannerHome from '../components/home/BannerHome.vue';
import Condicoes from '../components/home/Condicoes.vue';
import Conheca from '../components/home/Conheca.vue';

const empreendimentos = ref([]);
const startIndex = ref(0);
const screenWidth = ref(window.innerWidth);

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
});

onMounted(async () => {
  try {
    const response = await axios.get('/empreendimentos.json');
    empreendimentos.value = response.data.empreendimentos;
  } catch (error) {
    console.error('Erro ao carregar empreendimentos:', error);
  }
});

const next = () => {
  const itemsToShow = screenWidth.value < 1000 ? 1 : 3;
  if (startIndex.value < empreendimentos.value.length - itemsToShow) {
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

      <div class="d-flex justify-content-center position-relative">
        
        <button @click="prev" class="bg-transparent border-0"><i class="bi bi-chevron-left fs-1"></i></button>

        <CardEmpreendimento 
          v-for="(empreendimento, index) in empreendimentos.slice(startIndex, startIndex + (screenWidth < 1000 ? 1 : 3))" 
          :key="index" 
          :empreendimento="empreendimento" 
        />
        
        <button @click="next" class="bg-transparent border-0"><i class="bi bi-chevron-right fs-1"></i></button>
      </div>

      <RouterLink class="btn btn-primary p-2 fs-5 m-auto" to="/empreendimentos">Visualizar Todos 
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
</style>
