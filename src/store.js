import { reactive } from "vue";

export const store = reactive({
    filmList: [],
    seriesList: [],
    apiFilmUrl: "https://api.themoviedb.org/3/search/movie?api_key=0c9fae2dd30fdb2035df8fc572ab1e45",
    apiSeriesUrl: "https://api.themoviedb.org/3/search/tv?api_key=0c9fae2dd30fdb2035df8fc572ab1e45&language=it_IT",
})