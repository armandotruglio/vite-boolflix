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
    <div class="container">
        <div class="row">
            <FilmCard v-for="film in store.filmList" :key="film.id" :film="film" />
        </div>
    </div>
</template>

<style scoped></style>