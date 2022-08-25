<template>
  <nav>
    <div class="navbar">
      <img class="image" src="../../assets/pncaa_logo.jpg" alt="">
      
      <ul>
        <v-list-item color="green" :to="{ path: '/home' }">
          <v-icon>mdi-account-circle-outline</v-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item color="green" :to="{ path: '/about' }">
          <v-icon>mdi-account-group-outline</v-icon>
          <v-list-item-title>About Us</v-list-item-title>
        </v-list-item>

        <v-list-item color="green" :to="{ path: '/event' }">
          <v-icon>mdi-comment-account-outline</v-icon>
          <v-list-item-title>Event</v-list-item-title>
        </v-list-item>

        <v-list-item color="green" :to="{ path: '/contact' }">
          <v-icon>mdi-account-multiple-outline</v-icon>
          <v-list-item-title class="white-text">Contact Us</v-list-item-title>
        </v-list-item>
      </ul>
      
    </div>
  </nav>
</template>

<script>
// import axios from "../../axios-http.js";
export default {
  emits: ["sign-out"],
  data() {
    return {
     
    };
  },
  methods: {
   
  },
  mounted() {
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.image{
  width: 100px;
  height: 50px;
 
}
.navbar {
  display: flex;
  background-color: white;
}
nav {
  position: sticky;
  top: 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
ul {
  display: flex;
  padding: 0px 10px;
  margin: 0px 15px;
}


</style>
