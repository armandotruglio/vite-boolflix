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
        }
    }
}
</script>

<template>
    <div class="col-12">
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
                <span>Voto: {{ film.vote_average }}</span>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>