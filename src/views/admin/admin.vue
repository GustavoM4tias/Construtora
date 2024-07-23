<template>
  <div class="container mt-4">
    <form @submit.prevent="addCard" class="mb-4">
      <div class="mb-3">
        <label for="image" class="form-label">Imagem:</label>
        <input type="file" class="form-control" @change="handleImageUpload" />
      </div>
      <div class="mb-3">
        <label for="nomeEmpreendimento" class="form-label">Nome do Empreendimento:</label>
        <input type="text" class="form-control" v-model="form.nomeEmpreendimento" />
      </div>
      <div class="mb-3">
        <label for="cep" class="form-label">CEP:</label>
        <input type="text" class="form-control" v-model="form.cep" @input="getCepData" maxlength="8" />
      </div>
      <div class="mb-3">
        <label for="estado" class="form-label">Estado:</label>
        <input type="text" class="form-control" v-model="form.estado" readonly />
      </div>
      <div class="mb-3">
        <label for="cidade" class="form-label">Cidade:</label>
        <input type="text" class="form-control" v-model="form.cidade" readonly />
      </div>
      <div class="mb-3">
        <label for="bairro" class="form-label">Bairro:</label>
        <input type="text" class="form-control" v-model="form.bairro" readonly />
      </div>
      <div class="mb-3">
        <label for="localizacao" class="form-label">Localização:</label>
        <input type="text" class="form-control" v-model="form.localizacao" readonly />
      </div>
      <div class="mb-3">
        <label for="statusConstrucao" class="form-label">Status de construção:</label>
        <select class="form-select" v-model="form.statusConstrucao">
          <option value="Em Obra">Em Obra</option>
          <option value="Lançamento">Lançamento</option>
          <option value="Vendas">Vendas</option>
          <option value="Pronto para morar">Pronto para morar</option>
        </select>
      </div>
      <div class="mb-3" v-if="form.statusConstrucao === 'Em Obra'">
        <label for="estagioConclusao" class="form-label">Estágio de conclusão (%):</label>
        <input type="number" class="form-control" v-model="form.estagioConclusao" min="0" max="100" />
      </div>
      <div class="mb-3">
        <label for="fichaTecnica" class="form-label">Ficha Técnica:</label>
        <div class="input-group mb-3">
          <input type="text" class="form-control" v-model="form.fichaTitulo" placeholder="Título" />
          <input type="text" class="form-control" v-model="form.fichaAssunto" placeholder="Assunto" />
          <button type="button" class="btn btn-outline-primary" @click="addFichaTecnicaItem">Adicionar</button>
        </div>
        <ul class="list-group">
          <li class="list-group-item" v-for="(ficha, index) in form.fichaTecnica" :key="index">
            {{ ficha.titulo }}: {{ ficha.assunto }}
          </li>
        </ul>
      </div>
      <div class="mb-3">
        <label for="diferenciais" class="form-label">Diferenciais:</label>
        <div class="input-group mb-3">
          <input type="text" class="form-control" v-model="form.diferencial"
            placeholder="Exemplo: 2 Quartos, 1 Garagem" />
          <button type="button" class="btn btn-outline-primary" @click="addDiferencial">Adicionar</button>
        </div>
        <ul class="list-group">
          <li class="list-group-item" v-for="(diferencial, index) in form.diferencias" :key="index">
            {{ diferencial }}
          </li>
        </ul>
      </div>
      <!-- Validation error message -->
      <div v-if="showValidationError" class="alert alert-danger" role="alert">
        Preencha todos os campos obrigatórios antes de adicionar o card.
      </div>

      <button type="submit" class="btn btn-primary">Adicionar Card</button>
    </form>

    <div v-for="(card, index) in cards" :key="index" class="card mb-4">
      <img :src="card.image" class="card-img-top" alt="Imagem do Card" v-if="card.image" />
      <div class="card-body">
        <h5 class="card-title">{{ card.nomeEmpreendimento }}</h5>
        <p class="card-text"><strong>CEP:</strong> {{ card.cep }}</p>
        <p class="card-text"><strong>Estado:</strong> {{ card.estado }}</p>
        <p class="card-text"><strong>Cidade:</strong> {{ card.cidade }}</p>
        <p class="card-text"><strong>Bairro:</strong> {{ card.bairro }}</p>
        <p class="card-text"><strong>Localização:</strong> {{ card.localizacao }}</p>
        <p class="card-text"><strong>Status de construção:</strong> {{ card.statusConstrucao }}</p>
        <p class="card-text" v-if="card.statusConstrucao === 'Em Obra'"><strong>Estágio de conclusão:</strong> {{
          card.estagioConclusao }}%</p>
        <div>
          <p class="card-text"><strong>Ficha Técnica:</strong></p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="(ficha, index) in card.fichaTecnica" :key="index">{{ ficha.titulo }}: {{
              ficha.assunto }}</li>
          </ul>
        </div>
        <div>
          <p class="card-text"><strong>Diferenciais:</strong></p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="(diferencial, index) in card.diferencias" :key="index">{{ diferencial }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const form = reactive({
  // Initialize arrays properly
  image: null,
  imageUrl: '',
  cep: '',
  estado: '',
  cidade: '',
  bairro: '',
  localizacao: '',
  statusConstrucao: '',
  estagioConclusao: 0,
  fichaTecnica: [],
  fichaTitulo: '',
  fichaAssunto: '',
  diferencias: [],
  diferencial: '',
  nomeEmpreendimento: '',
});

const cards = ref([]);
const showValidationError = ref(false);

const addCard = () => {
  // Check if required fields are empty
  if (!form.nomeEmpreendimento || !form.cep || !form.estado || !form.cidade || !form.bairro || !form.localizacao || !form.statusConstrucao) {
    showValidationError.value = true;
    return;
  }

  // If validation passes, add the card
  const newCard = { ...form, image: form.imageUrl };
  cards.value.push(newCard);
  console.log('JSON gerado:', JSON.stringify(newCard, null, 2));
  resetForm();
};

const resetForm = () => {
  // Reset form fields
  form.image = null;
  form.imageUrl = '';
  form.cep = '';
  form.estado = '';
  form.cidade = '';
  form.bairro = '';
  form.localizacao = '';
  form.statusConstrucao = '';
  form.estagioConclusao = 0;
  form.fichaTecnica = [];
  form.fichaTitulo = '';
  form.fichaAssunto = '';
  form.diferencias = [];
  form.diferencial = '';
  form.nomeEmpreendimento = '';

  // Reset validation state
  showValidationError.value = false;
};

const addFichaTecnicaItem = () => {
  if (form.fichaTitulo && form.fichaAssunto) {
    form.fichaTecnica.push({ titulo: form.fichaTitulo, assunto: form.fichaAssunto });
    form.fichaTitulo = '';
    form.fichaAssunto = '';
  }
};

const addDiferencial = () => {
  if (form.diferencial) {
    form.diferencias.push(form.diferencial);
    form.diferencial = '';
  }
};

const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    form.image = file;
    form.imageUrl = URL.createObjectURL(file);
  }
};

const getCepData = () => {
  if (form.cep.length === 8) {
    fetch(`https://viacep.com.br/ws/${form.cep}/json/`)
      .then(response => response.json())
      .then(data => {
        form.estado = data.uf || '';
        form.cidade = data.localidade || '';
        form.bairro = data.bairro || '';
        form.localizacao = `${data.logradouro || ''}, ${data.localidade || ''} - ${data.uf || ''}`;
      })
      .catch(error => {
        console.error('Erro ao buscar dados do CEP:', error);
      });
  }
};

</script>


<style scoped></style>
