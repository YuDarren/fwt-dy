<template>
  <div class="sk_av">
    <img :src="require(`../assets/img/${img}.jpg`)" alt="" />
  </div>
</template>

<script>
export default {
  // props: ['img'],
  props: {
    img: {
      type: String,
    },
  },
};
</script>

<style>
img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
</style>
