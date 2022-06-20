<script>
import Posttit from "@/components/LittleCom/Posttit.vue";
import PostUserinfo from "@/components/LittleCom/PostUserinfo.vue";
import PostBtns from "@/components/LittleCom/PostBtns.vue";
import { ref } from "@vue/reactivity";
export default {
  components: { Posttit, PostUserinfo, PostBtns },
  props: {
    name: { type: String },
    job: { type: String },
    img: { type: String },
  },
  setup() {
    const tit = ref(
      "First post from <a href='/' style='color:#0275b1;' >Audrey Alexander</a>"
    );
    const post_con = ref(
      "The bun runs along the road and meets a wolf. «Little bun, little bun, I want to eat you!» says the wolf. «I ran away from Grandfather, I ran away from Grandmother, I ran away from the hare. And I can run away from you, grey wolf!» says the bun and runs away."
    );
    return { tit, post_con };
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
        padding: 0px 40px 0px 20px;
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
