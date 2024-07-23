<script setup>
</script>

<template>
    
    <div class="card-1 d-flex container my-1 my-lg-5">
        <div class="texto-1 col-12 col-lg-7 d-flex flex-column justify-content-center p-5" v-motion-slide-visible-once-left :duration="1000">
            <h1 class="titulo">Filosofia de Atuação e Certificações</h1>
            <p class="texto">Em cada área de atuação, a Menin se dedica a investir na qualidade de vida das pessoas e no
                desenvolvimento sustentável das cidades. <br>
                Entendemos que nosso trabalho tem um impacto significativo na sociedade e no meio ambiente, e é por isso
                que nos comprometemos a criar projetos que não apenas atendam, mas superem as expectativas de nossos
                clientes e contribuam positivamente para o mundo ao nosso redor.</p>
        </div>
        <div class="img-1 col-12 col-lg-5 d-flex mt-5 mt-lg-0" v-motion-slide-visible-once-right :duration="800">
            <img class="img m-auto" src="https://www.menin.com.br/wp-content/uploads/2024/04/Logos.png" alt="" height="180">
        </div>
    </div>

    <div class="card-2 d-flex container my-1 my-lg-5">
        <div class="img-2 col-12 col-lg-6 d-flex" v-motion-slide-visible-once-left :duration="800">
            <img class="img img-card-2 m-auto rounded-4" src="https://www.menin.com.br/wp-content/uploads/2024/06/image00009-1-1024x768.jpeg"
                alt="">
        </div>
        <div class="texto-2 col-12 col-lg-6 d-flex flex-column justify-content-center p-5" v-motion-slide-visible-once-right :duration="1200">
            <h1 class="titulo">Qualidade que Fala por Si</h1>
            <p class="texto">Nosso corpo técnico, composto por engenheiros altamente capacitados, é a espinha dorsal de
                nossa excelência operacional. <br>
                Responsáveis por empreendimentos icônicos em Marília, outras regiões de São Paulo, Paraná, Mato Grosso e
                Mato Grosso do Sul, adotamos uma postura rigorosa que vai do lançamento à entrega de cada projeto. Essa
                dedicação nos posiciona entre as empresas mais confiáveis do mercado.</p>
        </div>
    </div>

    <div class="card-3 d-flex container my-1 my-lg-5">
        <div class="texto-3 col-12 col-lg-6 d-flex flex-column justify-content-center p-5" v-motion-slide-visible-once-left :duration="1000">
            <h1 class="titulo">Inovação e Sustentabilidade</h1>
            <p class="texto">O padrão de construção da Menin reflete os avanços mais significativos da engenharia
                moderna. <br>
                Desde o projeto conceitual até a escolha meticulosa dos materiais e acabamentos, nos destacamos
                por nossa capacidade de inovar e por nosso compromisso com a sustentabilidade.</p>
        </div>
        <div class="img-3 col-12 col-lg-6 d-flex" v-motion-slide-visible-once-right :duration="1400">
            <img class="img m-auto" src="https://www.menin.com.br/wp-content/uploads/2024/04/img_dobra6.png" alt=""
                height="350">
        </div>
    </div>

    <div class="card-4 d-flex container my-1 my-lg-5" v-motion-slide-visible-once-left :duration="800">
        <div class="img-3 col-12 col-lg-6 d-flex">
            <img class="img m-auto" src="https://www.menin.com.br/wp-content/uploads/2024/04/img_dobra7.png" alt=""
                height="300">
        </div>
        <div class="texto-3 col-12 col-lg-6 d-flex flex-column justify-content-center p-5" v-motion-slide-visible-once-right :duration="1200">
            <h1 class="titulo">Compromisso com a Excelência</h1>
            <p class="texto">A implementação do “Programa de Qualidade Total” é apenas uma parte de nossa filosofia de
                negócios, que visa a satisfação total dos nossos clientes. <br>
                Esse programa encapsula nossa missão de superar expectativas e solidificar o sucesso de cada
                empreendimento.</p>
        </div>
    </div>
</template>

<style scoped>
.titulo {
    color: #1F285A;
    line-height: 35px;
}

.texto {
    color: gray;
}

.img {
    width: 100%;
    height: auto;
}

.img-card-2 {
    width: 580px;
}

@media (max-width: 900px) {
    .card-1, .card-2, .card-3, .card-4 {
        flex-direction: column;
        text-align: center;
    }

    .card-1 .texto-1, .card-2 .texto-2, .card-3 .texto-3, .card-4 .texto-3 {
        order: 2; /* Garante que o texto sempre fique abaixo da imagem */
    }

    .card-1 .img-1, .card-2 .img-2, .card-3 .img-3, .card-4 .img-3 {
        order: 1; /* Garante que a imagem sempre fique acima do texto */
    }
}
</style>
