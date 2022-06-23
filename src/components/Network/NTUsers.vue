<script>
import NetworkUserinfo from "@/components/LittleCom/NetworkUserinfo.vue";
import { reactive } from "@vue/reactivity";
export default {
  components: { NetworkUserinfo },
  setup() {
    const name = reactive([
      "Audrey Alexander",
      "Kyle Fisher",
      "Darlene Black",
      "Eduardo Russell",
    ]);
    const job = reactive([
      "Team lead at Google",
      "Product designer at Commandor Corp",
      "HR-manager, 10 000 connections",
      "Full stack developer at Yandex",
    ]);
    const img = reactive([
      "avatar54_04",
      "avatar54_02",
      "avatar54_05",
      "avatar54_06",
    ]);
    const time = reactive([
      "Yesterday, 14:30",
      "Yesterday, 12:03",
      "26 aug, monday",
      "25 aug, sunday",
    ]);
    return { name, job, img, time };
  },
};
</script>
<template>
  <div class="ntusers_block">
    <div class="users_top">
      <NetworkUserinfo
        :img="img[0]"
        :name="name[0]"
        :job="job[0]"
        :time="time[0]"
      />
      <NetworkUserinfo
        :img="img[1]"
        :name="name[1]"
        :job="job[1]"
        :time="time[1]"
      />
    </div>
    <div class="users_bottom">
      <NetworkUserinfo
        :img="img[2]"
        :name="name[2]"
        :job="job[2]"
        :time="time[2]"
      />
      <NetworkUserinfo
        :img="img[3]"
        :name="name[3]"
        :job="job[3]"
        :time="time[3]"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.ntusers_block {
  margin-top: 20px;
  width: 100%;
  .users_top {
    display: flex;
  }
  .users_bottom {
    display: flex;
  }
  .ntuser + .ntuser {
    margin-left: 10px;
  }
  .users_top + .users_bottom {
    margin-top: 10px;
  }
}
</style>
