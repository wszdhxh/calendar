<!--  -->
<template>
  <div class="nav-bar">
    <div class="left" @click="back">
      <img src="~assets/img/fanhui.a672e3b8.svg" alt="" />
    </div>
    <div class="center">日志管理</div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    back() {
      this.$router.push({
        path: "/",
        query: this.$route.query,
      });
    },
  },
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 45px;
  padding: 3px;
  background-color: #0fc37c;
  justify-content: center;
  align-items: center;
}
.left,
.right {
  width: 60px;
  height: 45px;
  position: relative;
}
.left img {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.center {
  flex: 1;
  color: #fff;
  height: 45px;
  text-align: center;
  line-height: 45px;
  font-size: 18px;
}
</style>
