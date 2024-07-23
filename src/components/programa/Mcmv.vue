<script setup>
</script>

<template>
    <div class="container-fluid">
        <div class="container py-5">
            <h1 class="titulo text-center pb-4 pt-2">Minha Casa, Minha Vida</h1>
            <div class="cards d-flex">
                <div class="card-1 px-5 py-4 rounded-4 col-lg-4 col-sm-12 d-flex flex-column" v-motion-slide-visible-once-bottom :duration="600">
                    <div class="textos m-auto">
                        <h2>Faixas de Renda</h2>
                        <p>Faixa 1: Para famílias com renda bruta mensal de até R$ 2.640, oferecendo subsídio de até R$
                            55.000.</p>
                        <p>Faixa 2: Destinada a famílias com renda bruta mensal entre R$ 2.640,01 e R$ 4.400, com
                            subsídio que também pode chegar a R$ 55.000.</p>
                        <p>Faixa 3: Abrange famílias com renda bruta mensal entre R$ 4.400,01 e R$ 8.000.</p>
                    </div>
                </div>
                <div class="card-2 d-flex px-5 col-lg-5 col-sm-12" v-motion-slide-visible-once-bottom :duration="1200">
                    <div class="textos m-auto">
                        <h3>Taxas de Juros por Faixa de Renda</h3>
                        <p>Varia conforme a região e se o mutuário é cotista do FGTS, com as menores taxas históricas
                            aplicadas.</p>
                        <h3>Limite do Valor do Imóvel</h3>
                        <p>O limite varia de acordo com a região e o tamanho da população do município, ajustado para
                            refletir o cenário atual do mercado imobiliário.</p>
                    </div>
                </div>

                <div class="card-3 col-lg-3 col-sm-12 d-flex" v-motion-slide-visible-once-bottom :duration="1600">
                </div>
            </div>

        </div>
    </div>

</template>

<style scoped>

.card-1 {
    border: 3px solid rgba(25, 25, 200, 0.6);
}

.card-3 {
    background-image: url(https://www.menin.com.br/wp-content/uploads/2024/04/Minha-casa-minha-vida.png);
    background-position: center center;
    background-repeat: no-repeat;
}

@media only screen and (max-width: 1000px) {

    .cards {
        flex-direction: column;
    }

    .card-1,
    .card-2,
    .card-3 {
        padding: 50px 0 50px 0;
    }

    .card-3 {
        padding: 150px;
    }

}
</style>
