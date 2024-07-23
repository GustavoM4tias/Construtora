<script setup>
import { ref, onMounted } from 'vue';

const unidadesEntregues = useCounterAnimation(0, 80);
const metrosQuadrados = useCounterAnimation(0, 3);
const cidadesAtuacao = useCounterAnimation(0, 50);
const anosExperiencia = useCounterAnimation(0, 38);

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
    <div class="container contador p-lg-5 p-sm-0 d-flex ext-center">

      <div class="me-5">

        <div class="itens">
          <h1 class="titulo">+{{ unidadesEntregues }} Mil</h1>
          <p class="subtitulo fw-light fs-5">unidades entregues</p>
        </div>
        <div class="itens">
          <h1 class="titulo">+{{ metrosQuadrados }} Milhões</h1>
          <p class="subtitulo fw-light fs-5">de m² construídos</p>
        </div>

      </div>


      <div>

        <div class="itens">
          <h1 class="titulo">+{{ anosExperiencia }} Anos</h1>
          <p class="subtitulo fw-light fs-5">de experiência</p>
        </div>
        <div class="itens">
          <h1 class="titulo">+ de {{ cidadesAtuacao }}</h1>
          <p class="subtitulo fw-light fs-5">cidades de atuação</p>
        </div>
        
      </div>


    </div>

</template>

<style scoped>
.container {
  width: 90%;
}

.titulo {
  font-size: 2vw;
  padding: 15px 0 0px 0;
  color: rgb(10, 10, 100);
}

.subtitulo {
  color: rgb(10, 10, 140);
}

@media only screen and (max-width: 1000px) {
  .container {
    padding: 0 !important;
    height: auto !important;
  }

  .titulo {
    font-size: 3vh;
  }

}
</style>