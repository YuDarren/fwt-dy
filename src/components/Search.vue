<script>
import { Search } from "@element-plus/icons-vue";
import SearchJobs from "@/components/Search/SearchJobs.vue";
import SearchUsers from "@/components/Search/SearchUsers.vue";
import SearchArticles from "@/components/Search/SearchArticles.vue";
import SearchBtn from "@/components/Search/SearchBtn.vue";
export default {
  components: { Search, SearchJobs, SearchUsers, SearchArticles, SearchBtn },
};
</script>
<template>
  <div class="search_block">
    <div class="search">
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
  .search {
    background: #fff;
    width: 370px;
    .search_tit {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 30px;
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
    .search_con {
      margin: 20px 30px;
    }
  }
}
</style>
