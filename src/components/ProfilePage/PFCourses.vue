<script>
export default {};
</script>
<template>
  <div class="courses_block">
    <div class="courses">
      <div class="cour_tit">You may like these courses</div>
      <div class="cour_group">
        <div class="group">
          <div class="gr_photo">
            <img src="@/assets/courses_01.png" alt="" />
          </div>
          <div class="gr_con">
            <div class="gr_tit">UX Foundations: Prototyping</div>
            <div class="gr_watch">27,959 viewers</div>
          </div>
        </div>
        <div class="group">
          <div class="gr_photo">
            <img src="@/assets/courses_02.png" alt="" />
          </div>
          <div class="gr_con">
            <div class="gr_tit">Designing with Adobe XD and pro</div>
            <div class="gr_watch">9,122 viewers</div>
          </div>
        </div>
        <div class="group">
          <div class="gr_photo">
            <img src="@/assets/courses_03.png" alt="" />
          </div>
          <div class="gr_con">
            <div class="gr_tit">UX Foundations: Styles and GUIs</div>
            <div class="gr_watch">13,858 viewers</div>
          </div>
        </div>
      </div>
      <div class="cour_sar"><a href="#">See all recomendations</a></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.courses_block {
  background: #fcfdfd;
  border-radius: 4px;
  font-family: Gotham;
  margin-top: 20px;
  .courses {
    display: block;
    .cour_tit {
      margin: 0px 30px;
      padding: 20px 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 12px;
      border-bottom: 1px solid #e7e7e7;
    }
    .cour_group {
      display: block;
      .group {
        display: flex;
        align-items: flex-start;
        .gr_photo {
          padding: 20px 20px 20px 30px;
          img {
            width: 80px;
            height: 52px;
            border-radius: 4px;
          }
        }
        .gr_con {
          padding: 20px 30px 0px 0px;
          .gr_tit {
            font-size: 16px;
            font-weight: bolder;
          }
          .gr_watch {
            margin-top: 5px;
            font-size: 10px;
            font-weight: 300;
          }
        }
      }
    }
    .cour_sar {
      padding: 20px 30px;
      text-transform: uppercase;
      a {
        color: #0275b1;
        font-size: 14px;
        font-weight: 900;
      }
    }
  }
}
</style>
