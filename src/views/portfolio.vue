<script setup>
import { ref, onMounted } from 'vue';
import BannerPortfolio from '../components/portfolio/BannerPortfolio.vue';
import CardPortfolio from '../components/portfolio/CardPortfolio.vue';

const cards = ref([]);

onMounted(async () => {
    try {
        const response = await fetch('/cards.json');
        cards.value = await response.json();
    } catch (error) {
        console.error('Error loading cards:', error);
    }
});
</script>

<template>
    <BannerPortfolio />
    <div>
        <div class="container card-container py-5 my-lg-5">
            <CardPortfolio class="mb-5" v-for="card in cards" :key="card.name" :name="card.name" :type="card.type"
                :location="card.location" :imageUrl="card.imageUrl" />
        </div>
    </div>
</template>

<style scoped>
.card-container {
    display: flex;
    flex-wrap: wrap;
}

.card-container > * {
    flex: 1 1 33%; 
    max-width: 32%;
}

@media (max-width: 1400px) {
    .card-container > * {
        flex: 1 1 50%; 
        max-width: 45%;
    }
}

@media (max-width: 1000px) {
    .card-container > * {
        flex: 1 1 100%; 
        max-width: 100%;
    }
}
</style>
