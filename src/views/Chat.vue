<script>
import ChatHistory from "@/components/Chat/ChatHistory.vue";
export default { components: { ChatHistory } };
</script>
<template>
  <div class="chat_main_page">
    <div class="chat_side_area">
      <ChatHistory />
      <div class="chatstarbtn_block"></div>
    </div>
    <div class="chat_main_area"></div>
  </div>
</template>
<style lang="scss" scoped>
.chat_main_page {
  display: flex;
  padding-top: 40px;
  margin: 0 auto;
  width: calc(100% - 260px);
  max-width: 1920px;
  font-family: Gothan;

  .chat_side_area {
    margin-right: 40px;
    width: 28%;
  }
  .chat_main_area {
    width: 72%;
  }
}
</style>
