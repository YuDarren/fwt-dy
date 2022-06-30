<script>
export default {};
</script>
<template>
  <div class="topbtns_block">
    <div class="topbtns">
      <div class="bigbtn">
        <div class="bigbtnicon">
          <img src="@/assets/menuIcon/book-open.png" alt="" />
        </div>
        <div class="bigbtn_info">
          <div class="name">Learning with LinkedIn</div>
          <div class="info">Courses, lectures, workshops</div>
        </div>
      </div>
      <div class="littlebtns">
        <div class="twobtns">
          <div class="littlebtn">
            <div class="li_icon">
              <img src="@/assets/menuIcon/Insights.png" alt="" />
            </div>
            <div class="btn_name">Insights</div>
          </div>
          <div class="littlebtn">
            <div class="li_icon">
              <img src="@/assets/menuIcon/advertise.png" alt="" />
            </div>
            <div class="btn_name">advertise</div>
          </div>
        </div>
        <div class="twobtns">
          <div class="littlebtn">
            <div class="li_icon">
              <img src="@/assets/menuIcon/other_groups.png" alt="" />
            </div>
            <div class="btn_name">groups</div>
          </div>
          <div class="littlebtn">
            <div class="li_icon">
              <img src="@/assets/menuIcon/proFinder.png" alt="" />
            </div>
            <div class="btn_name">proFinder</div>
          </div>
        </div>
        <div class="twobtns">
          <div class="littlebtn">
            <div class="li_icon">
              <img src="@/assets/menuIcon/Salary.png" alt="" />
            </div>
            <div class="btn_name">Salary</div>
          </div>
          <div class="littlebtn">
            <div class="li_icon">
              <img src="@/assets/menuIcon/slideshare.png" alt="" />
            </div>
            <div class="btn_name">slideshare</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.topbtns_block {
  border-top: 1px solid #f4f4f4;
  padding: 20px;
  .topbtns {
    .bigbtn {
      display: flex;
      background: #0275b1;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
      margin-bottom: 20px;
      .bigbtnicon {
        display: flex;
        align-items: center;
      }
      .bigbtn_info {
        padding-left: 20px;
        color: #fff;
        line-height: 1.5;
        .name {
          font-size: 12px;
          font-weight: 600;
        }
        .info {
          font-size: 10px;
          font-weight: 100;
        }
      }
    }
    .littlebtns {
      .twobtns {
        width: 100%;
        display: flex;
        .littlebtn {
          display: flex;
          align-items: center;
          border: 1px solid #f4f4f4;
          border-radius: 4px;
          padding: 10px 15px;
          width: 100%;

          .li_icon {
            display: flex;
            align-items: center;
            padding-right: 10px;
          }
          .btn_name {
            text-transform: uppercase;
            font-size: 12px;
            font-weight: 600;
          }
        }
        .littlebtn + .littlebtn {
          margin-left: 10px;
        }
      }
      .twobtns + .twobtns {
        margin-top: 10px;
      }
    }
  }
}
</style>
