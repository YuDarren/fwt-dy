<script>
export default {};
</script>
<template>
  <div class="userProfile_block">
    <div class="about_tit"><h2>about</h2></div>
    <div class="about_con">
      <p>
        I'm more experienced in eCommerce web projects and mobile banking apps,
        but also like to work with creative projects, such as landing pages or
        unusual corporate websites.
      </p>
    </div>
    <div class="about_sm">
      <a href="#"><h4>see more</h4></a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.userProfile_block {
  background: #ffffff;
  border-radius: 4px;
  display: block;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 5px;
  padding-bottom: 10px;
  margin-top: 20px;
  font-family: Gotham;
  .about_tit {
    font-size: 18px;
    text-transform: capitalize;
  }
  .about_con {
    line-height: 1.5;
    font-size: 14px;
  }
  .about_sm {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    h4 {
      color: #0275b1;
    }
  }
}
</style>
