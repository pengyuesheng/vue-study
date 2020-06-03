<template>
  <div>
    <h3 :style="{'text-indent': index + 'em'}">{{data.name}}</h3>
    <Node v-for="n in data.children" :data="n" :key="n.name" :level="index"></Node>
  </div>
</template>

<script>
export default {
    name: "Node",
    props: {
        data: {
            type: Object
        },
        level: {
            type: Number,
            default: 0
        }
    },
    computed: {
        index() {
            return this.level + 2
        }
    },
}
</script>

<style>

</style>