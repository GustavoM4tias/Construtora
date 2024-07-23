<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import BannerContato from '../components/contato/BannerContato.vue';
import axios from 'axios';

const estados = ref([]);
const cidades = ref([]);
const estadoSelecionado = ref('');
const cidadeSelecionada = ref('');
const telefone = ref('');

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

</script>

<template>
    <div>
        <BannerContato />

        <div class="container d-flex mt-lg-4 mb-5">
            <div class="textos py-5 mt-lg-3">
                <h4 class="titulo pt-lg-5">Preencha o formulário e entre em contato conosco</h4>
                <p class="texto">Seja para esclarecer dúvidas, oferecer feedback ou discutir oportunidades, valorizamos
                    cada interação com nossos clientes e interessados. <br>
                    Ou se preferir, fale diretamente com nossos corretores apertando no ícone do WhatsApp no canto da
                    tela.
                </p>
            </div>

            <div class="formulario col-lg-6 rounded-4 p-3 p-lg-4 m-lg-5 shadow">
                <div class="row py-2">
                    <div class="col">
                        <label>Seu Nome <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" placeholder="Digite o seu nome completo">
                    </div>
                </div>
                <div class="row py-2">
                    <div class="col">
                        <label>Assunto <span class="text-danger">*</span></label>
                        <select class="form-select">

                            <option selected>Empreendimento</option>
                            <option value="1">Trabalhe Conosco</option>
                            <option value="2">Quero ser Parceiro</option>
                            <option value="3">Assistência Técnica</option>
                            <option value="3">Sobre a Menin</option>
                        </select>
                    </div>
                </div>

                <div class="row py-2">
                    <div class="col">
                        <label>Seu E-mail <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" placeholder="Digite o e-mail que você mais usa">
                    </div>
                    <div class="col">
                        <label>Seu Telefone <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" v-model="telefone"
                            @input="telefone = formataTelefone(telefone)" placeholder="(  ) _____-____">
                    </div>
                </div>

                <div class="row py-2">
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

                <div class="row py-2">
                    <span for="">Como deseja ser contatado?</span>
                    <div class="form-check ms-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Prefiro contato por Whatsapp
                        </label>
                    </div>
                    <div class="form-check ms-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                        <label class="form-check-label" for="flexCheckChecked">
                            Prefiro contato por E-mail
                        </label>
                    </div>
                    <div class="form-check ms-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                        <label class="form-check-label" for="flexCheckChecked">
                            Prefiro contato por Telefone
                        </label>
                    </div>
                </div>

                <div class="row">
                    <span class="text-label">Deseja acrescentar algo?</span>
                    <textarea class="text-area ms-3" placeholder="Digite aqui..."></textarea>
                </div>

                <div class="form-check pt-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Estou de acordo com a política de privacidade e receber contatos (Whatsapp, SMS, e-mail,
                        ligações) da Menin.
                    </label>
                </div>

                <div class="d-flex flex-column align-items-center pt-3">
                    <button class="btn btn-success  text-center fs-6 fw-bold py-2">Enviar
                        Mensagem</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.formulario {
    font-family: "Montserrat", sans-serif !important;
}

.custom-line-height {
    line-height: .8;
}

.titulo {
    font-size: 2.2vw;
    line-height: .9;
    color: #1F285A;
}

.texto {
    font-size: 1vw;
    color: gray;
}

.text-area {
    width: 95%;
    min-height: 150px;
    resize: vertical;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #444444;
    border-radius: 4px;
}


@media screen and (max-width: 900px) {

    .container {
        flex-direction: column;
    }

    .textos {
        margin-top: 0;
        text-align: center;
    }

    .titulo {
        font-size: 3.2vh;
        margin: auto auto 10px auto;
        width: 90%;
    }

    .texto {
        font-size: 1.6vh;
        margin: auto;
        width: 80%;
    }

    .formulario {
        margin: auto
    }

}
</style>
