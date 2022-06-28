<script>
import { MoreFilled } from "@element-plus/icons-vue";
export default {
  props: {
    imgone: { type: String },
    imgtwo: { type: String },
    imgthree: { type: String },
    info: { type: String },
    time: { type: String },
  },
  components: { MoreFilled },
};
</script>
<template>
  <div class="noticesinfo_block">
    <div class="noticesinfo">
      <div class="photoandinfo">
        <div class="photo_group">
          <img :src="require(`@/assets/${imgone}.png`)" alt="" />
          <img :src="require(`@/assets/${imgtwo}.png`)" alt="" />
          <img :src="require(`@/assets/${imgthree}.png`)" alt="" />
        </div>
        <div class="info">
          <div class="info_det">{{ info }}</div>
          <div class="time">{{ time }}</div>
        </div>
      </div>
      <div class="morebtn">
        <a href="#"
          ><el-icon><MoreFilled /></el-icon
        ></a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.noticesinfo_block {
  background: #fff;
  border-radius: 4px;
  .noticesinfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;
    .photoandinfo {
      display: flex;
      align-items: center;
      .photo_group {
        display: flex;
        img {
          background: #fff;
          border-radius: 50%;
          width: 32px;
          height: 32px;
        }
        img + img {
          margin-left: -15px;
        }
      }
      .info {
        padding-left: 10px;
        line-height: 1.5;
        .info_det {
          font-size: 14px;
        }
        .time {
          font-size: 10px;
          font-weight: 100;
          opacity: 0.6;
        }
      }
    }
    .morebtn {
      a {
        color: #181818;
        .el-icon {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
