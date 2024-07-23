<script setup>
import { ref, onMounted } from 'vue';

const anoAtual = ref(new Date().getFullYear());

onMounted(() => {
  anoAtual.value = new Date().getFullYear();
});
</script>

<template>
  <div class="container-fluid mt-4">
    <footer class="container py-5">
      <div class="row" v-motion-slide-visible-bottom :duration="500">
        <div class="col-12 col-lg-3 mb-3">
          <img src="https://www.menin.com.br/wp-content/uploads/2024/04/logo_slogan_menin.png" height="100px" alt="">
          <ul class="list-unstyled d-flex pt-3">
          <li class="ms-3"><a class="link-dark" href="#"><i class="bi bi-twitter fs-2"></i></a></li>
          <li class="ms-3"><a class="link-dark" href="#"><i class="bi bi-instagram fs-2"></i></a></li>
          <li class="ms-3"><a class="link-dark" href="#"><i class="bi bi-facebook fs-2"></i></a></li>
        </ul>
        </div>

        <div class="col-6 col-lg-2 mb-3">
          <h5>Menus</h5>
          <ul class="nav flex-column">
            <li class="nav-item fw-light"><RouterLink to="" class="nav-link p-0">Empreendimentos</RouterLink></li>
            <li class="nav-item fw-light"><RouterLink to="" class="nav-link p-0">Portfolio</RouterLink></li>
            <li class="nav-item fw-light"><RouterLink to="" class="nav-link p-0">Simulador</RouterLink></li>
            <li class="nav-item fw-light"><RouterLink to="" class="nav-link p-0">Programas</RouterLink></li>
            <li class="nav-item fw-light"><RouterLink to="" class="nav-link p-0">Notícias</RouterLink></li>
            <li class="nav-item fw-light"><RouterLink to="" class="nav-link p-0">Sobre</RouterLink></li>
            <li class="nav-item fw-light"><RouterLink to="" class="nav-link p-0">Contatos</RouterLink></li>
          </ul>
        </div>

        <div class="col-6 col-lg-2 mb-3">
          <h5>Localidades</h5>
          <ul class="nav flex-column">
            <li class="nav-item fw-lighter"><RouterLink to="" class="nav-link p-0">Em São Paulo/SP</RouterLink></li>
            <li class="nav-item mb-2"><RouterLink to="" class="nav-link p-0">Avenida Sei la Oque, 0 - Sala 69 <br> (11) 4002.8922</RouterLink></li>
            <li class="nav-item fw-lighter"><RouterLink to="" class="nav-link p-0">Em Marília/SP</RouterLink></li>
            <li class="nav-item mb-2"><RouterLink to="" class="nav-link p-0">Rua Seu jão, 123 - Centro (14) 4002.8922</RouterLink></li>
          </ul>
        </div>

        <div class="col-lg-3 p-0 pt-sm-4 offset-lg-1 mb-3">
          <div class="card p-4 rounded-5 d-flex flex-column align-items-center justify-content-center">
            <span class="text-light text-center fs-5 px-lg-0 p-2">Se inscreva para receber os lançamentos em primeira mão.</span>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <button class="btn btn-primary px-3 py-2 rounded-3 fs-5 m-auto" type="button">Inscrever-se</button>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex flex-column text-center justify-content-between py-4 my-4 border-top">
        <p>© {{ anoAtual }} Menin Engenharia, Ltda. Todos os direitos reservados.</p>
 
      </div>
    </footer>
  </div>
</template>

<style scoped>

footer {
  background-color: transparent;
}

.container-fluid {
  background-color: rgb(40, 40, 40);
  color: white;
}

a,
i {
  color: white;
}

i:hover {
  color: rgb(56, 56, 192);
}

.card {
  background-color: rgba(100, 100, 100, 0.65);
}
</style>
