<script setup>

</script>

<template>
    <div class="container py-5">
        <div class="container-fluid d-flex rounded-5 shadow">
            <div class="card-1 p-5 d-flex flex-column justify-content-center text-start">
                <div class="textos px-lg-5 px-sm-0">
                    <h1 class="titulo fw-bold fs-1">Gostou de algum imóvel?</h1>
                    <p class="texto fw-light">Se você quer conversar sobre a disponibilidade de alguns dos imóveis do
                        nosso portfólio ou deseja mais informações, nossos corretores estão à disposição para atendê-lo.
                    </p>
                </div>
                <div class="btn-simulacao py-2 px-lg-5 px-sm-0">
                    <RouterLink class="btn btn-success p-3 fs-5" to="/contato">Falar com um corretor</RouterLink>
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
    background-image: url(https://www.menin.com.br/wp-content/uploads/2024/05/img_dobra3.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0 30px 30px 0;
}

.titulo {
    color: rgb(255, 255, 255);
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

    .texto {
        font-size: 1.6vh;
    }
}
</style>
