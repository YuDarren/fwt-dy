<script>
import AvatarNormal from "@/components/LittleCom/AvatarNormal.vue";
export default {
  components: { AvatarNormal },
  props: {
    name: { type: String },
    job: { type: String },
  },
  setup(props) {
    return { props };
  },
};
</script>
<template>
  <div class="post_user">
    <AvatarNormal img="avatar54_01" />
    <div class="user_info">
      <div class="name">{{ props.name }}</div>
      <div class="job">{{ props.job }}</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.post_user {
  display: flex;
  align-items: center;
  padding-left: 10px;
  .sk_av {
    padding: 10px;
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
