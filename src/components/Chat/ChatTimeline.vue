<script>
export default {
  props: {
    con: { type: String },
  },
  components: {},
};
</script>
<template>
  <div class="chatline_block">
    <div class="chatline">
      <hr class="line" />
      <div class="text">yesterday, 29 aug</div>
      <hr class="line" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.chatline_block {
  .chatline {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    .line {
      border: 1px solid #e7e7e7;
      width: 70%;
      order: 1;
      background: #e7e7e7;
    }
    .text {
      font-size: 12px;
      font-weight: 200;
      margin-left: 5px;
      margin-right: 5px;
      width: 30%;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      order: 1;
      opacity: 0.6;
      a {
        color: #0275b1;
        display: flex;
        align-items: center;
        margin-left: 5px;
      }
    }
  }
}
</style>
