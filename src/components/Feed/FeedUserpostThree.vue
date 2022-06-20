<script>
import Posttit from "@/components/LittleCom/Posttit.vue";
import PostUserinfo from "@/components/LittleCom/PostUserinfo.vue";
import PostBtns from "@/components/LittleCom/PostBtns.vue";
import PostFile from "@/components/LittleCom/PostFile.vue";
import { reactive, ref } from "@vue/reactivity";
export default {
  components: { Posttit, PostUserinfo, PostBtns, PostFile },
  props: {
    name: { type: String },
    job: { type: String },
    img: { type: String },
  },
  setup() {
    const file = reactive([
      "iOS 11 guidelines for UX/UI designers",
      "iOS 11 guidelines for developers",
    ]);
    const filekb = reactive(["PDF file, 324 kb", "PDF file, 245 kb"]);
    const tit = ref("High rated post from your feed");
    const post_con = ref("There is some new guidelines for iOS");
    const fileimg = ref(["fileicon"]);
    return { tit, post_con, fileimg, file, filekb };
  },
};
</script>
<template>
  <div class="userpost_block">
    <div class="userpost">
      <Posttit :a="tit" />
      <div class="postcon">
        <PostUserinfo :name="name" :job="job" :img="img" />
        <div class="postcon_con">
          <p>{{ post_con }}</p>
          <PostFile :name="file[0]" :job="filekb[0]" :img="fileimg" />
          <PostFile :name="file[1]" :job="filekb[1]" :img="fileimg" />
        </div>
        <!-- <div class="postcon_rm"><a href="#">Read more</a></div> -->
        <PostBtns />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.userpost_block {
  background: #ffffff;
  border-radius: 4px;
  margin-top: 20px;
  .userpost {
    display: block;
    .postcon {
      display: block;

      .postcon_con p {
        padding: 0px 40px 0px 30px;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.5;
        // background: linear-gradient(to top, #ffffff, #181818, #181818);
        // background: -webkit-linear-gradient(to top, #ffffff, #181818, #181818);
        // background-clip: text;
        // -webkit-background-clip: text;
        // color: transparent;
      }

      // .postcon_rm {
      //   font-size: 14px;
      //   text-transform: uppercase;
      //   padding: 20px;
      //   a {
      //     color: #0275b1;
      //   }
      // }
    }
  }
}
</style>
