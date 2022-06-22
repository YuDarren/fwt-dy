<script>
import PFUser from "@/components/ProfilePage/PFUser.vue";
import PFBtns from "@/components/ProfilePage/PFBtns.vue";
import PFUserPf from "@/components/ProfilePage/PFUserPf.vue";
import PFProjects from "@/components/ProfilePage/PFProjects.vue";
import PFSkill from "@/components/ProfilePage/PFSkill.vue";
import PFExp from "@/components/ProfilePage/PFExp.vue";
import PFEdu from "@/components/ProfilePage/PFEdu.vue";
import PFDash from "@/components/ProfilePage/PFDash.vue";
import PFVisitors from "@/components/ProfilePage/PFVisitors.vue";
import PFCourses from "@/components/ProfilePage/PFCourses.vue";

export default {
  components: {
    PFUser,
    PFBtns,
    PFUserPf,
    PFProjects,
    PFSkill,
    PFExp,
    PFEdu,
    PFDash,
    PFVisitors,
    PFCourses,
  },
};
</script>
<template>
  <div class="pf_main_page">
    <div class="main_area">
      <PFUser />
      <PFBtns />
      <PFUserPf />
      <PFProjects />
      <PFSkill />
      <PFExp />
      <PFEdu />
    </div>
    <div class="side_area">
      <PFDash />
      <PFVisitors />
      <PFCourses />
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
