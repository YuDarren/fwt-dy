<script>
export default {
  props: {
    msg: { type: String },
    time: { type: String },
  },
};
</script>
<template>
  <div class="friendmsg_block">
    <div class="friendmsg">
      <div class="triangle"></div>
      <div class="msg">
        {{ msg }}
      </div>
    </div>
    <div class="readtime">
      <div class="photo">
        <img src="@/assets/menuIcon/Read.png" alt="" />
      </div>
      <div class="time">{{ time }}</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.friendmsg_block {
  .friendmsg {
    display: flex;
    .triangle {
      padding-top: 30px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 20px 20px;
      border-color: transparent transparent #0275b1 transparent;
    }
    .msg {
      font-weight: 500;
      border-radius: 4px 4px 4px 0px;
      color: #fff;
      background: #0275b1;
      padding: 15px 20px;
      font-size: 14px;
    }
  }
  .readtime {
    margin-top: 5px;
    display: flex;
    .photo {
      margin-right: 5px;
    }
    .time {
      font-size: 10px;
      opacity: 0.6;
      font-weight: 200;
    }
  }
}
</style>
