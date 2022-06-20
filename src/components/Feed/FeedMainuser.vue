<script>
export default {};
</script>
<template>
  <div class="mainuser_block">
    <div class="userbg_photo"></div>
    <div class="user_info">
      <div class="wrap">
        <div class="user_avatar">
          <div class="avatar">
            <img src="@/assets/img/avatar-m11.jpg" alt="" />
          </div>
        </div>
        <div class="user_about">
          <div class="user_name_block">
            <div class="name">
              <h2 class="usname">JAMES GORDON</h2>
              <a href="#" class="in_icon">
                <img src="@/assets/menuIcon/linked_Logo12_gold.png" alt=""
              /></a>
            </div>
          </div>
          <div class="user_profile">
            <p>
              Freelance UX/UI designer, 80+ projects in web design, mobile apps
              (iOS & android) and creative projects. Open to offers.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.mainuser_block {
  border-radius: 4px;
  background: #fff;
  display: block;
  .userbg_photo {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    position: relative;
    width: 100%;
    height: 60px;
    padding-top: 22%;
    background-image: url("~@/assets/littleview.png");
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
  }
  .user_info {
    position: relative;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    .wrap {
      display: block;
      .user_avatar {
        display: flex;
        align-items: center;
        justify-content: center;

        .avatar {
          margin-top: -50px;
          width: 100px;
          height: 100px;
          border: 6px solid #fff;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .user_about {
        display: block;
        .user_name_block {
          .name {
            display: flex;
            align-items: center;
            justify-content: center;

            .usname {
              font-size: 14px;
            }
            .in_icon {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-left: 10px;
              width: 12px;
              height: 12px;
            }
          }
        }
        .user_profile {
          padding: 10px 30px;
          font-size: 10px;
        }
      }
    }
  }
}
</style>
