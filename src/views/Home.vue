<template>
  <div class="home ">
    <Carousel></Carousel>
    <b-container fluid>
      <b-row>
        <b-col cols="3">
          <Filters></Filters>
        </b-col>
        <b-col cols="9">
          <!-- <component v-bind:is="currentTabComponent"></component> -->
          <component
            v-bind:is="currentTabComponent"
            :searchedValue="this.searchValue"
          ></component>
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
import MostPopularOfAllTime from "../components/Anime/HomePage/mostPopularOfAllTime";
import SearchResult from "../components/searchResult";
export default {
  name: "Home",
  props: ["searchValue"],
  components: {
    Carousel,
    Body,
    Filters,
    PopularThisSeason,
    RecentlyAdded,
    HighestRated,
    MostPopularOfAllTime,
    SearchResult,
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
  watch: {
    searchValue() {
      if (this.searchValue.length > 2) {
        this.currentTab = "SearchResult";
      }
    },
  },
};
</script>
<style scoped></style>
