<template>
  <div>
    <BannerEmpreendimentos />
    <div class="container cards-empreendimento">
      <div class="button-container d-flex pb-3 pt-5 px-2 px-lg-5 mx-5 align-items-center justify-content-around flex-wrap">
        <div>
          <select class="form-select ms-md-5 ms-lg-0" v-model="cidadeFiltro" @change="applyCidadeFiltro">
            <option value="Todos">Todas as Cidades</option>
            <option value="Bauru">Bauru</option>
            <option value="Garça">Garça</option>
            <option value="Jacarezinho">Jacarezinho</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Bady Bassit">Bady Bassit</option>
            <option value="Dourados">Dourados</option>
          </select>
        </div>
        <button class="btn border-0" @click="setStatusFiltro('Todos')">Todas</button>
        <button class="btn border-0" @click="setStatusFiltro('Lançamento')">Lançamentos</button>
        <button class="btn border-0" @click="setStatusFiltro('Breve Lançamento')">Breve Lançamentos</button>
        <button class="btn border-0" @click="setStatusFiltro('Em Obras')">Em Obras</button>
        <button class="btn border-0" @click="setStatusFiltro('Pronto para Morar')">Prontos para Morar</button>
      </div>
      <div class="d-flex justify-content-center flex-wrap">
        <CardEmpreendimento v-for="(empreendimento, index) in paginatedEmpreendimentos" :key="index"
          :empreendimento="empreendimento" />
      </div>
      <div class="py-3">
        <Pagination :totalPages="totalPages" :currentPage="currentPage" @update:currentPage="setCurrentPage" />
      </div>
    </div>
  </div>
  <AnuncioEmpreendimentos />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import CardEmpreendimento from '../components/empreendimento/CardEmpreendimento.vue';
import Pagination from '../components/empreendimento/Pagination.vue';
import BannerEmpreendimentos from '../components/empreendimento/BannerEmpreendimentos.vue';
import AnuncioEmpreendimentos from '../components/empreendimento/AnuncioEmpreendimentos.vue';

const empreendimentos = ref([]);
const currentPage = ref(1);
const itemsPerPage = 6;
const statusFiltro = ref('Todos');
const cidadeFiltro = ref('Todos');
const route = useRoute();
const router = useRouter();

const setStatusFiltro = (status) => {
  statusFiltro.value = status;
  currentPage.value = 1;
};

const applyCidadeFiltro = () => {
  currentPage.value = 1;
  const query = cidadeFiltro.value === 'Todos' ? {} : { cidade: cidadeFiltro.value };
  router.push({ query });
};

const filteredEmpreendimentos = computed(() => {
  let filtered = empreendimentos.value;

  if (statusFiltro.value !== 'Todos') {
    filtered = filtered.filter(empreendimento => empreendimento.statusConstrucao === statusFiltro.value);
  }

  if (cidadeFiltro.value !== 'Todos') {
    filtered = filtered.filter(empreendimento => empreendimento.cidade === cidadeFiltro.value);
  }

  return filtered;
});

const paginatedEmpreendimentos = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredEmpreendimentos.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(filteredEmpreendimentos.value.length / itemsPerPage);
});

const setCurrentPage = (page) => {
  currentPage.value = page;
};

onMounted(async () => {
  try {
    const response = await axios.get('/empreendimentos.json');
    empreendimentos.value = response.data.empreendimentos;

    const cidadeParam = route.query.cidade;
    if (cidadeParam) {
      cidadeFiltro.value = cidadeParam;
    }
  } catch (error) {
    console.error('Erro ao carregar empreendimentos:', error);
  }
});
</script>

<style scoped>
.custom-line-height {
  line-height: .8;
}

.form-select,
.btn {
  border-color: rgb(26, 11, 170);
  color: rgb(26, 11, 170);
}

.form-select,
.button-container {
  font-family: "Montserrat", sans-serif;
}

@media screen and (max-width: 1000px) {

  .button-container>div,
  .button-container>button {
    flex: 1 1 45%;
    margin-bottom: 10px;
  }

  .button-container>.me-4 {
    margin-right: 0 !important;
  }
}
</style>
