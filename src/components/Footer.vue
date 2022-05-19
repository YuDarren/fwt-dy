<script>
export default {};
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
          <button>QUESTIONS?</button>
          <button>SETTINGS</button>
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
  background-color: aliceblue;

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
    > div {
      display: inline-block;
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
