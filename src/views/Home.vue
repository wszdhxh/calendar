<!--  -->
<template>
  <div class="box">
    <div ref="calendar" class="calendarb">
      <calendar
        @changeMonth="changeMonth"
        @choseDay="choseDay"
        :markDate="mark"
      />
    </div>
    <div ref="record" class="record">
      <div class="no-data" v-if="list.length === 0">
        <img src="../assets/img/no-data.bd0b562c.svg" alt="" />
      </div>
      <scroll class="scroll" ref="scroll" v-else>
        <router-link
          v-for="item in list"
          :key="item.id"
          :to="{ path: '/handle', query: { time: mark[0], id: item.id } }"
        >
          <info-box :info="item" />
        </router-link>
      </scroll>
      <router-link :to="{ path: '/handle', query: { time: mark[0] } }">
        <div class="add"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Calendar from "vue-calendar-component";
import InfoBox from "components/context/InfoBox";
import Scroll from "components/common/Scroll";

export default {
  name: "Home",
  data() {
    return {
      mark: [],
      list: [],
    };
  },
  components: {
    Calendar,
    InfoBox,
    Scroll,
  },
  methods: {
    getCalendarHeight() {
      let timer = setTimeout(() => {
        clearTimeout(timer);
        let sHeight =
          document.documentElement.clientHeight -
          this.$refs.calendar.offsetHeight +
          "px";
        this.$refs.record.style.height = sHeight;
        // console.log(sHeight);
        // console.log(this.$refs.scroll);
        // this.$refs.scroll.$refs.wrapper.style.height = sHeight;
        // this.$refs.scroll.refresh()
      }, 10);
    },
    changeMonth() {
      this.getCalendarHeight();
      this.$refs.scroll.refresh();
    },
    // 选择日期
    choseDay(time) {
      this.mark = [this.$utils.formatTime(time)];
      this.initDate();
    },
    // 获取数据
    initDate() {
      let time = this.mark[0];
      this.list = this.$utils.get(time) || [];
    },
  },
  created() {
    this.mark = [this.$utils.formatDate(new Date())];
    let time = this.$route.query.time;
    if (time) {
      this.mark = [decodeURIComponent(time)];
    }
    this.initDate();
  },
  mounted() {
    this.$nextTick(() => {
      this.getCalendarHeight();
      window.addEventListener("resize", () => {
        this.getCalendarHeight();
        this.$refs.scroll.refresh();
      });
    })
  },
};
</script>

<style scoped>
.box {
  height: 100vh;
  overflow: hidden;
}
.record {
  position: relative;
}
.scroll {
  height: 100%;
  overflow: hidden;
}
.no-data {
  height: 100%;
  position: relative;
}
.calendarb {
  margin-bottom: 10px;
}
.no-data img {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.add {
  position: absolute;
  bottom: 35px;
  right: 15px;
  background: url("~assets/img/jia.bd13a339.svg") no-repeat;
  background-size: 100%;
  width: 40px;
  height: 40px;
}
.router-link-active,
a {
  text-decoration: none;
  color: #666;
}
</style>
