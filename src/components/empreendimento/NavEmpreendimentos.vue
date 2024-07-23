<script setup>

</script>

<template>
    <div class="button-container d-flex pb-3 pt-5 px-3 align-items-center justify-content-around flex-wrap">
        <div>
            <select class="form-select">
                <option selected>Todas as Cidades</option>
                <option value="1">teste</option>
                <option value="2">teste</option>
                <option value="3">teste</option>
            </select>
        </div>
        <button class="btn border-0">Todas</button>
        <button class="btn border-0">Lançamentos</button>
        <button class="btn border-0">Em Obras</button>
        <button class="btn border-0">Prontos para Morar</button>
        <button class="btn border-0">Vendas</button>
    </div>
</template>


<style scoped>

.form-select,
.btn {
    border-color: rgb(26, 11, 170);
    color: rgb(26, 11, 170);
}

@media screen and (max-width: 900px) {
    .button-container > div, .button-container > button {
        flex: 1 1 45%;
        margin-bottom: 10px;
    }
    .button-container > .me-4 {
        margin-right: 0!important;
    }
}
</style>
