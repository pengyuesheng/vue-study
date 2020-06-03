<template>
    <div>
        <div @click="toggle" :style="{'text-indent': level + 'em'}">
            {{data.name}}
            <span v-if="data.children">[{{open? '-' : '+'}}]</span>
        </div>
        <div v-show="open">
            <node-tree v-for="n in data.children" :key="n.mame" :data="n" :level="index"></node-tree>
        </div>
    </div>
</template>

<script>
export default {
    name:"node-tree",
    props: {
        data: {
            type: Object
        },
        level: {
            type: Number,
            default: 0
        },
    },
    data() {
        return {
            open: false
        }
    },
    computed: {
        index() {
            return this.level + 2;
        }
    },
    methods: {
        toggle() {
            this.open = !this.open;
        }
    },
}
</script>

<style>

</style>