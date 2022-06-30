<script>
import { ArrowRight } from "@element-plus/icons-vue";
export default { components: { ArrowRight } };
</script>
<template>
  <div class="search_jobs">
    <div class="jobstit">Users</div>
    <div class="jobscon">
      <div class="coninfo">
        <div class="info">
          <div class="info_photo">
            <img
              style="width: 32px; height: 32px"
              src="@/assets/img/avatar54_03.png"
              alt=""
            />
          </div>
          <div class="nameandcon">
            <div class="name">Brandon Wilson</div>
            <div class="con">Senior UX designer</div>
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
            <img
              style="width: 32px; height: 32px"
              src="@/assets/img/avatar54_02.png"
              alt=""
            />
          </div>
          <div class="nameandcon">
            <div class="name">Kyle Fisher</div>
            <div class="con">Product designer at Commandor Corp.</div>
          </div>
        </div>
        <div class="infoicon">
          <a href="#"
            ><el-icon><ArrowRight /></el-icon
          ></a>
        </div>
      </div>
    </div>
    <div class="jobslink"><a href="#">All users (1,530)</a></div>
  </div>
</template>
<style lang="scss" scoped>
.search_jobs {
  display: flex;
  flex-direction: column;
  border-top: 1px solid #f4f4f4;
  .jobstit {
    opacity: 0.3;
    margin: 20px 0px;
    font-size: 12px;
    text-transform: uppercase;
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
        align-items: center;
        .info_photo {
          margin-right: 10px;
          display: flex;
          align-items: center;
          image {
            width: 32px;
            height: 32px;
          }
        }
        .nameandcon {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
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
