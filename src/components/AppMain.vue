<script>
import MainFilmList from './MainFilmList.vue';
import MainSeriesList from './MainSeriesList.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        MainFilmList,
        MainSeriesList,
    }
}
</script>

<template>
    <MainFilmList />
    <MainSeriesList />
</template>

<style scoped></style>