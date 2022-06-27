<script>
import ChatTimeline from "@/components/Chat/ChatTimeline.vue";
import ChatMymsg from "@/components/Chat/ChatMymsg.vue";
import ChatFriendmsg from "@/components/Chat/ChatFriendmsg.vue";
export default {
  components: { ChatTimeline, ChatMymsg, ChatFriendmsg },
};
</script>
<template>
  <div class="window_con">
    <ChatMymsg
      img="avatar54_07"
      myMsg=" Oh, sh#t! This junior designers!!!!!!!!!!!!!!!!"
      time="4:29 PM"
      :imgshow="true"
    />
    <ChatTimeline />
    <ChatFriendmsg
      msg="Hi, Kyle. How are you doing? Did you get that job yesterday?"
      time="4:20 PM"
    />
    <ChatMymsg
      img="avatar54_07"
      myMsg="Nope, they kicked me out of the office!"
      myMsgtime="4:29 PM"
      :imgshow="true"
    />
    <ChatFriendmsg
      msg="Wow! I can invite you in my new project. We need a product designer right now!"
      time="4:30 PM"
    />
    <ChatMymsg
      img="avatar54_07"
      myMsg="It’ll be great! I need this job, but..."
      :imgshow="true"
    />
    <ChatMymsg
      img="avatar54_07"
      myMsg="So, it’s up to you!"
      time="4:30 PM"
      :imgshow="false"
    />
  </div>
</template>
<style lang="scss" scoped>
.window_con {
  z-index: 60;
  margin: -20px 30px 30px 30px;
  .mycon + .friendmsg_block {
    margin-top: 20px;
  }
}
</style>
