<script>
export default {};
</script>
<template>
  <div class="visitors_block">
    <div class="visitors">
      <div class="vi_tit">
        <div class="left">Tracked jobs</div>
        <!-- <div class="right"><a href="#">view all</a></div> -->
      </div>
      <div class="vi_user_con">
        <div class="vi_user">
          <div class="vi_avatar">
            <img src="@/assets/menuIcon/job_icon3201.png" alt="" />
          </div>
          <div class="vi_con">
            <div class="con_name">UX/UI Designer</div>
            <div class="con_job">Upwork</div>
          </div>
        </div>
        <div class="vi_user">
          <div class="vi_avatar">
            <img src="@/assets/menuIcon/job_icon3202.png" alt="" />
          </div>
          <div class="vi_con">
            <div class="con_name">Product designer</div>
            <div class="con_job">Facebook</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.visitors_block {
  background: #fcfdfd;
  border-radius: 4px;
  font-family: Gotham;
  margin-top: 20px;
  padding-bottom: 10px;
  .visitors {
    display: block;
    .vi_tit {
      margin: 0px 30px;
      padding: 20px 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-transform: uppercase;
      font-size: 12px;
      border-bottom: 1px solid #e7e7e7;
      .left {
        font-weight: 600;
      }
      .right {
        a {
          font-weight: 600;
          color: #0275b1;
        }
      }
    }
    .vi_user_con {
      margin: 0px 30px;
      padding: 20px 0px;

      .vi_user {
        display: flex;
        align-items: center;
        padding: 10px;
        border: 1px solid #f4f4f4;
        border-radius: 4px;

        .vi_avatar {
          display: flex;
          align-items: center;
          padding: 5px 10px;
        }
        .vi_con {
          display: block;
          line-height: 1.5;
          .con_name {
            font-size: 12px;
            font-weight: bold;
          }
          .con_job {
            font-size: 10px;
            font-weight: 300;
          }
        }
      }
      .vi_user + .vi_user {
        margin-top: 10px;
      }
    }
  }
}
</style>
