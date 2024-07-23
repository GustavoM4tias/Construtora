<script setup>

</script>

<template>
    <div class="container py-5">
        <div class="container-fluid d-flex rounded-5 shadow">
            <div class="card-1 p-lg-5 p-sm-5 px-4 d-flex flex-column justify-content-center text-start">
                <div class="textos px-lg-5 px-sm-0">
                    <h1 class="titulo fw-bold mb-4">Descubra o que nos torna únicos no setor...</h1>
                    <p class="texto fw-light">E como continuamos a moldar o futuro da construção civil com integridade, inovação e um compromisso inabalável com a qualidade.
                    </p>
                </div>
                <div class="btn-simulacao py-2 px-lg-5 px-sm-0">
                    <RouterLink class="btn btn-success p-3 fw-bold fs-6" to="/portfolio">Conheça o nosso Portfólio</RouterLink>
                </div>
            </div>

            <div class="card-2">
            </div>
        </div>
    </div>
</template>


<style scoped>
.container-fluid {
    padding: 0 !important;
    height: auto;
    display: flex;
    flex-direction: row;
    background-color: rgb(5, 11, 95);
}

.card-1 {
    height: 50vh;
    width: 50%;
}

.card-2 {
    height: 50vh;
    width: 50%;
}

.card-2 {
    background-image: url(https://www.menin.com.br/wp-content/uploads/2024/05/Retangulo-4-copiar.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0 30px 30px 0;
}

.titulo {
    color: rgb(255, 255, 255);
    line-height: .9;
    font-size: 2.6vw;
}

.texto {
    color: rgb(255, 255, 255);
    line-height: 1;
    font-size: 1.1vw;
}


@media only screen and (max-width: 1000px) {
    .container-fluid {
        flex-direction: column;
    }

    .card-1 {
        height: 35vh;
        width: 100%;
    }

    .card-2 {
        height: 30vh;
        width: 100%;
        border-radius: 0 0 30px 30px;
    }

    .titulo {
        font-size: 3.5vh;
    }

    .texto {
        font-size: 1.7vh;
    }

}
</style>
