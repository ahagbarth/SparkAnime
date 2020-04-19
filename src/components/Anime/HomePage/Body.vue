<template>
  <div>
    <b-container fluid class="body">
      <div class="animeList">
        <div class="mainPageTitle">Popular This Season</div>
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
      <div class="animeList">
        <div class="mainPageTitle">Recently Added</div>
        <div class="card-deck">
          <!-- <b-row cols="5"> -->
          <div v-for="(anime, index2) in recentlyUpdated.media" :key="index2">
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
        <div class="mainPageTitle">Most Popular of All Time</div>

        <div class="card-deck">
          <!-- <b-row cols="5"> -->
          <div
            v-for="(anime, index2) in mostPopularOfAllTime.media"
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
        <div class="mainPageTitle">Most Popular of All Time</div>

        <div class="card-deck">
          <!-- <b-row cols="5"> -->
          <div
            v-for="(anime, index2) in mostPopularOfAllTime.media"
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
      animeId: "3",
    };
  },
  computed: {
    ...mapGetters([
      "newMostPopularAnimeOfThisSeason",
      "recentlyUpdated",
      "selectedAnimeId",
      "mostPopularOfAllTime",
    ]),
  },
  methods: {
    selectAnime: function(id) {
      this.$store.dispatch("selectedAnimeId", id);
      this.$store.dispatch("selectedAnime", id);
    },
  },
  beforeCreate() {
    this.$store.dispatch("newMostPopularAnimeOfThisSeason", {
      perPage: 10,
      season: "WINTER",
      seasonYear: 2020,
    }),
      this.$store.dispatch("recentlyUpdated", {
        perPage: 10,
      });
    this.$store.dispatch("mostPopularOfAllTime", {
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
</style>
