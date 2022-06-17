<script>
import Posttit from "@/components/LittleCom/Posttit.vue";
import PostUserinfo from "@/components/LittleCom/PostUserinfo.vue";
export default { components: { Posttit, PostUserinfo } };
</script>
<template>
  <div class="userpost_block">
    <div class="userpost">
      <Posttit />
      <div class="postcon">
        <PostUserinfo />
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
