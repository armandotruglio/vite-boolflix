<script>
import SeriesCard from './SeriesCard.vue';
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    components: {
        SeriesCard,
    }
}
</script>

<template>
    <h1>MAIN SERIES LIST</h1>
    <div class="container">
        <div class="row">
            <SeriesCard v-for="series in store.seriesList" :key="series.id" :series="series" />
        </div>
    </div>
</template>

<style scoped></style>