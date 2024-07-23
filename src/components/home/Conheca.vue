<script setup>
import contador from './Contador.vue'
</script>

<template>
  <div class="container-fluid p-5">
    <div class="container container-1 d-flex flex-column justify-content-center align-items-center">
      <h1 class="titulo pt-5">Conheça a Menin</h1>
      <p class="texto text-center px-5 pt-4 fs-5">Com mais de 38 anos de experiência, a Menin se consolida como uma
        referência no mercado da construção civil, entregando mais que imóveis: entregamos sonhos. Nossa jornada é
        marcada pela paixão em construir espaços que inspiram vidas, transformam cenários e criam memórias
        inesquecíveis.</p>
    </div>
  </div>
  <contador />
</template>

<style scoped>
.container-fluid {
  width: 100%;
}

.titulo {
  font-size: 2.5vw;
  padding: 15px 0 0px 0;
  color: rgb(10, 10, 100);
}

.texto {
  font-size: 1vw;
  color: rgb(130, 130, 130);
  line-height: .9;
}


@media only screen and (max-width: 1000px) {
  .container-fluid {
    padding: 0 !important;
    height: auto !important;
  }

  .titulo {
    font-size: 3vh;
  }

}
</style>