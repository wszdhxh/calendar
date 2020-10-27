<!--  -->
<template>
  <div>
    <div class="list">
      <div class="dotted-line">
        <div class="clock"></div>
      </div>
      <div class="timer">{{info.time}}</div>
      <div class="message">
        <div class="title">{{info.title}}</div>
        <div class="content">{{info.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoBox",
  props: {
    info: {
      type: Object,
      default() {
        return []
      }
    }
  }
};
</script>

<style scoped>
.list {
  height: 75px;
  display: flex;
  margin: 0 20px;
}
.message {
  flex: 1;
  padding: 5px 1px;
  border-bottom: #ccc solid 2px;
  overflow: hidden;
  height: 50px;
}
.title {
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.content {
  font-size: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.timer {
  position: relative;
  height: 16px;
  line-height: 16px;
  top: 25px;
  color: #666;
  flex: 0 0 54px;
}
.dotted-line {
  background: url("~assets/img/shuxian.a8a6a227.svg") repeat-y;
  background-size: 100%;
  position: relative;
  flex: 0 0 40px;
}
.clock {
  background: url("~assets/img/shijianzhou.cf46c568.svg") no-repeat;
  background-size: 100%;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
}
</style>
