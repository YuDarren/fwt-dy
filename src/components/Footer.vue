<script>
// import { ElButton } from "element-plus";
export default {
  //   components: { ElButton },
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
            <p>About</p>
            <p>Careers</p>
            <p>Advertising</p>
            <p>Small Business</p>
          </div>
          <div>
            <p>Talent Solutions</p>
            <p>Marketing Solutions</p>
            <p>Sales Solutions</p>
            <p>Safery Center</p>
          </div>
          <div>
            <p>Community Guidelines</p>
            <p>Privacy & Terms</p>
            <p>Mobile App</p>
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
        <select name="english" id="ENGLISH">
          ENGLISH
        </select>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  width: 100%;
  height: 200px;
  background-color: rgb(20, 122, 211);

  > div {
    width: 1024px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
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
  > select {
    width: 280px;
    height: 35px;
  }
}
</style>
