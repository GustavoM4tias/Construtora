<script setup>
import cardLar from './CardLar.vue'
</script>

<template>
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active px-2 px-lg-3"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class="px-2 px-lg-3"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" class="px-2 px-lg-3"
        aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" class="px-2 px-lg-3"
        aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" class="px-2 px-lg-3"
        aria-label="Slide 5"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" class="px-2 px-lg-3"
        aria-label="Slide 6"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" class="px-2 px-lg-3"
        aria-label="Slide 7"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" class="px-2 px-lg-3"
        aria-label="Slide 8"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" class="px-2 px-lg-3"
        aria-label="Slide 9"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" class="px-2 px-lg-3"
        aria-label="Slide 10"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="10" class="px-2 px-lg-3"
        aria-label="Slide 11"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://www.menin.com.br/wp-content/uploads/2024/06/Topo_site_abre-2.jpg" class="image"
          alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://www.menin.com.br/wp-content/uploads/2024/03/MEN_Urban_Portaria_R00_Final-scaled.jpg"
          class="image-banner" alt="...">
        <div class="carousel-caption d-md-block" v-motion-slide-visible-once-bottom :duration="800">
          <h1 class="titulo">Urban Esmeraldas</h1>
          <p class="texto">A exclusividade que você merece em Marília</p>
          <button class="btn btn-primary fs-5">Surpreenda-se</button>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://www.menin.com.br/wp-content/uploads/2024/03/Fachada_Mond_High_6564e584c80ae.jpeg" class="image-banner"
          alt="...">
        <div class="carousel-caption d-md-block" v-motion-slide-visible-once-bottom :duration="800">
          <h1 class="titulo">Menin Mond</h1>
          <p class="texto">O novo conceito de Sofisticação</p>
          <button class="btn btn-primary fs-5">Surpreenda-se</button>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://www.menin.com.br/wp-content/uploads/2023/12/FACHADA-1-DON-ADHARA_6526995f3064a.png"
          class="image-banner" alt="...">
        <div class="carousel-caption d-md-block" v-motion-slide-visible-once-bottom :duration="800">
          <h1 class="titulo">Adhara Star Club</h1>
          <p class="texto">Um novo padrão de vida te espera na região próxima ao Marília Shopping</p>
          <button class="btn btn-primary fs-5">Surpreenda-se</button>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://www.menin.com.br/wp-content/uploads/2024/06/topo-piscinas.jpeg" class="image-banner"
          alt="...">
        <div class="carousel-caption d-md-block" v-motion-slide-visible-once-bottom :duration="800">
          <h1 class="titulo">Wish</h1>
          <p class="texto">Seu novo desejo</p>
          <button class="btn btn-primary fs-5">Surpreenda-se</button>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://www.menin.com.br/wp-content/uploads/2024/06/imagens-5-.jpeg" class="image-banner" alt="...">
        <div class="carousel-caption d-md-block" v-motion-slide-visible-once-bottom :duration="800">
          <h1 class="titulo">Drumond Residencial</h1>
          <p class="texto">Uma conbinação perfeita de conforto, segurança e localização privilegiada!</p>
          <button class="btn btn-primary fs-5">Surpreenda-se</button>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://www.menin.com.br/wp-content/uploads/2024/07/FachadaFinal-edit2.jpeg" class="image-banner"
          alt="...">
        <div class="carousel-caption d-md-block" v-motion-slide-visible-once-bottom :duration="800">
          <h1 class="titulo">Santa Madalena</h1>
          <p class="texto">Casa de 2 quartos em ótima localização anexo ao Bairro Cavalari.</p>
          <button class="btn btn-primary fs-5">Surpreenda-se</button>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://www.menin.com.br/wp-content/uploads/2024/06/fachada_nova_3.jpeg" class="image-banner"
          alt="...">
        <div class="carousel-caption d-md-block" v-motion-slide-visible-once-bottom :duration="800">
          <h1 class="titulo">Terras de São Paulo <br> Fase 2</h1>
          <p class="texto">Casa de 2 quartos em ótima localização anexo ao Bairro Cavalari.</p>
          <button class="btn btn-primary fs-5">Surpreenda-se</button>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://www.menin.com.br/wp-content/uploads/2024/06/FachadaFinal-edit2-copiar.jpeg"
          class="image-banner" alt="...">
        <div class="carousel-caption d-md-block" v-motion-slide-visible-once-bottom :duration="800">
          <h1 class="titulo">Residencial Jardim Marina <br> Fase 3</h1>
          <p class="texto">Casa de 2 quartos em ótima localização anexo ao Bairro Cavalari.</p>
          <button class="btn btn-primary fs-5">Surpreenda-se</button>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://www.menin.com.br/wp-content/uploads/2024/05/view360.jpg"
          class="image-banner" alt="...">
        <div class="carousel-caption d-md-block" v-motion-slide-visible-once-bottom :duration="800">
          <h1 class="titulo">View 360</h1>
          <p class="texto">O primeiro empreendimento inteligente de Marília...</p>
          <button class="btn btn-primary fs-5">Surpreenda-se</button>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://www.menin.com.br/wp-content/uploads/2024/06/topo_horizon-1.jpg" class="image-banner"
          alt="...">
        <div class="carousel-caption d-md-block" v-motion-slide-visible-once-bottom :duration="800">
          <h1 class="titulo">Horizon</h1>
          <p class="texto">O primeiro empreendimento inteligente de Marília...</p>
          <button class="btn btn-primary fs-5">Surpreenda-se</button>
        </div>
      </div>
      <button class="botão carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
      </button>
      <button class="botão carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span class="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
      </button>
    </div>
  </div>
  <div class="cardLar2 pt-5">
    <cardLar class="col-8 m-auto shadow" v-motion-slide-visible-once-right :duration="400" />
  </div>
</template>

<style scoped>
#carouselExampleCaptions {
  width: 100vw;
}

.image,
.image-banner {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  object-fit: cover;
  filter: brightness(70%);
}

.image {
  filter: brightness(90%)!important;
}

.carousel-inner {
  height: 80vh;
  position: relative;
  display: flex;
  align-items: center;
}

.carousel-item {
  height: 80vh;
}

.carousel-caption {
  text-align: start;
  position: absolute;
  top: 40%;
  left: 5%;
  width: 100%;
  padding: 30px;
  color: #fff;
}

.titulo {
  font-size: 4vw;
  font-weight: bolder;
  line-height: .8;
  width: 85%;
}

.texto {
  font-size: 1.2vw;
  line-height: .9;
  width: 50%;
}



.cardLar1 {
  display: inherit !important;
}

.cardLar2 {
  display: none !important;
}

@media screen and (max-width: 900px) {

  .cardLar1 {
    display: none !important;
  }

  .cardLar2 {
    display: none !important;
    /* Mudar para block quando quiser o card */
  }

  .banner {
    padding: 25px;
  }

  .titulo {
    font-size: 5vh;
    width: 100%;
  }

  .texto {
    font-size: 2vh;
    width: 85%;
  }

  .carousel-caption {
    top: 35%;
    width: 90%;
  }
}
</style>