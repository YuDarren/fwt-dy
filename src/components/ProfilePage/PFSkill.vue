<script>
import AvatarIcon from "@/components/ProfilePage/PFLittleCom/Avatar.vue";
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
            <AvatarIcon img="avatar-01" />
            <AvatarIcon img="avatar-02" />
            <AvatarIcon img="avatar-03" />
            <AvatarIcon img="avatar-04" />
            <AvatarIcon img="avatar-05" />
            <div class="sk_av sk_avnum">+1</div>
          </div>
        </div>
        <div class="skilluser_gp">
          <div class="skilluser_tit">
            <div class="sk_tit"><h3>User interface (UI)</h3></div>
            <div class="sk_num"><h3>6</h3></div>
          </div>
          <div class="skilluser_avatar">
            <AvatarIcon img="avatar-01" />
            <AvatarIcon img="avatar-02" />
            <AvatarIcon img="avatar-03" />
            <AvatarIcon img="avatar-04" />
            <AvatarIcon img="avatar-05" />
            <div class="sk_avnum">+1</div>
          </div>
        </div>
        <div class="skilluser_gp">
          <div class="skilluser_tit">
            <div class="sk_tit"><h3>Brand identity</h3></div>
            <div class="sk_num"><h3>6</h3></div>
          </div>
          <div class="skilluser_avatar">
            <AvatarIcon img="avatar-01" />
            <AvatarIcon img="avatar-02" />
            <AvatarIcon img="avatar-03" />
            <AvatarIcon img="avatar-04" />
            <AvatarIcon img="avatar-05" />
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

          .sk_avnum {
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
