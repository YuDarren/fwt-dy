<script>
import AvatarIcon from "@/views/AvatarIcon.vue";
export default {
  components: { AvatarIcon },
};
</script>
<template>
  <div class="skills_block">
    <div class="skill">
      <div class="skill_tit"><h2>Skills & Endoresments</h2></div>
      <div class="skilluser">
        <div class="skilluser_gp">
          <div class="skilluser_tit">
            <div class="sk_tit"><h3>User experience (UX)</h3></div>
            <div class="sk_num"><h3>6</h3></div>
          </div>
          <div class="skilluser_avatar">
            <AvatarIcon img="avatar-m1" />
            <AvatarIcon img="avatar-m2" />
            <AvatarIcon img="avatar-m3" />
            <AvatarIcon img="avatar-m4" />
            <AvatarIcon img="avatar-m5" />
            <!-- <div class="sk_av1">
                  <img src="../assets/img/avatar-m1.jpg" alt="" />
                </div>
                <div class="sk_av2">
                  <img src="../assets/img/avatar-m2.jpg" alt="" />
                </div>
                <div class="sk_av3">
                  <img src="../assets/img/avatar-m3.jpg" alt="" />
                </div>
                <div class="sk_av4">
                  <img src="../assets/img/avatar-m4.jpg" alt="" />
                </div>
                <div class="sk_av5">
                  <img src="../assets/img/avatar-m5.jpg" alt="" />
                </div> -->
            <div class="sk_av sk_avnum">+1</div>
          </div>
        </div>
        <div class="skilluser_gp">
          <div class="skilluser_tit">
            <div class="sk_tit"><h3>User interface (UI)</h3></div>
            <div class="sk_num"><h3>6</h3></div>
          </div>
          <div class="skilluser_avatar">
            <!-- <div class="sk_av1">
                  <img src="../assets/img/avatar-m1.jpg" alt="" />
                </div>
                <div class="sk_av2">
                  <img src="../assets/img/avatar-m2.jpg" alt="" />
                </div>
                <div class="sk_av3">
                  <img src="../assets/img/avatar-m3.jpg" alt="" />
                </div>
                <div class="sk_av4">
                  <img src="../assets/img/avatar-m4.jpg" alt="" />
                </div>
                <div class="sk_av5">
                  <img src="../assets/img/avatar-m5.jpg" alt="" />
                </div> -->
            <div class="sk_avnum">+1</div>
          </div>
        </div>
        <div class="skilluser_gp">
          <div class="skilluser_tit">
            <div class="sk_tit"><h3>Brand identity</h3></div>
            <div class="sk_num"><h3>6</h3></div>
          </div>
          <div class="skilluser_avatar">
            <!-- <div class="sk_av1">
                  <img src="../assets/img/avatar-m1.jpg" alt="" />
                </div>
                <div class="sk_av2">
                  <img src="../assets/img/avatar-m2.jpg" alt="" />
                </div>
                <div class="sk_av3">
                  <img src="../assets/img/avatar-m3.jpg" alt="" />
                </div>
                <div class="sk_av4">
                  <img src="../assets/img/avatar-m4.jpg" alt="" />
                </div>
                <div class="sk_av5">
                  <img src="../assets/img/avatar-m5.jpg" alt="" />
                </div> -->
            <div class="sk_avnum">+1</div>
          </div>
        </div>
      </div>
      <div class="skill_sa">
        <a href="#"><h4>Show ALL (17)</h4></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skills_block {
  background: #ffffff;
  border-radius: 4px;
  font-family: Gotham;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 5px;
  padding-bottom: 10px;
  margin-top: 20px;
  .skill {
    display: block;
    .skill_tit {
      font-size: 18px;
    }
    .skilluser {
      display: flex;
      justify-content: space-between;
      .skilluser_gp {
        width: 200px;
        border: 1px solid #f4f4f4;
        border-radius: 4px;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 5px;
        padding-bottom: 10px;
        display: block;

        .skilluser_tit {
          display: flex;
          justify-content: space-between;
          .sk_tit {
            font-size: 14px;
            font-weight: 500;
          }
          .sk_num {
            font-size: 14px;
            color: #0275b1;
            font-weight: bold;
          }
        }
        .skilluser_avatar {
          display: flex;
          position: relative;
          height: 24px;
          padding-bottom: 5px;
          padding-top: 5px;
          .sk_av + .sk_av {
            margin-left: -6px;
          }
          // img {
          //   width: 24px;
          //   height: 24px;
          //   border-radius: 50%;
          // }
          // .sk_av1 {
          //   position: absolute;
          //   left: 0px;
          // }
          // .sk_av2 {
          //   position: absolute;
          //   left: 16px;
          // }
          // .sk_av3 {
          //   position: absolute;
          //   left: 32px;
          // }
          // .sk_av4 {
          //   position: absolute;
          //   left: 48px;
          // }
          // .sk_av5 {
          //   position: absolute;
          //   left: 64px;
          // }
          .sk_avnum {
            // position: absolute;
            // left: 80px;
            width: 24px;
            height: 24px;
            font-size: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            background: #0275b1;
            border-radius: 50%;
          }
        }
      }
    }
    .skill_sa {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      h4 {
        color: #0275b1;
      }
    }
  }
}
</style>
