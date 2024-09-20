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
                zh: 'cn'
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
                {{ film.title }}
            </li>
            <li>
                {{ film.original_title }}
            </li>
            <li>
                <img :src="getFlag(film.original_language)" :alt="film.original_language">
            </li>
            <li>
                {{ film.vote_average }}
            </li>
        </ul>
    </div>
</template>

<style scoped></style>