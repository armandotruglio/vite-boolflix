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
    }
}
</script>

<template>
    <h1>{{ film.title }}</h1>
    <h2>{{ film.original_title }}</h2>
    <h3>{{ film.original_language }}</h3>
    <h4>{{ film.vote_average }}</h4>
</template>

<style scoped></style>