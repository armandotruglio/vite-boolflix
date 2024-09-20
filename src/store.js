import { reactive } from "vue";

export const store = reactive({
    filmList: [],
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=0c9fae2dd30fdb2035df8fc572ab1e45",
})