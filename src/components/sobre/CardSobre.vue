<script setup>
import Contador from './Contador.vue'
</script>

<template>

    <div class="container-fluid d-flex">

        <div class="card-1 col-lg-6 col-12 py-3 d-flex justify-content-end">

            <div class="cards d-flex">

                <div class="card-sede-1 d-flex rounded-5 col-lg-6 col-12 m-auto" v-motion-slide-visible-once-bottom :duration="400">
                    <div class="textos-card-1 text-center mt-auto rounded-5 p-2 text-white">
                        <h2 class="titulo-card text-start ms-2 m-0">Sede Marília</h2>
                        <p class="local-card text-start ms-2 m-0"><i class="bi bi-geo-alt-fill"></i> Marília/SP</p>
                        <p class="text-card fw-light pt-2 ">Ponto estrategico no interior de Sao Paulo, refletindo nossa
                            capacidade de atuaçao diversificada e abrangente. </p>
                    </div>
                </div>

                <div class="card-sede-2 d-flex rounded-5 col-lg-6 col-12" v-motion-slide-visible-once-bottom :duration="600">
                    <div class="textos-card-2 text-center mt-auto rounded-5 p-2 text-white">
                        <h2 class="titulo-card text-start ms-2 m-0">Sede Moema</h2>
                        <p class="local-card text-start ms-2 m-0"><i class="bi bi-geo-alt-fill"></i> São Paulo/SP</p>
                        <p class="text-card fw-light pt-2">Coraçao financeiro e cultural do Brasil, onde planejams e
                            gerenciamos nossos projetos mais ambiciosos. </p>
                    </div>
                </div>

            </div>

        </div>



        <div class="card-2 py-5 mt-auto col-lg-6 col-12 d-flex flex-column" v-motion-slide-visible-once-right :duration="600">

            <div class="textos-contador mt-5 pt-5 ps-5 ms-5">
                <h4 class="titulo">Desde 1986, a Menin se destaca no mercado da construção civil, entregando mais do que
                    apenas obras: entregamos sonhos.</h4>
                <p class="texto">Com mais de 3.000.000m² construídos e 80.000 unidades entregues, nossa jornada é
                    marcada pela dedicação à excelência, inovação e um compromisso inabalável com a qualidade.</p>
            </div>

            <Contador />

        </div>

    </div>

</template>

<style scoped>
.card-sede-1 {
    width: 350px;
    height: 500px;
    box-shadow: 0px -180px 250px inset rgba(1, 5, 50, 0.9),
        0px 5px 15px rgba(0, 0, 0, 0.3);
    background-image: url(../../assets/image/marilia.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: .2s;
}

.card-sede-2 {
    width: 320px;
    height: 470px;
    margin: auto auto auto 30px;
    box-shadow: 0px -180px 250px inset rgba(1, 5, 50, 0.9),
        0px 5px 15px rgba(0, 0, 0, 0.3);
    background-image: url(../../assets/image/moema.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: .2s;
    margin: auto auto auto 30px;
}

.card-sede-1:hover,
.card-sede-2:hover {
    box-shadow: 0px -150px 150px inset rgba(1, 5, 53, 0.9),
        0px 5px 10px rgba(0, 0, 0, 0.6);
    transform: scale(1.02);
    transition: .2s;
}

.textos-contador {
    width: 70%;
}

.contador {
    margin-top: -50px;
}

.titulo {
    font-size: 2vw;
    font-weight: 400;
    color: rgb(10, 10, 100);
    line-height: .9;
}

.texto {
    font-size: 1vw;
    color: gray;
}

@media screen and (max-width: 1000px) {
    .container-fluid {
        flex-direction: column;
    }

    .cards {
        flex-direction: column;
        padding-top: 60px;
    }

    .card-1 {
        justify-content: center !important;
    }

    .card-sede-2 {
        margin: 30px auto auto auto;
    }

    .textos-contador {
        width: 100%;
        margin: 0 !important;
        padding: 0 20px 0 20px !important;
        text-align: center;
    }

    .contador {
        justify-content: center !important;
        margin-top: 0px;
    }

    .titulo {
        font-size: 3vh;
    }

    .texto {
        font-size: 1.5vh;
    }
}
</style>