<script>
import { ArrowRight } from "@element-plus/icons-vue";
export default { components: { ArrowRight } };
</script>
<template>
  <div class="search_jobs">
    <div class="jobstit">JOBS</div>
    <div class="jobscon">
      <div class="coninfo">
        <div class="info">
          <div class="info_photo">
            <img src="@/assets/menuIcon/job_icon3201.png" alt="" />
          </div>
          <div class="nameandcon">
            <div class="name">UX/UI Designer</div>
            <div class="con">Upwork</div>
          </div>
        </div>
        <div class="infoicon">
          <a href="#"
            ><el-icon><ArrowRight /></el-icon
          ></a>
        </div>
      </div>
      <div class="coninfo">
        <div class="info">
          <div class="info_photo">
            <img src="@/assets/menuIcon/job_icon3202.png" alt="" />
          </div>
          <div class="nameandcon">
            <div class="name">Part-time UX designer</div>
            <div class="con">Facebook</div>
          </div>
        </div>
        <div class="infoicon">
          <a href="#"
            ><el-icon><ArrowRight /></el-icon
          ></a>
        </div>
      </div>
    </div>
    <div class="jobslink"><a href="#">All jobs (84)</a></div>
  </div>
</template>
<style lang="scss" scoped>
.search_jobs {
  display: flex;
  flex-direction: column;
  .jobstit {
    opacity: 0.3;
    margin-bottom: 20px;
    font-size: 12px;
  }
  .jobscon {
    display: flex;
    flex-direction: column;
    .coninfo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #f4f4f4;
      border-radius: 4px;
      padding: 10px 20px;

      .info {
        display: flex;
        .info_photo {
          display: flex;
          align-items: center;
          margin-right: 10px;
        }
        .nameandcon {
          line-height: 1.5;
          .name {
            font-size: 12px;
            font-weight: 600;
          }
          .con {
            font-size: 10px;
            font-weight: 100;
          }
        }
      }
      .infoicon {
        a {
          .el-icon {
            color: #cecece;
          }
        }
      }
    }
    .coninfo + .coninfo {
      margin-top: 10px;
    }
  }
  .jobslink {
    text-transform: uppercase;
    padding: 20px 0px;
    a {
      font-size: 12px;
      font-weight: 600;
      color: #0275b1;
    }
  }
}
</style>
