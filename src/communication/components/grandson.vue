<template>
  <div>
      <p>{{foo}}</p>
      <button @click="sendToGrandParent">给grandParent发送数据</button>
      <p>{{data}}</p>
  </div>
</template>

<script>
export default {
    props: ["foo"],
    inject: ["data"],
    methods: {
        sendToGrandParent() {
            this.$emit("send-to-grandparent", "我是grandson，给grandparents发送消息");
        }
    },
}
</script>

<style>

</style>