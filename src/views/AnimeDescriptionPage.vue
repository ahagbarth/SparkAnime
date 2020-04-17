<template>
  <b-container fluid class="AnimePage">
    <b-row>
      <b-col></b-col>
      <b-col cols="8">
        <div class="container animeBanner">
          <b-row align-v="start">
            <img
              class="bannerImage"
              :src="selectedAnime.Media.bannerImage"
              alt=""
            />
            <div style="margin-top: 2.5vh;">
              <b-row>
                <b-col cols="3">
                  <div>
                    <img
                      :src="selectedAnime.Media.coverImage.extraLarge"
                      class="coverImage"
                      alt=""
                    />
                  </div>
                </b-col>

                <b-col cols="9" class="mainComponent">
                  <div
                    class="container"
                    style="background-color: #3a3a3a; height: 100%;"
                  >
                    <h1 style="">
                      {{ selectedAnime.Media.title.romaji }}
                    </h1>
                    <div style="padding-bottom: 2vh; padding-top: 1vh;">
                      {{ selectedAnime.Media.genres.join() }}
                    </div>
                    <div class="text-justify">
                      {{ selectedAnime.Media.description }}
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
            <div style="margin-top: 2.5vh;">
              <b-row>
                <b-col cols="6">
                  <div
                    class="container-fluid"
                    style="background-color: #3a3a3a; height: 100%;"
                  >
                    <b-row style="color: white;">
                      <b-col class="animeInfoText" cols="4">
                        <div style="font-size: 1rem;">Start Date</div>
                        {{ selectedAnime.Media.startDate.day }}/{{
                          selectedAnime.Media.startDate.month
                        }}/{{ selectedAnime.Media.startDate.year }}
                      </b-col>
                      <b-col class="animeInfoText" cols="4">
                        <div style="font-size: 1rem;">End Date</div>
                        {{ selectedAnime.Media.endDate.day }}/{{
                          selectedAnime.Media.endDate.month
                        }}/{{ selectedAnime.Media.endDate.year }}
                      </b-col>
                      <b-col class="animeInfoText" cols="4">
                        <div style="font-size: 1rem;">Episodes</div>
                        {{ selectedAnime.Media.episodes }}
                      </b-col>
                      <b-col class="animeInfoText" cols="2">
                        <div style="font-size: 1rem; width: 50%;"></div>
                      </b-col>
                      <b-col class="animeInfoText" cols="4">
                        <div style="font-size: 1rem;">Season</div>
                        {{ selectedAnime.Media.season }}
                      </b-col>
                      <b-col class="animeInfoText" cols="4">
                        <div style="font-size: 1rem;">Status</div>
                        {{ selectedAnime.Media.status }}
                      </b-col>
                    </b-row>
                  </div>
                </b-col>

                <b-col cols="6" class="mainComponent">
                  <div
                    class="container-fluid"
                    style="background-color: #3a3a3a; height: 100%;"
                  >
                    <b-row style="color: white; padding-bottom: 1vh;">
                      <b-col class="animeInfoText" cols="4">
                        <div style="font-size: 1rem;">Average Score</div>
                        {{ selectedAnime.Media.averageScore }}/100
                      </b-col>
                      <b-col class="animeInfoText" cols="4">
                        <div style="font-size: 1rem;">Popularity</div>
                        {{ selectedAnime.Media.popularity }}
                      </b-col>
                      <b-col class="animeInfoText" cols="4">
                        <div style="font-size: 1rem;">Trending</div>
                        {{ selectedAnime.Media.trending }}
                      </b-col>
                      <b-col class="animeInfoText" cols="4">
                        <div style="font-size: 1rem;"></div>
                      </b-col>
                      <b-col class="animeInfoText" cols="4">
                        <div style="font-size: 1rem;">Favourites</div>
                        {{ selectedAnime.Media.favourites }}
                      </b-col>
                    </b-row>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-row>
        </div>
      </b-col>

      <b-col></b-col>
    </b-row>
  </b-container>
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
     this.$store.dispatch("selectedAnime", this.$route.params.id)
     
  },
};
</script>

<style scoped>
.animeDescriptionPage {
  color: white;
}
.containerPage {
  max-height: 200;
}
.bannerImage {
  max-height: 40vh;
  min-width: 100%;
}
.coverImage {
  max-height: 40vh;
  width: 100%;
}
.mainComponent {
  color: white;
  padding-right: -0.5vw;
}
.Title {
  color: white;
}
.bodyComponentHeader {
  width: 100%;
  margin-top: 1vh;
  background-color:#777777;
  height: 6rem;
  color: white;
}
.bodyComponentMain {
  width: 100%;
  margin-top: 1vh;
  margin-bottom: 2rem;
  background-color: #777777;
  height: 60rem;
  color: white;
}
.animeInfoText {
  font-size: 1.5rem;
  margin-top: 2vh;
}
.AnimePage {
  padding-bottom: 2vh;

}
</style>
