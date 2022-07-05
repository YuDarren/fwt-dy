<script>
import { Search } from "@element-plus/icons-vue";
import SearchJobs from "@/components/Search/SearchJobs.vue";
import SearchUsers from "@/components/Search/SearchUsers.vue";
import SearchArticles from "@/components/Search/SearchArticles.vue";
import SearchBtn from "@/components/Search/SearchBtn.vue";
export default {
  components: { Search, SearchJobs, SearchUsers, SearchArticles, SearchBtn },
  props: {
    handClick: {
      type: Function,
    },
    bool: {
      type: Boolean,
    },
  },
};
</script>
<template>
  <div @click="handClick" class="search_block">
    <div class="search" @show="bool">
      <div class="search_tit">
        <div class="tit">UX desig</div>
        <div class="icon">
          <a href="#"
            ><el-icon><Search /></el-icon
          ></a>
        </div>
      </div>
      <div class="search_con">
        <SearchJobs />
        <SearchUsers />
        <SearchArticles />
        <SearchBtn />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.search_block {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 998;
  backdrop-filter: blur(5px);
  .search {
    background: #fff;
    width: 370px;
    position: absolute;
    top: 0px;
    right: 500px;
    z-index: 1000;
    height: 700px; //限定高度
    overflow-y: auto;
    .search_tit {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 30px;
      height: 40px;
      border-bottom: 1px solid #f4f4f4;
      .tit {
        font-size: 16px;
        font-weight: 100;
      }
      .icon {
        width: 32px;
        height: 32px;
        background: #0275b1;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        a {
          .el-icon {
            font-size: 16px;
            color: #fff;
          }
        }
      }
    }
    ::-webkit-scrollbar {
      display: none;
    }
    .search_con {
      margin: 20px 30px;
    }
  }
}
</style>
