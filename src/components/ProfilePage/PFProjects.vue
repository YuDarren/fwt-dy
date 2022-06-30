<script>
export default {};
</script>
<template>
  <div class="projects_block">
    <div class="project_tit">
      <h2 id="tit">Projects</h2>
      <h2 id="tit_num">3 of 12</h2>
    </div>
    <div class="project_main">
      <div class="main">
        <div class="main_photo">
          <a href="#"><img src="@/assets/project/pf_project01.png" alt="" /></a>
        </div>
        <div class="main_tit"><p>Zara redesign concept</p></div>
        <div class="main_time">UX/UI design, 15.07.2019</div>
      </div>
      <div class="main">
        <div class="main_photo">
          <a href="#"><img src="@/assets/project/pf_project02.png" alt="" /></a>
        </div>
        <div class="main_tit"><p>SCTHON event brand identity</p></div>
        <div class="main_time">Graphic design, 03.31.2019</div>
      </div>
      <div class="main">
        <div class="main_photo">
          <a href="#"><img src="@/assets/project/pf_project03.png" alt="" /></a>
        </div>
        <div class="main_tit"><p>Drozd. Brand identity. 2016</p></div>
        <div class="main_time">Graphic design, 03.04.2016</div>
      </div>
    </div>
    <div class="project_sa">
      <a href="#"> <h4>Show all (12)</h4></a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects_block {
  background: #ffffff;
  border-radius: 4px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 5px;
  padding-bottom: 10px;
  margin-top: 20px;
  font-family: Gotham;
  .project_tit {
    display: flex;
    align-items: center;
    font-size: 18px;

    #tit {
      color: #181818;
      font-weight: bold;
    }
    #tit_num {
      padding-left: 20px;
      color: #747474;
      font-weight: normal;
    }
  }
  .project_main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .main {
      display: block;

      .main_photo {
        width: 250px;
        height: 160px;
        overflow: hidden;
        img {
          width: 250px;
          height: 160px;
          transform: scale(1, 1);
          transition: all 0.5s ease-in-out;
        }
        img:hover {
          transform: scale(1.1, 1.1);
        }
      }
      .main_tit {
        font-size: 16px;
        font-weight: 700;
      }
      .main_time {
        font-size: 10px;
        font-weight: 100;
      }
    }
  }
  .project_sa {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    h4 {
      color: #0275b1;
    }
  }
}
</style>
