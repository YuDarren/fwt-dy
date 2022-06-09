<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ProfilePage from "@/views/ProfilePage.vue";

export default {
  components: {
    Header,
    Footer,
    ProfilePage,
  },
};
</script>

<template>
  <Header />
  <ProfilePage />
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
