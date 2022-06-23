<script>
import JobDreamjob from "@/components/Jobs/JobDreamjob.vue";

export default { components: { JobDreamjob } };
</script>
<template>
  <div class="pf_main_page">
    <div class="main_area">
      <JobDreamjob />
      <div class="jobsline_block"></div>
      <div class="jobs_block"></div>
      <div class="jobsline_block"></div>
      <div class="jobs_block"></div>
    </div>
    <div class="side_area">
      <div class="job_postbtn_block"></div>
      <div class="job_searches_block"></div>
      <div class="job_trached_block"></div>
      <div class="job_articles_block"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.pf_main_page {
  display: flex;
  padding-top: 40px;
  margin: 0 auto;
  width: calc(100% - 260px);
  max-width: 1920px;
  .main_area {
    margin-right: 40px;
    width: 72%;
  }
  .side_area {
    width: 28%;
  }
}
</style>
