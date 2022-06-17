<script>
import Avatar from "@/components/LittleCom/Avatar.vue";
export default { components: { Avatar } };
</script>
<template>
  <div class="post_user">
    <Avatar img="avatar54_01" />
    <div class="user_info">
      <div class="name">Theresa Steward</div>
      <div class="job">iOS developer</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.post_user {
  display: flex;
  .user_info {
    display: block;
    .sk_av {
      img {
        width: 54px;
        height: 54px;
      }
    }
    .name {
    }
    .job {
    }
  }
}
</style>
