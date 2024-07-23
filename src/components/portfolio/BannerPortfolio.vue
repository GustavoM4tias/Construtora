<script setup>
</script>

<template>
    <div>
        <div class="container-fluid banner text-light d-flex position-relative">
            <div class="filter"></div>
            <div class="textos container text-light">
                <span class="texto-1">Cada Projeto, Uma História de Sucesso</span>
                <h1 class="titulo">Explore Nosso Portfólio</h1>
                <p class="texto-2">Desde residências acolhedoras até espaços comerciais inovadores e projetos de infraestrutura que transformam cidades, nosso portfólio é um testemunho do nosso compromisso com excelência e inovação.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>

.banner {
    min-height: 40vh;
    background-image: url(https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
}

.filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5); 
    z-index: 1;
}

.textos {
    position: relative;
    z-index: 2;
    text-align: center;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}



.titulo {
    font-size: 4vw;
    font-weight: bolder;
    line-height: .9;
}

.texto-1,
.texto-2 {
    font-size: 1.2vw;
    line-height: .9;
}

@media screen and (max-width: 900px) {
    .titulo {
        font-size: 4vh;
    }

    .texto-1,
    .texto-2 {
        font-size: 1.6vh;
    }
}
</style>
