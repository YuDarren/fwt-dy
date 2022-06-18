<script>
import Posttit from "@/components/LittleCom/Posttit.vue";
import PostUserinfo from "@/components/LittleCom/PostUserinfo.vue";
import PostBtns from "@/components/LittleCom/PostBtns.vue";
import { reactive, ref } from "@vue/reactivity";
export default {
  components: { Posttit, PostUserinfo, PostBtns },
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
    const aname = reactive([
      "<router-link to='#'>Ted Bell</router-link>",
      "<a :href='/'>Annette Nguyen</a>",
      "<a>Cody Hawkins</a>",
    ]);
    // const tit = ref(`Ted Bell, Annette Nguyen and Cody Hawkins liked this`);
    const tit = ref(`${aname[0]}, ${aname[1]} and ${aname[2]} liked this`);
    const post_con = ref(
      "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins)."
    );
    return { name, job, tit, post_con };
  },
};
</script>
<template>
  <div class="userpost_block">
    <div class="userpost">
      <Posttit :a="tit" />
      <div class="postcon">
        <PostUserinfo :name="name[0]" :job="job[0]" />
        <div class="postcon_con"></div>
        <div class="postcon_rm"></div>
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

      .postcon_con {
      }
      .postcon_rm {
      }
    }
  }
}
</style>
