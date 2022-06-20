<script>
export default {
  components: {},
  props: {
    name: { type: String },
    job: { type: String },
    img: { type: String },
  },
  setup(props) {
    return { props };
  },
};
</script>
<template>
  <div class="file">
    <div class="post_user">
      <div class="post_photo">
        <a href="#">
          <img :src="require(`@/assets/menuIcon/${props.img}.png`)" alt=""
        /></a>
      </div>
      <div class="user_info">
        <div class="name">{{ props.name }}</div>
        <div class="job">{{ props.job }}</div>
      </div>
    </div>
    <div class="dc_icon">
      <a href="#"
        ><img src="@/assets/menuIcon/download_cloud_icon.png" alt=""
      /></a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.file {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e9f0f8;
  border-radius: 4px;
  margin: 10px 30px;
  .post_user {
    display: flex;
    align-items: center;

    .post_photo {
      padding: 20px 20px 10px 20px;
      img {
        width: 52px;
        height: 52px;
      }
    }
    .user_info {
      display: block;
      .name {
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 5px;
      }
      .job {
        font-size: 10px;
        font-weight: 300;
      }
    }
  }
  .dc_icon {
    padding-right: 30px;
  }
}
</style>
