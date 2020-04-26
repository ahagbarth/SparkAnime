<template>
  <div class="home ">
    <Carousel></Carousel>
    <b-container fluid>
      <b-row>
        <b-col cols="3">
          <!-- <Filters></Filters> -->

          <b-container class="filterContainer">
            <div style="padding-bottom:2.45rem"></div>

            <div>
              <!-- <div>Genres & Tags</div> -->
              <div class="mt-2 filterTitles">Filters</div>
              <b-form-select
                @change="changeComponent"
                v-model="selectedSort"
                :options="optionsSort"
                size="sm"
                class="mt-2 mb-2 rounded-pill"
              >
                <!-- This slot appears above the options from 'options' prop -->
                <template v-slot:first>
                  <b-form-select-option :value="null" disabled
                    >Sort
                  </b-form-select-option>
                </template>

                <!-- These options will appear after the ones from 'options' prop -->

                <!-- <b-form-select-option value="D">Option D</b-form-select-option> -->
                -->
              </b-form-select>
            </div>

            <div>
              <!-- <div>Genres & Tags</div> -->

              <b-form-select
                v-model="selectedGenres"
                :options="optionsGenres"
                size="sm"
                class="mt-2 mb-2 rounded-pill"
                @change="changeComponent"
              >
                <!-- This slot appears above the options from 'options' prop -->
                <template v-slot:first>
                  <b-form-select-option :value="null" disabled
                    >Genres
                  </b-form-select-option>
                </template>

                <!-- These options will appear after the ones from 'options' prop -->
                <!-- <b-form-select-option value="C">Option C</b-form-select-option>
                <b-form-select-option value="D">Option D</b-form-select-option> -->
              </b-form-select>
            </div>
            <div>
              <!-- <div>Genres & Tags</div> -->
            </div>
            <div>
              <b-form-select
                v-model="selectedTags"
                :options="optionsTags"
                size="sm"
                class="mt-2 mb-2 rounded-pill "
                @change="changeComponent"
              >
                <!-- This slot appears above the options from 'options' prop -->
                <template v-slot:first>
                  <b-form-select-option :value="null" disabled
                    >Tags
                  </b-form-select-option>
                </template>

                <!-- These options will appear after the ones from 'options' prop -->
                <!-- <b-form-select-option value="C">Option C</b-form-select-option>
                <b-form-select-option value="D">Option D</b-form-select-option> -->
              </b-form-select>
            </div>

            <div>
              <!-- <div>Genres & Tags</div> -->

              <b-form-select
                v-model="selectedStatus"
                :options="optionsStatus"
                size="sm"
                class="mt-2 mb-2 rounded-pill "
                @change="changeComponent"
              >
                <!-- This slot appears above the options from 'options' prop -->
                <template v-slot:first>
                  <b-form-select-option :value="null" disabled
                    >Status
                  </b-form-select-option>
                </template>

                <!-- These options will appear after the ones from 'options' prop -->
                <!-- <b-form-select-option value="C">Option C</b-form-select-option>
                <b-form-select-option value="D">Option D</b-form-select-option> -->
              </b-form-select>
            </div>

            <div class="mb-2 mt-2 filterTitles">Season</div>
            <div>
              <b-form-group>
                <b-form-radio-group
                  id="btn-radios-2"
                  v-model="selectedSeason"
                  :options="optionsSeason"
                  buttons
                  button-variant="outline-light"
                  stacked
                  name="radio-btn-outline"
                  class="filterSeason rounded"
                  @change="changeComponent"
                ></b-form-radio-group>
              </b-form-group>
            </div>
            <div></div>

            <div class="filterYear">
              <div class="mt-2 filterTitles">Year: {{ valueYear }}</div>
              <b-form-input
                id="range-1"
                v-model="valueYear"
                type="range"
                min="1940"
                max="2020"
                @change="changeComponent"
              ></b-form-input>
            </div>
          </b-container>
        </b-col>
        <b-col cols="9">
          <component
            v-bind:is="currentTabComponent"
            :searchedValue="this.searchValue"
            :selectedStatus="selectedStatus"
            :selectedSeason="selectedSeason"
            :selectedGenres="selectedGenres"
            :selectedTags="selectedTags"
            :selectedSort="selectedSort"
            :valueYear="parseInt(valueYear)"
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
import FilteredManga from "../components/Manga/FilteredManga";
import jsonSort from "../assets/json/filterSort.json";
import jsonGenres from "../assets/json/filterGenres.json";
import jsonStatus from "../assets/json/filterStatus.json";
import jsonSeason from "../assets/json/filterSeason.json";
import jsonTags from "../assets/json/filterTags.json";
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
    FilteredManga,
  },
  data() {
    return {
      currentTab: "Body",
      tabs: ["Body", "PopularThisSeason"],
      valueYear: 2020,
      selectedSort: null,
      optionsSort: jsonSort,
      selectedGenres: null,
      optionsGenres: jsonGenres,
      selectedTags: null,
      optionsTags: jsonTags,
      selectedStatus: null,
      optionsStatus: jsonStatus,
      selectedSeason: "",
      optionsSeason: jsonSeason,
    };
  },
  methods: {
    changeComponent() {
      this.currentTab = "FilteredAnime";
    },
  },
  computed: {
    currentTabComponent: function() {
      return this.currentTab;
    },
    availableOptions() {
      return this.options.filter((opt) => this.value.indexOf(opt) === -1);
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
<style scoped>
.filterContainer {
  border-right: 2px dashed #3a3a3a;
  margin-top: 2rem;
  height: 400px;
}
.filterYear {
  color: white;
}
.filterTitles {
  text-align: left;
  color: #ffba00;
}
.filterSeason {
  min-width: 100%;
}
.tagComponent {
  background-color: #181818;
}
</style>
