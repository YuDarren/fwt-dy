<script>
import { Paperclip } from "@element-plus/icons-vue";
export default { components: { Paperclip } };
</script>
<template>
  <div class="window_tit">
    <div class="tit_withandtime">
      <div class="with">
        <div class="with_tit">Chat with</div>
        <div class="name">Kyle Fisher</div>
      </div>
      <div class="time">
        <div class="time_tit">last online:</div>
        <div class="time_det">4 hours ago</div>
      </div>
    </div>
    <div class="tit_media">
      <div class="media_icon">
        <el-icon><Paperclip /></el-icon>
      </div>
      <div class="media_tit">Shared media (12)</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.window_tit {
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  text-transform: uppercase;
  border-bottom: 1px solid #f4f4f4;
  font-size: 12px;
  background: #fff;
  .tit_withandtime {
    display: flex;

    .with {
      display: flex;
      font-weight: 600;
      .with_tit {
      }
      .name {
        margin-left: 5px;
        color: #0275b1;
      }
    }
    .time {
      display: flex;
      font-weight: 100;
      margin-left: 20px;
      .time_tit {
        opacity: 0.3;
      }
      .time_det {
        margin-left: 5px;
        opacity: 0.6;
      }
    }
  }
  .tit_media {
    display: flex;
    .media_icon {
      .el-icon {
        color: #0275b1;
        font-size: 14px;
      }
    }
    .media_tit {
      font-weight: 600;
      margin-left: 5px;
    }
  }
}
</style>
