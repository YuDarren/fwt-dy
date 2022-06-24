<script>
export default {};
</script>
<template>
  <div class="job_searches_block">
    <div class="mygroups">
      <div class="mygroups_tit">
        <div class="tit">my searches</div>
        <div class="edit"><a href="#">Edit list</a></div>
      </div>
      <div class="mygroups_con">
        <div class="groups">
          <div class="job_info">
            <div class="jobname_num">
              <div class="name">UX/UI designer</div>
              <div class="num">+240</div>
            </div>
            <div class="add">Remote</div>
          </div>
          <div class="photo">
            <img src="@/assets/menuIcon/bell-off.png" alt="" />
          </div>
        </div>
        <div class="groups">
          <div class="job_info">
            <div class="jobname_num">
              <div class="name">Web designer</div>
              <!-- <div class="num">+240</div> -->
            </div>
            <div class="add">Los-Angeles, CA</div>
          </div>
          <div class="photo">
            <img src="@/assets/menuIcon/bell-on.png" alt="" />
          </div>
        </div>
        <div class="groups">
          <div class="job_info">
            <div class="jobname_num">
              <div class="name">Graphic designer</div>
              <!-- <div class="num">+240</div> -->
            </div>
            <div class="add">Malaysia, Kuala Lumpur</div>
          </div>
          <div class="photo">
            <img src="@/assets/menuIcon/bell-on.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.job_searches_block {
  margin-top: 20px;
  background: #fcfdfd;
  border-radius: 4px;
  .mygroups {
    padding-bottom: 20px;
    .mygroups_tit {
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #f4f4f4;
      margin: 0px 30px;
      padding: 20px 0px;
      .tit {
        font-size: 12px;
        font-weight: 600;
      }
      .edit {
        a {
          font-size: 12px;
          color: #0275b1;
          font-weight: 600;
        }
      }
    }
    .mygroups_con {
      display: block;
      padding: 10px 30px;
      .groups {
        background: #e9f0f8;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid #f4f4f4;
        border-radius: 4px;
        margin-top: 10px;
        padding: 5px 10px;
        .photo {
          padding: 10px;
        }
        .job_info {
          display: block;
          line-height: 1.5;
          .jobname_num {
            font-weight: 500;
            font-size: 12px;
            display: flex;
            align-items: center;
            .name {
              margin-right: 10px;
            }
            .num {
              color: #02b033;
            }
          }
          .add {
            font-size: 10px;
            font-weight: 200;
            opacity: 0.3;
          }
        }
      }
    }
  }
}
</style>
