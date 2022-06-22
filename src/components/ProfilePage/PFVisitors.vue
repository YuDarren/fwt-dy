<script>
export default {};
</script>
<template>
  <div class="visitors_block">
    <div class="visitors">
      <div class="vi_tit">
        <div class="left">visitors</div>
        <div class="right"><a href="#">view all</a></div>
      </div>
      <div class="vi_user">
        <div class="vi_avatar">
          <img src="@/assets/img/avatar-w5.jpg" alt="" />
        </div>
        <div class="vi_con">
          <div class="con_name">Audrey Alexander</div>
          <div class="con_job">Team lead at Google</div>
        </div>
      </div>
      <div class="vi_user">
        <div class="vi_avatar">
          <img src="@/assets/img/avatar-w1.jpg" alt="" />
        </div>
        <div class="vi_con">
          <div class="con_name">Kyle Fisher</div>
          <div class="con_job">Product designer at Com...</div>
        </div>
      </div>
      <div class="vi_user">
        <div class="vi_avatar">
          <img src="@/assets/img/avatar-w2.jpg" alt="" />
        </div>
        <div class="vi_con">
          <div class="con_name">Brandon Wilson</div>
          <div class="con_job">Senior UX designer</div>
        </div>
      </div>
      <div class="vi_user">
        <div class="vi_avatar">
          <img src="@/assets/img/avatar-w3.jpg" alt="" />
        </div>
        <div class="vi_con">
          <div class="con_name">Theresa Steward</div>
          <div class="con_job">iOS developer</div>
        </div>
      </div>
      <div class="vi_user">
        <div class="vi_avatar">
          <img src="@/assets/img/avatar-w4.jpg" alt="" />
        </div>
        <div class="vi_con">
          <div class="con_name">Darlene Black</div>
          <div class="con_job">HR-manager, 10 000 connec...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.visitors_block {
  background: #ffffff;
  border-radius: 4px;
  font-family: Gotham;
  margin-top: 20px;
  padding-bottom: 10px;
  .visitors {
    display: block;
    .vi_tit {
      margin: 0px 30px 10px 30px;
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
    .vi_user {
      display: flex;
      align-items: center;
      padding: 0px 20px;
      .vi_avatar {
        padding: 5px 10px;
        img {
          border-radius: 50%;
          width: 52px;
          height: 52px;
        }
      }
      .vi_con {
        display: block;

        font-size: 14px;
        .con_name {
          font-weight: bold;
        }
        .con_job {
          margin: 5px 0px;
          font-weight: 300;
        }
      }
    }
  }
}
</style>
