<script>
import NTSidebtns from "@/components/Network/NTSidebtns.vue";
import NTBtns from "@/components/Network/NTBtns.vue";
import NTConline from "@/components/Network/NTConline.vue";
import NTNewcon from "@/components/Network/NTNewcon.vue";
import NTUsers from "@/components/Network/NTUsers.vue";
import { ref } from "@vue/reactivity";

export default {
  components: { NTSidebtns, NTBtns, NTConline, NTNewcon, NTUsers },
  setup() {
    const con1 = ref(
      "you have  <a href='#' style='color:#0275b1; margin-left: 5px;'> 2 new connections<a>"
    );
    const con2 = ref("recent connections");
    return { con1, con2 };
  },
};
</script>
<template>
  <div class="nt_main_page">
    <div class="nt_side_area">
      <NTSidebtns />
    </div>
    <div class="nt_main_area">
      <NTBtns />
      <NTConline :con="con1" />
      <NTNewcon />
      <NTConline :con="con2" />
      <NTUsers />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.nt_main_page {
  display: flex;
  padding-top: 40px;
  margin: 0 auto;
  width: calc(100% - 260px);
  max-width: 1920px;
  font-family: Gothan;

  .nt_side_area {
    margin-right: 40px;
    width: 28%;
  }
  .nt_main_area {
    width: 72%;
  }
}
</style>
