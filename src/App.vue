<template>
  <div class="container-fluid p-0 g-0">
    <nav-bar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import NavBar from '@/components/Layouts/NavBar'
import Footer from '@/components/Layouts/Footer'

export default {
  data() {
    return {

    }
  },
  components: {
    NavBar,
    Footer
  }  
}
</script>