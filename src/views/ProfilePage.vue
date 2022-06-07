<script>
export default {};
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
            </div>
            <div class="user_btns"></div>
          </div>
        </div>
      </div>
      <div class="btn_block"></div>
      <div class="userProfile_block"></div>
      <div class="projects_block"></div>
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
    border-radius: 4px;
    margin-right: 20px;
    width: 72%;
    .user_block {
      .userbg_photo {
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
              font-size: 12px;
            }
          }
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
