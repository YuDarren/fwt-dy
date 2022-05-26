<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      circleUrl: "/assets/img/avatar-m11.jpg",
    });

    const { circleUrl } = toRefs(state);
    return { circleUrl };
  },
};
</script>
<template>
  <header>
    <div class="h_menu">
      <div class="logo_block"><img src="../assets/LinkedInIcon.png" /></div>
      <div class="nav_block">
        <div class="nav_main_block">
          <div id="feed_btn">
            <a href="#">
              <img src="../assets/menuIcon/feed_icon.svg" />
              <p>FEED</p></a
            >
          </div>
          <div id="network_btn">
            <a href="#">
              <img src="../assets/menuIcon/network_icon.svg" />
              <p>NETWORK</p></a
            >
          </div>
          <div id="jobs_btn">
            <a href="#">
              <img src="../assets/menuIcon/jobs_icon.svg" />
              <p>JOBS</p></a
            >
          </div>
          <div id="chat_btn">
            <a href="#">
              <img src="../assets/menuIcon/chat_icon.svg" />
              <p>CHAT</p></a
            >
          </div>
          <div id="notices_btn">
            <a href="#">
              <img src="../assets/menuIcon/notices_icon.svg" />
              <p>NOTICES</p></a
            >
          </div>
        </div>
        <div class="nav_search_block">
          <el-icon><Search /></el-icon>
          <input type="text" placeholder="Search" size="22" />
        </div>
        <div class="nav_user_block">
          <el-avatar :size="50" :src="circleUrl" />
        </div>
      </div>
      <div class="other_block"></div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #ffffff;
  > .h_menu {
    height: 80px;
    width: 100%;
    border-bottom: 1px solid #f4f4f4;
    display: flex;

    > .logo_block {
      height: 100%;
      width: 5%;
      border-right: 1px solid #f4f4f4;
      padding-left: 40px;
      padding-right: 40px;

      > img {
        width: 46px;
        height: 46px;
        padding-top: 15px;
      }
    }
    > .nav_block {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      > .nav_main_block {
        width: 60%;
        align-items: center;
        display: flex;
        padding-top: 20px;
        > #feed_btn {
          width: 20%;
          height: 100%;
          margin: 0 auto;

          //   > a {
          //     display: flex;
          //     flex-direction: column;
          //     align-items: center;
          //     margin: auto;
          //     width: 24px;
          //     line-height: 0.9;

          //     > p {
          //       margin: 10px;
          //       text-align: center;
          //       color: #181818;
          //       font-size: 12px;
          //       text-transform: uppercase;
          //     }
          //     > img {
          //       display: block;
          //       width: 100%;
          //       height: auto;
          //     }
          //   }
        }

        > #network_btn {
          width: 20%;
          height: 100%;
        }
        > #jobs_btn {
          width: 20%;
          height: 100%;
        }
        > #chat_btn {
          width: 20%;
          height: 100%;
        }
        > #notices_btn {
          width: 20%;
          height: 100%;
        }
      }
      > .search_block {
        width: 20%;
      }
      > .user_block {
        width: 20%;
      }
    }
    > .other_block {
      width: 5%;
    }
  }
}

a {
  text-decoration: none;
  background-color: transparent;
}
</style>
