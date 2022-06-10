<script>
import { MoreFilled, Edit, Upload } from "@element-plus/icons-vue";
export default {
  components: { MoreFilled, Edit, Upload },
};
</script>
<template>
  <div class="pf_main_page">
    <div class="main_area">
      <div class="user_block">
        <div class="userbg_photo">
          <div class="upload_btn">
            <button>
              <el-icon><Upload /></el-icon>
            </button>
          </div>
          <div class="editmore_btn">
            <div class="edit_btn">
              <button>
                <el-icon><Edit /></el-icon>Edit profile
              </button>
            </div>
            <div class="more_btn">
              <button>
                <el-icon><MoreFilled /></el-icon>
              </button>
            </div>
          </div>
        </div>
        <div class="user_info">
          <div class="wrap">
            <div class="user_avatar">
              <div class="avatar">
                <img src="../assets/img/avatar-m11.jpg" alt="" />
              </div>
            </div>
            <div class="user_about">
              <div class="user_name_block">
                <div class="name">
                  <h2 class="usname">JAMES GORDON</h2>
                  <a href="#" class="in_icon">
                    <img src="../assets/linkedin_gold_icon.svg" alt=""
                  /></a>
                </div>
                <div class="address">
                  <a href="#" class="ad_icon"
                    ><img src="../assets/position.png" alt=""
                  /></a>
                  <span>Saint Petersburg, Russian Federation</span>
                </div>
              </div>
              <div class="user_profile">
                <p>
                  Freelance UX/UI designer, 80+ projects in web design, mobile
                  apps (iOS & android) and creative projects. Open to offers.
                </p>
              </div>
              <div class="user_btns">
                <div class="info_btn">
                  <a href="#"> <span>contact info</span></a>
                </div>
                <div class="con_btn">
                  <a href="#"
                    ><span id="con_num">1,043</span>
                    <span> connections</span></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn_block">
        <div class="btn_wrap">
          <div class="btn" tabindex="0" autofocus>PROFILE</div>
          <div class="btn" tabindex="0">ACTIVITY & INTERESTS</div>
          <div class="btn" tabindex="0">ARTICLES (3)</div>
        </div>
      </div>
      <div class="userProfile_block">
        <div class="about_tit"><h2>about</h2></div>
        <div class="about_con">
          <p>
            I'm more experienced in eCommerce web projects and mobile banking
            apps, but also like to work with creative projects, such as landing
            pages or unusual corporate websites.
          </p>
        </div>
        <div class="about_sm">
          <a href="#"><h3>see more</h3></a>
        </div>
      </div>
      <div class="projects_block">
        <div class="project_tit">
          <h2 id="tit">Projects</h2>
          <h2 id="tit_num">3 of 12</h2>
        </div>
        <div class="project_main">
          <div class="main">
            <div class="main_photo">
              <a href="#"
                ><img src="../assets/project/project-01.jpg" alt=""
              /></a>
            </div>
            <div class="main_tit"><p>Zara redesign concept</p></div>
            <div class="main_time">UX/UI design, 15.07.2019</div>
          </div>
          <div class="main">
            <div class="main_photo">
              <a href="#"
                ><img src="../assets/project/project-02.jpg" alt=""
              /></a>
            </div>
            <div class="main_tit"><p>SCTHON event brand identity</p></div>
            <div class="main_time">Graphic design, 03.31.2019</div>
          </div>
          <div class="main">
            <div class="main_photo">
              <a href="#"
                ><img src="../assets/project/project-03.jpg" alt=""
              /></a>
            </div>
            <div class="main_tit"><p>Drozd. Brand identity. 2016</p></div>
            <div class="main_time">Graphic design, 03.04.2016</div>
          </div>
        </div>
        <div class="project_sa">
          <a href="#"> <h3>Show all (12)</h3></a>
        </div>
      </div>
      <div class="skills_block"></div>
      <div class="exp_block"></div>
      <div class="edu_block"></div>
    </div>
    <div class="side_area">
      <div class="dash_block"></div>
      <div class="vistors_block"></div>
      <div class="courses_block"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.pf_main_page {
  display: flex;
  padding-top: 40px;
  margin: 0 auto;
  width: calc(100% - 260px);
  max-width: 1920px;
  .main_area {
    margin-right: 20px;
    width: 72%;
    .user_block {
      .userbg_photo {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        position: relative;
        width: 100%;
        padding-top: 22%;
        background-image: url(../assets/view.jpg);
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        .upload_btn {
          width: 36px;
          height: 36px;
          position: absolute;
          top: 20px;
          left: 20px;
          button {
            border-radius: 4px;
            width: 100%;
            height: 100%;
            cursor: pointer;
          }
          .el-icon {
            font-size: 16px;
          }
        }
        .editmore_btn {
          display: flex;
          position: absolute;
          right: 20px;
          top: 20px;
          .edit_btn {
            width: 132px;
            height: 36px;
            button {
              display: flex;
              align-items: center;
              text-transform: uppercase;
              font-size: 13px;
              color: #0275b1;
              border-radius: 4px;
              width: 100%;
              height: 100%;
              cursor: pointer;
              .el-icon {
                padding-right: 10px;
                color: black;
                font-size: 16px;
              }
            }
          }
        }
        .more_btn {
          width: 36px;
          height: 36px;
          margin-left: 10px;
          button {
            height: 100%;
            width: 100%;
            cursor: pointer;
            border-radius: 4px;
            .el-icon {
              transform: rotate(90deg);
              font-size: 14px;
            }
          }
        }
      }
      .user_info {
        display: flex;
        position: relative;
        padding-top: 26px;
        padding-bottom: 35px;
        background-color: #fff;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        .wrap {
          display: flex;
          margin: 0 auto;
          width: 93%;
          .user_avatar {
            margin-top: -50px;
            width: 182px;
            padding-right: 12px;
            .avatar {
              width: 170px;
              height: 170px;
              border: 10px solid #fff;
              border-radius: 50%;
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
            }
          }
          .user_about {
            width: calc(100% - 182px);
            padding-left: 12px;
            display: block;
            .user_name_block {
              display: flex;
              align-items: center;
              justify-content: space-between;
              .name {
                display: flex;
                align-items: center;
                margin: 0;
                .usname {
                  font-size: 18px;
                }
                .in_icon {
                  margin-left: 10px;
                  width: 16px;
                  height: 16px;
                }
              }
              .address {
                display: flex;
                align-items: center;
                .ad_icon {
                  img {
                    height: 16px;
                    width: 16px;
                  }
                }
                span {
                  margin-left: 5px;
                  font-size: 12px;
                }
              }
            }
            .user_profile {
              font-size: 14px;
            }
            .user_btns {
              display: flex;
              align-items: center;
              justify-self: start;
              text-transform: uppercase;
              margin-top: 14px;

              .info_btn {
                width: 170px;
                background: #0275b1;
                border-radius: 4px;
                border: 1px solid #0275b1;
                text-align: center;
                padding: 10px;
                a {
                  span {
                    font-size: 12px;
                    line-height: 9px;
                    color: #ffffff;
                  }
                }
              }
              .con_btn {
                margin-left: 10px;
                width: 170px;
                border: 1px solid #0275b1;
                background: #ffffff;
                border-radius: 4px;
                text-align: center;
                padding: 10px;
                a {
                  span {
                    font-size: 12px;
                    line-height: 9px;
                    color: #0275b1;
                  }
                }
              }
            }
          }
        }
      }
    }
    .btn_block {
      border-bottom: 1px solid #e7e7e7;
      padding-top: 31px;

      .btn_wrap {
        display: flex;
        width: 85%;
        height: 50px;
        margin-right: auto;
        align-items: flex-end;
        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 40px;
          width: 33.333333%;
          border: 1px solid #e7e7e7;
          border-radius: 4px 4px 0 0;
          text-transform: uppercase;
          font-family: Gotham;
          color: #181818;
          cursor: pointer;
          transition: all 0.2s linear;
          font-size: 12px;
        }

        .btn:hover {
          height: 50px;
          color: #fff;
          background: #0275b1;
        }
        .btn:focus {
          height: 50px;
          color: #fff;
          background: #0275b1;
          outline: none;
        }
      }
    }
    .userProfile_block {
      background: #ffffff;
      border-radius: 4px;
      display: block;
      padding-left: 30px;
      padding-right: 30px;
      padding-top: 5px;
      padding-bottom: 10px;
      margin-top: 20px;
      font-family: Gotham;
      .about_tit {
        font-size: 18px;
        text-transform: capitalize;
      }
      .about_con {
        line-height: 1.5;
        font-size: 14px;
      }
      .about_sm {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 12px;
        h3 {
          color: #0275b1;
        }
      }
    }
    .projects_block {
      background: #ffffff;
      border-radius: 4px;
      padding-left: 30px;
      padding-right: 30px;
      padding-top: 5px;
      padding-bottom: 10px;
      margin-top: 20px;
      font-family: Gotham;
      .project_tit {
        display: flex;
        align-items: center;
        font-size: 18px;

        #tit {
          color: #181818;
          font-weight: bold;
        }
        #tit_num {
          padding-left: 20px;
          color: #747474;
          font-weight: normal;
        }
      }
      .project_main {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .main {
          display: block;

          .main_photo {
            img {
              width: 250px;
              height: 160px;
            }
          }
          .main_tit {
            font-size: 16px;
            font-weight: 700;
          }
          .main_time {
            font-size: 10px;
            font-weight: 100;
          }
        }
      }
      .project_sa {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 12px;
        h3 {
          color: #0275b1;
        }
      }
    }
  }
  .side_area {
    margin-right: 20px;
    width: 28%;
  }
  button {
    border: 0px;
    background-color: #ffffff;
  }
}
</style>
