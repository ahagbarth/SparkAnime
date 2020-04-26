<template>
  <div class="popularThisSeason">
    <b-container fluid class="body">
      <div class="animeList">
        <div class="container">
          <div class="row">
            <div class="col-4"></div>

            <div class="mainPageTitle">
              Popular This Season
              <div class="underline"></div>
            </div>
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
  data() {
    return {
      testNum: 10,
    };
  },
  computed: {
    ...mapGetters(["newMostPopularAnimeOfThisSeason"]),
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
            season: "WINTER",
            seasonYear: 2020,
            sort:'POPULARITY_DESC'
          });
        }
      };
    },
  },
  beforeCreate() {
    this.$store.dispatch("newMostPopularAnimeOfThisSeason", {
      perPage: 30,
      season: "WINTER",
      seasonYear: 2020,
      sort:'POPULARITY_DESC'
    });
  },
  mounted() {
    this.scroll();
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
