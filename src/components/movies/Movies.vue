<template>
  <section class="movies-list">
    <div class="heading m-0 p-3">
      <h2 class="text-dark">Trending Movies</h2>
      <span class="d-block text-lime text-center mt-3 mb-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex suscipi
      </span>
    </div>
    <div class="container px-sm-3 px-md-3 ">
      <movie-pagination
        :totalPages=movies.data.total_pages
        :currentPage=movies.data.page
        :perPage=20
        @pageChanged="onPageChange"
      />
      <div class="row">
        <movie-card :movies="movies.data.results"/>
      </div>
      <movie-pagination
        :totalPages=movies.data.total_pages
        :currentPage=movies.data.page
        :perPage=20
        @pageChanged="onPageChange"
      />
    </div>
  </section>
</template>

<script>
  import MovieCard from './MovieCard.vue'
  import MoviePagination from './MoviePagination.vue'
  import { useMoviesStore } from '@/stores/MoviesStore';

  export default {
    components: {
      MovieCard,
      MoviePagination,
    },
    setup() {
      const movies = useMoviesStore();

      return { movies }
    },
    created() {
      this.movies.getMovies()
      console.log("created")
    },
    mounted() {
      console.log("mounted")
    },
    methods: {
      onPageChange(page) {
        console.log(page)
        this.movies.getMovies(page)
      }
    },
  };  
</script>