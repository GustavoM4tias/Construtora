<template>
    <div class="container-fluid atuacao pb-4" v-motion-slide-visible-once-bottom :duration="800">
        <div class="textos d-flex flex-column justify-content-center align-items-center p-5">
            <h1 class="titulo mt-5 mb-4">Áreas de Atuação</h1>
            <p class="texto mb-2">Cada projeto reflete nosso compromisso com a inovação, qualidade total e, acima de tudo, a satisfação plena de todos os envolvidos.</p>
        </div>
        <div class="d-flex flex-wrap justify-content-center">
            <div class="btn-group mb-3" role="group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                <label @click="updateContent('Edifícios Residenciais')" class="btn btn-default m-2 py-3 px-lg-5 px-2 fw-bold rounded-4 fs-5" for="btnradio1">Edifícios Residenciais</label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                <label @click="updateContent('Condomínios Residenciais')" class="btn btn-default m-2 py-3 px-lg-5 px-2 fw-bold rounded-4 fs-5 ms-0" for="btnradio2">Condomínios Residenciais</label>
            </div>
            <div class="btn-group mb-3" role="group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                <label @click="updateContent('Loteamentos')" class="btn btn-default m-2 py-3 px-lg-5 px-2 fw-bold rounded-4 fs-5" for="btnradio3">Loteamentos</label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                <label @click="updateContent('Empreendimentos Comerciais')" class="btn btn-default m-2 py-3 px-lg-5 px-2 fw-bold rounded-4 fs-5 ms-0" for="btnradio4">Empreendimentos Comerciais</label>
            </div>
        </div>

        <div class="container d-flex rounded-5 p-4 shadow-lg mb-5 h-50">
            <div class="row">
                <div class="col-lg-6 col-md-12 d-flex">
                    <img class="image rounded-4 m-auto" :src="currentImageUrl" alt="">
                </div>
                <div class="col-lg-6 col-md-12 d-flex flex-column p-5 pb-2">
                    <div class="m-auto">
                        <h1 class="titulo-card text-center" v-text="currentTitle"></h1>
                        <p class="texto text-center" v-text="currentText"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentTitle: "Edifícios Residenciais",
            currentText: "Nossos edifícios residenciais são o ápice da tecnologia avançada e da qualidade excepcional. Em cada empreendimento, nosso foco está em superar expectativas, garantindo que cada detalhe contribua para a satisfação completa dos futuros moradores.",
            currentImageUrl: "https://github.com/GustavoM4tias/Construtora/blob/main/src/assets/image/concept.jpeg?raw=true"
        };
    },
    methods: {
        updateContent(title) {
            switch (title) {
                case 'Edifícios Residenciais':
                    this.currentTitle = title;
                    this.currentText = "Nossos edifícios residenciais são o ápice da tecnologia avançada e da qualidade excepcional. Em cada empreendimento, nosso foco está em superar expectativas, garantindo que cada detalhe contribua para a satisfação completa dos futuros moradores.";
                    this.currentImageUrl = "https://github.com/GustavoM4tias/Construtora/blob/main/src/assets/image/concept.jpeg?raw=true";
                    break;
                case 'Condomínios Residenciais':
                    this.currentTitle = title;
                    this.currentText = "Nossos condomínios residenciais combinam tecnologia avançada e qualidade excepcional. Cada detalhe é planejado para superar expectativas e garantir a satisfação dos moradores, oferecendo áreas de lazer modernas, segurança de ponta e acabamentos impecáveis.";
                    this.currentImageUrl = "https://github.com/GustavoM4tias/Construtora/blob/main/src/assets/image/montana.jpg?raw=true";
                    break;
                case 'Loteamentos':
                    this.currentTitle = title;
                    this.currentText = "Nossos loteamentos oferecem infraestrutura robusta e localização estratégica. Com urbanização de alta qualidade, terrenos prontos para receber projetos, e serviços essenciais, criamos comunidades sustentáveis e harmoniosas.";
                    this.currentImageUrl = "https://github.com/GustavoM4tias/Construtora/blob/main/src/assets/image/boulevard.jpeg?raw=true";
                    break;
                case 'Empreendimentos Comerciais':
                    this.currentTitle = title;
                    this.currentText = "Nossos empreendimentos comerciais são inovadores e funcionais. Projetados para atender às necessidades de negócios modernos, oferecemos espaços versáteis e bem localizados, maximizando a eficiência e proporcionando um ambiente atraente para clientes e colaboradores.";
                    this.currentImageUrl = "https://github.com/GustavoM4tias/Construtora/blob/main/src/assets/image/shopping.png?raw=true";
                    break;
                default:
                    break;
            }
        }
    }
}
</script>

<style scoped>
.atuacao {
    background-color: #F0F3F8;
}

.titulo {
    color: #1F285A;
    font-size: 3.5vw;
    font-weight: bolder;
    line-height: .9;
}

.texto {
    font-size: 1.1vw;
    line-height: .9;
    color: gray;
    text-align: center;
}

.btn-default {
    color: gray !important;
    background-color: #F1F2F3;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, .05);
}

.btn-check:checked+label {
    background-color: white;
    border-color: transparent;
    color: #3864AF !important;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, .3);
}

.btn-default:hover {
    background-color: white;
    color: #3864AF !important;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, .3);
}

.image {
    height: 350px;
    width: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
}

.titulo-card {
    color: #3864AF;
    font-size: 2.8vw;
    font-weight: bolder;
    line-height: .9;
}

@media screen and (max-width: 900px) {
    .titulo {
        font-size: 4vh;
    }

    .texto {
        font-size: 1.7vh;
    }

    .btn-group {
        width: 100%;
    }

    .btn-group>label {
        width: 100%;
        text-align: center;
    }

    .card-atuacao {
        flex-direction: column;
    }

    .card-atuacao .row {
        flex-direction: column;
    }

    .titulo-card {
        font-size: 2.8vh;
    }

}
</style>
