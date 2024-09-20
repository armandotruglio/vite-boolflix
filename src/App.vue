<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from './store';

export default {
  data() {
    return {
      store,
    }
  },
  components: {
    AppHeader,
    AppMain
  },
  methods: {
    searchFilm(filmTitle) {
      axios.get(this.getApiFilmUrl(filmTitle)).then((filmResponse) => {
        console.log(filmResponse.data.results);
        store.filmList = filmResponse.data.results;
      });

      axios.get(this.getApiSeriesUrl(filmTitle)).then((seriesResponse) => {
        console.log(seriesResponse.data.results);
        store.seriesList = seriesResponse.data.results;
      });

    },
    getApiFilmUrl(filmTitle) {
      return `${store.apiFilmUrl}&query=${filmTitle}`
    },
    getApiSeriesUrl(filmTitle) {
      return `${store.apiSeriesUrl}&query=${filmTitle}`
    },
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
