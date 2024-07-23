<script setup>

</script>

<template>
    <div class="container-fluid banner text-light d-flex">

        <div class="filter"></div>
        <div class="textos container m-auto">
            <span class="texto">UMA HISTÓRIA DE EXCELÊNCIA E INOVAÇÃO</span>
            <h1 class="titulo">Sobre a Menin</h1>
        </div>
    </div>

</template>

<style scoped>
.banner {
    min-height: 40vh;
    background-image: url('../../assets/image/montana.jpg');
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
    font-size: 1.2vw;
    line-height: .9;
}


@media screen and (max-width: 900px) {
    .titulo {
        font-size: 4vh;
    }

    .texto {
    font-size: 1.4vh;
    line-height: .9;
}
}
</style>