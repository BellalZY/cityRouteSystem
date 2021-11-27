<template>
  <div class>
    <img src="../assets/img/circle.svg" alt="" style="vertical-align:text-top"/>
    <span style="display:inline-block">
      <div class="content">
        <slot name="id"></slot>
        <slot name="name"></slot>
        <slot name="english"></slot>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: "station"
}
</script>

<style scoped>

</style>
