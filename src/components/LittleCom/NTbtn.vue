<script>
export default {
  props: {
    img: {
      type: String,
    },
    name: {
      type: String,
    },
    num: {
      type: String,
    },
    hasColor: {
      type: Boolean,
    },
  },
  data() {
    return {
      numColor: "",
    };
  },
  mounted() {
    console.log("hasColor: ", this.$props.hasColor);
    if (this.$props.hasColor) {
      this.$data.numColor = "color";
    } else {
      this.$data.numColor = "";
    }
  },
  // watch: {
  //   hasColor: function (newValue, oldValue) {
  //     console.log("newValue: ", newValue);
  //     if (newValue) {
  //       this.$data.numColor = "color";
  //     } else {
  //       this.$data.numColor = "";
  //     }
  //   },
  // },
};
</script>
<template>
  <div class="btn" tabindex="0">
    <div class="icon_name">
      <div class="btn_icon">
        <img :src="require(`@/assets/menuIcon/${img}.png`)" alt="" />
      </div>
      <div class="btn_name">{{ name }}</div>
    </div>
    <div :class="`btn_num ${numColor}`">{{ num }}</div>
  </div>
</template>
<style lang="scss" scoped>
.btn {
  border-bottom: 1px solid #f4f4f4;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  .icon_name {
    display: flex;
    align-items: center;
    .btn_icon {
    }
    .btn_name {
      padding-left: 10px;
    }
  }
  .btn_num {
  }
}

.btn:hover {
  border-left: 10px solid #0275b1;
  outline: none;
  .icon_name {
    opacity: 0.6;
  }
}

.btn:focus {
  border-left: 10px solid #0275b1;
  outline: none;
  .icon_name {
    opacity: 0.6;
  }
}
</style>
