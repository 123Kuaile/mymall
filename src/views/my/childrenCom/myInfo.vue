<template>
  <div class="big">
    <div id="my-info">
      <div class="left-img">
        <img src="@/assets/images/my/man.svg" alt />
      </div>
      <div class="right">
        <div class="nic">快乐风男</div>
        <div class="right-content">
          个人主页
          <img src="@/assets/images/my/right.svg" alt />
        </div>
      </div>
    </div>
    <div class="activity">
      <div class="Aleft">
        <div class="Aname">每日签到</div>
        <div>签到任务轻松得积分</div>
      </div>
      <div class="Aright">
        <div class="Aname">邀请好友</div>
        <div>邀请好友得20现金</div>
      </div>
    </div>
    <div class="info" v-for="(item,index) of  6" :key="index">
      <div class="i-left">
        <img src="@/assets/images/my/money.svg" alt />
        我的钱包
      </div>
      <div class="i-right">
        <img src="@/assets/images/my/right.svg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myInfo"
};
</script>
<style scoped>
.big {
  background-color: #eee;
}
#my-info {
  display: flex;
  padding: 18px 20px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
  background-color: #fff8ee;
}
.left-img {
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 50%;
}
.left-img img {
  width: 100%;
  vertical-align: middle;
}
.right {
  flex: 1;
  position: relative;
  color: #000;
}
.nic {
  position: absolute;
  top: 50%;
  margin-left: 10px;
  font-size: 18px;
  font-weight: 500;
  transform: translate(0, -50%);
}
.right-content {
  position: absolute;
  top: 50%;
  right: 0;
  font-size: 16px;
  transform: translate(0, -50%);
}
.right-content img {
  width: 18px;
  height: 18px;
  vertical-align: top;
}
.activity {
  display: flex;
  padding: 0 0 15px 0;
  margin: 5px 0;
  justify-content: space-evenly;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
  background-color: #fff;
}
.activity > div {
  margin-top: 16px;
  width: 45%;
}
.Aleft,
.Aright {
  padding: 15px 10px;
  text-align: center;
  color: #fff;
  border-radius: 10px;
  background: linear-gradient(to right, #63cc83, #00967a);
}
.Aname {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
}
.Aright {
  background: linear-gradient(to right, #7eb1fe, #b9e5ff);
}
.info {
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
}
.i-left img {
  width: 25px;
  vertical-align: middle;
}
.i-left,
.i-right {
  float: left;
  margin: 10px 15px;
  line-height: 25px;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
}
.i-right {
  float: right;
  margin: 15px 15px;
}
.i-right > img {
  width: 20px;
}
</style>