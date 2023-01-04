<template>
  <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-olive mb-2 mb-lg-4  fixed-top overflow-hidden">
        <a class="navbar-brand" href="#">The MOVIE.db</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item px-md-2 px-lg-3">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item px-md-2 px-lg-3">
              <a class="nav-link" @click="flash('This Page is Under Maintainence')">Popular</a>
            </li>
            <li class="nav-item px-md-2 px-lg-3">
              <a class="nav-link" @click="flash('This Page is Under Maintainence')">Genres</a>
            </li>
            <li class="nav-item px-md-2 px-lg-3">
              <a class="nav-link"  @click="flash('This Page is Under Maintainence')">Trending</a>
            </li>
            <li class="nav-item px-md-2 px-lg-3">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
</template>

<script>
import { useFlash } from '@/composables/useFlash';

export default {
  setup() {
    let { flash } = useFlash()

    return {
      flash
    }
  },
}
</script>
