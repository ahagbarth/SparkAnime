<template>
  <div id="app">
    <b-navbar toggleable="lg" class="navBar navbar-expand-md" sticky="true" type="dark">
      <router-link to="/"
        ><b-navbar-brand href="">SparkAnime</b-navbar-brand></router-link
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/" exact exact-active-class="active"
            >Anime</b-nav-item
          >
          <b-nav-item to="/manga" exact exact-active-class="active"
            >Manga</b-nav-item
          >
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-input-group>
              <b-form-input
                size="sm"
                class="inputSearch "
                v-model="searchValue"
                placeholder="Search"
                trim
              >
              </b-form-input>
              <b-input-group-append>
                
                <b-button
                  size="sm"
                  @click="addTag(newTag)"
                  :disabled="disabled"
                  variant="outline-light"
                  style="background-color:#FF5116; border-color:#FF5116"
                  type="submit"
                  ><b-icon icon="search" aria-hidden="true"></b-icon></b-button
                >
              </b-input-group-append>
            </b-input-group>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view :searchValue="searchValue" />
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    searchItem: function() {
      this.$router.replace({
        name: "SearchIs",
        params: { searchResult: this.data },
      });
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #181818;
  font-family: MonuMonumentExtended-regular;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.navbar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 6;
}

@font-face {
  font-family: MonumentExtended-bold;
  src: url(/assets/fonts/MonumentExtended-Ultrabold.otf) format("otf");
}
@font-face {
  font-family: MonumentExtended-regular;
  src: url(/assets/fonts/MonumentExtended-regular.otf) format("otf");
}
</style>
