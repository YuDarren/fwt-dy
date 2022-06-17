<script>
import Posttit from "@/components/LittleCom/Posttit.vue";
import PostUserinfo from "@/components/LittleCom/PostUserinfo.vue";
import { reactive, ref } from "@vue/reactivity";
export default {
  components: { Posttit, PostUserinfo },
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
    return { name, job };
  },
};
</script>
<template>
  <div class="userpost_block">
    <div class="userpost">
      <Posttit />
      <div class="postcon">
        <PostUserinfo :name="name[0]" :job="job[0]" />
        <div class="postcon_con"></div>
        <div class="postcon_rm"></div>
      </div>
      <div class="post_btns">
        <div class="good_reply">
          <div class="good"></div>
          <div class="reply"></div>
        </div>
        <div class="share"></div>
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
    .post_btns {
      .good_reply {
        .good {
        }
        .replt {
        }
      }
      .share {
      }
    }
  }
}
</style>
