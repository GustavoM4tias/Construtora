<template>
    <div class="card rounded-5 p-3 d-flex">
      <p class="text-primary text-center fs-4">Encontre seu Lar Ideal</p>
      <div class="m-auto col-12 mb-4">
        <label class="fs-4">Cidade <span class="text-danger">*</span></label>
        <select class="form-select p-3" v-model="selectedCity">
          <option value="Todos" selected>Todas as Cidades</option>
          <option value="Bauru">Bauru</option>
          <option value="Garça">Garça</option>
          <option value="São Paulo">São Paulo</option>
          <option value="Bady Bassit">Bady Bassit</option>
          <option value="Dourados">Dourados</option>
        </select>
      </div>
      <button class="btn btn-primary rounded-4 p-lg-2 p-2 fs-5" @click="redirectToEmpreendimentos">Buscar</button>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const selectedCity = ref('Todos');
  const router = useRouter();
  
  function redirectToEmpreendimentos() {
    if (selectedCity.value !== 'Todos') {
      router.push({ name: 'empreendimentos', query: { cidade: selectedCity.value } });
    } else {
      router.push({ name: 'empreendimentos' });
    }
  }
  </script>
  
  <style scoped>
  </style>
  