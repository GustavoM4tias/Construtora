<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import BannerSimulador from '../components/simulador/BannerSimulador.vue';
import axios from 'axios';

const estados = ref([]);
const cidades = ref([]);
const estadoSelecionado = ref('');
const cidadeSelecionada = ref('');
const telefone = ref('');
const rendaMensal = ref('');

onMounted(async () => {
    try {
        const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
        estados.value = response.data.sort((a, b) => a.nome.localeCompare(b.nome));
    } catch (error) {
        console.error('Erro ao buscar os estados:', error);
    }
});

watch(estadoSelecionado, async (newEstado) => {
    if (newEstado) {
        try {
            const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${newEstado}/municipios`);
            cidades.value = response.data.sort((a, b) => a.nome.localeCompare(b.nome));
        } catch (error) {
            console.error('Erro ao buscar as cidades:', error);
        }
    } else {
        cidades.value = [];
    }
});

const formataTelefone = (phone) => {
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
};

const formataSalario = (value) => {
    const cleaned = value.replace(/\D/g, '');
    const formatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cleaned / 100);
    return formatted;
};
</script>

<template>
    <div>
        <BannerSimulador />

        <div class="container w-50">
            <h4 class="titulo text-center pt-5">Preencha o formulário abaixo e nossa equipe entrará em contato com você:</h4>
            <div class="rounded-4 px-4 py-3 px-lg-5 py-lg-4 m-2 my-5 m-lg-5 shadow">
                <div class="row py-4">
                    <div class="col">
                        <label>Seu Nome <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" placeholder="Digite o seu nome completo">
                    </div>
                    <div class="col">
                        <label>Seu E-mail <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" placeholder="Digite o e-mail que você mais usa">
                    </div>
                </div>
                <div class="row py-4">
                    <div class="col">
                        <label>Estado <span class="text-danger">*</span></label>
                        <select class="form-select" v-model="estadoSelecionado">
                            <option value="" selected>Escolha...</option>
                            <option v-for="estado in estados" :key="estado.id" :value="estado.id">{{ estado.nome }}
                            </option>
                        </select>
                    </div>
                    <div class="col">
                        <label>Cidade <span class="text-danger">*</span></label>
                        <select class="form-select" v-model="cidadeSelecionada">
                            <option value="" selected>Escolha...</option>
                            <option v-for="cidade in cidades" :key="cidade.id" :value="cidade.id">{{ cidade.nome }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="row py-4">
                    <div class="col">
                        <label>Seu Telefone <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" v-model="telefone"
                            @input="telefone = formataTelefone(telefone)" placeholder="(  ) _____-____">
                    </div>
                    <div class="col">
                        <label>Sua Renda Mensal <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" v-model="rendaMensal"
                            @input="rendaMensal = formataSalario(rendaMensal)" placeholder="R$ 0,00">
                    </div>
                </div>
                <div class="d-flex flex-column align-items-center pt-3">
                    <button class="btn btn-success col-sm-6 col-md-3 text-center fs-4 fw-bold py-2">Enviar os
                        dados</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-line-height {
    line-height: .8;
}

.titulo {
    color: #1F285A;
}


@media screen and (max-width: 900px) {

    label,
    input,
    option,
    select {
        font-size: 15px;
    }
    
}
</style>
