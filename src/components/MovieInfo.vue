<template>
  <div class="container max-w-screen-lg ml-auto mr-auto">
    <div class="w-full p-4 m-2 border bg-gray-50">
      <div class="flex align-center justify-center">
        <h1 class="text-xl font-bold p-2 mb-2 flex-grow text-center">
          {{ movie.Title }}
        </h1>
        <button @click="addToFavourite(movie.imdbID)" class="w-10">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              class="
                ipc-icon ipc-icon--star-border
                UserRatingButton__UnratedIcon-sc-1era525-4
                lfNwIr
              "
              viewBox="0 0 24 24"
              :fill="movie._isFav ? '#ff2026' : 'gray'"
              role="presentation"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path
                d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
              ></path>
            </svg>
          </div>
        </button>
      </div>
      <div class="flex flex-col sm:flex-row">
        <div class="min-w-1/4 h-full">
          <img :src="movie.Poster" alt="" class="h-full" />
          <a
            :href="'https://www.imdb.com/title/' + movie.imdbID"
            target="_blank"
            class="block p-3 border-2 border-solid rounded-3xl border-gray-300	mt-5 text-center font-bold"
          >
            IMBD
          </a>
        </div>
        <ul class="info flex flex-col pl-5">
          <li class="flex flex-row p-2 text-sm">
            <span class="min-w-1/4 max-w-1/4 flex-wrap pr-2">Год производства</span>
            <span>{{ movie.Year }}</span>
          </li>
          <li class="flex flex-row p-2 text-sm">
            <span class="min-w-1/4 max-w-1/4 flex-wrap pr-2">Страна</span>
            <span>{{ movie.Country }}</span>
          </li>
          <li class="flex flex-row p-2 text-sm">
            <span class="min-w-1/4 max-w-1/4 flex-wrap pr-2">Жанр</span>
            <span>{{ movie.Genre }}</span>
          </li>
          <li class="flex flex-row p-2 text-sm">
            <span class="min-w-1/4 max-w-1/4 flex-wrap pr-2">Режиссер</span>
            <span>{{ movie.Director }}</span>
          </li>
          <li class="flex flex-row p-2 text-sm">
            <span class="min-w-1/4 max-w-1/4 flex-wrap pr-2">Сценарий</span>
            <span>{{ movie.Writer }}</span>
          </li>
          <li class="flex flex-row p-2 text-sm">
            <span class="min-w-1/4 max-w-1/4 flex-wrap pr-2">Премьера</span>
            <span>{{ movie.Released }}</span>
          </li>
          <li class="flex flex-row p-2 text-smap">
            <span class="min-w-1/4 max-w-1/4 flex-wrap pr-2">Сюжет</span>
            <span>{{ movie.Plot }}</span>
          </li>
          <li class="flex flex-row p-2 text-sm">
            <span class="min-w-1/4 max-w-1/4 flex-wrap pr-2">Рейтинг IMDb</span>
            <span>{{ movie.imdbRating }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { MOVIE_FAVE } from '../store/mutations.type';

export default {
  props: {
    movie: { type: Object },
  },
  methods: {
    addToFavourite(imdbID) {
      this.$store.dispatch(MOVIE_FAVE, imdbID);
    },
  },
};
</script>
