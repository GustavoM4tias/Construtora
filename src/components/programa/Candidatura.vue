<script setup>

</script>

<template>
    <div class="container py-5">
        <div class="container-fluid d-flex rounded-5 shadow">
            <div class="card-1 p-5 d-flex flex-column justify-content-center text-start">
                <div class="textos px-lg-5 px-sm-0">
                    <h1 class="titulo fw-bold mb-4">Inicie seu Processo de Candidatura</h1>
                    <p class="texto fw-light">Para mais informações, fale com nossos corretores. Eles estão prontos para
                        orientá-lo através de cada etapa, ajudando a tornar o sonho da casa própria uma realidade.
                    </p>
                </div>
                <div class="btn-simulacao py-2 px-lg-5 px-sm-0">
                    <RouterLink class="btn btn-success p-3 fw-bold fs-5" to="/contato">Falar com a Menin</RouterLink>
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
    width: 60%;
}

.card-2 {
    height: 50vh;
    width: 40%;
}

.card-2 {
    background-image: url(https://www.menin.com.br/wp-content/uploads/2024/04/couple-moving-their-new-home.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0 30px 30px 0;
}

.titulo {
    color: rgb(255, 255, 255);
    line-height: .9;
    font-size: 3vw;
}

.texto {
    color: rgb(255, 255, 255);
    line-height: 1;
    font-size: 1.4vw;
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
        font-size: 3vh;
    }

    .texto {
        font-size: 1.5vh;
    }

}
</style>
