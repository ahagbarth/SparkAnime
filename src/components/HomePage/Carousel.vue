<template>
  <div class="carousel">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="200"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <div
        v-for="(anime, index) in newMostPopularAnimeOfThisSeason.media"
        :key="index"
      >
        <b-carousel-slide
          img-height="200"
          :img-src="anime.bannerImage"
          img-alt="Blank image"
        >
          <h1>
            {{ anime.title.english }}
          </h1>
        </b-carousel-slide>
      </div>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
    </b-carousel>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import { mapState } from 'vuex';
export default {
  name: "HelloWorld",
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  computed: {
    ...mapGetters(["newMostPopularAnimeOfThisSeason"])
  },
  beforeCreate() {
    this.$store.dispatch("newMostPopularAnimeOfThisSeason");
  }
};
</script>

<style scoped>
.carousel {
  max-height: 50%;
}
</style>
