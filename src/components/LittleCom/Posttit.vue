<script>
import { MoreFilled } from "@element-plus/icons-vue";
export default {
  components: { MoreFilled },
};
</script>
<template>
  <div class="posttit">
    <div class="tit_con">
      Ted Bell, Annette Nguyen and Cody Hawkins liked this
    </div>
    <div class="tit_btn">
      <a href="#"
        ><el-icon><MoreFilled /></el-icon
      ></a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.posttit {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid #f4f4f4;
  .tit_con {
    font-size: 10px;
  }
  .tit_btn {
    a {
      color: #181818;
      .el-icon {
        font-size: 24px;
      }
    }
  }
}
</style>
