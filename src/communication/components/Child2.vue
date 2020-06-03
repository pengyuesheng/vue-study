<template>
  <div>
      <p>{{msg}}</p>
      <button @click="sendChild1">我通过事件总线bus向child发送数据</button>
  </div>
</template>

<script>
export default {
    props: ["msg"],
    methods: {
        sendChild1() {
            this.$bus.$emit("child2bus", "我是child2，我通过bus向child1发送数据")
        }
    },
}
</script>

<style>

</style>