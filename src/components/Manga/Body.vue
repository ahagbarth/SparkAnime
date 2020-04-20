<template>
  <div>
    <b-container fluid class="body">
      <div class="animeList">
        <!-- </b-row> -->
      </div>
      <div class="animeList">
        <div class="container">
          <div class="row">
            <div class="col-4"></div>

            <div class="mainPageTitle">
              <router-link to="" style="color:#ffba00; text-decoration:none;">
                Recently Added
                <div class="underline"></div>
              </router-link>
            </div>
            <div class="col-4"></div>
          </div>
        </div>
        <div class="card-deck">
          <!-- <b-row cols="5"> -->
          <div
            v-for="(anime, index2) in recentlyUpdatedManga.media"
            :key="index2"
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
                      ><div class=" d-block text-truncate ">
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
      <div class="animeList">
        <div class="container">
          <div class="row">
            <div class="col-4"></div>

            <div class="mainPageTitle">
              <router-link to="" style="color:#ffba00; text-decoration:none;">
                Highest Rated
                <div class="underline"></div>
              </router-link>
            </div>
            <div class="col-4"></div>
          </div>
        </div>
        <div class="card-deck">
          <!-- <b-row cols="5"> -->
          <div
            v-for="(anime, index2) in highestRatedMangaOfAllTime.media"
            :key="index2"
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
                      ><div class=" d-block text-truncate">
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
      <div class="animeList">
        <h4></h4>
        <div class="container">
          <div class="row">
            <div class="col-4"></div>

            <div class="mainPageTitle">
              <router-link to="" style="color:#ffba00; text-decoration:none;">
                Most Popular of All Time
                <div class="underline"></div>
              </router-link>
            </div>
            <div class="col-4"></div>
          </div>
        </div>
        <div class="card-deck">
          <!-- <b-row cols="5"> -->
          <div
            v-for="(anime, index2) in mostPopularMangaOfAllTime.media"
            :key="index2"
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
                      ><div class=" d-block text-truncate ">
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
  name: "Body",
  components: {},
  data() {
    return {
      mangaId: "3",
    };
  },
  computed: {
    ...mapGetters([
      "newMostPopularMangaOfThisSeason",
      "recentlyUpdatedManga",
      "selectedMangaId",
      "mostPopularMangaOfAllTime",
      "highestRatedMangaOfAllTime",
    ]),
  },
  methods: {
    selectAnime: function(id) {
      this.$store.dispatch("selectedMangaId", id);
      this.$store.dispatch("selectedManga", id);
    },
  },
  beforeCreate() {
    this.$store.dispatch("newMostPopularMangaOfThisSeason", {
      perPage: 10,
      season: "WINTER",
      seasonYear: 2020,
    }),
      this.$store.dispatch("recentlyUpdatedManga", {
        perPage: 10,
      });
    this.$store.dispatch("mostPopularMangaOfAllTime", {
      perPage: 10,
    });
    this.$store.dispatch("highestRatedMangaOfAllTime", {
      perPage: 10,
    });
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

.cardText {
  opacity: 0;
  transition: all 0.4s ease;
  color: white;
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
.animeCard:hover .cardText {
  opacity: 85%;
  background-color: black;
  /* color:#fcec3d;   */
  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 #fcec3d; */
}

.description {
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}
.mainPageTitle {
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.underline {
  height: 0.2rem;
  width: 0%;
  background-color: #ffba00;
  transition: all 0.4s ease;
}
.mainPageTitle:hover .underline {
  width: 100%;
}
</style>
