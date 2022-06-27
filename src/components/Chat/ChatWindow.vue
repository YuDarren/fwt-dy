<script>
import ChatWindowtit from "@/components/Chat/ChatWindowtit.vue";
import ChatWindowWrite from "@/components/Chat/ChatWindowWrite.vue";
import ChatContent from "@/components/Chat/ChatContent.vue";
export default {
  components: {
    ChatWindowtit,
    ChatWindowWrite,
    ChatContent,
  },
};
</script>
<template>
  <div class="chatwindow_block">
    <div class="chatwindow">
      <ChatWindowtit />
      <ChatContent />
      <ChatWindowWrite />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.chatwindow_block {
  background: #fff;
  border-radius: 4px;
  .chatwindow {
    .window_tit {
      position: relative;
    }
    .window_con {
    }
  }
}
</style>
