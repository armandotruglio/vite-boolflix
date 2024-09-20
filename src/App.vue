<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';

export default {
  data() {
    return {
      filmList: [],
    }
  },
  components: {
    AppHeader,
    AppMain
  },
  methods: {
    searchFilm(filmTitle) {
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=0c9fae2dd30fdb2035df8fc572ab1e45&query=ritorno+al+futuro").then((response) => {
        console.log(response.data.results);
        this.filmList = response.data.results;
      })
    }
  }
}
</script>

<template>
  <AppHeader @titleSearched="searchFilm" />
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
@use "bootstrap/scss/bootstrap.scss";
</style>
