<script>
import { ArrowDown } from "@element-plus/icons-vue";
export default {
  components: { ArrowDown },
};
</script>
<template>
  <div class="sortline_block">
    <div class="sortline">
      <hr class="line" />
      <div class="text">
        Sort by:
        <a href="#">
          trending<el-icon><ArrowDown /></el-icon
        ></a>
      </div>
      <hr class="line" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
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
      width: 41%;
    }
    .text {
      font-size: 12px;
      margin-left: 5px;
      margin-right: 5px;
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
</style>
