<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <b-navbar toggleable="lg" sticky="true" type="dark">
       <router-link to="/"><b-navbar-brand href="">SparkAnime</b-navbar-brand></router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item active href="/">Anime</b-nav-item>
          <b-nav-item href="/about">Manga</b-nav-item>
        </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2 inputSearch " placeholder="Search" trim></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0 searchComponent" style="background-color:#FF5116; border-color:#FF5116" variant="outline-light" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

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
.navbar{
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 6;
}

@font-face {
  font-family: MonumentExtended-bold;
  src:  url(/assets/fonts/MonumentExtended-Ultrabold.otf) format('otf');
} 
@font-face {
  font-family: MonumentExtended-regular;
  src: url(/assets/fonts/MonumentExtended-regular.otf) format('otf')

}


</style>
