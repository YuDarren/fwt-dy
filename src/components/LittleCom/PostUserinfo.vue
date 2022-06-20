<script>
import AvatarNormal from "@/components/LittleCom/AvatarNormal.vue";
export default {
  components: { AvatarNormal },
  props: {
    name: { type: String },
    job: { type: String },
    img: { type: String },
  },
};
</script>
<template>
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
</template>
<style lang="scss" scoped>
.post_user {
  display: flex;
  align-items: center;
  padding-left: 10px;
  .post_photo {
    padding: 20px 20px 10px 20px;
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
      margin-bottom: 5px;
    }
    .job {
      font-size: 10px;
      font-weight: 300;
    }
  }
}
</style>
