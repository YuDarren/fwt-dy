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
      <div class="img_box">logo</div>
      <div class="f_box1">
        <h3>Navigation</h3>
        <div>
          <div>
            <p>
              <a href="#" style="color: #000; text-decoration: none">About</a>
            </p>
            <p>
              <a href="#" style="color: #000; text-decoration: none">Careers</a>
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
      <div class="f_box3">
        <h3>Language</h3>

        <el-button type="primary">Success</el-button>
        <div>
          <select style="color: black; border-radius: 3px; border: none">
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
  height: 200px;
  background-color: #f7f9fb;
  border-top: 1px solid #e7e7e7;

  > div {
    width: 1024px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
}
.img_box {
  width: 10%;
  height: 100%;
  text-align: left;
}
.f_box1 {
  width: 60%;
  height: 100%;
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
  width: 10%;
  height: 100%;
  > h3 {
    text-align: left;
  }
  > div {
    width: 280px;
    position: relative;
  }
  > div > select {
    width: 100%;
    height: 35px;

    font-weight: bold;
    color: #0275b1;
    > option {
      font-weight: bold;
    }
  }
  > div > .el-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    pointer-events: none;
    color: red;
  }
  > select:hover {
    background: blue;
  }
}
</style>
