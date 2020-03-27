<template>
  <div class="home container-fluid">
    <Carousel></Carousel>
    <b-container fluid>
      <b-row>
        <b-col cols="3">
          <Filters></Filters>
        </b-col>
        <b-col cols="9" >
            <Body></Body>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "../components/Anime/HomePage/Carousel";
import Filters from "../components/Filters";
import Body from "../components/Anime/HomePage/Body"
export default {
  name: "Home",
  components: {
    Carousel,
    Body,
    Filters
  }
};
</script>
<style scoped>


</style>
