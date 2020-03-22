<template>
  <div class="home container-fluid">
    <Carousel></Carousel>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "../components/HomePage/Carousel"
export default {
  name: 'Home',
  components: {
    Carousel
  }
}
</script>
<style scoped>
</style>