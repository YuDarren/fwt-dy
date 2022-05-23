<script>
// import { ElButton } from "element-plus";
import { ArrowDown } from "@element-plus/icons-vue";
export default {
  components: { ArrowDown },
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
            <button id="bt1">QUESTIONS?</button>
            <button id="bt2">SETTINGS</button>
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
      width: 80%;
      height: 30px;
      font-size: 14px;
      text-align: left;
      margin-bottom: 30px;
      color: #ffffff;
      background-color: #0275b1;
      border-radius: 5px;
      border: 0px;
      padding-left: 15px;
    }

    > #bt2 {
      width: 80%;
      height: 30px;
      font-size: 14px;
      text-align: left;
      margin-bottom: 30px;
      color: #ffffff;
      background-color: #0275b1;
      border-radius: 5px;
      border: 0px;
      padding-left: 15px;
    }
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
