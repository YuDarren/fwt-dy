<script>
export default {};
</script>
<template>
  <div class="btn_block">
    <div class="btn_wrap">
      <div class="btn" tabindex="0" autofocus>PROFILE</div>
      <div class="btn" tabindex="0">ACTIVITY & INTERESTS</div>
      <div class="btn" tabindex="0">ARTICLES (3)</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn_block {
  border-bottom: 1px solid #e7e7e7;
  padding-top: 31px;

  .btn_wrap {
    display: flex;
    width: 85%;
    height: 50px;
    margin-right: auto;
    align-items: flex-end;
    .btn {
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      width: 33.333333%;
      border: 1px solid #e7e7e7;
      border-radius: 4px 4px 0 0;
      text-transform: uppercase;
      font-family: Gotham;
      color: #181818;
      cursor: pointer;
      transition: all 0.2s linear;
      font-size: 12px;
    }

    .btn:hover {
      height: 50px;
      color: #fff;
      background: #0275b1;
    }
    .btn:focus {
      height: 50px;
      color: #fff;
      background: #0275b1;
      outline: none;
    }
  }
}
</style>
