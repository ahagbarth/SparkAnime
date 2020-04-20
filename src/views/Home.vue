<template>
  <div class="home ">
    <Carousel></Carousel>
    <b-container fluid>
      <b-row>
        <b-col cols="3">
          <Filters></Filters>
        </b-col>
        <b-col cols="9">
          <div></div>
          <!-- <component v-bind:is="currentTabComponent"></component> -->
          <component v-bind:is="currentTabComponent"></component>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "../components/Anime/HomePage/Carousel";
import Filters from "../components/Filters";
import Body from "../components/Anime/HomePage/Body";
import PopularThisSeason from "../components/Anime/HomePage/popularThisSeason";
import RecentlyAdded from "../components/Anime/HomePage/recentlyAdded";
import HighestRated from "../components/Anime/HomePage/highestRated";
import MostPopularOfAllTime from "../components/Anime/HomePage/mostPopularOfAllTime"

export default {
  name: "Home",
  components: {
    Carousel,
    Body,
    Filters,
    PopularThisSeason,
    RecentlyAdded,
    HighestRated,
    MostPopularOfAllTime
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
