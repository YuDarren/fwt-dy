<script>
export default {};
</script>
<template>
  <header>
    <div class="h_menu">
      <div class="logo_block"><img src="../assets/LinkedInIcon.png" /></div>
      <div class="main_block">
        <div id="feed_btn">
          <a href="#">
            <img src="../assets/menuIcon/feed_icon.svg" />
            <p>FEED</p></a
          >
        </div>
        <div id="network_btn">
          <a href="#">
            <img src="../assets/menuIcon/network_icon.svg" />
            <p>NETWORK</p></a
          >
        </div>
        <div id="jobs_btn">
          <a href="#">
            <img src="../assets/menuIcon/jobs_icon.svg" />
            <p>JOBS</p></a
          >
        </div>
        <div id="chat_btn">
          <a href="#">
            <img src="../assets/menuIcon/chat_icon.svg" />
            <p>CHAT</p></a
          >
        </div>
        <div id="notices_btn">
          <a href="#">
            <img src="../assets/menuIcon/notices_icon.svg" />
            <p>NOTICES</p></a
          >
        </div>
      </div>
      <div class="search_block"></div>
      <div class="other_block"></div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #ffffff;
  > .h_menu {
    height: 80px;
    width: 100%;
    border-bottom: 1px solid #f4f4f4;
    display: flex;
    align-items: center;

    > .logo_block {
      height: 100%;
      border-right: 1px solid #f4f4f4;
      padding-left: 40px;
      padding-right: 40px;
      padding-top: 25px;
      > img {
        width: 46px;
        height: 46px;
      }
    }
    > .main_block {
      width: 40%;
      display: flex;
      position: relative;
      padding-top: 17px;
      padding-left: 15px;
      padding-right: 15px;

      > #feed_btn {
        width: 20%;
        height: 100%;
        padding-top: 17px;
        padding-bottom: 17px;
        > a {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: auto;
          width: 24px;
          line-height: 0.9;
          text-decoration: none;
          > p {
            margin: 10px;
            text-align: center;
            color: #181818;
            font-size: 12px;
            text-transform: uppercase;
          }
          > img {
            display: block;
            width: 100%;
            height: auto;
          }
        }
      }
      > #network_btn {
        width: 20%;
        height: 100%;
        padding-top: 17px;
        padding-bottom: 17px;
      }
      > #jobs_btn {
        width: 20%;
        height: 100%;
        padding-top: 17px;
        padding-bottom: 17px;
      }
      > #chat_btn {
        width: 20%;
        height: 100%;
        padding-top: 17px;
        padding-bottom: 17px;
      }
      > #notices_btn {
        width: 20%;
        height: 100%;
        padding-top: 17px;
        padding-bottom: 17px;
      }
    }
  }
}
</style>
