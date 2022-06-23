<script>
import PostUserinfo from "@/components/LittleCom/PostUserinfo.vue";
import { reactive } from "@vue/reactivity";
export default {
  components: { PostUserinfo },
  setup() {
    const name = reactive([
      "How I make cool designs?",
      "Advices for young HR-manage",
      "A little about usability testing",
    ]);
    const watch = reactive(["6,340 viewers", "8,123 viewers", "3,912 viewers"]);
    const img = reactive(["trending_01", "trending_02", "trending_03"]);
    return { name, watch, img };
  },
};
</script>
<template>
  <div class="trending_block">
    <div class="trending">
      <div class="trending_tit">Trending articles</div>
      <div class="trending_con">
        <PostUserinfo :name="name[0]" :job="watch[0]" :img="img[0]" />
        <PostUserinfo :name="name[1]" :job="watch[1]" :img="img[1]" />
        <PostUserinfo :name="name[2]" :job="watch[2]" :img="img[2]" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.trending_block {
  background: #fcfdfd;
  border-radius: 4px;
  margin-top: 20px;
  .trending {
    display: block;
    .trending_tit {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      padding: 20px 0px;
      margin: 0px 30px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f4f4f4;
    }
    .trending_con {
      padding: 10px 0px;
      .post_user {
        .user_info {
          display: block;
          .name {
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 5px;
            line-height: 1.25;
          }
          .job {
            font-size: 10px;
            font-weight: 300;
          }
        }
      }
    }
  }
}
</style>
