<script>
export default {};
</script>
<template>
  <div class="mygroups_block">
    <div class="mygroups">
      <div class="mygroups_tit">
        <div class="tit">my groups</div>
        <div class="edit"><a href="#">Edit list</a></div>
      </div>
      <div class="mygroups_con">
        <div class="groups">
          <div class="photo">
            <img src="@/assets/menuIcon/feedmygroups_01.png" alt="" />
          </div>
          <div class="name">Moscow State Linguistical University</div>
        </div>
        <div class="groups">
          <div class="photo">
            <img src="@/assets/menuIcon/feedmygroups_02.png" alt="" />
          </div>
          <div class="name">Digital freelancers group</div>
        </div>
        <div class="groups">
          <div class="photo">
            <img src="@/assets/menuIcon/feedmygroups_03.png" alt="" />
          </div>
          <div class="name">Interaction design association</div>
        </div>
      </div>
      <div class="mygroups_sa"><a href="#">Show all (8)</a></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mygroups_block {
  margin-top: 20px;
  background: #fff;
  border-radius: 4px;
  .mygroups {
    .mygroups_tit {
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #f4f4f4;
      margin: 0px 30px;
      padding: 20px 0px;
      .tit {
        font-size: 12px;
        font-weight: 600;
      }
      .edit {
        a {
          font-size: 12px;
          color: #0275b1;
          font-weight: 600;
        }
      }
    }
    .mygroups_con {
      display: block;
      padding: 10px 30px;
      .groups {
        display: flex;
        align-items: center;
        border: 1px solid #f4f4f4;
        border-radius: 4px;
        margin-top: 10px;
        font-size: 14px;
        .photo {
          padding: 15px;
        }
        .name {
          font-weight: 800;
        }
      }
    }
    .mygroups_sa {
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 600;
      padding: 20px 30px;
      a {
        color: #0275b1;
      }
    }
  }
}
</style>
