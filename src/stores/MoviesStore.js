import { defineStore } from "pinia";
import axios from "axios";

export const useMoviesStore = defineStore('movies', {
  state() {
    return {
      data: {},
      details: {}
    }
  },
  actions: {
    getMovies(page) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.VUE_APP_MOVIE_API_KEY}&&page=${page}`
        )
        .then((res) => (this.data = res.data))
    },
    getMovieById(id) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${ id }?api_key=${ process.env.VUE_APP_MOVIE_API_KEY }`
        )
        .then((res) => (this.details = res.data))
        .then((res) => (console.log(res.data)))
    }
  },
})