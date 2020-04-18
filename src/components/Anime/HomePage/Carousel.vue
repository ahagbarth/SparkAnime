<template>
  <div class="carousel">
    <b-carousel
      id="carousel"
      v-model="slide" 
      :interval="4000"
      controls
      indicators
      background="none"

      style="text-shadow: 1px 1px 2px #333;"
    >
      <div
        v-for="(anime, index) in carouselAnime.media"
        :key="index" class="carouselImages"
      >
       <router-link
                    :to="{
                      name: 'AnimeDescriptionPage',
                      params: { id: anime.id },
                    }"
                  >
        <b-carousel-slide
      
          :img-src="anime.bannerImage"
          img-alt="Blank image"
          style="max-height:40vh !important"
        >
             
          <h1 class="animeTitle">
            {{ anime.title.english }}
          </h1>
        </b-carousel-slide>
       </router-link>
      </div>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
    </b-carousel>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import { mapState } from 'vuex';
export default {
  name: "Carousel",
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  computed: {
    ...mapGetters(["carouselAnime"])
  },
  beforeCreate() {
    this.$store.dispatch("carouselAnime");
  }
};
</script>

<style scoped>
.carousel {
  max-height: 50%;
}
.carouselImages{
  max-height: 20vh;
}
.animeTitle{
  font-family: MonuMonumentExtended-bold;
  font-size: 4rem;
  font-weight: bold;
}

</style>
