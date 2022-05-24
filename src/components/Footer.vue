<script>
import { ElButton } from "element-plus";
import {
  ArrowDown,
  QuestionFilled,
  Setting,
  Tools,
} from "@element-plus/icons-vue";
export default {
  components: { ElButton, ArrowDown, QuestionFilled, Setting, Tools },
};
</script>
<template>
  <footer>
    <div>
      <div>
        <div class="img_box">
          <img src="../assets/LinkedInIcon.png" />
          Linked<span>In</span>
        </div>
        <div class="f_box1">
          <h3>Navigation</h3>
          <div>
            <div>
              <p>
                <a href="#" style="color: #000; text-decoration: none">About</a>
              </p>
              <p>
                <a href="#" style="color: #000; text-decoration: none"
                  >Careers</a
                >
              </p>
              <p>
                <a href="#" style="color: #000; text-decoration: none"
                  >Advertising</a
                >
              </p>
              <p>
                <a href="#" style="color: #000; text-decoration: none"
                  >Small Business</a
                >
              </p>
            </div>
            <div>
              <p>
                <a href="#" style="color: #000; text-decoration: none"
                  >Talent Solutions</a
                >
              </p>
              <p>
                <a href="#" style="color: #000; text-decoration: none"
                  >Marketing Solutions</a
                >
              </p>
              <p>
                <a href="#" style="color: #000; text-decoration: none"
                  >Sales Solutions</a
                >
              </p>
              <p>
                <a href="#" style="color: #000; text-decoration: none"
                  >Safery Center</a
                >
              </p>
            </div>
            <div>
              <p>
                <a href="#" style="color: #000; text-decoration: none"
                  >Community Guidelines</a
                >
              </p>
              <p>
                <a href="#" style="color: #000; text-decoration: none"
                  >Privacy & Terms</a
                >
              </p>
              <p>
                <a href="#" style="color: #000; text-decoration: none"
                  >Mobile App</a
                >
              </p>
            </div>
          </div>
        </div>
        <div class="f_box2">
          <h3>Fast access</h3>
          <div>
            <div id="bt1">
              <el-button type="primary"
                ><span style="vertical-align: middle"> QUESTIONS? </span>
                <el-icon
                  :size="16"
                  style="border-radius: 10px
                    vertical-align: middle;
                    margin: 28px;
                    color: #0275b1;
                    background-color: #ffffff;
                  "
                >
                  <QuestionFilled />
                </el-icon>
              </el-button>
            </div>
            <div id="id2">
              <el-button type="primary" style="background-color: #ffffff"
                ><span style="vertical-align: middle; color: #0275b1">
                  SETTINGS
                </span>
                <el-icon
                  :size="16"
                  style="vertical-align: middle; margin: 50px; color: #0275b1"
                >
                  <Setting />
                </el-icon>
              </el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="f_box3">
        <h3>Language</h3>
        <div>
          <select>
            <option>ENGLISH</option>
            <option>CHINESE</option>
            <option>JAPAN</option>
          </select>
          <el-icon><ArrowDown /></el-icon>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  width: 100%;
  height: auto;
  background-color: #f7f9fb;
  border-top: 1px solid #e7e7e7;
  margin-top: 40px;
  padding-top: 30px;
  > div {
    width: calc(100% - 280px);
    margin: 0 auto;
    display: flex;
    > div {
      width: 80%;
      display: flex;
    }
  }
}
.img_box {
  width: 10%;
  height: 100%;
  text-align: left;
  font-weight: bold;
  margin-right: 20px;
  > img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  > span {
    color: #0275b1;
    font-weight: bold;
  }
}
.f_box1 {
  width: 55%;
  > h3 {
    text-align: left;
  }
  > div {
    width: 80%;
    text-align: left;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
}
.f_box2 {
  width: 20%;
  height: 100%;
  > h3 {
    text-align: left;
  }
  > div {
    text-align: left;
    > #bt1 {
      font-size: 14px;
      margin-bottom: 30px;
    }

    > #bt2 {
      font-size: 14px;
      margin-bottom: 30px;
    }
  }
  .el-button {
    width: 80%;
    height: 30px;
    background-color: #0275b1;
    justify-content: left;
  }
  .el-icon {
    margin: 50px;
  }
}

.f_box3 {
  width: 20%;
  height: 100%;
  display: block;
  > h3 {
    text-align: left;
  }
  > div {
    width: 280px;
    position: relative;

    > select {
      width: 100%;
      height: 35px;
      appearance: none;
      font-weight: bold;
      font-size: 14px;
      padding: 10px;
      color: black;
      border-radius: 3px;
      border: none;
      outline: none;
    }
  }
  .el-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    text-align: left;
    pointer-events: none;
    color: #0275b1;
    font-size: larger;
  }
  // select:hover {
  //   background: blue;
  // }
}
</style>
