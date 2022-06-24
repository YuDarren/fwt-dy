<script>
export default {};
</script>
<template>
  <div class="articles_block">
    <div class="articles">
      <div class="art_tit">You may like these courses</div>
      <div class="art_group">
        <div class="group">
          <div class="gr_photo">
            <img src="@/assets/img/job_art01.png" alt="" />
          </div>
          <div class="gr_con">
            <div class="gr_tit">
              The guide.<br />
              Apply for a job
            </div>
            <div class="gr_watch">12,932 viewers</div>
          </div>
        </div>
        <div class="group">
          <div class="gr_photo">
            <img src="@/assets/img/job_art02.png" alt="" />
          </div>
          <div class="gr_con">
            <div class="gr_tit">Your dream job and how you can g</div>
            <div class="gr_watch">12,932 viewers</div>
          </div>
        </div>
        <div class="group">
          <div class="gr_photo">
            <img src="@/assets/img/job_art03.png" alt="" />
          </div>
          <div class="gr_con">
            <div class="gr_tit">Now you know it. 15 steps to find job</div>
            <div class="gr_watch">7,221 viewers</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.articles_block {
  background: #fcfdfd;
  border-radius: 4px;
  font-family: Gotham;
  margin-top: 20px;
  .articles {
    display: block;
    .art_tit {
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
    .art_group {
      display: block;
      padding: 20px 30px;
      .group {
        display: flex;
        align-items: center;
        .gr_photo {
          img {
            border-radius: 4px;
          }
        }
        .gr_con {
          line-height: 1.5;
          margin-left: 20px;

          align-items: flex-start;
          .gr_tit {
            font-size: 14px;
            font-weight: bolder;
          }
          .gr_watch {
            font-size: 10px;
            font-weight: 300;
          }
        }
      }
      .group + .group {
        margin-top: 20px;
      }
    }
  }
}
</style>
