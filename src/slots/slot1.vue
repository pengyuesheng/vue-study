<template>
  <div>
      <slot></slot>
      <slot name="header"></slot>
      <slot name="footer" user="user">
      </slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>