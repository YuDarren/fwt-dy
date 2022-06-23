<script>
export default {};
</script>
<template>
  <div class="nt_main_page">
    <div class="nt_side_area"></div>
    <div class="nt_main_area"></div>
  </div>
</template>
<style lang="scss" scoped>
.nt_main_page {
  display: flex;
  padding-top: 40px;
  margin: 0 auto;
  width: calc(100% - 260px);
  max-width: 1920px;
  font-family: Gothan;

  .nt_side_area {
    margin-right: 40px;
    width: 28%;
  }
  .nt_main_area {
    width: 72%;
  }
}
</style>
