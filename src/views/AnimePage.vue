<template>
  <div>
    <div>
      <img
        :src="selectedAnime.Media.bannerImage"
        class="bannerDiv"
        alt="Responsive image"
      />
    </div>

    <b-container fluid class="AnimePage">
      <div class="container-fluid "></div>
      <b-container fluid="">
        <b-row no-gutters="" align-content="center" style="margin-top:-4rem">
          <b-col cols="1"></b-col>

          <b-col class="col-md-3">
            <div class="card  cards" style="min-width:85%; max-width:85%;">
              <img
                :src="selectedAnime.Media.coverImage.extraLarge"
                class="coverImage"
                alt="Responsive image"
              />
            </div>
            <div class="card w-100 cards underCoverImageInfo">
              <div class="card-body">
                <div style="font-size: 1rem;">Status</div>
                {{ selectedAnime.Media.status }}
                <div style="font-size: 1rem;">Episodes</div>
                {{ selectedAnime.Media.episodes }}
                <div style="font-size: 1rem;">Season</div>
                {{ selectedAnime.Media.season }}
                <div style="font-size: 1rem;">Start Date</div>
                {{ selectedAnime.Media.startDate.day }}/{{
                  selectedAnime.Media.startDate.month
                }}/{{ selectedAnime.Media.startDate.year }}
                <div style="font-size: 1rem;">End Date</div>
                {{ selectedAnime.Media.endDate.day }}/{{
                  selectedAnime.Media.endDate.month
                }}/{{ selectedAnime.Media.endDate.year }}
              </div>
            </div>
          </b-col>

          <b-col class="col-md-7">
            <div class="card w-100 cards">
              <div class="card-body ">
                <div class="card-title animeTitle">
                  {{
                    selectedAnime.Media.title.english ||
                      selectedAnime.Media.title.romaji
                  }}
                </div>
                <div class="card-subtitle  animeGenre ">
                  {{ selectedAnime.Media.genres.join() || "No Genre" }}
                </div>
              </div>
            </div>
            <div class="card w-100 cards descriptionCard">
              <div class="card-body">
                <div class="card-title animeDescription text-justify">
                  {{ selectedAnime.Media.description }}
                </div>
              </div>
            </div>
            <div class="card w-100 cards descriptionCard">
              <div class="card-body">
                <b-row>
                  <b-col cols="4">
                    <div style="font-size: 1rem;">Average Score</div>
                    {{ selectedAnime.Media.averageScore }}/100
                  </b-col>
                  <b-col cols="4">
                    <div style="font-size: 1rem;">Popularity</div>
                    {{ selectedAnime.Media.popularity }}
                  </b-col>
                  <b-col cols="4">
                    <div style="font-size: 1rem;">Trending</div>
                    {{ selectedAnime.Media.trending }}
                  </b-col>
                </b-row>
              </div>
            </div>
            <div class="card w-100 cards descriptionCard">
              <div class="card-body">
                <div class="card-title relatedTitle">Related Content</div>

                <div class="card-deck container">
                  <div
                    v-for="(anime, index) in selectedAnime.Media.relations
                      .edges"
                    :key="index"
                  >
                    <!-- <b-col> -->
                    <div>
                      {{ anime.relationType }}
                      <router-link
                        :to="{
                          name: 'AnimePage',
                          params: { id: anime.id },
                        }"
                      >
                        <b-card
                          class="card animeCard"
                          overlay
                          :img-src="anime.node.coverImage.extraLarge"
                          img-alt="Card Image"
                          text-variant="white"
                          img-height="250"
                          border-variant="dark"
                        >
                          <template v-slot:footer>
                            <small
                              ><div class=" d-block text-truncate bold">
                                {{
                                  anime.node.title.english ||
                                    anime.node.title.romaji
                                }}
                              </div></small
                            >
                          </template>
                        </b-card>
                      </router-link>
                    </div>
                  </div>
                  <!-- </b-col> -->
                </div>
              </div>
            </div>
            <div class="card w-100 cards descriptionCard">
              <div class="card-body">
                <div class="card-title relatedTitle">Watch Episodes</div>

                <div class="card-deck container-fluid">
                  <div
                    v-for="(anime, index) in selectedAnime.Media
                      .streamingEpisodes"
                    :key="index"
                  >
                    <!-- <b-col> -->
                    <div class="thumbnail">
                      <div class=" d-block text-truncate ">
                        {{ anime.title }}
                      </div>
                      <a :href="anime.url">
                        <b-img
                          thumbnail
                          fluid
                          class="thumbnailImage"
                          :src="anime.thumbnail"
                          alt="Image 1"
                        ></b-img>
                        <div class="videoImage"></div>
                      </a>
                    </div>
                  </div>
                  <!-- </b-col> -->
                </div>
              </div>
            </div>
            <div class="card w-100 cards descriptionCard">
              <div class="card-body">
                <div class="card-title relatedTitle">Recommendations</div>
                <div class="container">
                  <div class="card-deck">
                    <div
                      v-for="(anime, index) in selectedAnime.Media
                        .recommendations.edges"
                      :key="index"
                    >
                      <!-- <b-col> -->
                      <div>
                        {{ anime.relationType }}
                        <router-link
                          :to="{
                            name: 'AnimePage',
                            params: { id: anime.id },
                          }"
                        >
                          <b-card
                            class="card animeCard"
                            overlay
                            :img-src="
                              anime.node.mediaRecommendation.coverImage
                                .extraLarge
                            "
                            img-alt="Card Image"
                            text-variant="white"
                            img-height="250"
                            border-variant="dark"
                          >
                            <template v-slot:footer>
                              <small
                                ><div class=" d-block text-truncate bold">
                                  {{
                                    anime.node.mediaRecommendation.title
                                      .english ||
                                      anime.node.mediaRecommendation.title
                                        .romaji
                                  }}
                                </div></small
                              >
                            </template>
                          </b-card>
                        </router-link>
                      </div>
                    </div>
                    <!-- </b-col> -->
                  </div>
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols="1"></b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AnimeDescriptionPage",
  computed: {
    ...mapGetters(["selectedAnime"]),
  },
  props: {
    id: Object,
  },
  beforeCreate() {
    this.$store.dispatch("selectedAnime", this.$route.params.id);
  },
};
</script>

<style scoped>
.bannerDiv {
  width: 100%;
  min-height: 45vh;
  max-height: 45vh;
}
.bannerImage {
  width: 100%;
  height: 100%;
}

.cards {
  border-radius: 1.5rem;
  margin-bottom: 1rem;
  background-color: #737474;
  color: white;
}
.coverImage {
  min-width: 100%;
  max-width: 100%;
  min-height: 50vh;
  max-height: 50vh;
  border-radius: 1.5rem;
}
.animeTitle {
  font-size: 3rem;
  font-weight: bold;
}
.underCoverImageInfo {
  min-width: 85%;
  max-width: 85%;
}
.animeCard {
  min-width: 11vw;
  max-width: 11vw;
  background-color: #ff5116;
  transition: all 0.3s ease;
  margin-top: 1rem;
}
.relatedTitle {
  font-size: 1.5rem;
  font-weight: bold;
}
.thumbnail {
  min-width: 25vw;
  max-width: 25vw;
  min-height: 20vh;
  padding-left: 1rem;
}
.thumbnailImage:hover {
  -webkit-box-shadow: 0px 0px 28px -2px rgba(255, 186, 0, 1);
  -moz-box-shadow: 0px 0px 28px -2px rgba(255, 186, 0, 1);
  box-shadow: 0px 0px 28px -2px rgba(255, 186, 0, 1);
}

</style>
