<script>
export default {
    data() {
        return {

        }
    },
    props: {
        film: {
            type: Object,
            required: true,
        }
    },
    methods: {
        getFlag(languageCode) {
            const missingFlag = {
                en: 'gb',
                ja: 'jp',
                zh: 'cn',
            }
            const countryCode = missingFlag[languageCode] ? missingFlag[languageCode] : languageCode;

            return `https://flagsapi.com/${countryCode.toUpperCase()}/flat/64.png`
        },
        getImgUrl(url) {
            return `https://image.tmdb.org/t/p/w342/${url}`;
        },
        getStarsVote(vote) {
            const stars = [];
            const starsNum = Math.round(vote / 2);

            for (let i = 0; i < starsNum; i++) {
                stars.push('star')
            }
            return stars;
        }
    }
}
</script>

<template>
    <div class="col-12">
        <img :src="getImgUrl(film.poster_path)" alt="boh">
        <ul>
            <li>
                <h3>Titolo: {{ film.title }}</h3>
            </li>
            <li>
                <span>Titolo originale: {{ film.original_title }}</span>
            </li>
            <li>
                <img :src="getFlag(film.original_language)" :alt="film.original_language">
            </li>
            <li>
                <span>Voto:
                    <i v-for="star in getStarsVote(film.vote_average)" class="bi-solid bi-star-fill"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>