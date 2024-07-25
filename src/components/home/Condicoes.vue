<script setup>

</script>

<template>
    <div class="container-fluid d-flex">
        <div class="card-1 p-5 ms-lg-5 d-flex flex-column justify-content-center text-start">
            <div class="textos px-lg-5 px-sm-0">
                <h2 class="titulo fw-bold fs-1">Condições Facilitadas <br> para o Seu Novo Lar</h2>
                <span class="subtitulo fs-5"> Realize o sonho do seu lar com a Menin </span>
                <p class="texto fs-5">Na Menin, entendemos a importância de facilitar o caminho<br>
                    para você alcançar o sonho do lar próprio. Por isso, oferecemos condições<br>
                    especiais que tornam a compra do seu imóvel mais acessível e sem complicações.</p>
            </div>
            <div class="textos-icone px-lg-5 px-sm-0">
                <p class="icones-text"><i class="bi bi-check-circle-fill"></i> Utilize seu FGTS</p>
                <p class="icones-text"><i class="bi bi-check-circle-fill"></i> Programa Minha Casa, Minha Vida</p>
                <p class="icones-text"><i class="bi bi-check-circle-fill"></i> Financiamento pela Caixa</p>
            </div>
            <div class="btn-simulacao px-lg-5 px-sm-0">
                <RouterLink class="btn btn-success p-3" to="/simulador">Faça uma simulação aqui!</RouterLink>
            </div>
        </div>

        <div class="card-2">
        </div>
    </div>
</template>


<style scoped>
.container-fluid {
    padding: 0 !important;
    height: auto;
    min-width: 100vw;
    display: flex;
    flex-direction: row;
    background-color: rgb(239, 241, 241);
}

.card-1,
.card-2 {
    width: 50%;
}

.card-2 {
    background-image: url(https://www.menin.com.br/wp-content/uploads/2024/06/Objeto-Inteligente-de-Vetor.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

.titulo {
    color: rgb(10, 10, 100);
    line-height: .9;
}

.subtitulo {
    color: rgb(10, 10, 140);
    line-height: 2;
}

.texto {
    color: rgb(130, 130, 130);
    line-height: .9;
    font-size: 1.2vw;
}

.textos-icone {
    color: rgb(10, 10, 180);
}

@media only screen and (max-width: 1000px) {
    .container-fluid {
        flex-direction: column;
    }

    .card-1,
    .card-2 {
        width: 100%;
    }

    .texto {
        color: rgb(130, 130, 130);
        line-height: .9;
        font-size: 1.5vh;
    }

}
</style>
