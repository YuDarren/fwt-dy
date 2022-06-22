<script>
export default {};
</script>
<template>
  <div class="dash_block">
    <div class="dash">
      <div class="dash_tit">
        <div class="right">your dashboard</div>
        <div class="left"><a href="#">go to stats</a></div>
      </div>
      <div class="dash_con">
        <div class="con_num">367</div>
        <div class="con_word">views today</div>
      </div>
      <div class="dash_con">
        <div class="con_num">15</div>
        <div class="con_word">posts views</div>
      </div>
      <div class="dash_con">
        <div class="con_num">9</div>
        <div class="con_word">search appereances</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dash_block {
  background: #ffffff;
  border-radius: 4px;
  font-family: Gotham;
  .dash {
    display: block;
    .dash_tit {
      margin: 0px 30px;
      padding: 20px 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-transform: uppercase;
      font-size: 12px;
      border-bottom: 1px solid #e7e7e7;
      .right {
        font-weight: 600;
      }
      .left {
        a {
          font-weight: 600;
          color: #0275b1;
          text-decoration: underline #0275b1;
          text-underline-offset: 2px;
        }
      }
    }
    .dash_con {
      display: block;
      margin: 0px 30px;
      padding: 20px 0px;

      .con_num {
        font-size: 52px;
        font-weight: bolder;
        color: #0275b1;
      }
      .con_word {
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
}
</style>
