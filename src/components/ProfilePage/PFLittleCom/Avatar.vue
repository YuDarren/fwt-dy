<template>
  <div class="sk_av">
    <img :src="require(`@/assets/img/${img}.png`)" alt="" />
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

<style lang="scss" scoped>
img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
</style>
