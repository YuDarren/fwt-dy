<script>
import Posttit from "@/components/LittleCom/Posttit.vue";
import PostUserinfo from "@/components/LittleCom/PostUserinfo.vue";
import PostBtns from "@/components/LittleCom/PostBtns.vue";
import { reactive, ref } from "@vue/reactivity";
export default {
  components: { Posttit, PostUserinfo, PostBtns },
  props: {
    name: { type: String },
    job: { type: String },
    img: { type: String },
  },
  setup() {
    const aname = reactive([
      "<a href='/' style='color:#0275b1;' >Ted Bell</a>",
      "<a href='/' style='color:#0275b1;' >Annette Nguyen</a>",
      "<a href='/' style='color:#0275b1;' >Cody Hawkins</a>",
    ]);

    const tit = ref(`${aname[0]}, ${aname[1]} and ${aname[2]} liked this`);
    const post_con = ref(
      "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins)."
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
        <div class="postcon_rm"><a href="#">Read more</a></div>
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
  a {
    color: #0275b1;
  }
  .userpost {
    display: block;
    a {
      color: #0275b1;
    }
    .postcon {
      display: block;

      .postcon_con p {
        padding: 0px 40px 0px 30px;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.5;
        background: linear-gradient(to top, #ffffff, #181818, #181818);
        background: -webkit-linear-gradient(to top, #ffffff, #181818, #181818);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
      }

      .postcon_rm {
        font-size: 14px;
        text-transform: uppercase;
        padding: 10px 10px 20px 30px;
        a {
          color: #0275b1;
        }
      }
    }
  }
}
</style>
