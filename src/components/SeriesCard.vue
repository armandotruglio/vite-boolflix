<script>
export default {
    data() {
        return {

        }
    },
    props: {
        series: {
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
        <img :src="getImgUrl(series.poster_path)" alt="boh">
        <ul>
            <li>
                <h3>Titolo: {{ series.name }}</h3>
            </li>
            <li>
                <span>Titolo originale: {{ series.original_name }}</span>
            </li>
            <li>
                <img :src="getFlag(series.original_language)" :alt="series.original_language">
            </li>
            <li>
                <span>Voto:
                    <i v-for="star in getStarsVote(series.vote_average)" class="bi-solid bi-star-fill"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>