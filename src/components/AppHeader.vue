<script>
import HeaderSearch from './HeaderSearch.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        HeaderSearch,
    },
    methods: {
        emitClick(filter) {
            this.$emit("titleSearched", filter);
        }
    }
}
</script>

<template>
    <HeaderSearch @buttonClicked="emitClick" />
</template>

<style scoped></style>