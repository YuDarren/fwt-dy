<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<style lang="scss">
body {
  margin: 0;
  font-family: sans-serif;
  background-color: #f7f9fb;
}
a {
  background-color: transparent;
  text-decoration: none;
}
</style>
