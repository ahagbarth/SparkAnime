<template>
  <div>
    <b-container fluid class="body">
      <div class="animeList">
        <h4>Popular This Season</h4>
        <div class="card-deck">
          <!-- <b-row cols="5"> -->
          <div
            v-for="(anime, index) in newMostPopularAnimeOfThisSeason.media"
            :key="index"
          >
            <!-- <b-col> -->
            <div>
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
                  <small class="text-muted"><div class=" d-block text-truncate">{{anime.title.english}}</div></small>
                </template>
                <router-link
                  :to="{
                    name: 'AnimeDescriptionPage',
                    params: { id: anime.id }
                  }"
                >
                  <div
                    class="cardText card-img-overlay d-flex flex-column"
                    v-on:click="selectAnime(anime.id)"
                  >
                    <h5 class="card-title"></h5>
                    <div class="description">{{ anime.description }}</div>
                    <div class="mt-auto genres">
                      {{ anime.genres.join() }}
                    </div>
                  </div>
                </router-link>
              </b-card>
            </div>
            <!-- </b-col> -->
          </div>
        </div>
        <!-- </b-row> -->
      </div>
      <div class="animeList">
        <h4>Recently Added</h4>
        <div class="card-deck">
          <!-- <b-row cols="5"> -->
          <div v-for="(anime, index2) in recentlyUpdated.media" :key="index2">
            <!-- <b-col> -->
            <div>
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
                  <small class="text-muted"><div class=" d-block text-truncate">{{(anime.title.english || anime.title.romaji )}}</div></small>
                </template>
                <router-link
                  :to="{
                    name: 'AnimeDescriptionPage',
                    params: { id: anime.id }
                  }"
                  ><div
                    class="cardText card-img-overlay d-flex flex-column"
                    v-on:click="selectAnime(anime.id)"
                  >
                    <h5 class="card-title"></h5>
                    <div class="description">{{ anime.description }}</div>
                    <div class="mt-auto genres">
                      {{ anime.genres.join() }}
                    </div>
                  </div>
                </router-link>
              </b-card>
            </div>
            <!-- </b-col> -->
          </div>
        </div>
        <!-- </b-row> -->
      </div>
      <div class="animeList">
        <h4>Most Popular of All Time</h4>
        <b-row cols="5">
          <div
            v-for="(anime, index2) in mostPopularOfAllTime.media"
            :key="index2"
          >
            <b-col>
              <div>
                <b-card
                  class="card animeCard"
                  overlay
                  :img-src="anime.coverImage.extraLarge"
                  img-alt="Card Image"
                  text-variant="white"
                  :title="anime.title.english"
                  img-height="250"
                  border-variant="dark"
                >
                  <router-link
                    :to="{
                      name: 'AnimeDescriptionPage',
                      params: { id: anime.id }
                    }"
                    ><div
                      class="cardText card-img-overlay d-flex flex-column"
                      v-on:click="selectAnime(anime.id)"
                    >
                      <h5 class="card-title"></h5>
                      <div class="description">{{ anime.description }}</div>
                      <div class="mt-auto genres">
                        {{ anime.genres.join() }}
                      </div>
                    </div>
                  </router-link>
                </b-card>
              </div>
            </b-col>
          </div>
        </b-row>
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
      animeId: "3"
    };
  },
  computed: {
    ...mapGetters([
      "newMostPopularAnimeOfThisSeason",
      "recentlyUpdated",
      "selectedAnimeId",
      "mostPopularOfAllTime"
    ])
  },
  methods: {
    selectAnime: function(id) {
      this.$store.dispatch("selectedAnimeId", id);
      this.$store.dispatch("selectedAnime", id);
    }
  },
  beforeCreate() {
    this.$store.dispatch("newMostPopularAnimeOfThisSeason", {
      perPage: 8,
      season: "WINTER",
      seasonYear: 2020
    }),
      this.$store.dispatch("recentlyUpdated", {
        perPage: 8
      });
    this.$store.dispatch("mostPopularOfAllTime", {
      perPage: 8
    });
  }
};
</script>

<style scoped>
.animeList {
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: white;
}
.card {
  margin-top: 1rem;
}

.cardText {
  opacity: 0;
  transition: all 0.4s ease;
  color: white;
}
.animeCard {
  min-width: 15vw;
  max-width: 15vw;
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
</style>
