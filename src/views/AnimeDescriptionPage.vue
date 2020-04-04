<template>
  <b-container fluid>
    <b-row>
      <b-col></b-col>
      <b-col cols="8">
        <div class=" animeBanner">
          <b-row align-v="start">
            <img
              class="bannerImage "
              :src="selectedAnime.Media.bannerImage"
              alt=""
            />
            <div style="width:100%; margin-top:1vh; ">
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
                <b-col
                  cols="9"
                  class="mainComponent"
                  style="background-color:#3a3a3a;"
                >
                  <b-row align-v="start" class="Title">
                    <h1>{{ selectedAnime.Media.title.romaji }}</h1>
                  </b-row>
                  <div>
                    {{ selectedAnime.Media.genres.join() }}
                  </div>
                  <div>
                    {{ selectedAnime.Media.description }}
                  </div>
                </b-col>
              </b-row>
            </div>
            <div class="bodyComponent">
              <b-row>
                <b-col>{{ selectedAnime.Media.startDate }}</b-col>
                <b-col>{{ selectedAnime.Media.endDate }}</b-col>
                <b-col>{{ selectedAnime.Media.status }}</b-col>
                <b-col>{{ selectedAnime.Media.trending }}</b-col>
                <b-col>{{ selectedAnime.Media.averageScore }}/100</b-col>
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
    ...mapGetters(["selectedAnime"])
  }
  // beforeCreate(){
  //   this.$store.dispatch('selectedAnime', this.selectedAnimeId)
  // }
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
}
.Title {
  color: white;
}
.bodyComponent {
  width: 100%;
  margin-top: 1vh;
  margin-bottom: 2rem;
  background-color: #3a3a3a;
  height: 6rem;
  color: white;
}
</style>
