<script>
import Networknews from "@/components/LittleCom/Networknews.vue";
import { ref } from "@vue/reactivity";
export default {
  components: { Networknews },
  setup() {
    const message = ref(
      "Hey, I saw your works. I like it! Can we do something together? Or maybe you have project for UX at the moment?"
    );
    return { message };
  },
};
</script>
<template>
  <div class="ntnewcon_block">
    <Networknews
      name="Brandon Wilson"
      job="Senior UX designer"
      numcon="623 connections"
      img="avatar54_03"
      show="true"
      :message="message"
    />
    <Networknews
      name="Theresa Steward"
      job="iOS developer"
      numcon="481 connections"
      img="avatar54_01"
      show="false"
    />
  </div>
</template>

<style lang="scss" scoped>
.ntnewcon_block {
  margin-top: 20px;
  .newcon + .newcon {
    margin-top: 10px;
  }
}
</style>
