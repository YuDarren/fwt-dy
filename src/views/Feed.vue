<script>
import { ArrowDown } from "@element-plus/icons-vue";
import FeedWritepost from "@/components/Feed/FeedWritepost.vue";
export default {
  components: { ArrowDown, FeedWritepost },
};
</script>
<template>
  <div class="feed_main_page">
    <div class="fe_main_area">
      <FeedWritepost />
      <div class="sortline_block">
        <div class="sortline">
          <div class="line"></div>
          <div class="text">
            Sort by:
            <a href="">
              trending<el-icon><ArrowDown /></el-icon
            ></a>
          </div>
          <div class="line"><span></span></div>
        </div>
      </div>
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
    .sortline_block {
      margin-top: 20px;
      .sortline {
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        .line {
          border: 1px solid #e7e7e7;
        }
        .text {
          font-size: 12px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          justify-content: center;
          a {
            color: #0275b1;
            display: flex;
            align-items: center;
            margin-left: 5px;
            .el-icon {
              margin-left: 5px;
              color: #0275b1;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
  .fe_side_area {
    margin-right: 20px;
    width: 28%;
  }
}
</style>
