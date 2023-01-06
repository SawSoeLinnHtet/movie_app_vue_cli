import { defineStore } from "pinia";
import axios from "axios";

export const useMoviesStore = defineStore('movies', {
  state() {
    return {
      data: {},
      details: {},
      videos: [],
      video: null
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
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.VUE_APP_MOVIE_API_KEY}`
        )
        .then((res) => (this.details = res.data))
    },
    getVideos(id) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.VUE_APP_MOVIE_API_KEY}`
        )
        .then(
          (res) =>
          (
            this.videos = res.data.results.filter((video) => video.type == "Trailer")
          )
        )
    }
  },
  getters: {
    randomTrailer() {
      this.video = this.videos[Math.floor(Math.random() * this.videos.length)]
    }
  }
})