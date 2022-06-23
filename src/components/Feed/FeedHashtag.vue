<script>
import { reactive } from "@vue/reactivity";
export default {
  setup() {
    const arr = reactive([
      { hashtag: "#work" },
      { hashtag: "#userinterface" },
      { hashtag: "#userexperience" },
      { hashtag: "#ux" },
      { hashtag: "#ui" },
      { hashtag: "#freelance" },
      { hashtag: "#digital" },
      { hashtag: "#business" },
      { hashtag: "#hr" },
    ]);
    return { arr };
  },
};
</script>
<template>
  <div class="hashtag_block">
    <div class="hashtag_tit">Followed hashtags</div>
    <div class="hashtag_con">
      <div class="hashtag" v-for="(item, idx) in arr" :key="idx">
        {{ item.hashtag }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hashtag_block {
  background: #fcfdfd;
  border-radius: 4px;
  margin-top: 20px;
  .hashtag_tit {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    margin: 0px 30px;
    padding: 20px 0px;
    border-bottom: 1px solid #f4f4f4;
  }
  .hashtag_con {
    padding: 20px 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .hashtag {
      width: fit-content;
      height: auto;
      background: #e9f0f8;
      font-size: 12px;
      line-height: 1.5;
      border-radius: 4px;
      padding: 10px;
      margin: 0px 10px 10px 10px;
      cursor: pointer;
    }
  }
}
</style>
