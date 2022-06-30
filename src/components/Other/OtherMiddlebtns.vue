<script>
export default {};
</script>
<template>
  <div class="middledbtns">
    <div class="middletit">Business services</div>
    <div class="mi_btn">
      <div class="name">Talent Solutions</div>
      <div class="con">Find, attract and recruit talent</div>
    </div>
    <div class="mi_btn">
      <div class="name">Sales Solutions</div>
      <div class="con">Unlock sales opportunities</div>
    </div>
    <div class="mi_btn">
      <div class="name">Post a job</div>
      <div class="con">Get your job in front of quality candidates</div>
    </div>
    <div class="mi_btn">
      <div class="name">Marketing Solutions</div>
      <div class="con">Acquire customers and grow your buisness</div>
    </div>
    <div class="mi_btn">
      <div class="name">Learning Solutions</div>
      <div class="con">Develop talent across your organisation</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.middledbtns {
  padding: 20px 20px 40px 20px;
  border-top: 1px solid #f4f4f4;
  line-height: 1.5;

  .middletit {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .mi_btn {
    border: 1px solid #f4f4f4;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    .name {
      font-weight: 600;
      font-size: 12px;
    }
    .con {
      font-weight: 100;
      font-size: 10px;
    }
  }
  .mi_btn + .mi_btn {
    margin-top: 10px;
  }
}
</style>
