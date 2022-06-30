<script>
import OtherAbovebtns from "@/components/Other/OtherAbovebtns.vue";
import OtherMiddlebtns from "@/components/Other/OtherMiddlebtns.vue";
import OtherUnderbtns from "@/components/Other/OtherUnderbtns.vue";
export default {
  components: { OtherAbovebtns, OtherMiddlebtns, OtherUnderbtns },
};
</script>
<template>
  <div class="allpage">
    <div class="sidemenu">
      <div class="sidemenu_tit">
        <div class="left">
          <div class="close">
            <img src="@/assets/menuIcon/close.png" alt="" />Close
          </div>
          <div class="tit">More from LinkedIn</div>
        </div>
        <div class="right">
          <div class="help">
            <img src="@/assets/menuIcon/help.png" alt="" />Help
          </div>
        </div>
      </div>
      <div class="sidemenu_con">
        <OtherAbovebtns />
        <OtherMiddlebtns />
        <OtherUnderbtns />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoprd>
.allpage {
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: flex-end;

  .sidemenu {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    .sidemenu_tit {
      background: #fff;
      width: 460px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-transform: uppercase;
      font-weight: 500;
      .left {
        display: flex;
        .close {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 90px;
          height: 90px;
          font-size: 12px;
        }
        .tit {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          padding-left: 20px;
        }
      }
      .right {
        .help {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 90px;
          height: 90px;
          font-size: 12px;
        }
      }

      img {
        width: 24px;
        height: 24px;
        padding: 10px;
      }
    }
    .sidemenu_con {
      background: #fff;
      width: 370px;
    }
  }
}
</style>
