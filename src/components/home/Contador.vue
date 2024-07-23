<script setup>
import { ref, onMounted } from 'vue';

const unidadesEntregues = useCounterAnimation(0, 80);
const metrosQuadrados = useCounterAnimation(0, 3);
const cidadesAtuacao = useCounterAnimation(0, 50);
const anosExperiencia = useCounterAnimation(0, 38);
const sonhosRealizados = useCounterAnimation(0, 80);

function useCounterAnimation(startValue, endValue, duration = 2000) {
  const count = ref(startValue);

  onMounted(() => {
    const options = {
      threshold: 0.2, 
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(count, endValue, duration);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(document.querySelector('.itens'));
  });

  return count;
}

function animateCount(countRef, finalValue, duration) {
  const increment = finalValue / (duration / 100);
  let currentCount = 0;

  const interval = setInterval(() => {
    currentCount += increment;
    if (currentCount >= finalValue) {
      currentCount = finalValue;
      clearInterval(interval);
    }
    countRef.value = Math.floor(currentCount);
  }, 100);
}
</script>

<template>
    <div class="container-fluid">
      <div class="container container-2 p-lg-5 p-sm-0 d-flex justify-content-around text-center">
        <div class="itens">
          <h1 class="titulo">+{{ unidadesEntregues }} Mil</h1>
          <span class="subtitulo fw-light fs-5">unidades entregues</span>
        </div>
        <div class="itens">
          <h1 class="titulo">+{{ metrosQuadrados }} Milhões</h1>
          <span class="subtitulo fw-light fs-5">de m² construídos</span>
        </div>
        <div class="itens">
          <h1 class="titulo">+ de {{ cidadesAtuacao }}</h1>
          <span class="subtitulo fw-light fs-5">cidades de atuação</span>
        </div>
        <div class="itens">
          <h1 class="titulo">+{{ anosExperiencia }} Anos</h1>
          <span class="subtitulo fw-light fs-5">de experiência</span>
        </div>
        <div class="itens pb-lg-0 pb-sm-5">
          <h1 class="titulo">+{{ sonhosRealizados }} Mil</h1>
          <span class="subtitulo fw-light fs-5">sonhos realizados</span>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .container-fluid {
    width: 100%;
  }
  
  .titulo {
    font-size: 2.5vw;
    padding: 15px 0 0px 0;
    color: rgb(10, 10, 100);
  }

  .subtitulo {
    color: rgb(10, 10, 140);
  }
  
  @media only screen and (max-width: 1000px) {
    .container-fluid {
      padding: 0 !important;
      height: auto !important;
    }

  .titulo {
    font-size: 3vh;
  }
  
    .container-2 {
      flex-direction: column;
    }
  }
  </style>
  