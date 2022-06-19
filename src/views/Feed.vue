<script>
import {} from "@element-plus/icons-vue";
import FeedWritepost from "@/components/Feed/FeedWritepost.vue";
import FeedSortline from "@/components/Feed/FeedSortline.vue";
import FeedUserpostOne from "@/components/Feed/FeedUserpostOne.vue";
import FeedUserpostTwo from "@/components/Feed/FeedUserpostTwo.vue";
import FeedUserpostThree from "@/components/Feed/FeedUserpostThree.vue";
import FeedUserpostFour from "@/components/Feed/FeedUserpostFour.vue";
export default {
  components: {
    FeedWritepost,
    FeedSortline,
    FeedUserpostOne,
    FeedUserpostTwo,
    FeedUserpostThree,
    FeedUserpostFour,
  },
};
</script>
<template>
  <div class="feed_main_page">
    <div class="fe_main_area">
      <FeedWritepost />
      <FeedSortline />
      <FeedUserpostOne />
      <!-- <FeedUserpostTwo /> -->
      <!-- <FeedUserpostThree /> -->
      <!-- <FeedUserpostFour /> -->
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
