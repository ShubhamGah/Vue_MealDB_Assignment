<template>
  <div class="header">
    <b-navbar toggleable="md" type="dark" fixed="top" id="Header">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav class="app-navs">
        <b-navbar-nav>
          <router-link id="homeroute" to="/">Home</router-link>
          <router-link id="searchroute" to="/search">Search</router-link>
          <router-link id="aboutroute" to="/about">About</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style>
#Header {
  position: relative;
  background-color: #074933;
}
.app-navs {
  justify-content: center;
}
.navbar-nav {
  display: inline;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
a {
  color: #5c6268;
  margin: 4px;
}
a:hover {
  color: #b2b5b8;
  text-decoration: none;
}
.router-link-exact-active {
  color: #ffffff;
}
</style>
