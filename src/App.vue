<template>
  <div id="app">
    <child1 msg="你child1" foo="foo" @send-msg-to-parent="handlerMessage" @send-to-grandparent="grandSon"></child1>
    <child2 msg="我是 child2" ref="child2"></child2>
    <button @click="send">向child1发送数据</button>
    <!-- 插槽 -->
    <div>
      <comp>
        <p>hello world</p>
        <template v-slot:header>
          <div>我是header</div>
        </template>
        <template v-slot:footer="{user}">
          <div>我是footer{{user}}</div>
        </template>
      </comp>
    </div>
  </div>
</template>

<script>
import Child1 from "./communication/components/Child1.vue";
import Child2 from "./communication/components/Child2.vue";
import comp from "./slots/slot1.vue";
console.log(comp);
export default {
  data() {
    return {
      user: {
        firstName: "peng",
        lastName: "yuesheng"
      }
    }
  },
  provide(){
    return {
      data: {
        name: "pys",
      }
    }
  },
  name: 'App',
  components: {
    Child1,
    Child2,
    comp
  },
  mounted() {
    this.$on("sendbyparent", function(msg) {
      console.log(msg);
      console.log(this.$refs.child2);
    })
  },
  methods: {
    handlerMessage(msg) {
      console.log(msg);
    },
    send() {
      this.$children[0].$emit("abc", "我是父组件，向你发送消息");
    },
    grandSon(msg) {
      console.log(msg);
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
