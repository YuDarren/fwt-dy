<script>
export default {};
</script>
<template>
  <div class="sidebtns">
    <div class="notification" tabindex="0" autofocus>
      <div class="name">Notifications</div>
    </div>
    <div class="notification" tabindex="0">
      <div class="name">Notification settings</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.sidebtns {
  background: #fff;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 20px;
  .notification {
    padding: 20px 30px;
    outline: none;
    cursor: pointer;
  }
  .notification:focus {
    border-left: 10px solid #0275b1;
  }
  .notification:focus .name {
    opacity: 0.6;
  }
  .notification + .notification {
    border-top: 1px solid #f4f4f4;
  }
}
</style>
