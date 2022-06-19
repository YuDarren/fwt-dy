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
<template>
  <div class="sk_av">
    <img :src="require(`@/assets/img/${props.img}.png`)" alt="" />
  </div>
</template>
<style lang="scss" scoped>
img {
  width: 52px;
  height: 52px;
  border-radius: 50%;
}
</style>
