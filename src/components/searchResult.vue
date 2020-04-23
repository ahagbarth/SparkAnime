<template>
  <div class="searchResult">
    <b-container fluid class="body">
      <div class="animeList">
        <div class="container">
          <div class="row">
            <div class="col-4"></div>
            <div class="mainPageTitle">
              <div class="underline"></div>
            </div>
            <div class="col-4"></div>
          </div>
        </div>
        <div class="card-deck">
          <div v-for="(anime, index) in searchedResult.media" :key="index">
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
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PopularThisSeason",
  props: ["searchedValue"],
  computed: {
    ...mapGetters(["searchedResult"]),
  },
  methods: {
    selectAnime: function(id) {
      this.$store.dispatch("selectedAnimeId", id);
      this.$store.dispatch("selectedAnime", id);
    },
  },

  watch: {
    searchedValue: function() {
      this.$store.dispatch("searchedResult", {
        perPage: 10,
        searchQuery: this.searchedValue,
      });
    },
  },
};
</script>

<style scoped>
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
