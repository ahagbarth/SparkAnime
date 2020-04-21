<template>
  <div class="home ">
    <Carousel></Carousel>
    <b-container fluid>
      <b-row>
        <b-col cols="3">
          <Filters></Filters>
        </b-col>
        <b-col cols="9">
          <component v-bind:is="currentTabComponent"></component>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "../components/Manga/Carousel";
import Filters from "../components/Filters";
import Body from "../components/Manga/Body";
import RecentlyAddedManga from "../components/Manga/recentlyAddedManga";
import HighestRatedManga from "../components/Manga/highestRatedManga";
import MostPopularManga from "../components/Manga/mostPopularManga";

export default {
  name: "Home",
  components: {
    Carousel,
    Body,
    Filters,
    RecentlyAddedManga,
    HighestRatedManga,
    MostPopularManga
  },
  data() {
    return {
      currentTab: "Body",
      tabs: ["Body", "PopularThisSeason"],
    };
  },
  computed: {
    currentTabComponent: function() {
      return this.currentTab;
    },
  },
};
</script>
<style scoped>
.home {
}
</style>
