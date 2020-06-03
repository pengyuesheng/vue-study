<template>
  <div>
      <p>{{msg}}</p>
      <button @click="sendtoparent($event, '我是child1')">向父组件发送消息</button>
      <grandSon v-bind="$attrs" v-on="$listeners"></grandSon>
  </div>
</template>

<script>
import grandSon from "./grandson.vue";
export default {
    components : {
        grandSon,
    },
    props: {
        msg: {
            type: String,
            default: ""
        }
    },
    created() {
        this.$bus.$on("child2bus", function(msg) {
            console.log(msg);
        })
        this.$on("abc", msg => console.log(msg))
        console.log(this.$attrs)
    },
    methods: {
        sendtoparent(e, msg) {
            console.log(e);
            this.$emit("send-msg-to-parent", msg);
            this.$parent.$emit("sendbyparent","我通过parent向你发送消息");
        }
    },
}
</script>

<style>

</style>