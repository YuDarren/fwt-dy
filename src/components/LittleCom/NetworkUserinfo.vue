<script>
import AvatarNormal from "@/components/LittleCom/AvatarNormal.vue";
export default {
  props: {
    img: { type: String },
    name: { type: String },
    job: { type: String },
    time: { type: String },
  },
  components: { AvatarNormal },
};
</script>
<template>
  <div class="ntuser">
    <div class="post_user">
      <div class="post_photo">
        <!-- <img :src="require(`@/assets/img/${props.img}.png`)" alt="" /> -->
        <AvatarNormal :img="img" />
      </div>
      <div class="user_info">
        <div class="name">{{ name }}</div>
        <div class="job">{{ job }}</div>
      </div>
    </div>
    <div class="onlinetime">{{ time }}</div>
  </div>
</template>
<style lang="scss" scoped>
.ntuser {
  width: 100%;
  position: relative;
  background: #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  .post_user {
    display: flex;
    align-items: center;

    .post_photo {
      width: 52px;
      height: 52px;
      padding: 20px;
      img {
        width: 52px;
        height: 52px;
      }
    }
    .user_info {
      display: block;
      .name {
        font-size: 14px;
        font-weight: 700;
      }
      .job {
        line-height: 1.5;
        font-size: 10px;
        font-weight: 300;
      }
    }
  }
  .onlinetime {
    position: absolute;
    right: 0px;
    bottom: 0px;
    display: flex;
    align-items: flex-end;
    font-size: 10px;
    opacity: 0.3;
    padding: 10px;
  }
}
</style>
