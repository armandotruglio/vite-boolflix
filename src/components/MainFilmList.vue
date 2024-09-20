<script>
import FilmCard from './FilmCard.vue';
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    components: {
        FilmCard,
    }
}
</script>

<template>
    <h1>MAIN FILM LIST</h1>
    <FilmCard v-for="film in store.filmList" :key="film.id" :film="film" />
</template>

<style scoped></style>