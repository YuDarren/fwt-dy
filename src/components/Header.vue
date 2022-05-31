<script>
import { reactive, toRefs } from "vue";
import { circleUrl } from "@/assets/LinkedInIcon.png";
export default {
  setup() {
    // // const state = reactive({
    // //   circleUrl: "../assets/logo.png",
    // // });
    // // const { circleUrl } = toRefs(state);
    // return { circleUrl };
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
          <div class="avatar_img">
            <img src="../assets/img/avatar-m11.jpg" alt="頭像" />
          </div>
          <div class="avatar_info">
            <div class="avatar_name">
              <span class="av1">James Gordon</span><span class="av2">YOU</span>
            </div>
            <div class="avatar_news">
              <span class="av_n1">367 views today</span
              ><span class="av_n2">+32</span><el-icon><TopRight /></el-icon>
            </div>
          </div>
        </div>
      </div>
      <div class="other_block">
        <div id="other_btn">
          <a href="#">
            <img src="../assets/menuIcon/other_icon.svg" />
            <p>OTHER</p></a
          >
        </div>
      </div>
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
      justify-content: flex-start;

      > .nav_main_block {
        width: 40%;
        align-items: center;
        display: flex;

        > #feed_btn {
          width: 20%;
          height: 100%;
          > a {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: auto;
            width: 24px;
            line-height: 0.9;

            > p {
              margin: 0px;
              margin-top: 10px;
              text-align: center;
              color: #181818;
              font-size: 12px;
            }
          }
        }

        > #network_btn {
          width: 20%;
          height: 100%;
          > a {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: auto;
            width: 24px;
            line-height: 0.9;

            > p {
              margin: 0px;
              margin-top: 10px;
              text-align: center;
              color: #181818;
              font-size: 12px;
            }
          }
        }
        > #jobs_btn {
          width: 20%;
          height: 100%;
          > a {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: auto;
            width: 24px;
            line-height: 0.9;

            > p {
              margin: 0px;
              margin-top: 10px;
              text-align: center;
              color: #181818;
              font-size: 12px;
            }
          }
        }
        > #chat_btn {
          width: 20%;
          height: 100%;
          > a {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: auto;
            width: 24px;
            line-height: 0.9;

            > p {
              margin: 0px;
              margin-top: 10px;
              text-align: center;
              color: #181818;
              font-size: 12px;
            }
          }
        }
        > #notices_btn {
          width: 20%;
          height: 100%;
          > a {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: auto;
            width: 24px;
            line-height: 0.9;

            > p {
              margin: 0px;
              margin-top: 10px;
              text-align: center;
              color: #181818;
              font-size: 12px;
            }
          }
        }
      }
      > .nav_search_block {
        width: 25%;
        height: 100%;
        border-left: 1px solid #f4f4f4;
        display: flex;
        align-items: center;
        padding-left: 30px;
        > input {
          border: none;
          width: 100%;
          height: 90%;
          outline: none;
          color: #cecece;
          font-size: 16px;
          text-transform: capitalize;
          margin-left: 8px;
        }
        .el-icon {
          color: #0275b1;
          font-size: 20px;
        }
      }

      > .nav_user_block {
        height: 100%;
        display: flex;
        padding-left: 35px;
        border-left: 1px solid #f4f4f4;
        width: 30%;
        align-items: center;

        > .avatar_img {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          overflow: hidden;
          > img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        > .avatar_info {
          display: block;
          margin-left: 15px;
          text-align: left;
          > .avatar_name {
            > .av1 {
              color: #181818;
              font-size: 12px;
              font-weight: 700;
              text-transform: uppercase;
            }
            > .av2 {
              margin-left: 10px;
              font-size: 12px;
              color: rgba(24, 24, 24, 0.2);
              text-transform: uppercase;
            }
          }
          > .avatar_news {
            display: flex;
            align-items: center;
            padding-top: 10px;
            font-size: 12px;
            > .av_n1 {
              color: #747474;
            }
            > .av_n2 {
              align-items: center;
              padding-left: 4px;
              color: #02b033;
            }
            .el-icon {
              align-items: center;
              padding-left: 4px;
              color: #02b033;
            }
          }
        }
      }
    }
    > .other_block {
      width: 5%;
      display: flex;
      justify-content: center;
      border-left: 1px solid #f4f4f4;
      border-right: 1px solid #f4f4f4;
      margin-right: 40px;
      > #other_btn {
        width: 100%;
        height: 100%;
        align-items: center;
        display: flex;
        justify-content: center;
        > a {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: auto;
          width: 24px;
          line-height: 0.9;
          > p {
            margin: 0px;
            margin-top: 10px;
            text-align: center;
            color: #181818;
            font-size: 12px;
          }
        }
      }
    }
  }
}

a {
  text-decoration: none;
  background-color: transparent;
}
</style>
