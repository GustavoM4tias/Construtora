<script setup>

</script>

<template>
    <div class="container-fluid banner text-light d-flex">
        <div class="filter"></div>
        <div class="textos container m-auto">
            <h1 class="titulo">Minha Casa, Minha Vida</h1>
            <p class="texto">Na busca pela casa própria, entender os detalhes dos programas habitacionais disponíveis é crucial.</p>
            <p class="texto">Aqui, detalhamos as informações sobre os programas “Minha Casa Minha Vida”, focando em faixas de renda, renda bruta e limites de valor do imóvel.</p>
        </div>
    </div>

</template>

<style scoped>
.banner {
    min-height: 40vh;
    background-image: url(https://www.menin.com.br/wp-content/uploads/2024/06/imagens-5-.jpeg);
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

.texto {
    font-size: 1.1vw;
    line-height: .95;
    width: 85%;
    margin: auto;
}

@media screen and (max-width: 900px) {
    .titulo {
        font-size: 4vh;
    }

    .texto {
        font-size: 1.5vh;
        width: 90%;
    }

}
</style>