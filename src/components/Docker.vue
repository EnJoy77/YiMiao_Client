<template>
  <div class="docker">
    <span class="dockerItem itemActive">
      <span class="iconfont">&#xe692;</span>
      <span class="dockerItemText"> 首页 </span>
    </span>
    <span class="dockerItem">
      <span class="iconfont">&#xe73d;</span>
      <span class="dockerItemText"> 附近门诊 </span>
    </span>
    <span class="dockerItem">
      <span class="iconfont">&#xe73b;</span>
      <span class="dockerItemText"> 疫苗攻略 </span>
    </span>
    <span class="dockerItem">
      <span class="iconfont">&#xe818;</span>
      <span class="dockerItemText"> 我的 </span>
    </span>
  </div>
</template>
<script lang="ts">
export default {}
</script>
<style lang="scss" scoped>

.docker {
  width: 750rpx;
  height: 85rpx;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0 -3rpx 3rpx 0 #f1f1f1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 10rpx;
  color: #333;
background-color: #fff;
  .dockerItem {
    display: flex;
    flex-direction: column;
    font-size: 30rpx;
    align-items: center;
    .iconfont {
      font-size: 40rpx;
    }
  }

  .itemActive {
    color: #0a73ba;
  }
}</style>
