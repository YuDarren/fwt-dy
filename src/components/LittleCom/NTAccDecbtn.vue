<script>
export default {};
</script>
<template>
  <div class="accdec_block">
    <div class="new_btn" tabindex="0" autofocus>accept</div>
    <div class="new_btn" tabindex="0">decline</div>
  </div>
</template>

<style lang="scss" scoped>
.accdec_block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  .new_btn {
    border-radius: 4px;
    padding: 10px 20px;
    border: 1px solid #e7e7e7;
    color: #b7b7b7;
    cursor: pointer;
  }
  .new_btn + .new_btn {
    margin-left: 10px;
  }
  .new_btn:focus {
    background: #0275b1;
    color: #fff;
  }
}
</style>
