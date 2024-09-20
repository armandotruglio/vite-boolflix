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
      axios.get(this.getApiUrl(filmTitle)).then((response) => {
        console.log(response.data.results);
        store.filmList = response.data.results;
      })
    },
    getApiUrl(filmTitle) {
      return `${store.apiUrl}&query=${filmTitle}`
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
