<script>
import {} from "@element-plus/icons-vue";
import FeedWritepost from "@/components/Feed/FeedWritepost.vue";
import FeedSortline from "@/components/Feed/FeedSortline.vue";
export default {
  components: { FeedWritepost, FeedSortline },
};
</script>
<template>
  <div class="feed_main_page">
    <div class="fe_main_area">
      <FeedWritepost />
      <FeedSortline />
      <div class="userpost_block"></div>
      <div class="userpost_block"></div>
      <div class="userpost_block"></div>
      <div class="userpost_block"></div>
    </div>
    <div class="fe_side_area"></div>
  </div>
</template>
<style lang="scss" scoped>
.feed_main_page {
  display: flex;
  padding-top: 40px;
  margin: 0 auto;
  width: calc(100% - 260px);
  max-width: 1920px;
  font-family: Gothan;
  .fe_main_area {
    margin-right: 20px;
    width: 72%;
  }
  .fe_side_area {
    margin-right: 20px;
    width: 28%;
  }
}
</style>
