<script>
export default {};
</script>
<template>
  <div class="edu_block">
    <div class="edu">
      <div class="edu_tit"><h2>Education</h2></div>
      <div class="edu_con">
        <div class="edu_photo">
          <img src="@/assets/menuIcon/edu_photo.svg" alt="" />
        </div>
        <div class="edu_det">
          <div class="det_tit">
            <h3>Moscow State Linguistic University</h3>
          </div>
          <div class="det_dep">
            <span
              >Bachelor's degree Field Of StudyComputer and Information Systems
              Security/Information Assurance</span
            >
          </div>
          <div class="det_time"><span>2013 — 2017</span></div>
          <div class="det_con">
            <p>Additional English classes and UX profile courses​.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.edu_block {
  background: #ffffff;
  border-radius: 4px;
  font-family: Gotham;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 5px;
  padding-bottom: 10px;
  margin-top: 20px;
  .edu {
    display: block;
    .edu_tit {
      font-size: 18px;
    }
    .edu_con {
      display: flex;
      padding-bottom: 10px;
      padding-top: 10px;
      margin-top: 10px;
      .edu_photo {
        width: 54px;
        height: 54px;
      }
      .edu_det {
        display: block;
        margin-left: 20px;
        .det_tit {
          h3 {
            font-weight: bold;
            font-size: 18px;
            margin: 0px;
          }
        }
        .det_dep {
          margin-top: 10px;
          font-size: 14px;
          font-weight: 500;
        }
        .det_time {
          margin-top: 10px;
          font-size: 14px;
          font-weight: 100;
        }
        .det_con {
          margin-top: 10px;
          font-size: 14px;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
