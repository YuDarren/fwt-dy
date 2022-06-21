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
    <img :src="require(`@/assets/img/${img}.png`)" alt="" />
  </div>
</template>
<style lang="scss" scoped></style>
