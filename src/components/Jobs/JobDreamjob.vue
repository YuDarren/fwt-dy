<script>
import { Operation, Search } from "@element-plus/icons-vue";
export default {
  components: { Operation, Search },
};
</script>
<template>
  <div class="writepost_block">
    <div class="writepost">
      <div class="post_title">Your dream job is here</div>
      <div class="write">
        <div class="write_input">
          <input type="text" placeholder="Search jobs" />
        </div>
        <div class="btns">
          <div:focus-within class="write_btns">
            <a href="#"
              ><el-icon><Operation /></el-icon
            ></a>
          </div:focus-within>
          <div:focus-within class="write_btns" autofocus>
            <a href="#">
              <el-icon><Search /></el-icon
            ></a>
          </div:focus-within>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.writepost_block {
  background: #ffffff;
  border-radius: 4px;
  .post_title {
    margin-left: 20px;
    margin-right: 20px;
    padding-bottom: 20px;
    padding-top: 20px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 12px;
    border-bottom: 1px solid #f4f4f4;
  }
  .write {
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .write_input {
      input {
        height: auto;
        outline: none;
        border: none;
        width: 80%;
        padding-bottom: 20px;
        padding-top: 20px;
        color: #181818;
        opacity: 0.2;
        font-size: 18px;
      }
    }
    .btns {
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .write_btns {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        a {
          color: #181818;
          opacity: 0.2;
          .el-icon {
            width: 32px;
            height: 32px;
            font-size: 24px;
          }
        }
      }
      .write_btns:focus-within {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #0275b1;
        border-radius: 4px;
        a {
          color: #ffffff;
          opacity: 1;
          .el-icon {
            width: 32px;
            height: 32px;
            font-size: 24px;
          }
        }
      }
    }
    .write_btns + .write_btns {
      margin-left: 20px;
    }
  }
}
</style>
