<template>
  <div class="showTable">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "showTable",
  data(){
    return{

    }
  }
}
</script>

<style scoped>
.showTable{
  border-bottom: 3px solid white;
  border-left: 1px solid white;
  border-right: 1px solid white;
  width: 130px;
  height:70px;
  padding: 5% 5% 5% 5%;
  background:#317cf7;
  color:white;
}
</style>
