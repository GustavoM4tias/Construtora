<script setup>
import { computed } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  empreendimento: {
    type: Object,
    required: true
  }
});

</script>

<template>
  <div class="card-empreendimento bg-light rounded-4 shadow mx-3 mt-2 mb-4">

    <span class="status-construcao position-absolute p-2 px-3 mt-4 px-4py-2 rounded-end-5">
      <strong class="fw-light text-shadow">{{ empreendimento.statusConstrucao }}</strong>
    </span>

    <div class="d-flex justify-content-center align-items-end">

      <span v-if="empreendimento.statusEmpreendimento == 'Venda'"
        class="card-venda position-absolute bg-success rounded-top-1 p-1 px-3">
        <strong class="text-light fw-light fs-6">{{ empreendimento.statusEmpreendimento }}</strong>
      </span>

      <span v-if="empreendimento.statusEmpreendimento == 'Finalizado'"
        class="card-venda position-absolute bg-warning rounded-top-1 p-1 px-3">
        <strong class="text-light fw-light fs-6">{{ empreendimento.statusEmpreendimento }}</strong>
      </span>

      <span v-if="empreendimento.statusEmpreendimento == 'Ultimas Unidades'"
        class="card-venda position-absolute bg-danger rounded-top-1 p-1 px-3">
        <strong class="text-light fw-light fs-6">{{ empreendimento.statusEmpreendimento }}</strong>
      </span>
      
      <img :src="empreendimento.image" class="card-img-top rounded-top-4" height="250px"
        :alt="'Imagem de ' + empreendimento.nomeEmpreendimento" v-if="empreendimento.image" />

    </div>


    <div class="card-body p-4">
      <h4 class="card-title">{{ empreendimento.nomeEmpreendimento }}</h4>
      <p class="card-text">
        <strong><i class="bi bi-geo-alt-fill"></i></strong> {{ empreendimento.localizacao }}
      </p>
      <div class="container-diferencial pb-3"
        v-if="empreendimento.diferencias && empreendimento.diferencias.length > 0">
        <span class="diferencial" v-for="(diferencial, index) in empreendimento.diferencias.slice(0, 3)" :key="index">
          {{ diferencial }}<br>
        </span>
      </div>
      <button class="btn btn-outline-primary p-3">
        Quero Conhecer <i class="bi bi-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>

.card-empreendimento {
  width: 350px;
}

.card-text {
  color: rgba(90, 90, 90, .7);
  font-size: .8vw;
}

.card-img-top {
  object-fit: cover;
}

.diferencial {
  color: rgba(80, 80, 80, 1);
}

.btn-outline-primary {
  font-size: 1vw;
}

.status-construcao {
  background-color: #1F285A;
  color: white;
  font-weight: light!important;
}


@media (max-width: 991.98px) {

  .btn-outline-primary {
    font-size: 2vh;
  }

  .card-text {
    color: rgba(90, 90, 90, .7);
    font-size: 1.5vh;
  }

}
</style>
