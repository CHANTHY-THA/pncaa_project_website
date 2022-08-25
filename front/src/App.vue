<template>
  <v-app>
    <app-nav></app-nav>
  
    <v-main>
      <router-view/>
    </v-main>
   
  </v-app>
</template>

<script>
import Navigation from "./components/nav/Navigation.vue";
export default {
  name: "App",
  components: {
    "app-nav": Navigation,
  },
  data: () => ({
  
  }),

  methods: {
  },
  mounted() {
  },
};
</script>
<style scoped>
* {
  background-color: #fff;
}
</style>
