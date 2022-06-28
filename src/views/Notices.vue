<script>
import PFDash from "@/components/ProfilePage/PFDash.vue";
import NoticesSidebtns from "@/components/Notices/NoticesSidebtns.vue";
import NoticesLine from "@/components/Notices/NoticesLine.vue";
import NoticesInfo from "@/components/Notices/NoticesInfo.vue";
import { reactive } from "@vue/reactivity";
export default {
  components: { PFDash, NoticesSidebtns, NoticesLine, NoticesInfo },
  setup() {
    const img = reactive([
      "img/avatar54_02",
      "img/avatar54_03",
      "img/avatar54_04",
      "img/avatar54_05",
      "img/avatar54_06",
    ]);
    const icon = reactive([
      "menuIcon/job_icon5401",
      "menuIcon/job_icon5402",
      "menuIcon/job_icon5403",
      "menuIcon/job_icon5404",
      "menuIcon/job_icon5405",
    ]);
    const info = reactive([
      "You appeared in 9 searches this week",
      "Audrey Alexander and 10 others viewed your profile",
      "Eduardo Russel and 4 others liked your post «1,000 connections! My network growth, so many»",
      "We found jobs that you may be interested",
      "Kyle Fisher and 17 others viewed your profile",
    ]);
    const time = reactive([
      "3 hours",
      "9 hours",
      "12 hours",
      "2 day ago",
      "9 hours",
    ]);

    return { img, icon, info, time };
  },
};
</script>
<template>
  <div class="notices_main_page">
    <div class="notices_side_area">
      <NoticesSidebtns />
      <PFDash />
    </div>
    <div class="notices_main_area">
      <NoticesLine con="recent" />
      <NoticesInfo
        :imgone="icon[0]"
        :imgtwo="icon[1]"
        :imgthree="icon[2]"
        :info="info[0]"
        :time="time[0]"
      />
      <NoticesInfo
        :imgone="img[0]"
        :imgtwo="img[1]"
        :imgthree="img[2]"
        :info="info[1]"
        :time="time[1]"
      />
      <NoticesInfo
        :imgone="img[2]"
        :imgtwo="img[3]"
        :imgthree="img[4]"
        :info="info[2]"
        :time="time[2]"
      />
      <NoticesLine con="Earlier" />
      <NoticesInfo
        :imgone="icon[1]"
        :imgtwo="icon[4]"
        :imgthree="icon[3]"
        :info="info[3]"
        :time="time[3]"
      />
      <NoticesInfo
        :imgone="img[3]"
        :imgtwo="img[1]"
        :imgthree="img[0]"
        :info="info[4]"
        :time="time[4]"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.notices_main_page {
  display: flex;
  padding-top: 40px;
  margin: 0 auto;
  width: calc(100% - 260px);
  max-width: 1920px;
  font-family: Gothan;

  .notices_side_area {
    margin-right: 40px;
    width: 28%;
  }
  .notices_main_area {
    width: 72%;
    .noticesinfo_block + .noticesinfo_block {
      margin-top: 10px;
    }
    .noticesline_block + .noticesinfo_block {
      margin-top: 20px;
    }
    .noticesinfo_block + .noticesline_block {
      margin-top: 30px;
    }
  }
}
</style>
