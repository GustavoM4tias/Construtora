<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  empreendimento: {
    type: Object,
    required: true
  }
});

// Mapeamento de diferenciais para ícones
const iconeDiferenciais = {
  'Quartos': 'fa-solid fa-bed',
  'Vaga Garagem': 'fa-solid fa-car',
  'Vagas Garagem': 'fa-solid fa-car',
  'Playground': 'fa-solid fa-gamepad',
  'Piscina': 'fa-solid fa-person-swimming',
  'Academia': 'fa-solid fa-dumbbell',
  'Sauna': 'fa-solid fa-smog',
  'Quadra de Tênis': 'fa-solid fa-table-tennis-paddle-ball',
  'Área de Churrasco': 'fa-solid fa-burger',
  'Área Gourmet': 'fa-solid fa-utensils',
  'Área de Lazer': 'fa-solid fa-spa',
  'Salão de Festas': 'fa-solid fa-champagne-glasses',
  'Quadra Poliesportiva': 'fa-solid fa-medal'
};

// Função para obter o ícone correspondente
const obterIcone = (diferencial) => {
  // Procura por qualquer chave dentro do diferencial
  for (const chave in iconeDiferenciais) {
    if (diferencial.toLowerCase().includes(chave.toLowerCase())) {
      return iconeDiferenciais[chave];
    }
  }
  return 'bi bi-question-circle'; // Ícone padrão se nenhum diferencial corresponder
};
</script>

<template>
  <div class="card-empreendimento bg-light rounded-4 shadow mx-3 mt-2 mb-4">

    <span class="status-construcao position-absolute p-2 px-3 mt-4 px-4 py-2 rounded-end-5">
      <strong class="fw-light text-shadow">{{ empreendimento.statusConstrucao }}</strong>
    </span>

    <div class="d-flex justify-content-center align-items-end">

      <span v-if="empreendimento.statusEmpreendimento == 'Venda'"
        class="card-venda position-absolute bg-success rounded-top-1 p-1 px-3">
        <strong class="text-light fw-light fs-6">{{ empreendimento.statusEmpreendimento }}</strong>
      </span>

      <span v-if="empreendimento.statusEmpreendimento == 'Finalizado'"
        class="card-venda position-absolute bg-success rounded-top-1 p-1 px-3">
        <strong class="text-light fw-light fs-6">{{ empreendimento.statusEmpreendimento }}</strong>
      </span>

      <span v-if="empreendimento.statusEmpreendimento == 'Ultimas Unidades'"
        class="card-venda position-absolute bg-success rounded-top-1 p-1 px-3">
        <strong class="text-light fw-light fs-6">{{ empreendimento.statusEmpreendimento }}</strong>
      </span>

      <img :src="empreendimento.image" class="card-img-top rounded-top-4" height="250px"
        :alt="'Imagem de ' + empreendimento.nomeEmpreendimento" v-if="empreendimento.image" />

    </div>

    <div class="card-body p-4">
      <h4 class="card-title">{{ empreendimento.nomeEmpreendimento }}</h4>
      <p class="card-text">
        <strong><i class="bi bi-geo-alt-fill"></i></strong> <span class="text-local">{{ empreendimento.localizacao
          }}</span>
      </p>
      <div class="container-diferencial pb-3 ps-2"
        v-if="empreendimento.diferencias && empreendimento.diferencias.length > 0">
        <span class="diferencial" v-for="(diferencial, index) in empreendimento.diferencias.slice(0, 4)" :key="index">
          <i :class="obterIcone(diferencial)"></i> {{ diferencial }}<br>
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

.text-local {
  font-size: 12px;
}

.diferencial {
  font-size: 14px;
  color: rgba(80, 80, 80, 1);
}

.diferencial i {
  margin-right: 8px;
  /* Espaço entre o ícone e o texto */
}

.btn-outline-primary {
  font-size: 1vw;
}

.status-construcao {
  background-color: #1F285A;
  color: white;
  font-weight: light !important;
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
