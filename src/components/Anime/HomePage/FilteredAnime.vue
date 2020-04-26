<template>
  <div class="filteredAnime">
    <b-container fluid class="body">
      <div class="animeList">
        <div class="container">
          <div class="row">
            <div class="col-4"></div>
            <div class="col-4"></div>
          </div>
        </div>
        <div class="card-deck">
          <!-- <b-row cols="5"> -->
          <div
            v-for="(anime, index) in newMostPopularAnimeOfThisSeason.media"
            :key="index"
          >
            <!-- <b-col> -->
            <div>
              <router-link
                :to="{
                  name: 'AnimePage',
                  params: { id: anime.id },
                }"
              >
                <b-card
                  class="card animeCard"
                  overlay
                  :img-src="anime.coverImage.extraLarge"
                  img-alt="Card Image"
                  text-variant="white"
                  img-height="250"
                  border-variant="dark"
                >
                  <template v-slot:footer>
                    <small
                      ><div class=" d-block text-truncate bold">
                        {{ anime.title.english || anime.title.romaji }}
                      </div></small
                    >
                  </template>
                </b-card>
              </router-link>
            </div>
            <!-- </b-col> -->
          </div>
        </div>
        <!-- </b-row> -->
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PopularThisSeason",
  props: {
    searchValue: String,
    selectedStatus: String,
    selectedSeason: String,
    selectedGenres: String,
    selectedTags: String,
    selectedSort: String,
    valueYear: Number,
  },
  data() {
    return {
      testNum: 15,
      status: "",
      season: "WINTER",
      year: 2020,
      sort: "POPULARITY_DESC",
      genre: null,
      tags: null,
    };
  },
  computed: {
    ...mapGetters(["newMostPopularAnimeOfThisSeason"]),
  },
  watch: {
    selectedSeason: function() {
      this.season = this.selectedSeason;
      this.$store.dispatch("newMostPopularAnimeOfThisSeason", {
        perPage: this.testNum,
        season: this.season,
        seasonYear: this.year,
        sort: this.sort,
        status: this.status,
        genres: this.genres,
        tags: this.tags,
      });
    },
    valueYear: function() {
      this.year = this.valueYear;
      this.$store.dispatch("newMostPopularAnimeOfThisSeason", {
        perPage: this.testNum,
        season: this.season,
        seasonYear: this.year,
        sort: this.sort,
        status: this.status,
        genres: this.genres,
        tags: this.tags,
      });
    },
    selectedSort: function() {
      this.sort = this.selectedSort;
      this.$store.dispatch("newMostPopularAnimeOfThisSeason", {
        perPage: this.testNum,
        season: this.season,
        seasonYear: this.year,
        sort: this.sort,
        status: this.status,
        genres: this.genres,
        tags: this.tags,
      });
    },
    selectedStatus: function() {
      this.status = this.selectedStatus;
      this.$store.dispatch("newMostPopularAnimeOfThisSeason", {
        perPage: this.testNum,
        season: this.season,
        seasonYear: this.year,
        sort: this.sort,
        status: this.status,
        genres: this.genres,
        tags: this.tags,
      });
    },
    selectedGenres: function() {
      this.genres = this.selectedGenres;
      this.$store.dispatch("newMostPopularAnimeOfThisSeason", {
        perPage: this.testNum,
        season: this.season,
        seasonYear: this.year,
        sort: this.sort,
        status: this.status,
        genres: this.genres,
        tags: this.tags,
      });
    },
    selectedTags: function() {
      this.tags = this.selectedTags;
      this.$store.dispatch("newMostPopularAnimeOfThisSeason", {
        perPage: this.testNum,
        season: this.season,
        seasonYear: this.year,
        sort: this.sort,
        status: this.status,
        genres: this.genres,
        tags: this.tags,
      });
    },
  },
  methods: {
    selectAnime: function(id) {
      this.$store.dispatch("selectedAnimeId", id);
      this.$store.dispatch("selectedAnime", id);
    },
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.testNum += 20;

          this.$store.dispatch("newMostPopularAnimeOfThisSeason", {
            perPage: this.testNum,
            season: this.season,
            seasonYear: this.year,
            sort: this.sort,
            status: this.status,
            genres: this.genres,
            tags: this.tags,
          });
        }
      };
    },
  },
  //   beforeCreate() {
  //       console.log(this.year)
  //     this.$store.dispatch("newMostPopularAnimeOfThisSeason", {
  //       perPage: this.testNum,
  //       season: ( this.selectedSeason || this.season),
  //       seasonYear: (this.valueYear || this.year),
  //       sort: (this.selectedSort || this.sort),
  //     });
  //   },
  mounted() {
    this.scroll();
  },
};
</script>

<style scoped>
.filteredAnime{
  min-height:75vh;
}
.animeList {
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #ffba00;
}
.animeCard {
  margin-top: 1rem;
}
.animeCard {
  min-width: 12vw;
  max-width: 12vw;
  background-color: #737474;
  transition: all 0.3s ease;
}
.animeCard:hover {
  background-color: #ffba00;
  -webkit-transform: scale(1.175);
  -ms-transform: scale(1.175);
  transform: scale(1.175);
  z-index: 900;
}
.mainPageTitle {
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>
