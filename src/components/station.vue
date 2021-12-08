<template>
  <div class>
    <img src="../assets/img/station.png" alt="" style="vertical-align:text-bottom;weight:60px;height:60px;"/>
    <span style="display:inline-block">
      <div class="content" style="border: 2px solid #8F8F8F;">
        <div style="background: #8F8F8F; padding: 10px">
          <slot name="id"></slot>
        </div>
        <div style="color: #666666; padding: 10px">
          <slot name="name" ></slot>
          <slot name="english"></slot>
        </div>
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
