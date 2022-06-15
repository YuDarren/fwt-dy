<script>
import { Search, TopRight } from "@element-plus/icons-vue";
export default {
  components: { Search, TopRight },
};
</script>
<template>
  <header>
    <div class="h_menu">
      <div class="logo_block">
        <router-link to="/"
          ><img src="@/assets/LinkedInIcon.png"
        /></router-link>
      </div>
      <div class="nav_block">
        <div class="nav_main_block">
          <div class="nav_btn">
            <router-link class="router-link" to="/feed">
              <img src="../assets/menuIcon/feed_icon.svg" />
              <p>FEED</p>
            </router-link>
          </div>
          <div class="nav_btn">
            <router-link class="router-link" to="/network">
              <img src="../assets/menuIcon/network_icon.svg" />
              <p>NETWORK</p></router-link
            >
          </div>
          <div class="nav_btn">
            <router-link class="router-link" to="/jobs">
              <img src="../assets/menuIcon/jobs_icon.svg" />
              <p>JOBS</p></router-link
            >
          </div>
          <div class="nav_btn chat">
            <router-link class="router-link" to="/chat">
              <img src="../assets/menuIcon/chat_icon.svg" />
              <p>CHAT</p>
              <div class="chat-count">3</div>
            </router-link>
          </div>
          <div class="nav_btn">
            <router-link class="router-link" to="/notices">
              <img src="../assets/menuIcon/notices_icon.svg" />
              <p>NOTICES</p></router-link
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
        <div class="other_btn">
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
  .h_menu {
    height: 80px;
    width: 100%;
    border-bottom: 1px solid #f4f4f4;
    display: flex;

    .logo_block {
      height: 100%;
      width: 5%;
      border-right: 1px solid #f4f4f4;
      padding-left: 40px;
      padding-right: 40px;
      margin-left: 20px;

      img {
        width: 46px;
        height: 46px;
        padding-top: 15px;
      }
    }
    .nav_block {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .nav_main_block {
        width: 40%;
        align-items: center;
        display: flex;

        .nav_btn {
          width: 20%;
          height: 100%;
          position: relative;
          .router-link {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: auto;
            width: 24px;
            line-height: 0.9;

            p {
              margin: 0px;
              margin-top: 10px;
              text-align: center;
              color: #181818;
              font-size: 12px;
            }
            .chat-count {
              position: absolute;
              font-size: 12px;
              top: -6px;
              right: -6px;
              height: 16px;
              width: 16px;
              color: #ffffff;
              background-color: orange;
              border-radius: 50%;
              text-align: center;
              line-height: 16px;
            }
          }
        }
        .nav_btn:hover p {
          color: #0275b1;
        }

        .nav_btn:after {
          content: "";
          display: block;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -17px;
          width: 0%;
          height: 2px;
          background: #0275b1;
          transition: all 0.3s linear;
        }
        .nav_btn:hover:after {
          width: 80px;
        }
      }
      .nav_search_block {
        width: 25%;
        height: 100%;
        border-left: 1px solid #f4f4f4;
        display: flex;
        align-items: center;
        padding-left: 30px;
        .el-icon {
          font-size: 22px;
          width: 24px;
          height: 24px;
          color: #0275b1;
        }
        input {
          border: none;
          width: 100%;
          height: 90%;
          outline: none;
          color: #cecece;
          font-size: 16px;
          text-transform: capitalize;
          margin-left: 8px;
        }
      }

      .nav_user_block {
        height: 100%;
        display: flex;
        padding-left: 35px;
        border-left: 1px solid #f4f4f4;
        width: 30%;
        align-items: center;

        .avatar_img {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          overflow: hidden;
          img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .avatar_info {
          display: block;
          margin-left: 15px;
          text-align: left;
          .avatar_name {
            .av1 {
              color: #181818;
              font-size: 12px;
              font-weight: 700;
              text-transform: uppercase;
            }
            .av2 {
              margin-left: 10px;
              font-size: 12px;
              color: rgba(24, 24, 24, 0.2);
              text-transform: uppercase;
            }
          }
          .avatar_news {
            display: flex;
            align-items: center;
            padding-top: 10px;
            font-size: 12px;
            .av_n1 {
              color: #747474;
            }
            .av_n2 {
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
    .other_block {
      width: 5%;
      position: relative;
      display: flex;
      justify-content: center;
      border-left: 1px solid #f4f4f4;
      border-right: 1px solid #f4f4f4;
      margin-right: 40px;
      .other_btn {
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
      .other_btn:hover p {
        color: #0275b1;
      }

      .other_btn:after {
        content: "";
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 77px;
        bottom: -17px;
        width: 0%;
        height: 2px;
        background: #0275b1;
        transition: all 0.3s linear;
      }
      .other_btn:hover:after {
        color: #0275b1;
        width: 100%;
      }
    }
  }
}

router-link {
  text-decoration: none;
  background-color: transparent;
}
</style>
