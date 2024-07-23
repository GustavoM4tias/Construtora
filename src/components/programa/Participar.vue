<script setup>
</script>

<template>
    <div class="container d-flex p-5">
        <div class="card-1 col-lg-6 col-12 p-lg-5 p-sm-2 m-auto" v-motion-slide-visible-once-left :duration="400">
            <h1 class="titulo">Como Participar?</h1>
            <p class="texto">Para se candidatar a qualquer um desses programas, é necessário que a renda familiar se enquadre nas faixas estipuladas por cada programa.</p>
            <p class="texto">Além disso, é importante considerar o limite do valor do imóvel que deseja adquirir, garantindo que esteja dentro dos parâmetros do programa escolhido.</p>
        </div>
        <div class="card-2 col-lg-6 col-12" v-motion-slide-visible-once-right :duration="400">
            <img src="https://www.menin.com.br/wp-content/uploads/2024/04/Minha-casa.png" alt="" class="card-img">
        </div>
    </div>

</template>

<style scoped>

@media only screen and (max-width: 1000px) {
    .container {
        flex-direction: column;
    }
}
</style>
