<template>
  <nav>
    <div class="navbar">
      <img class="image" src="../../assets/pncaa_logo.jpg" alt="" />

      <div class="menu">
        <ul>
          <v-list-item color="green" :to="{ path: '/home' }">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item color="green" :to="{ path: '/about' }">
            <v-list-item-title>About Us</v-list-item-title>
          </v-list-item>

          <v-list-item color="green" :to="{ path: '/event' }">
            <v-list-item-title>Event</v-list-item-title>
          </v-list-item>

          <v-list-item color="green" :to="{ path: '/contact' }">
            <v-list-item-title class="white-text">Contact Us</v-list-item-title>
          </v-list-item>
        </ul>

        <v-icon large color="orange darken-2">
          mdi-arrow-up-bold-box-outline
        </v-icon>
      </div>
    </div>
  </nav>
</template>

<script>
// import axios from "../../axios-http.js";
export default {
  emits: ["sign-out"],
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

nav {
  position: sticky;
  padding: 1px 25px;
  top: 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
}
.menu {
  display: flex;
  justify-items: center;
}
.image {
  width: 125px;
  height: 50px;
}

ul {
  display: flex;
  padding: 0px 10px;
  margin: 0px 15px;
}
</style>
