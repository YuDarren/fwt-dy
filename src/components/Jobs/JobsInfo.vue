<script>
export default {
  props: {
    name: { type: String },
    job: { type: String },
    img: { type: String },
    company: { type: String },
    add: { type: String },
  },
};
</script>
<template>
  <div class="jobsinfo_block">
    <div class="job">
      <div class="job_photo">
        <img :src="require(`@/assets/menuIcon/${img}.png`)" alt="" />
      </div>
      <div class="job_info">
        <div class="job_name">{{ name }}</div>
        <div class="company_add">
          <div class="company">{{ company }}</div>
          <div class="add">{{ add }}</div>
        </div>
        <div class="job_con">{{ job }}</div>
      </div>
    </div>
    <div class="morebtn">
      <div class="more">more</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.jobsinfo_block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 4px;
  padding: 20px 30px;
  .job {
    display: flex;
    align-items: center;
    line-height: 1.5;
    .job_photo {
      width: 54px;
      height: 54px;
      padding-right: 20px;
      img {
        width: 54px;
        height: 54px;
      }
    }
    .job_info {
      display: block;
      margin-right: 200px;
    }
    .job_name {
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 5px;
    }
    .company_add {
      display: flex;
      align-items: center;
      font-size: 10px;

      .company {
        font-weight: 300;
      }
      .add {
        margin-left: 10px;
        font-weight: 100;
        opacity: 0.3;
      }
    }
    .job_con {
      display: flex;
      align-items: center;
      font-size: 10px;
      font-weight: 300;
    }
  }
  .morebtn {
    flex-shrink: 1;
    .more {
      padding: 10px 30px;
      color: #fff;
      background: #0077b5;
      border-radius: 4px;
      text-transform: uppercase;
      font-size: 12px;
      cursor: pointer;
    }
  }
}
</style>
