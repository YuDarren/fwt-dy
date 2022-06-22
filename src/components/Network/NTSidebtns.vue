<script>
import NTbtn from "@/components/LittleCom/NTbtn.vue";
import { reactive } from "@vue/reactivity";
export default {
  components: { NTbtn },

  setup() {
    const name = reactive([
      "Connections",
      "Invitations",
      "Teammates",
      "groups",
      "pages",
      "hashtags",
    ]);
    const num = reactive(["1,038", "2 ●", "", "6", "28", "8"]);
    return { name, num };
  },
};
</script>
<template>
  <div class="side_ntbtns_block">
    <NTbtn :name="name[0]" :num="num[0]" :img="name[0]" />
    <NTbtn :name="name[1]" :num="num[1]" :img="name[1]" autofocus />
    <NTbtn :name="name[2]" :num="num[2]" :img="name[2]" />
    <NTbtn :name="name[3]" :num="num[3]" :img="name[3]" />
    <NTbtn :name="name[4]" :num="num[4]" :img="name[4]" />
    <NTbtn :name="name[5]" :num="num[5]" :img="name[5]" />
  </div>
</template>
<style lang="scss" scoped>
.side_ntbtns_block {
  background: #fff;
  border-radius: 4px;
}
</style>
