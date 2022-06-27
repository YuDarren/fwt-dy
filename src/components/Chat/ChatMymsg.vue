<script>
export default {
  props: {
    myMsg: { type: String },
    time: { type: String },
    img: { type: String },
    imgshow: { type: Boolean },
  },
};
</script>
<template>
  <div class="mycon">
    <div class="msgandtime">
      <div class="msg">
        {{ myMsg }}
      </div>
      <div class="time">{{ time }}</div>
    </div>
    <div class="avatar">
      <img v-if="imgshow" :src="require(`@/assets/img/${img}.png`)" alt="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.mycon {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  .msgandtime {
    font-weight: 400;
    .msg {
      background: #e9f0f8;
      border-radius: 4px;
      padding: 15px 20px;
      font-size: 14px;
    }
    .time {
      margin-top: 5px;
      font-size: 10px;
      opacity: 0.6;
      line-height: 1.5;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  .avatar {
    padding-left: 15px;
    width: 46px;
    height: 46px;
    img {
      width: 46px;
      height: 46px;
    }
  }
}
</style>
