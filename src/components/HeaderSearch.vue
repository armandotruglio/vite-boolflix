<script>
export default {
    data() {
        return {
            filter: "",
        }
    },
    methods: {
        buttonClicked(title) {
            this.$emit("buttonClicked", title);
            this.filter = '';
        }
    }
}
</script>

<template>
    <div class="row g-3">
        <div class="col-auto">
            <input v-model="filter" type="text" @keyup.enter="buttonClicked(filter)" class="form-control"
                id="film-search" placeholder="Cerca Film">
        </div>
        <div class="col-auto">
            <button type="button" class="btn btn-primary mb-3" @click="buttonClicked(filter)">Cerca</button>
        </div>
    </div>
</template>

<style scoped></style>