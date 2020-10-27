<!--  -->
<template>
  <div class="handle">
    <nav-bar />
    <div class="wrap" v-if="!id">
      <div class="title">
        <div>日志标题:</div>
        <input type="text" name="" id="" v-model="title" />
      </div>
      <div class="content">
        <div>日志内容:</div>
        <textarea name="" id="" cols="30" rows="5" v-model="content"></textarea>
      </div>
      <div class="add-record" @click="addRecord">添加</div>
    </div>
    <div class="del" v-else>
      <div class="title">
        <div>日志标题:</div>
        <p>{{ info.title }}</p>
      </div>
      <div class="content">
        <div>日志内容:</div>
        <p>{{ info.content }}</p>
      </div>
      <div class="add-record" @click="deleteRecord">删除</div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/context/NavBar";

export default {
  name: "Handle",
  data() {
    return {
      id: "",
      time: "",
      info: "",
      title: "",
      content: "",
    };
  },
  components: {
    NavBar,
  },
  created() {
    this.id = this.$route.query.id;
    this.time = this.$route.query.time;
    this.info = this.$utils.get(this.time, this.id);
  },
  methods: {
    addRecord() {
      this.$utils.set(this.time, this.title, this.content);
      alert("添加成功");
      this.$router.push({ path: "/", query: { time: this.time } });
    },
    deleteRecord() {
      let r = confirm('确认要删除吗?')
      if (r) {
        this.$utils.del(this.time, this.id);
        this.$router.push({
          path: "/",
          query: this.$route.query,
        });
      }
    },
  },
};
</script>

<style scoped>
.handle {
  height: 100vh;
}
.wrap,
.del {
  padding: 30px 14px 0;
}
.title div,
.content div {
  margin-bottom: 6px;
  font-size: 16px;
  font-weight: bold;
}
.title {
  margin-bottom: 12px;
}
.title input {
  border: 1px solid #ccc;
  width: 300px;
  height: 30px;
  outline: none;
  background-color: #f8f8f8;
  font-size: 15px;
}
.content textarea {
  border: 1px solid #ccc;
  width: 300px;
  outline: none;
  background-color: #f8f8f8;
  font-size: 15px;
}
.add-record {
  width: 70px;
  height: 35px;
  background-color: #0fc37c;
  color: #fff;
  margin-top: 30px;
  text-align: center;
  line-height: 35px;
}
p {
  font-size: 15px;
}
</style>
