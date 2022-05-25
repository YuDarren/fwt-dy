<script>
export default {};
</script>
<template>
  <header>
    <div class="h_menu">
      <div class="logo_block"><img src="../assets/LinkedInIcon.png" /></div>
      <div class="main_block"></div>
      <div class="other_block"></div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #ffffff;
  > .h_menu {
    height: 80px;
    width: 100%;
    border-bottom: 1px solid #f4f4f4;
    display: flex;
    align-items: center;
    > .logo_block {
      border-right: 1px solid #f4f4f4;
      padding-left: 40px;
      padding-right: 40px;

      > img {
        width: 46px;
        height: 46px;
      }
    }
  }
}
</style>
