<script>
import NTAccDecbtn from "@/components/LittleCom/NTAccDecbtn.vue";
export default {
  components: { NTAccDecbtn },
  props: {
    name: { type: String },
    job: { type: String },
    numcon: { type: String },
    img: { type: String },
    message: { type: String },
    show: { type: Boolean },
  },
};
</script>
<template>
  <div class="newcon">
    <div class="new_userinfo">
      <div class="post_user">
        <div class="post_photo">
          <img :src="require(`@/assets/img/${img}.png`)" alt="" />
        </div>
        <div class="user_info">
          <div class="name">{{ name }}</div>
          <div class="job">{{ job }}</div>
          <div class="numcon">{{ numcon }}</div>
        </div>
      </div>
    </div>
    <div class="new_message" v-show="show">
      <div class="message">{{ message }}</div>
    </div>
    <div class="new_accdecbtns"></div>
    <NTAccDecbtn />
  </div>
</template>
<style lang="scss" scoped>
.newcon {
  background: #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  .new_userinfo {
    .post_user {
      display: flex;
      align-items: center;
      .post_photo {
        img {
          width: 52px;
          height: 52px;
        }
      }
      .user_info {
        display: block;
        margin-left: 10px;
        .name {
          display: flex;
          align-items: center;
          font-size: 14px;
          font-weight: 700;
        }
        .job {
          line-height: 1.5;
          font-size: 10px;
          font-weight: 300;
        }
        .numcon {
          line-height: 1.5;
          font-size: 10px;
          font-weight: 300;
          color: #0275b1;
        }
      }
    }
  }
  .new_message {
    font-size: 10px;
    border-left: 3px solid #0275b1;

    .message {
      padding: 0px 40px 0px 20px;
      width: 300px;
      flex-wrap: wrap;
      opacity: 0.6;
      line-height: 1.5;
    }
  }
  .new_accdecbtns {
  }
}
</style>
