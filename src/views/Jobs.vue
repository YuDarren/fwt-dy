<script>
import JobDreamjob from "@/components/Jobs/JobDreamjob.vue";
import Jobsline from "@/components/Jobs/Jobsline.vue";
import JobsInfo from "@/components/Jobs/JobsInfo.vue";
import JobPostbtn from "@/components/Jobs/JobPostbtn.vue";
import JobSearches from "@/components/Jobs/JobSearches.vue";
import JobTracked from "@/components/Jobs/JobTracked.vue";
import JobsArticles from "@/components/Jobs/JobsArticles.vue";
import { reactive } from "@vue/reactivity";

export default {
  components: {
    JobDreamjob,
    Jobsline,
    JobsInfo,
    JobPostbtn,
    JobSearches,
    JobTracked,
    JobsArticles,
  },
  setup() {
    const jobName = reactive([
      "UX/UI designer",
      "Product designer",
      "Part-time UX designer",
      "Web designer",
      "UI designer",
      "Product designer",
    ]);
    const jobCon = reactive([
      "On Upwork you'll find a range of top freelancers and agencies, from developers and development agencies to designers and creative agencies, copywriters,",
      "Founded in 2004, Facebook's mission is to give people the power to build community and bring the world closer together. People use our products to stay..",
      "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking.",
      "LinkedIn, the world's largest professional network. The mission of LinkedIn is simple: connect the world's professional.",
      "Instagram is a photo and video-sharing social networking service owned by Facebook, Inc.",
      "eriscope is a live video streaming app for Android and iOS developed by Kayvon Beykpour and Joe Bernstein and acquired by Twitter before launch in 2015.",
    ]);
    const company = reactive([
      "Upwork",
      "Facebook",
      "Google",
      "LinkedIn",
      "Instagram",
      "Periscope",
    ]);
    const address = reactive([
      "Remote only",
      "CA, USA",
      "International",
      "CA, USA",
      "CA, USA",
      "Remote only",
    ]);
    const jobPhoto = reactive([
      "job_icon5401",
      "job_icon5402",
      "job_icon5403",
      "job_icon5404",
      "job_icon5405",
      "job_icon5406",
    ]);
    return { jobName, jobCon, company, address, jobPhoto };
  },
};
</script>
<template>
  <div class="pf_main_page">
    <div class="main_area">
      <JobDreamjob />
      <Jobsline con="jobs for you" />
      <JobsInfo
        :img="jobPhoto[0]"
        :name="jobName[0]"
        :job="jobCon[0]"
        :company="company[0]"
        :add="address[0]"
      />
      <JobsInfo
        :img="jobPhoto[1]"
        :name="jobName[1]"
        :job="jobCon[1]"
        :company="company[1]"
        :add="address[1]"
      />
      <JobsInfo
        :img="jobPhoto[2]"
        :name="jobName[2]"
        :job="jobCon[2]"
        :company="company[2]"
        :add="address[2]"
      />
      <JobsInfo
        :img="jobPhoto[3]"
        :name="jobName[3]"
        :job="jobCon[3]"
        :company="company[3]"
        :add="address[3]"
      />
      <Jobsline con="New jobs" />
      <JobsInfo
        :img="jobPhoto[4]"
        :name="jobName[4]"
        :job="jobCon[4]"
        :company="company[4]"
        :add="address[4]"
      />
      <JobsInfo
        :img="jobPhoto[5]"
        :name="jobName[5]"
        :job="jobCon[5]"
        :company="company[5]"
        :add="address[5]"
      />
    </div>
    <div class="side_area">
      <JobPostbtn />
      <JobSearches />
      <JobTracked />
      <JobsArticles />
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
  .jobsinfo_block + .jobsinfo_block {
    margin-top: 10px;
  }
  .sortline_block + .jobsinfo_block {
    margin-top: 20px;
  }
}
</style>
