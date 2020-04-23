<template>
  <div id="navBar">
    <b-navbar toggleable="lg" class="navBar" sticky="true" type="dark">
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
            <b-form-input
              size="sm"
              class="mr-sm-2 inputSearch "
              placeholder="Search"
              v-model="searchValue"
              trim
            ></b-form-input>
            <b-button
              size="sm"
              class="my-2 my-sm-0 searchComponent"
              style="background-color:#FF5116; border-color:#FF5116"
              variant="outline-light"
              type="submit"
              @click="searchItem"
              >Search</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "navBar",
  data() {
    return {
      searchValue: "",
    };
  },
};
</script>
<style>
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
.navBar{
    position: sticky;
}
</style>
