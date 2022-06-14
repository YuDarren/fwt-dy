<script>
export default {};
</script>
<template>
  <div class="exp_block">
    <div class="exp">
      <div class="exp_tit"><h2>Experience</h2></div>
      <div class="exp_job">
        <div class="exp_job_photo">
          <img src="@/assets/menuIcon/profile_exp_01.png" alt="" />
        </div>
        <div class="exp_job_det">
          <div class="exp_job_name"><h3>Freelance UX/UI designer</h3></div>
          <div class="exp_job_where">
            <span id="where1">Self Employed</span
            ><span id="where2">Around the world</span>
          </div>
          <div class="exp_job_time">
            <span id="when1">Jun 2016 — Present</span
            ><span id="when2">3 yrs 3 mos</span>
          </div>
          <div class="exp_job_do">
            <p>
              Work with clients and web studios as freelancer. Work in next
              areas: eCommerce web projects; creative landing pages; iOs and
              Android apps; corporate web sites and corporate identity
              sometimes.
            </p>
          </div>
        </div>
      </div>
      <div class="exp_line"></div>
      <div class="exp_job">
        <div class="exp_job_photo">
          <img src="@/assets/menuIcon/profile_exp_02.png" alt="" />
        </div>
        <div class="exp_job_det">
          <div class="exp_job_name"><h3>UX/UI designer</h3></div>
          <div class="exp_job_where">
            <span id="where1">Upwork</span
            ><span id="where2">International</span>
          </div>
          <div class="exp_job_time">
            <span id="when1">Jun 2019 — Present</span
            ><span id="when2">3 mos</span>
          </div>
          <div class="exp_job_do">
            <p>
              New experience with Upwork system. Work in next areas: UX/UI
              design, graphic design, interaction design, UX research.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.exp_block {
  background: #ffffff;
  border-radius: 4px;
  font-family: Gotham;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 5px;
  padding-bottom: 10px;
  margin-top: 20px;
  .exp {
    display: block;
    .exp_tit {
      font-size: 18px;
    }
    .exp_job {
      display: flex;
      padding-bottom: 10px;
      padding-top: 10px;
      margin-top: 10px;
      .exp_job_photo {
        width: 54px;
        height: 54px;
      }
      .exp_job_det {
        display: block;
        margin-left: 20px;
        .exp_job_name {
          h3 {
            font-weight: bold;
            font-size: 18px;
            margin: 0px;
          }
        }
        .exp_job_where {
          margin-top: 10px;
          font-size: 14px;
          #where1 {
            font-weight: 500;
          }
          #where2 {
            margin-left: 5px;
            font-weight: 100;
          }
        }
        .exp_job_time {
          margin-top: 10px;
          font-size: 14px;
          #when1 {
            font-weight: 100;
          }
          #when2 {
            color: #0275b1;
            font-weight: 900;
            margin-left: 5px;
          }
        }
        .exp_job_do {
          font-size: 14px;
          margin-top: 10px;
        }
      }
    }
    .exp_line {
      border-bottom: 1px solid #f4f4f4;
      margin-bottom: 20px;
    }
  }
}
</style>
