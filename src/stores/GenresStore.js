import axios from 'axios'
import { defineStore } from 'pinia'

export const useGenresStore = defineStore('Genres', {
  state() {
    return {
      genres: {},
    }
  },
  actions: { 
    getGenres() {
      axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.VUE_APP_MOVIE_API_KEY}&language=en-US`
      ).then((res)=>(this.genres = res.data.genres))
    }
  }
})
