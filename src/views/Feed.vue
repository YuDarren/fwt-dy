<script>
import {} from "@element-plus/icons-vue";
import FeedWritepost from "@/components/Feed/FeedWritepost.vue";
import FeedSortline from "@/components/Feed/FeedSortline.vue";
import FeedUserpostOne from "@/components/Feed/FeedUserpostOne.vue";
import FeedUserpostTwo from "@/components/Feed/FeedUserpostTwo.vue";
import FeedUserpostThree from "@/components/Feed/FeedUserpostThree.vue";
import FeedUserpostFour from "@/components/Feed/FeedUserpostFour.vue";
import { reactive } from "@vue/reactivity";
import FeedMainuser from "@/components/Feed/FeedMainuser.vue";
import FeedWriteart from "@/components/Feed/FeedWriteart.vue";
export default {
  components: {
    FeedWritepost,
    FeedSortline,
    FeedUserpostOne,
    FeedUserpostTwo,
    FeedUserpostThree,
    FeedUserpostFour,
    FeedMainuser,
    FeedWriteart,
  },
  // props: {
  //   name: { type: String },
  //   job: { type: String },
  //   img: { type: String },
  // },
  setup() {
    const name = reactive([
      "Theresa Steward",
      "Kyle Fisher",
      "Brandon Wilson",
      "Audrey Alexander",
    ]);
    const job = reactive([
      "iOS developer",
      "Product designer at Commandor Corp.",
      "Senior UX designer",
      "Team lead at Google",
    ]);
    const img = reactive([
      "avatar54_01",
      "avatar54_02",
      "avatar54_03",
      "avatar54_04",
    ]);
    return { name, job, img };
  },
};
</script>
<template>
  <div class="feed_main_page">
    <div class="fe_main_area">
      <FeedWritepost />
      <FeedSortline />
      <FeedUserpostOne :name="name[0]" :job="job[0]" :img="img[0]" />
      <FeedUserpostTwo :name="name[1]" :job="job[1]" :img="img[1]" />
      <FeedUserpostThree :name="name[2]" :job="job[2]" :img="img[2]" />
      <FeedUserpostFour :name="name[3]" :job="job[3]" :img="img[3]" />
    </div>
    <div class="fe_side_area">
      <FeedMainuser />
      <FeedWriteart />
      <div class="writeart_block"></div>
      <div class="mygroups_block"></div>
      <div class="follow_block"></div>
      <div class="trending_block"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.feed_main_page {
  display: flex;
  padding-top: 40px;
  margin: 0 auto;
  width: calc(100% - 260px);
  max-width: 1920px;
  font-family: Gothan;
  .fe_main_area {
    margin-right: 20px;
    width: 72%;
  }
  .fe_side_area {
    margin-right: 20px;
    width: 28%;
  }
}
</style>
