<template>
  <div class="home ">
    <Carousel></Carousel>
    <b-container fluid>
      <b-row>
        <b-col cols="3">
          <Filters></Filters>
        </b-col>
        <b-col cols="9">
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
import Carousel from "../components/Manga/Carousel";
import Filters from "../components/Filters";
import Body from "../components/Manga/Body";
import RecentlyAddedManga from "../components/Manga/recentlyAddedManga";
import HighestRatedManga from "../components/Manga/highestRatedManga";
import MostPopularManga from "../components/Manga/mostPopularManga";
import SearchResult from "../components/searchResult";

export default {
  name: "Home",
  props: ["searchValue"],
  components: {
    Carousel,
    Body,
    Filters,
    RecentlyAddedManga,
    HighestRatedManga,
    MostPopularManga,
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
