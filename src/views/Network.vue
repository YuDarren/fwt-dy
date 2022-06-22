<script>
export default {};
</script>
<template>
  <div class="feed_main_page">
    <div class="fe_side_area"></div>
    <div class="fe_main_area"></div>
  </div>
</template>
<style lang="scss" scoped>
.feed_main_page {
  display: flex;
  padding-top: 40px;
  margin: 0 auto;
  width: calc(100% - 260px);
  max-width: 1920px;
  font-family: Gothan;

  .fe_side_area {
    margin-right: 40px;
    width: 28%;
  }
  .fe_main_area {
    width: 72%;
  }
}
</style>
