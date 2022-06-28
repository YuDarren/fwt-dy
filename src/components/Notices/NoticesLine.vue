<script>
export default {
  props: {
    con: { type: String },
  },
  components: {},
};
</script>
<template>
  <div class="noticesline_block">
    <div class="noticesline">
      <hr class="line" />
      <div class="text" v-html="con"></div>
      <hr class="line" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.noticesline_block {
  .noticesline {
    width: 100%;
    margin-bottom: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    .line {
      border: 1px solid #e7e7e7;
      width: 80%;
      order: 1;
      background: #e7e7e7;
    }
    .text {
      font-size: 12px;
      font-weight: 600;
      margin-left: 5px;
      margin-right: 5px;
      width: 20%;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      order: 1;
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
