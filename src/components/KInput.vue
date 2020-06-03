<template>
    <div>
        <input :value="value" :type="type" @input="onInput" />
    </div>
</template>

<script>
export default {
    props:{
        value: {
            type: String,
            default: ""
        },
        type: {
            type: {
                type: String,
                default: "text"
            }
        }
    },
    methods: {
        onInput(e) {
            this.$emit("input", e.target.value);
        }
    },
}
</script>

<style>

</style>