<template>
    <div class="max-w-screen-lg	flex mr-auto ml-auto flex-wrap justify-between">
        <div v-if="isLoading">...</div>
        <div v-if="!movies.length && !isLoading">NO MOVIES FOUND</div>
        <div v-for="movie in movies" :key="movie.imdbID">
            <MovieItem :movie="movie"/> 
        </div> 
    </div>
   
</template>

<script>
import MovieItem from './MovieItem.vue'

export default {
    components: {
        MovieItem,
    },
    computed: {
        movies() {
            return this.$store.state.movies.data;
        },
        isLoading() {
            return this.$store.state.movies.isLoading;
        }
    },
};
</script>
