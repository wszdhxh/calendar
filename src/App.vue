<template>
  <div id="app">
    <transition name="handle">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="less">
@import "assets/css/base.css";

#app {
  max-width: 410px;
  margin: auto;
  background-color: #f8f8f8;
}

.handle-leave-active,
.handle-enter-active {
  transition: opacity 0.3s;
}

.handle-enter,
.handle-leave-to {
  opacity: 0;
}

.handle-enter-to,
.handle-leave {
  opacity: 1;
}
</style>
